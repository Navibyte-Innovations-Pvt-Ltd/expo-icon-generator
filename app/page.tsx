"use client";

import { useCallback, useEffect, useRef } from "react";
import { Bug } from "lucide-react";
import {
  HeroSection,
  FileUploadArea,
  IconSettingsPanel,
  GeneratedIconsDisplay,
  FeaturesSection,
  ContributorsSection,
  HowItWorksSection,
  ComprehensiveGuideSection,
  TechnicalSpecificationsSection,
  AppStoreOptimizationSection,
  FeedbackModal,
  StructuredData,
  SEOContentSection,
  CrossPromotionBanner,
  useFileUpload,
  useContributors,
  useIconGeneration,
} from "./_components";

function buildAppJson(
  backgroundColor: string,
  splashBackgroundColor: string,
  splashEnabled: boolean
) {
  const config: Record<string, unknown> = {
    expo: {
      icon: "./assets/icon.png",
      ...(splashEnabled
        ? {
            splash: {
              image: "./assets/splash.png",
              resizeMode: "contain",
              backgroundColor: splashBackgroundColor,
            },
          }
        : {}),
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: backgroundColor,
        },
      },
      web: {
        favicon: "./assets/favicon.png",
      },
    },
  };
  return JSON.stringify(config, null, 2);
}

function ReportBugSection() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("glitchgrab:open-report"));
    }
  };
  return (
    <div className="mt-16 flex flex-col items-center gap-3 border-t border-gray-800 pt-12 text-center">
      <p className="text-sm text-gray-500">Found something broken?</p>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800 hover:text-white"
      >
        <Bug className="h-4 w-4 text-sky-400" />
        Report a Bug
      </button>
    </div>
  );
}

export default function HomePage() {
  // Use custom hooks for separated concerns
  const {
    uploadedFile,
    error,
    isDragOver,
    isPasteReady,
    backgroundColor,
    colorAnalysis,
    isAnalyzingColors,
    splashEnabled,
    splashBackgroundColor,
    setBackgroundColor,
    handleFileUpload,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInputChange,
    handlePaste,
    handleKeyDown,
    handleUploadAreaFocus,
    handleUploadAreaBlur,
    setSplashEnabled,
    setSplashBackgroundColor,
  } = useFileUpload();

  const {
    contributors,
    isLoadingContributors,
    contributorsError,
    fetchContributors,
  } = useContributors();

  const {
    isGenerating,
    generatedIcons,
    error: iconError,
    setError: setIconError,
    generateIcons,
    downloadIcon,
    downloadAllIcons,
    clearGeneratedIcons,
    showFeedbackModal,
    lastDownloadType,
    closeFeedbackModal,
  } = useIconGeneration();

  // Track the previous uploaded file to avoid infinite re-renders
  const previousFileRef = useRef<string | null>(null);

  // Set up event listeners for paste functionality
  useEffect(() => {
    document.addEventListener("paste", handlePaste);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("paste", handlePaste);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePaste, handleKeyDown]);

  // Fetch contributors on component mount
  useEffect(() => {
    fetchContributors();
  }, [fetchContributors]);

  // Clear generated icons when new file is uploaded
  useEffect(() => {
    const currentFileKey = uploadedFile
      ? `${uploadedFile.file.name}-${uploadedFile.file.lastModified}`
      : null;

    if (currentFileKey && currentFileKey !== previousFileRef.current) {
      clearGeneratedIcons();
      setIconError(null);
      previousFileRef.current = currentFileKey;
    }
  }, [uploadedFile, clearGeneratedIcons, setIconError]);

  // Handle icon generation
  const handleGenerateIcons = async () => {
    if (!uploadedFile) return;
    await generateIcons(
      uploadedFile.file,
      backgroundColor,
      splashEnabled,
      splashBackgroundColor
    );
  };

  // Handle text logo created — feed into upload pipeline
  const handleTextLogoCreated = useCallback(
    (file: File) => {
      handleFileUpload(file);
    },
    [handleFileUpload]
  );

  // Handle download all with app.json included
  const handleDownloadAll = useCallback(() => {
    const appJson = buildAppJson(
      backgroundColor,
      splashBackgroundColor,
      splashEnabled
    );
    downloadAllIcons(appJson);
  }, [backgroundColor, splashBackgroundColor, splashEnabled, downloadAllIcons]);

  // Combine errors from different hooks
  const displayError = error || iconError;

  return (
    <div className="min-h-screen bg-gray-950">
      <StructuredData />

      <div className="container mx-auto px-4 py-12">
        {/* Hero: content left + upload right */}
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <HeroSection />
          <FileUploadArea
            uploadedFile={uploadedFile}
            isDragOver={isDragOver}
            isPasteReady={isPasteReady}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onFileInputChange={handleFileInputChange}
            onUploadAreaFocus={handleUploadAreaFocus}
            onUploadAreaBlur={handleUploadAreaBlur}
            onTextLogoCreated={handleTextLogoCreated}
          />
        </div>

        {/* Error display */}
        {displayError && (
          <div className="mx-auto mt-4 max-w-5xl">
            <p className="rounded-lg border border-red-800 bg-red-950 px-4 py-2.5 text-sm text-red-400">
              {displayError}
            </p>
          </div>
        )}

        {/* Settings panel — shown when file uploaded */}
        {uploadedFile && (
          <div className="mx-auto mt-10 max-w-5xl">
            <IconSettingsPanel
              uploadedFile={uploadedFile}
              isGenerating={isGenerating}
              backgroundColor={backgroundColor}
              colorAnalysis={colorAnalysis}
              isAnalyzingColors={isAnalyzingColors}
              splashEnabled={splashEnabled}
              splashBackgroundColor={splashBackgroundColor}
              onBackgroundColorChange={setBackgroundColor}
              onGenerateIcons={handleGenerateIcons}
              onSplashEnabledChange={setSplashEnabled}
              onSplashBackgroundColorChange={setSplashBackgroundColor}
            />
          </div>
        )}

        {/* Generated Icons */}
        <div className="mx-auto mt-10 max-w-5xl">
          <GeneratedIconsDisplay
            generatedIcons={generatedIcons}
            backgroundColor={backgroundColor}
            splashBackgroundColor={splashBackgroundColor}
            splashEnabled={splashEnabled}
            onDownloadIcon={downloadIcon}
            onDownloadAllIcons={handleDownloadAll}
          />
        </div>

        <FeaturesSection />
        <CrossPromotionBanner />
        <SEOContentSection />

        <ContributorsSection
          contributors={contributors}
          isLoadingContributors={isLoadingContributors}
          contributorsError={contributorsError}
        />

        <HowItWorksSection />
        <ComprehensiveGuideSection />
        <TechnicalSpecificationsSection />
        <AppStoreOptimizationSection />
        <ReportBugSection />
      </div>

      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={closeFeedbackModal}
        downloadType={lastDownloadType}
      />
    </div>
  );
}
