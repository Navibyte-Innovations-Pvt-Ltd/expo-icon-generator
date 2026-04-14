import Link from "next/link";
import { ArrowRight, Chrome } from "lucide-react";

const OUTPUT_FILES = [
  { name: "icon.png", size: "1024×1024" },
  { name: "adaptive-icon.png", size: "1024×1024" },
  { name: "favicon.png", size: "48×48" },
  { name: "splash.png", size: "1284×2778" },
  { name: "splash-icon.png", size: "200×200" },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center space-y-8">
      {/* Badge */}
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-medium text-gray-400">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Free & Open Source
      </div>

      {/* Title */}
      <div className="space-y-3">
        <h1 className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
          One image.
          <span className="block text-gray-500">Every asset.</span>
        </h1>
        <p className="max-w-sm text-base leading-relaxed text-gray-400">
          The free{" "}
          <strong className="font-semibold text-gray-300">
            expo assets generator
          </strong>{" "}
          for React Native apps. Drop your logo and get all required expo assets
          — icons, adaptive icons, splash screens, favicons, and app.json — in
          seconds.
        </p>
      </div>

      {/* Output preview — terminal style */}
      <div className="max-w-sm overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-gray-800 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-gray-700" />
          <span className="h-2 w-2 rounded-full bg-gray-700" />
          <span className="h-2 w-2 rounded-full bg-gray-700" />
          <span className="ml-2 font-mono text-[10px] text-gray-500">
            output
          </span>
        </div>
        <div className="space-y-0.5 px-3 py-2.5">
          {OUTPUT_FILES.map((file) => (
            <div key={file.name} className="flex items-center justify-between">
              <span className="font-mono text-xs text-gray-300">
                <span className="text-gray-600">./assets/</span>
                {file.name}
              </span>
              <span className="font-mono text-[10px] text-gray-600">
                {file.size}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-gray-300">
              <span className="text-gray-600">./</span>app.json
            </span>
            <span className="font-mono text-[10px] text-gray-600">config</span>
          </div>
        </div>
      </div>

      {/* Stats line */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="font-semibold text-white">9</span> icons
        </span>
        <span className="h-3 w-px bg-gray-700" />
        <span className="flex items-center gap-1.5">
          <span className="font-semibold text-white">1</span> upload
        </span>
        <span className="h-3 w-px bg-gray-700" />
        <span className="flex items-center gap-1.5">
          <span className="font-semibold text-white">0</span> cost
        </span>
        <ArrowRight className="ml-1 h-3.5 w-3.5 text-gray-600" />
      </div>

      {/* NaviLens extension promo */}
      <Link
        href="https://chromewebstore.google.com/detail/navilens-screen-capture/gdemjndamgdgneofjgfllkddjjdkbcfp?hl=en-GB&authuser=0"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex max-w-sm items-center gap-3 rounded-lg border border-gray-800 bg-gray-900 p-3 transition-colors hover:border-gray-700"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 transition-colors group-hover:bg-gray-700">
          <Chrome className="h-4 w-4 text-gray-400" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-gray-300">
            NaviLens — Screen Capture Extension
          </p>
          <p className="text-[10px] text-gray-500">
            Try our Chrome extension for screen capture
          </p>
        </div>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-600 transition-colors group-hover:text-gray-400" />
      </Link>
    </div>
  );
}
