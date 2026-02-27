'use client'
import React, { useEffect, useRef, useState } from 'react'

type Rect = { left: number; width: number; bottom: number }

export function MultilineUnderline({
  children,
  className,
  underlineOffset = 2,
  underlineHeight = 1,
  durationMs = 200,
}: {
  children: React.ReactNode
  className?: string
  underlineOffset?: number
  underlineHeight?: number
  durationMs?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLSpanElement | null>(null)
  const [rects, setRects] = useState<Rect[]>([])
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    const contentEl = contentRef.current
    if (!el || !contentEl) return

    const compute = () => {
      const r = document.createRange()
      r.selectNodeContents(contentEl)
      const list = r.getClientRects()
      const host = el.getBoundingClientRect()
      const next: Rect[] = []
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        next.push({
          left: item.left - host.left,
          width: item.width,
          bottom: item.bottom - host.top,
        })
      }
      setRects(next)
    }

    compute()

    const ro = new ResizeObserver(() => compute())
    ro.observe(el)
    const onResize = () => compute()
    window.addEventListener('resize', onResize)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [children])

  return (
    <div
      ref={ref}
      className={`relative ${className ?? ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span ref={contentRef}>{children}</span>
      <div className="pointer-events-none absolute inset-0">
        {rects.map((r, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: r.left,
              width: r.width,
              height: underlineHeight,
              top: r.bottom + underlineOffset,
              transformOrigin: 'left',
              transform: `scaleX(${hovered ? 1 : 0})`,
              transition: `transform ${durationMs}ms ease-out`,
              backgroundColor: 'var(--foreground)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
