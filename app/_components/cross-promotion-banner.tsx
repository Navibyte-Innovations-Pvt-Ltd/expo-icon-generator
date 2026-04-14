import Link from "next/link";
import { ExternalLink, QrCode, MonitorSmartphone, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PRODUCTS = [
  {
    icon: Bug,
    title: "Glitchgrab — AI Bug Reports",
    description: "Turn messy bug reports into structured GitHub issues",
    detail:
      "Drop a screenshot, note, or production error — Glitchgrab uses AI to generate a clean GitHub issue with title, labels, and severity. Built for Next.js teams.",
    href: "https://glitchgrab.dev/",
    cta: "Try Glitchgrab",
  },
  {
    icon: QrCode,
    title: "Free QR Code Generator",
    description: "Create professional QR codes for your applications and marketing",
    detail:
      "Generate custom QR codes with logos, colors, and advanced features. Perfect for linking to your mobile apps and websites.",
    href: "https://www.freeqrcodegenerator.shop/",
    cta: "Try QR Generator",
  },
  {
    icon: MonitorSmartphone,
    title: "NaviLens — Screen Capture",
    description: "Chrome extension for quick and easy screen captures",
    detail:
      "Capture, annotate, and share screenshots directly from your browser. Great for bug reports and design reviews.",
    href: "https://chromewebstore.google.com/detail/navilens-screen-capture/gdemjndamgdgneofjgfllkddjjdkbcfp?hl=en-GB&authuser=0",
    cta: "Get Extension",
  },
];

export default function CrossPromotionBanner() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <Card
            key={product.href}
            className="border-gray-800 bg-gray-900 shadow-sm"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gray-800 p-2">
                    <product.icon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold text-white">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-400">
                      {product.description}
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="hidden shrink-0 sm:inline-flex"
                >
                  Our Product
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="mb-3 text-sm text-gray-400">{product.detail}</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <span>{product.cta}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
