import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

// Type for generated icon data
interface GeneratedIconData {
  name: string;
  size: string;
  url: string;
  buffer: Buffer;
}

// Helper function to convert hex color to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 255, b: 255 };
}



// Icon specifications
const ICON_SPECS = [
  { name: 'adaptive-icon.png', width: 1024, height: 1024, description: '1024x1024px (Android adaptive icon)' },
  { name: 'favicon.png', width: 48, height: 48, description: '48x48px (Web favicon)' },
  { name: 'icon.png', width: 1024, height: 1024, description: '1024x1024px (Main app icon with background)' },
  { name: 'react-logo.png', width: 100, height: 100, description: '100x100px (1x density)' },
  { name: 'react-logo@2x.png', width: 200, height: 200, description: '200x200px (2x density)' },
  { name: 'react-logo@3x.png', width: 300, height: 300, description: '300x300px (3x density)' },
  { name: 'splash-icon.png', width: 1024, height: 1024, description: '1024x1024px (Splash screen icon)' },
];

// Special handling for partial-react-logo.png (crop top-right section)
const PARTIAL_LOGO_SPEC = {
  name: 'partial-react-logo.png',
  width: 518,
  height: 316,
  description: '518x316px (Cropped top-right section)'
};

// Splash screen spec (modern phone resolution)
const SPLASH_SPEC = {
  name: 'splash.png',
  width: 1284,
  height: 2778,
  description: '1284x2778px (Splash screen)'
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const backgroundColor = formData.get('backgroundColor') as string || '#ffffff';
    const generateSplash = formData.get('generateSplash') === 'true';
    const splashBackgroundColor = formData.get('splashBackgroundColor') as string || backgroundColor;

    if (!file) {
      return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Please upload PNG, JPG, JPEG, or SVG.' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Get original image metadata and validate
    const originalImage = sharp(buffer);
    const metadata = await originalImage.metadata();

    if (!metadata.width || !metadata.height) {
      return NextResponse.json({ error: 'Could not read image dimensions' }, { status: 400 });
    }

    console.log('Original uploaded image metadata:', {
      width: metadata.width,
      height: metadata.height,
      channels: metadata.channels,
      hasAlpha: metadata.hasAlpha,
      format: metadata.format,
      size: buffer.length
    });

    // Create a test version to see if the image has visible content
    const testImage = await originalImage.clone()
      .resize(100, 100, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toBuffer();

    console.log('Test image created, size:', testImage.length);

    const generatedIcons: GeneratedIconData[] = [];

    // Parse background color
    const bgColor = hexToRgb(backgroundColor);

    // Generate standard icons
    for (const spec of ICON_SPECS) {
      try {
        let processedImage = originalImage.clone();

        // Special handling for icon.png with background color
        if (spec.name === 'icon.png') {
          console.log(`Processing icon.png with background color: ${backgroundColor} (RGB: ${bgColor.r}, ${bgColor.g}, ${bgColor.b}) - creating square background`);

          try {
            // Step 1: Create a square background with the selected color
            const squareBackground = sharp({
              create: {
                width: spec.width,
                height: spec.height,
                channels: 4,
                background: { r: bgColor.r, g: bgColor.g, b: bgColor.b, alpha: 1 }
              }
            });

            // Step 2: Resize the original icon to fit within the square (with padding)
            // Use 70% size to give more breathing room around the icon
            const iconSize = Math.round(Math.min(spec.width * 0.7, spec.height * 0.7));

            // First get metadata of the original image to understand what we're working with
            const originalMetadata = await processedImage.metadata();
            console.log(`Original image metadata:`, {
              width: originalMetadata.width,
              height: originalMetadata.height,
              channels: originalMetadata.channels,
              hasAlpha: originalMetadata.hasAlpha
            });

            const resizedIcon = await processedImage
              .resize(iconSize, iconSize, {
                fit: 'contain',
                background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background for the icon
              })
              .png()
              .toBuffer();

            // Debug: Check the resized icon size
            const resizedMetadata = await sharp(resizedIcon).metadata();
            console.log(`Resized icon metadata:`, {
              width: resizedMetadata.width,
              height: resizedMetadata.height,
              channels: resizedMetadata.channels,
              hasAlpha: resizedMetadata.hasAlpha
            });

            // Step 3: Composite the icon on top of the colored background
            processedImage = squareBackground
              .composite([
                {
                  input: resizedIcon,
                  top: Math.floor((spec.height - iconSize) / 2),
                  left: Math.floor((spec.width - iconSize) / 2)
                }
              ]);
          } catch (iconError) {
            console.error(`Error in icon.png processing:`, iconError);
            // Fallback to simple resize if composite fails
            processedImage = processedImage.resize(spec.width, spec.height, {
              fit: 'contain',
              background: { r: bgColor.r, g: bgColor.g, b: bgColor.b, alpha: 1 }
            });
          }
        }
        // For splash-icon, use splash background color if provided
        else if (spec.name === 'splash-icon.png') {
          const splashBg = generateSplash ? hexToRgb(splashBackgroundColor) : { r: 255, g: 255, b: 255 };
          // Create a background and composite the icon in the center
          const iconSize = Math.round(Math.min(spec.width * 0.8, spec.height * 0.8));
          const topPadding = Math.floor((spec.height - iconSize) / 2);
          const bottomPadding = Math.ceil((spec.height - iconSize) / 2);
          const leftPadding = Math.floor((spec.width - iconSize) / 2);
          const rightPadding = Math.ceil((spec.width - iconSize) / 2);

          processedImage = processedImage
            .resize(iconSize, iconSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .extend({
              top: topPadding,
              bottom: bottomPadding,
              left: leftPadding,
              right: rightPadding,
              background: { ...splashBg, alpha: 0 }
            });
        } else {
          // Standard resize with high-quality scaling
          console.log(`Processing ${spec.name} with standard resize`);

          // For images with transparency, we might need to flatten them first
          // or provide a proper background
          if (spec.name.includes('react-logo') || spec.name.includes('adaptive') || spec.name.includes('favicon')) {
            // These should preserve transparency
            processedImage = processedImage.resize(spec.width, spec.height, {
              fit: 'contain',
              background: { r: 255, g: 255, b: 255, alpha: 0 }
            });
          } else {
            // For other icons, provide a white background to ensure visibility
            processedImage = processedImage.resize(spec.width, spec.height, {
              fit: 'contain',
              background: { r: 255, g: 255, b: 255, alpha: 1 }
            });
          }
        }

        const iconBuffer = await processedImage.png({ compressionLevel: 9 }).toBuffer();

        // Debug: Check final output
        const finalMetadata = await sharp(iconBuffer).metadata();
        console.log(`Final ${spec.name} metadata:`, {
          width: finalMetadata.width,
          height: finalMetadata.height,
          channels: finalMetadata.channels,
          hasAlpha: finalMetadata.hasAlpha,
          size: iconBuffer.length
        });

        const base64 = iconBuffer.toString('base64');
        const dataUrl = `data:image/png;base64,${base64}`;

        generatedIcons.push({
          name: spec.name,
          size: spec.description,
          url: dataUrl,
          buffer: iconBuffer
        });
      } catch (error) {
        console.error(`Error processing icon ${spec.name}:`, error);
        throw new Error(`Failed to process ${spec.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    // Generate partial-react-logo.png (crop top-right section)
    try {
      const partialImage = originalImage.clone();
      const cropWidth = Math.floor(metadata.width * 0.6); // Take 60% width from right
      const cropHeight = Math.floor(metadata.height * 0.4); // Take 40% height from top
      const left = Math.floor(metadata.width - cropWidth); // Start from right side, ensure integer
      const top = 0; // Start from top

      const partialBuffer = await partialImage
        .extract({ left, top, width: cropWidth, height: cropHeight })
        .resize(PARTIAL_LOGO_SPEC.width, PARTIAL_LOGO_SPEC.height, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png({ compressionLevel: 9 })
        .toBuffer();

      const partialBase64 = partialBuffer.toString('base64');
      const partialDataUrl = `data:image/png;base64,${partialBase64}`;

      generatedIcons.push({
        name: PARTIAL_LOGO_SPEC.name,
        size: PARTIAL_LOGO_SPEC.description,
        url: partialDataUrl,
        buffer: partialBuffer
      });
    } catch (error) {
      console.error('Error processing partial-react-logo.png:', error);
      throw new Error(`Failed to process partial-react-logo.png: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Generate splash.png if enabled
    if (generateSplash) {
      try {
        const splashBg = hexToRgb(splashBackgroundColor);

        // Create the splash background
        const splashBackground = sharp({
          create: {
            width: SPLASH_SPEC.width,
            height: SPLASH_SPEC.height,
            channels: 4,
            background: { r: splashBg.r, g: splashBg.g, b: splashBg.b, alpha: 1 }
          }
        });

        // Resize logo to 35% of splash width, centered
        const logoWidth = Math.round(SPLASH_SPEC.width * 0.35);
        const resizedLogo = await originalImage.clone()
          .resize(logoWidth, logoWidth, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toBuffer();

        const resizedMeta = await sharp(resizedLogo).metadata();
        const logoHeight = resizedMeta.height || logoWidth;

        const splashBuffer = await splashBackground
          .composite([{
            input: resizedLogo,
            top: Math.floor((SPLASH_SPEC.height - logoHeight) / 2),
            left: Math.floor((SPLASH_SPEC.width - logoWidth) / 2),
          }])
          .png({ compressionLevel: 9 })
          .toBuffer();

        const splashBase64 = splashBuffer.toString('base64');
        const splashDataUrl = `data:image/png;base64,${splashBase64}`;

        generatedIcons.push({
          name: SPLASH_SPEC.name,
          size: SPLASH_SPEC.description,
          url: splashDataUrl,
          buffer: splashBuffer
        });

        console.log(`Generated splash.png: ${SPLASH_SPEC.width}x${SPLASH_SPEC.height}`);
      } catch (error) {
        console.error('Error generating splash.png:', error);
        throw new Error(`Failed to generate splash.png: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    // Return the generated icons (without buffers for response size)
    const response = generatedIcons.map(icon => ({
      name: icon.name,
      size: icon.size,
      url: icon.url
    }));

    return NextResponse.json({ icons: response });

  } catch (error) {
    console.error('Error generating icons:', error);

    // Provide more specific error messages based on error type
    let errorMessage = 'Failed to generate icons. Please try again.';

    if (error instanceof Error) {
      if (error.message.includes('Input file contains unsupported image format')) {
        errorMessage = 'Unsupported image format. Please upload a PNG, JPG, JPEG, or SVG file.';
      } else if (error.message.includes('Input buffer contains unsupported image format')) {
        errorMessage = 'Invalid image file. Please ensure your file is a valid image.';
      } else if (error.message.includes('Input image exceeds pixel limit')) {
        errorMessage = 'Image is too large. Please use an image smaller than 10MB.';
      } else if (error.message.includes('Failed to process')) {
        errorMessage = error.message; // Use our custom error messages from individual icon processing
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
