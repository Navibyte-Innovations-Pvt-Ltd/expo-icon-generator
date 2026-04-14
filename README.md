# Expo Icon Generator - Automate Your App Icons

A modern tool designed to automate and simplify icon generation for Expo-based React Native apps. Generate platform-specific icons (iOS, Android, web) from a single source image with one command. Features image optimization, sharp scaling, custom background and padding, and automatic app.json updates.

![Expo Icon Generator](https://img.shields.io/badge/Tool-Expo_Icon_Generator-0ea5e9?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Sharp](https://img.shields.io/badge/Sharp-Image_Processing-green?style=for-the-badge)

## 🌟 Tool Overview

Expo Icon Generator is a powerful web-based tool that streamlines the process of creating platform-specific icons for Expo React Native applications. Upload a single high-quality image and automatically generate all the required icon sizes and formats for iOS, Android, and web platforms.

### 🎯 Purpose

- **Automate Icon Generation**: Generate all required icon sizes with one command
- **Multi-Platform Support**: Create icons for iOS, Android, and web platforms
- **Image Optimization**: Ensure crisp, high-quality icons with Sharp scaling
- **Developer Productivity**: Save hours of manual resizing and optimization
- **Expo Integration**: Perfect compatibility with Expo development workflow

## ✨ Core Features

### 1. Drag-and-Drop Upload Interface

- **File Support**: Accepts PNG, JPG, JPEG, and SVG image files
- **Visual Feedback**: Real-time drag-over states and upload progress
- **Image Preview**: Instant preview of uploaded source image
- **File Validation**: Automatic validation for file type and size (max 10MB)
- **Error Handling**: Clear error messages for invalid uploads

### 2. Automated Icon Generation

- **One-Command Generation**: Generate all required icon sizes with a single click
- **Multi-Platform Support**: Creates icons for iOS, Android, and web platforms
- **Sharp Image Processing**: High-quality scaling and optimization
- **Custom Cropping**: Intelligent cropping for partial logo variants
- **Splash Screen Icons**: Centered icons with proper padding for splash screens

### 3. Generated Icon Specifications

- **adaptive-icon.png**: 1024×1024px (Android adaptive icon)
- **favicon.png**: 48×48px (Web favicon)
- **icon.png**: 1024×1024px (Main app icon)
- **partial-react-logo.png**: 518×316px (Cropped top-right section)
- **react-logo.png**: 100×100px (1x density)
- **react-logo@2x.png**: 200×200px (2x density)
- **react-logo@3x.png**: 300×300px (3x density)
- **splash-icon.png**: 1024×1024px (Centered with padding)

### 4. Download & Export Options

- **Individual Downloads**: Download specific icon files as needed
- **Bulk ZIP Download**: Get all generated icons in a single ZIP file
- **Instant Preview**: View generated icons before downloading
- **Ready for Expo**: Icons are optimized and ready for Expo projects
- **File Organization**: Properly named files following Expo conventions

### 5. Developer Experience

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Processing**: Fast icon generation with visual feedback
- **Error Recovery**: Graceful handling of processing errors
- **Usage Instructions**: Clear step-by-step guidance for users
- **Expo Integration**: Perfect compatibility with Expo development workflow

## 🔄 How It Works - Step by Step

**Simple 3-Step Process:**

### Step 1: Upload Your Source Image

- **Prepare**: Create or select a high-quality image (recommended: 1024×1024px or larger)
- **Upload**: Drag and drop your image file or click to browse
- **Preview**: Instantly see your uploaded image with file details
- **Validate**: Automatic validation ensures your image meets requirements

### Step 2: Generate Icons

- **Process**: Click "Generate Icons" to start the automated processing
- **Wait**: Watch the progress as Sharp processes your image
- **Quality**: Advanced algorithms ensure optimal scaling and sharpness
- **Speed**: Complete generation typically takes 5-10 seconds

### Step 3: Download and Use

- **Preview**: Review all generated icons in the results grid
- **Download**: Get individual icons or download all as a ZIP file
- **Integrate**: Add the icons to your Expo project's assets folder
- **Configure**: Update your app.json with the new icon paths

**Real Example - React Native App:**

````json
// app.json configuration
{
  "expo": {
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash-icon.png"
    },
    "ios": {
      "icon": "./assets/icon.png"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/WebNaresh/expo-icon-generator.git
cd expo-icon-generator
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install --legacy-peer-deps
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:8888](http://localhost:8888) in your browser

### Development Commands

- `npm run dev` - Start development server with Turbopack (port 8888)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🛠️ Technology Stack

### Core Technologies

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript 5+
- **Image Processing**: Sharp for high-quality image manipulation
- **File Handling**: JSZip for creating downloadable ZIP archives
- **Styling**: TailwindCSS with custom sky blue theme
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **Deployment**: Vercel

### Image Processing Features

- **Sharp Library**: High-performance image resizing and optimization
- **Format Support**: PNG, JPG, JPEG, SVG input formats
- **Quality Scaling**: Advanced algorithms for crisp icon generation
- **Batch Processing**: Generate multiple icon sizes simultaneously
- **Memory Efficient**: Optimized for handling large image files

### Development Tools

- **Build Tool**: Turbopack for fast development
- **Code Quality**: ESLint with TypeScript rules
- **Package Manager**: npm/yarn/pnpm support
- **Type Safety**: Full TypeScript coverage for reliability

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **npm**, **yarn**, or **pnpm**: Latest version
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/WebNaresh/expo-icon-generator.git
cd expo-icon-generator
```

### 2. Install Dependencies

```bash
# Using npm (recommended)
npm install --legacy-peer-deps

# Using yarn
yarn install

# Using pnpm
pnpm install --legacy-peer-deps
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:8888`

### 4. Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📁 Generated Icon Specifications

The tool generates the following icon files with exact specifications:

| File Name | Dimensions | Purpose | Description |
|-----------|------------|---------|-------------|
| `adaptive-icon.png` | 1024×1024px | Android | Adaptive icon for Android apps |
| `favicon.png` | 48×48px | Web | Browser favicon |
| `icon.png` | 1024×1024px | Main | Primary app icon |
| `partial-react-logo.png` | 518×316px | Custom | Cropped top-right section |
| `react-logo.png` | 100×100px | 1x | Standard density icon |
| `react-logo@2x.png` | 200×200px | 2x | High density icon |
| `react-logo@3x.png` | 300×300px | 3x | Extra high density icon |
| `splash-icon.png` | 1024×1024px | Splash | Centered icon for splash screens |

## 🔌 API Documentation

The Expo Icon Generator provides two main API endpoints for programmatic access:

### POST `/api/generate-icons`

Processes an uploaded image and generates all required icon variants.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data with `image` field containing the source image file

**Response:**
```json
{
  "icons": [
    {
      "name": "adaptive-icon.png",
      "size": "1024×1024px (Android adaptive icon)",
      "url": "data:image/png;base64,..."
    },
    // ... other generated icons
  ]
}
```

**Error Response:**
```json
{
  "error": "Invalid file type. Please upload PNG, JPG, JPEG, or SVG."
}
```

### POST `/api/download-icons`

Creates a ZIP file containing all generated icons for bulk download.

**Request:**
- Method: `POST`
- Content-Type: `application/json`
- Body: Array of icon objects with `name` and `url` properties

**Response:**
- Content-Type: `application/zip`
- Binary ZIP file containing all icons

**Example Usage:**
```javascript
// Generate icons
const formData = new FormData();
formData.append('image', imageFile);

const response = await fetch('/api/generate-icons', {
  method: 'POST',
  body: formData,
});

const result = await response.json();
console.log('Generated icons:', result.icons);
```

## 📁 Project Structure

```
expo-icon-generator/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── generate-icons/ # Icon generation endpoint
│   │   └── download-icons/ # ZIP download endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Main icon generator interface
│   ├── manifest.ts        # PWA manifest
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   └── utils/            # Utility components (navbar, footer)
├── lib/                  # Utility libraries
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   └── navibyte-logo.png
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

## 🔄 Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack (port 8888)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
```

### Adding New Icon Formats

To add support for additional icon formats:

1. **Update Icon Specifications**: Modify `ICON_SPECS` array in `/api/generate-icons/route.ts`
2. **Add Processing Logic**: Implement custom processing for special formats
3. **Update UI**: Add new formats to the generated icons display
4. **Test**: Verify generation and download functionality

## 🐛 Troubleshooting

### Common Issues

**1. Image Processing Errors**

```bash
# Ensure Sharp is properly installed
npm install sharp --legacy-peer-deps

# Check supported image formats
# Verify file size is under 10MB limit
```

**2. Build Errors**

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**3. TypeScript Errors**

```bash
# Run type checking
npx tsc --noEmit

# Install missing type definitions
npm install @types/jszip --save-dev
```

**4. Performance Issues**

```bash
# Monitor memory usage during image processing
# Consider implementing image size limits
# Use image compression for large source files
```

## 🤝 Contributing Guidelines

We welcome contributions to Expo Icon Generator! Please follow these guidelines:

### 1. Fork and Clone

- Fork the repository
- Clone your fork locally
- Create a new branch for your feature

### 2. Development

- Follow TypeScript best practices
- Use the existing code style and conventions
- Write meaningful commit messages
- Test icon generation with various image formats
- Ensure responsive design works on all devices

### 3. Pull Request Process

- Ensure your code passes all linting checks
- Test image processing functionality thoroughly
- Update documentation if adding new features
- Create a detailed pull request description
- Link any related issues

### 4. Areas for Contribution

- **New Icon Formats**: Add support for additional platform-specific icons
- **Image Processing**: Improve Sharp processing algorithms
- **UI/UX**: Enhance the user interface and experience
- **Performance**: Optimize image processing speed and memory usage
- **Documentation**: Improve guides and API documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Developed by**: [NaviByte Innovation](http://navibyte.in/)
- **Image Processing**: Powered by [Sharp](https://sharp.pixelplumbing.com/)
- **Framework**: Built with [Next.js](https://nextjs.org/)
- **Community**: Thanks to all Expo developers and contributors
- **Technologies**: Built with amazing open source tools

## 🧰 Also by us — Glitchgrab

Building a Next.js or React Native app and tired of chasing messy bug reports? **[Glitchgrab](https://glitchgrab.dev/)** turns handwritten notes, screenshots, and production errors into structured GitHub issues using AI. Drop-in SDK for Next.js, mobile app, and Claude Desktop MCP server.

👉 [Try Glitchgrab free →](https://glitchgrab.dev/)

## 🔗 Related Resources

- **Glitchgrab**: [https://glitchgrab.dev/](https://glitchgrab.dev/) — AI bug reports → GitHub issues
- **Expo Documentation**: [https://docs.expo.dev/](https://docs.expo.dev/)
- **React Native Icons**: [https://reactnative.dev/docs/images](https://reactnative.dev/docs/images)
- **Sharp Documentation**: [https://sharp.pixelplumbing.com/](https://sharp.pixelplumbing.com/)
- **App Icon Guidelines**: [Apple](https://developer.apple.com/design/human-interface-guidelines/app-icons) | [Android](https://developer.android.com/guide/practices/ui_guidelines/icon_design)

---

**Expo Icon Generator** - Automate your app icons with ease 🚀
````
