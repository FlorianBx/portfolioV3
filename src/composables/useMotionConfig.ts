import { ref, onMounted } from 'vue'

export const useMotionConfig = () => {
  const prefersReducedMotion = ref(false)

  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mediaQuery.matches
    
    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.value = e.matches
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  })

  const getTransition = (type: 'spring' | 'letter' | 'card' | 'orb') => {
    if (prefersReducedMotion.value) {
      return { duration: 0.01 }
    }

    switch (type) {
      case 'spring':
        return { type: 'spring' as const, stiffness: 120, damping: 12 }
      case 'letter':
        return { type: 'spring' as const, stiffness: 150, damping: 10 }
      case 'card':
        return { type: 'spring' as const, stiffness: 100, damping: 15 }
      case 'orb':
        return { 
          x: { duration: 1.5, ease: 'circOut' as const },
          y: { duration: 1.5, ease: 'circOut' as const },
          scale: { duration: 1.5, ease: 'circOut' as const },
          rotate: { duration: 50, repeat: Infinity, ease: 'linear' as const }
        }
      default:
        return { type: 'spring' as const, stiffness: 120, damping: 12 }
    }
  }

  const getAnimation = (animation: Record<string, any>) => {
    if (prefersReducedMotion.value) {
      return {}
    }
    return animation
  }

  return {
    prefersReducedMotion,
    getTransition,
    getAnimation
  }
}