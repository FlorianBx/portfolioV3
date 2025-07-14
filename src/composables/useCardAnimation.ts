import { ref, onMounted, onUnmounted } from 'vue'
import { useMotionConfig } from './useMotionConfig'

interface CardState {
  scale: number
  rotationY: number
  rotationX: number
  borderOpacity: number
  [key: `--${string}`]: any
}

export const useCardAnimation = () => {
  const { getTransition, getAnimation } = useMotionConfig()
  
  const cardStates = ref<Record<string, CardState>>({})
  const eventListeners = ref<Array<{ element: HTMLElement; handlers: Array<() => void> }>>([])

  const createInitialState = (): CardState => ({
    scale: 1,
    rotationY: 0,
    rotationX: 0,
    borderOpacity: 0
  })

  const createHoverState = (): CardState => ({
    scale: 1.03,
    rotationY: 3,
    rotationX: 1,
    borderOpacity: 1
  })

  const updateCardState = (cardId: string, state: CardState) => {
    cardStates.value[cardId] = getAnimation(state) as CardState
  }

  const initializeCards = () => {
    // Clean up existing listeners
    cleanup()

    // Wait for next tick to ensure DOM is updated
    setTimeout(() => {
      const cards = document.querySelectorAll('.project-card')
      
      cards.forEach((card, cardIndex) => {
        const element = card as HTMLElement
        const cardId = `card-${cardIndex}`
        
        // Initialize state
        cardStates.value[cardId] = createInitialState()
        
        // Create event handlers
        const handleMouseEnter = () => {
          updateCardState(cardId, createHoverState())
        }
        
        const handleMouseLeave = () => {
          updateCardState(cardId, createInitialState())
        }
        
        // Add event listeners
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
        
        // Store references for cleanup
        eventListeners.value.push({
          element,
          handlers: [
            () => element.removeEventListener('mouseenter', handleMouseEnter),
            () => element.removeEventListener('mouseleave', handleMouseLeave)
          ]
        })
      })
    }, 100)
  }

  const cleanup = () => {
    eventListeners.value.forEach(({ handlers }) => {
      handlers.forEach(handler => handler())
    })
    eventListeners.value = []
  }

  onMounted(() => {
    initializeCards()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    cardStates,
    initializeCards,
    getTransition: () => getTransition('card')
  }
}