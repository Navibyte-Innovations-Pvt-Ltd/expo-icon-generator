import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Expo Assets Generator",
    alternateName: [
      "Expo Icon Generator",
      "React Native Icon Generator",
      "Expo App Icon Generator",
      "Expo Asset Generator",
      "Generate Expo Assets",
      "Expo Assets Tool",
      "React Native Assets Generator",
    ],
    url: "https://expo-assets-generator.vercel.app",
    description:
      "Free Expo Assets Generator: generate all required expo assets from one image — iOS icons, Android adaptive icons, splash screens, favicons, and app.json config. The fastest way to generate expo assets for React Native apps.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Expo Assets Generator Team",
    },
    featureList: [
      "Generate all expo assets from one image",
      "Generate expo app icons (iOS, Android, web)",
      "Create adaptive icons for Android",
      "iOS app icon generation (all sizes)",
      "Splash screen generation",
      "Favicon generation for web",
      "Multiple icon densities",
      "Automatic app.json configuration",
      "React Native compatible",
      "Free and open source",
    ],
    screenshot: "https://expo-assets-generator.vercel.app/opengraph-image.png",
    softwareVersion: "1.0",
    keywords: [
      "expo assets generator",
      "expo asset generator",
      "generate expo assets",
      "expo assets tool",
      "expo icon generator",
      "expo app icon generator",
      "react native icon generator",
      "expo adaptive icon generator",
      "expo splash screen generator",
      "adaptive icon generator",
      "expo icons",
      "react native app icon",
      "expo android icon",
      "expo ios icon",
      "app store icons generator",
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Expo Assets Generator",
    url: "https://expo-assets-generator.vercel.app",
    logo: "https://expo-assets-generator.vercel.app/web-app-manifest-512x512.png",
    description:
      "The ultimate expo assets generator for React Native developers. Generate all expo assets — icons, adaptive icons, splash screens, and favicons — from one image.",
    sameAs: ["https://github.com/WebNaresh/expo-icon-generator"],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Expo Assets Generator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Expo Assets Generator is a free tool that helps React Native developers generate all required expo assets from a single source image. It creates expo app icons, Android adaptive icons, iOS icons, splash screens, favicons, and a ready-to-use app.json config — everything you need for expo app store submission.",
        },
      },
      {
        "@type": "Question",
        name: "What expo assets does this tool generate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our expo assets generator creates: icon.png (1024×1024) for iOS and general use, adaptive-icon.png for Android adaptive icons, splash.png and splash-icon.png for app splash screens, favicon.png for web, and an app.json configuration file. All assets follow the official Expo asset requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How do I generate expo app icons?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply upload your source image (PNG, JPG, or SVG), select your background color, and click generate. Our expo assets generator will create all the necessary icon sizes and formats for iOS, Android, and web platforms automatically.",
        },
      },
      {
        "@type": "Question",
        name: "Does it support Android adaptive icons?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our expo assets generator creates Android adaptive icons that follow Google's design guidelines. The tool generates both the foreground image and the app.json backgroundColor configuration required for adaptive icons.",
        },
      },
      {
        "@type": "Question",
        name: "Is the expo assets generator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Expo Assets Generator is completely free and open source. You can generate unlimited expo assets, react native app icons, splash screens, and use all features without any cost. No account or signup required.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="webapp-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  );
}
