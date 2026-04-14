import { Metadata } from "next";
import Link from "next/link";
import { Gift, Heart, Coffee, Sparkles, ArrowLeft, Bug, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SupportButton } from "./support-button";

export const metadata: Metadata = {
  alternates: {
    canonical: "/thanks-gift",
  },
  title: "Support Our Work | Expo Icon Generator",
  description:
    "Support the development of Expo Icon Generator and help us keep this tool free for everyone. Your contribution makes a difference!",
  openGraph: {
    title: "Support Our Work | Expo Icon Generator",
    description:
      "Support the development of Expo Icon Generator and help us keep this tool free for everyone.",
    url: "https://expo-assets-generator.vercel.app/thanks-gift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Our Work | Expo Icon Generator",
    description:
      "Support the development of Expo Icon Generator and help us keep this tool free for everyone.",
  },
};

export default function ThanksGiftPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 border-gray-700 text-gray-300 hover:bg-gray-800">
              <ArrowLeft className="h-4 w-4" />
              Back to Generator
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 shadow-lg">
              <Heart className="h-12 w-12 text-red-400" />
            </div>

            <h1 className="mb-6 text-5xl font-bold text-white">
              Support Our Mission 🚀
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400">
              Help us keep{" "}
              <span className="font-semibold text-sky-400">
                Expo Icon Generator
              </span>{" "}
              free and continuously evolving for the developer community
              worldwide.
            </p>
          </div>

          {/* Main Support Card */}
          <div className="mb-10 rounded-3xl border border-gray-800 bg-gray-900 p-10 shadow-2xl">
            <div className="mb-8 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <Coffee className="h-7 w-7 text-amber-400" />
                <h2 className="text-3xl font-bold text-white">
                  Buy Us a Coffee
                </h2>
                <Gift className="h-7 w-7 text-green-400" />
              </div>

              <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400">
                Your support directly contributes to server costs, new features,
                and keeping this tool accessible to everyone.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <SupportButton />

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Secure payment powered by Razorpay
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mb-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center shadow-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800">
                <Gift className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                100% Free
              </h3>
              <p className="text-gray-400">
                Core features remain free for all developers worldwide
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center shadow-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800">
                <Sparkles className="h-8 w-8 text-sky-400" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Active Development
              </h3>
              <p className="text-gray-400">
                Regular updates, bug fixes, and exciting new features
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center shadow-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800">
                <Heart className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Community First
              </h3>
              <p className="text-gray-400">
                Built by developers, for the global developer community
              </p>
            </div>
          </div>

          {/* Appreciation Message */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-red-400" />
              <h3 className="text-2xl font-semibold text-white">
                Thank You!
              </h3>
              <Heart className="h-6 w-6 text-red-400" />
            </div>
            <p className="text-lg font-medium text-gray-400">
              Every contribution, big or small, helps us maintain and improve
              this tool. Your support means the world to us! 🌟
            </p>
          </div>

          {/* Check out Glitchgrab */}
          <Link
            href="https://glitchgrab.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 flex flex-col items-center gap-4 rounded-2xl border border-sky-900/60 bg-sky-950/30 p-8 text-center transition-colors hover:border-sky-700 hover:bg-sky-950/50 sm:flex-row sm:text-left"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-900/60">
              <Bug className="h-7 w-7 text-sky-300" />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
                <h3 className="text-xl font-bold text-white">
                  Check out Glitchgrab
                </h3>
                <span className="rounded-md bg-sky-900/60 px-2 py-0.5 text-[10px] font-semibold text-sky-300 uppercase">
                  Also by us
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Turn handwritten notes, screenshots, and production errors into
                structured GitHub issues with AI. Built for Next.js teams.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-sky-300 group-hover:text-sky-200">
              Try it free
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>

          {/* Alternative Support */}
          <div className="mt-10 text-center">
            <p className="mb-4 text-gray-400">
              Can&apos;t contribute financially? You can still help us by:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-400">
                ⭐ Star our project
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-400">
                📢 Share with friends
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-400">
                💡 Suggest features
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-400">
                🐛 Report bugs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
