"use client";

import { useState, useEffect } from "react";
import { Check, Bug, ArrowUpRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadType: string;
}

type Rating = "love_it" | "good" | "okay" | "bad";

interface FeedbackData {
  feedback: string;
  userEmail: string;
  downloadType: string;
  rating?: Rating;
}

const REACTIONS: { rating: Rating; emoji: string; label: string }[] = [
  { rating: "love_it", emoji: "😍", label: "Love it!" },
  { rating: "good", emoji: "👍", label: "Good" },
  { rating: "okay", emoji: "😐", label: "Okay" },
  { rating: "bad", emoji: "👎", label: "Bad" },
];

const submitFeedback = async (data: FeedbackData): Promise<void> => {
  const response = await fetch("/api/send-feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit feedback");
  }
};

export default function FeedbackModal({
  isOpen,
  onClose,
  downloadType,
}: FeedbackModalProps) {
  const [feedback, setFeedback] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectedRating, setSelectedRating] = useState<Rating | null>(null);

  const feedbackMutation = useMutation({
    mutationFn: submitFeedback,
    onSuccess: () => {
      setTimeout(() => {
        resetAndClose();
      }, 1500);
    },
    onError: (error) => {
      console.error("Error submitting feedback:", error);
    },
  });

  useEffect(() => {
    if (!isOpen) {
      setFeedback("");
      setUserEmail("");
      setSelectedRating(null);
      feedbackMutation.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const resetAndClose = () => {
    setFeedback("");
    setUserEmail("");
    setSelectedRating(null);
    feedbackMutation.reset();
    onClose();
  };

  const handleReactionClick = (rating: Rating) => {
    if (feedbackMutation.isPending || feedbackMutation.isSuccess) return;
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (!selectedRating || feedbackMutation.isPending) return;

    feedbackMutation.mutate({
      feedback: feedback.trim(),
      userEmail: userEmail.trim(),
      downloadType,
      rating: selectedRating,
    });
  };

  const handleClose = () => {
    if (!feedbackMutation.isPending) {
      resetAndClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-sm">
        {feedbackMutation.isSuccess ? (
          <div className="flex flex-col items-center py-6">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-900/50">
              <Check className="h-7 w-7 text-green-400" />
            </div>
            <p className="text-lg font-semibold text-white">
              Thanks for your feedback!
            </p>
            <a
              href="https://glitchgrab.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-start gap-3 rounded-lg border border-sky-900/60 bg-sky-950/40 p-3 transition-colors hover:border-sky-700 hover:bg-sky-950/70"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sky-900/60">
                <Bug className="h-4 w-4 text-sky-300" />
              </div>
              <div className="flex-1">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  Try Glitchgrab
                  <ArrowUpRight className="h-3.5 w-3.5 text-sky-300" />
                </p>
                <p className="text-xs text-gray-400">
                  Turn screenshots & messy bug reports into clean GitHub issues
                  with AI.
                </p>
              </div>
            </a>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>How was your experience?</DialogTitle>
              <DialogDescription>
                Thanks for downloading {downloadType}!
              </DialogDescription>
            </DialogHeader>

            <div className="flex justify-center gap-4 py-2">
              {REACTIONS.map(({ rating, emoji, label }) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleReactionClick(rating)}
                  disabled={feedbackMutation.isPending}
                  className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-transform hover:scale-110 ${
                    selectedRating === rating
                      ? "bg-gray-800 ring-2 ring-sky-400"
                      : "hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-3xl">{emoji}</span>
                  <span className="text-xs text-gray-400">{label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <Input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Your email (optional)"
                disabled={feedbackMutation.isPending}
              />
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Any suggestions? (optional)"
                rows={2}
                disabled={feedbackMutation.isPending}
              />
            </div>

            <a
              href="https://glitchgrab.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg border border-sky-900/60 bg-sky-950/40 p-3 transition-colors hover:border-sky-700 hover:bg-sky-950/70"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-900/60">
                <Bug className="h-3.5 w-3.5 text-sky-300" />
              </div>
              <div className="flex-1">
                <p className="flex items-center gap-1 text-xs font-semibold text-white">
                  Try Glitchgrab
                  <ArrowUpRight className="h-3 w-3 text-sky-300" />
                </p>
                <p className="text-xs text-gray-400">
                  Turn screenshots into clean GitHub issues with AI.
                </p>
              </div>
            </a>

            {feedbackMutation.isError && (
              <div className="rounded-lg border border-red-800 bg-red-950 p-3">
                <p className="text-sm text-red-400">
                  Failed to send feedback. Please try again.
                </p>
              </div>
            )}

            <div className="flex gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={feedbackMutation.isPending}
                className="flex-1"
              >
                Skip
              </Button>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={feedbackMutation.isPending || !selectedRating}
                className="flex-1"
              >
                {feedbackMutation.isPending ? "Sending..." : "Send"}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
