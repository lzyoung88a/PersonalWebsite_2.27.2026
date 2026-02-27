'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { PERSONAL_INFO } from './data'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="bg-muted pointer-events-none rounded-[var(--radius-lg)]"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.4,
      }}
      enableHover={true}
    >
      {THEMES_OPTIONS.map((themeOption) => {
        return (
          <button
            key={themeOption.id}
            className={`text-muted-foreground inline-flex h-7 w-7 cursor-pointer items-center justify-center transition-colors duration-200 focus-visible:outline-2 ${
              themeOption.id === 'light'
                ? 'hover:text-amber-500 data-[checked=true]:text-amber-500'
                : 'hover:text-blue-700 data-[checked=true]:text-blue-700'
            }`}
            type="button"
            aria-label={`Switch to ${themeOption.label} theme`}
            data-id={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
          >
            {themeOption.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="border-border mt-8 border-t px-0 py-4">
      <div className="text-muted-foreground flex items-center justify-between text-xs">
        <TextLoop
          className="overflow-y-clip text-xs"
          transition={{
            type: 'spring',
            stiffness: 1000,
            damping: 100,
            mass: 10,
          }}
          variants={{
            initial: {
              y: 20,
              rotateX: 90,
              opacity: 0,
              filter: 'blur(4px)',
            },
            animate: {
              y: 0,
              rotateX: 0,
              opacity: 1,
              filter: 'blur(0px)',
            },
            exit: {
              y: -20,
              rotateX: -90,
              opacity: 0,
              filter: 'blur(4px)',
            },
          }}
        >
          <span>© 2025 {PERSONAL_INFO.name.english}</span>
          <a
            href="https://github.com/xybruceliu/brucespage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline-offset-2 transition-colors"
          >
            website temple
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-3 w-3"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </TextLoop>
        <div className="text-muted-foreground text-xs">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
