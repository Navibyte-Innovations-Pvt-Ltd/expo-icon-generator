import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Linkedin, Globe, Mail, Chrome, Bug } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contributors", label: "Contributors" },
];

const RESOURCE_LINKS = [
  { href: "/blog/complete-guide-expo-icon-generation", label: "Icon Generation Guide" },
  { href: "/blog/ios-android-icon-requirements-2024", label: "Platform Requirements" },
  { href: "/blog/icon-design-best-practices", label: "Design Best Practices" },
  { href: "/tutorials/expo-app-development-complete-guide", label: "Expo Development" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src="/web-app-manifest-192x192.png"
                alt="Expo Icon Generator Logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-sm font-bold text-white">
                Expo Icon Generator
              </span>
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Generate platform-specific icons for Expo & React Native apps from
              a single source image. Free, fast, and open source.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/WebNaresh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/naresh-bhosale-173145265/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="http://navibyte.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Globe className="h-4 w-4" />
              </Link>
              <a
                href="mailto:bhosalenaresh73@gmail.com"
                className="rounded-lg bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Resources
            </h3>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-2.5">
                  <p className="text-xs font-medium text-white">
                    Expo Icon Generator
                  </p>
                  <p className="text-[10px] text-gray-500">Current tool</p>
                </div>
              </li>
              <li>
                <Link
                  href="https://glitchgrab.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-gray-800 p-2.5 transition-colors hover:border-gray-700 hover:bg-gray-900"
                >
                  <div>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-white">
                      Glitchgrab
                    </p>
                    <p className="text-[10px] text-gray-500">
                      AI bug reports → GitHub
                    </p>
                  </div>
                  <Bug className="h-3 w-3 text-gray-600 group-hover:text-gray-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.freeqrcodegenerator.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-gray-800 p-2.5 transition-colors hover:border-gray-700 hover:bg-gray-900"
                >
                  <div>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-white">
                      QR Code Generator
                    </p>
                    <p className="text-[10px] text-gray-500">Free tool</p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-gray-600 group-hover:text-gray-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://chromewebstore.google.com/detail/navilens-screen-capture/gdemjndamgdgneofjgfllkddjjdkbcfp?hl=en-GB&authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-gray-800 p-2.5 transition-colors hover:border-gray-700 hover:bg-gray-900"
                >
                  <div>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-white">
                      NaviLens Screen Capture
                    </p>
                    <p className="text-[10px] text-gray-500">Chrome extension</p>
                  </div>
                  <Chrome className="h-3 w-3 text-gray-600 group-hover:text-gray-400" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>© 2024 Expo Icon Generator</span>
            <span className="hidden h-3 w-px bg-gray-800 sm:inline-block" />
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="http://navibyte.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <Image
                src="/navibyte-logo.png"
                alt="NaviByte Innovation Logo"
                width={80}
                height={80}
                className="rounded-md opacity-60 transition-opacity group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
