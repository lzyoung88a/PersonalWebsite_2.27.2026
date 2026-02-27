'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog'
import { PROJECTS, HIGHLIGHTED_AUTHORS } from '../../data'

export default function ProjectDetail() {
  const project = PROJECTS.find((p) => p.id === 'liu2024humanio')

  const images = [
    '/img/projects/Portfolio_Zhengyang Li_0116(1)_15.png',
    '/img/projects/Portfolio_Zhengyang Li_0116(1)_16.png',
    '/img/projects/Portfolio_Zhengyang Li_0116(1)_17.png',
    '/img/projects/Portfolio_Zhengyang Li_0116(1)_18.png',
  ]

  if (!project) {
    return (
      <main className="space-y-8">
        <h1 className="text-foreground text-xl font-semibold">
          Project Not Found
        </h1>
        <Link href="/" className="text-foreground underline">
          Back to Projects
        </Link>
      </main>
    )
  }

  const orderedLinks = [
    { label: 'Video', url: project.links?.video },
    { label: 'Paper', url: project.links?.paper ?? project.links?.pdf },
    { label: 'Conference', url: project.links?.['CHI 2024'] },
  ].filter((l) => !!l.url) as { label: string; url: string }[]

  return (
    <main className="space-y-8">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
      >
        <ArrowLeft className="h-4 w-4" />
      </Link>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-foreground text-xl font-semibold">
            {project.title}
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            {project.authors.map((author, index) => (
              <React.Fragment key={index}>
                {author === 'Zhengyang Li' ? (
                  <span className="font-semibold">Zhengyang Li*</span>
                ) : HIGHLIGHTED_AUTHORS.includes(author) ? (
                  <span className="font-medium">{author}</span>
                ) : (
                  author
                )}
                {index < project.authors.length - 1 && ', '}
              </React.Fragment>
            ))}
          </p>
        </div>
        {orderedLinks.length > 0 && (
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {orderedLinks.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ring-border hover:bg-accent hover:text-accent-foreground inline-flex items-center rounded-full px-2.5 py-1 text-xs ring-1 shadow-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="divide-border divide-y">
        {images.map((src, idx) => (
          <div key={`${src}-${idx}`} className="py-6">
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={src}
                  alt="Project content"
                  width={1200}
                  height={800}
                  className="h-auto w-full cursor-zoom-in rounded-sm"
                  priority={idx === 0}
                  quality={85}
                />
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className="flex h-auto w-auto max-w-none items-center justify-center border-none bg-transparent p-0 ring-0 shadow-none outline-none"
              >
                <DialogTitle className="sr-only">Image view</DialogTitle>
                <img
                  src={src}
                  alt="Project content"
                  className="rounded-md"
                  style={
                    {
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '90vw',
                      maxHeight: '85vh',
                    } as React.CSSProperties
                  }
                  draggable={false}
                />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </main>
  )
}
