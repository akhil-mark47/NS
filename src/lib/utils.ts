import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Smooth scroll function
export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

// Intersection Observer utility for animations
export const setupIntersectionObserver = () => {
  if (typeof window !== 'undefined') {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((element) => observer.observe(element))

    return observer
  }
  return null
}

// Calculate reading time
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return readingTime
}
