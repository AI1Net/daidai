// Mobile optimization utilities for performance tuning on Android/mobile devices
// Centralizes mobile-specific settings and detection logic

export interface MobileOptimizations {
  // Background animations
  disableBackgroundScaling: boolean
  disableBackgroundOpacity: boolean

  // Visualizer settings
  reduceVisualizerBars: boolean
  barsCount: number
  disableVisualizerGlow: boolean

  // Image animations
  disableImageScaling: boolean
  disableImageRotation: boolean

  // General performance
  reduceAnimationFrameRate: boolean
  disableExpensiveEffects: boolean
}

/**
 * Detects if the current device is mobile based on screen width
 * Uses 640px as breakpoint (Tailwind sm)
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 640
}

/**
 * Default mobile optimization settings
 * These are applied when isMobileDevice() returns true
 */
export const defaultMobileOptimizations: MobileOptimizations = {
  // Background: completely static on mobile
  disableBackgroundScaling: true,
  disableBackgroundOpacity: true,

  // Visualizer: reduce bars and disable glow for better performance
  reduceVisualizerBars: true,
  barsCount: 20, // Half of desktop 40
  disableVisualizerGlow: true,

  // Images: static on mobile
  disableImageScaling: true,
  disableImageRotation: true,

  // Performance: reduce frame rate and expensive effects
  reduceAnimationFrameRate: true,
  disableExpensiveEffects: true,
}

/**
 * Desktop optimization settings (full features enabled)
 */
export const desktopOptimizations: MobileOptimizations = {
  disableBackgroundScaling: false,
  disableBackgroundOpacity: false,
  reduceVisualizerBars: false,
  barsCount: 40,
  disableVisualizerGlow: false,
  disableImageScaling: false,
  disableImageRotation: false,
  reduceAnimationFrameRate: false,
  disableExpensiveEffects: false,
}

/**
 * Get current optimization settings based on device type
 */
export const getOptimizations = (): MobileOptimizations => {
  return isMobileDevice() ? defaultMobileOptimizations : desktopOptimizations
}

/**
 * Hook-like function to get optimizations (can be used in components)
 * Note: In React components, prefer useState with useEffect for responsive updates
 */
export const useMobileOptimizations = (): MobileOptimizations => {
  return getOptimizations()
}

/**
 * Utility to conditionally apply styles based on mobile optimizations
 */
export const conditionalStyle = <T>(
  mobileValue: T,
  desktopValue: T,
  currentOptimizations?: MobileOptimizations
): T => {
  const opts = currentOptimizations || getOptimizations()
  return isMobileDevice() ? mobileValue : desktopValue
}

/**
 * Performance monitoring for mobile optimizations
 */
export const performanceMetrics = {
  frameDrops: 0,
  lastFrameTime: 0,

  recordFrame: () => {
    const now = performance.now()
    if (performanceMetrics.lastFrameTime) {
      const delta = now - performanceMetrics.lastFrameTime
      if (delta > 16.67) { // More than 60fps
        performanceMetrics.frameDrops++
      }
    }
    performanceMetrics.lastFrameTime = now
  },

  reset: () => {
    performanceMetrics.frameDrops = 0
    performanceMetrics.lastFrameTime = 0
  }
}