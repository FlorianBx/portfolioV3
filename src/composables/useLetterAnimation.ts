import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { useMotionConfig } from './useMotionConfig'

interface LetterState {
  rotation: number
  scale: number
  y: number
  x: number
  color: string
  textShadow: string
  [key: `--${string}`]: any
}

interface LetterConfig {
  hoverColor: string
  glowColor: string
  maxRotation: number
  maxScale: number
  maxY: number
  maxX: number
  resetDelay: number
}

export const useLetterAnimation = (
  titleRef: Ref<HTMLElement | undefined>,
  config: Partial<LetterConfig> = {}
) => {
  const { getTransition, getAnimation } = useMotionConfig()
  
  const defaultConfig: LetterConfig = {
    hoverColor: '#10B981',
    glowColor: '#10B981',
    maxRotation: 720,
    maxScale: 1.5,
    maxY: 40,
    maxX: 60,
    resetDelay: 100,
    ...config
  }

  const letterStates = ref<Record<string, LetterState>>({})
  const eventListeners = ref<Array<{ element: HTMLElement; handlers: Array<() => void> }>>([])

  const createInitialState = (): LetterState => ({
    rotation: 0,
    scale: 1,
    y: 0,
    x: 0,
    color: '#ffffff',
    textShadow: 'none'
  })

  const createHoverState = (): LetterState => ({
    rotation: (Math.random() - 0.5) * defaultConfig.maxRotation,
    scale: 1 + Math.random() * defaultConfig.maxScale,
    y: -Math.random() * defaultConfig.maxY,
    x: (Math.random() - 0.5) * defaultConfig.maxX,
    color: defaultConfig.hoverColor,
    textShadow: `0 0 30px ${defaultConfig.glowColor}, 0 0 60px ${defaultConfig.glowColor}`
  })

  const updateLetterState = (letterId: string, state: LetterState) => {
    letterStates.value[letterId] = getAnimation(state) as LetterState
  }

  const resetLetterState = (letterId: string, delay: number = 0) => {
    setTimeout(() => {
      updateLetterState(letterId, createInitialState())
    }, delay)
  }

  const initializeLetters = () => {
    if (!titleRef.value) return

    const titleEl = (titleRef.value as any)?.$el || titleRef.value
    const letters = titleEl?.children

    if (!letters) return

    // Clean up existing listeners
    cleanup()

    Array.from(letters).forEach((letter, index) => {
      const el = letter as HTMLElement
      const letterId = `letter-${index}`
      
      // Handle nested spans (like in blog page)
      const spans = el.querySelectorAll('span')
      const targets = spans.length > 0 ? Array.from(spans) : [el]
      
      targets.forEach((target, spanIndex) => {
        const finalLetterId = spans.length > 0 ? `${letterId}-${spanIndex}` : letterId
        
        // Initialize state
        letterStates.value[finalLetterId] = createInitialState()
        
        // Create event handlers
        const handleMouseEnter = () => {
          updateLetterState(finalLetterId, createHoverState())
        }
        
        const handleMouseLeave = () => {
          const delay = (index + spanIndex) * defaultConfig.resetDelay
          resetLetterState(finalLetterId, delay)
        }
        
        // Add event listeners
        target.addEventListener('mouseenter', handleMouseEnter)
        target.addEventListener('mouseleave', handleMouseLeave)
        
        // Store references for cleanup
        eventListeners.value.push({
          element: target as HTMLElement,
          handlers: [
            () => target.removeEventListener('mouseenter', handleMouseEnter),
            () => target.removeEventListener('mouseleave', handleMouseLeave)
          ]
        })
      })
    })
  }

  const cleanup = () => {
    eventListeners.value.forEach(({ handlers }) => {
      handlers.forEach(handler => handler())
    })
    eventListeners.value = []
  }

  onMounted(() => {
    initializeLetters()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    letterStates,
    initializeLetters,
    updateLetterState,
    resetLetterState,
    getTransition: () => getTransition('letter')
  }
}