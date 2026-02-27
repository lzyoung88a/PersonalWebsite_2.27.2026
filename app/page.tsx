'use client'
import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FileText, Twitter, Linkedin, GraduationCap, Award } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { MultilineUnderline } from '@/components/ui/multiline-underline'
import Image from 'next/image'
import Link from 'next/link'
import {
  PROJECTS,
  EMAIL,
  SOCIAL_LINKS,
  HIGHLIGHTED_AUTHORS,
  PHOTO_GALLERY,
  SHOW_PHOTO_GALLERY,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const VARIANTS_PROJECT_ITEM = {
  hidden: { opacity: 0, y: -20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
    transition: {
      duration: 0.2,
    },
  },
}

const iconMap = {
  FileText,
  Twitter,
  Linkedin,
  GraduationCap,
}

function MagneticSocialLink({
  children,
  link,
  icon,
}: {
  children: React.ReactNode
  link: string
  icon: keyof typeof iconMap
}) {
  const IconComponent = iconMap[icon]

  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        className="group bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background relative inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-sm transition-all duration-200"
      >
        <IconComponent className="h-3.5 w-3.5" />
        {children}
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-muted-foreground">
            Hi, I’m Zhengyang, and you can also call me Zayne.
          </p>
          <br />
          <p className="text-muted-foreground">
            My research focuses on the interdisciplinary intersection of
            Human-AI Interaction, Spatial Computing, and Data Visualization, and
            my work centers on designing interactive systems that shape and
            inform human behavior.
          </p>
          <br />
          <p className="text-muted-foreground">
            My technical skills include Python, PyTorch, Unity development, and
            JavaScript.
          </p>
          <p className="text-muted-foreground mt-3">
            Here is my{' '}
            <a
              className="text-foreground underline"
              href="https://drive.google.com/file/d/1Y_QAyo-mSxwVxLbLrPuTcPOaL1rBeNTW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
            .
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-5 flex items-baseline gap-2">
          <h3 className="text-lg font-medium">Projects</h3>
        </div>
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {PROJECTS.sort((a, b) => {
              if (b.year !== a.year) {
                return b.year - a.year
              }
              return a.id.localeCompare(b.id)
            }).map((pub) => (
              <motion.div
                key={pub.id}
                className={`flex flex-col ${['liu2026doki', 'liu2025inner'].includes(pub.id) ? 'gap-6' : 'gap-4'} sm:flex-row sm:items-start`}
                variants={VARIANTS_PROJECT_ITEM}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className="flex-1">
                  <h4 className="text-foreground font-medium">
                    {pub.id === 'liu2026doki' ? (
                      <Link
                        href="/projects/mind-adaptive-space"
                        className="inline-block"
                      >
                        <MultilineUnderline>{pub.title}</MultilineUnderline>
                      </Link>
                    ) : pub.id === 'liu2025inner' ? (
                      <Link
                        href="/projects/seasonal-perception"
                        className="inline-block"
                      >
                        <MultilineUnderline>{pub.title}</MultilineUnderline>
                      </Link>
                    ) : pub.id === 'liu2025uistdc' ? (
                      <Link href="/projects/doclens" className="inline-block">
                        <MultilineUnderline>{pub.title}</MultilineUnderline>
                      </Link>
                    ) : pub.id === 'liu2024humanio' ? (
                      <Link href="/projects/textscape" className="inline-block">
                        <MultilineUnderline>{pub.title}</MultilineUnderline>
                      </Link>
                    ) : (
                      pub.title
                    )}
                  </h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {pub.authors.map((author, index) => (
                      <React.Fragment key={index}>
                        {author === 'Zhengyang Li' ? (
                          <span className="font-semibold">Zhengyang Li*</span>
                        ) : HIGHLIGHTED_AUTHORS.includes(author) ? (
                          <span className="font-medium">{author}</span>
                        ) : (
                          author
                        )}
                        {index < pub.authors.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </p>
                  {pub.description && (
                    <p className="text-muted-foreground mt-2 text-xs">
                      {pub.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {pub.award && (
                      <span className="inline-flex items-center gap-1 py-0.5 text-sm font-medium">
                        <Award className="h-3 w-3 text-rose-500" />
                        {pub.award}
                      </span>
                    )}
                  </div>
                  {pub.links && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {Object.entries(pub.links).map(([type, url]) => (
                        <motion.a
                          key={type}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ring-border hover:bg-accent hover:text-accent-foreground inline-flex items-center rounded-full px-2.5 py-1 text-xs ring-1 shadow-sm transition-colors"
                          initial="initial"
                          whileHover="hover"
                        >
                          {type}
                          <motion.span
                            variants={{
                              initial: {
                                width: 0,
                                opacity: 0,
                                marginLeft: 0,
                              },
                              hover: {
                                width: 'auto',
                                opacity: 1,
                                marginLeft: 2,
                                transition: { duration: 0.2 },
                              },
                            }}
                            className="flex items-center overflow-hidden"
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 shrink-0"
                            >
                              <motion.path
                                d="M3.5 11.5L11.5 3.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                variants={{
                                  initial: { pathLength: 0, opacity: 0 },
                                  hover: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: {
                                      pathLength: {
                                        duration: 0.2,
                                        ease: 'easeOut',
                                      },
                                      opacity: { duration: 0.05 },
                                    },
                                  },
                                }}
                              />
                              <motion.path
                                d="M6.5 3.5H11.5V8.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={{
                                  initial: { pathLength: 0, opacity: 0 },
                                  hover: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: {
                                      pathLength: {
                                        duration: 0.2,
                                        ease: 'easeOut',
                                        delay: 0.2,
                                      },
                                      opacity: { duration: 0.05, delay: 0.2 },
                                    },
                                  },
                                }}
                              />
                            </svg>
                          </motion.span>
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
                {pub.image && (
                  <div className="w-full shrink-0 sm:w-48 sm:self-center">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      width={192}
                      height={128}
                      className="h-auto w-full rounded-sm shadow-lg"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-[var(--radius-lg)] bg-muted"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-[var(--radius-xl)] px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal text-foreground">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section> */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="text-muted-foreground mb-5">
          Feel free to contact me at{' '}
          <a className="text-foreground underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink
              key={link.label}
              link={link.link}
              icon={link.icon as keyof typeof iconMap}
            >
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>

      {SHOW_PHOTO_GALLERY && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          {PHOTO_GALLERY.map((photo) => (
            <link
              key={`preload-${photo}`}
              rel="preload"
              as="image"
              href={`/img/photos/${photo}`}
            />
          ))}
          <InfiniteSlider speed={40} speedOnHover={20} gap={24}>
            {PHOTO_GALLERY.map((photo) => (
              <Dialog key={photo}>
                <DialogTrigger asChild>
                  <Image
                    src={`/img/photos/${photo}`}
                    alt="Photo"
                    width={180}
                    height={120}
                    className="h-[120px] w-auto cursor-pointer rounded-sm object-cover transition-opacity hover:opacity-80"
                    loading="eager"
                    quality={85}
                    draggable={false}
                  />
                </DialogTrigger>
                <DialogContent
                  showCloseButton={false}
                  className="flex h-auto w-auto max-w-none items-center justify-center border-none bg-transparent p-0 ring-0 shadow-none outline-none"
                  style={
                    {
                      '--tw-enter-scale': '1',
                      '--tw-exit-scale': '1',
                    } as React.CSSProperties
                  }
                >
                  <DialogTitle className="sr-only">Photo view</DialogTitle>
                  <img
                    src={`/img/photos/${photo}`}
                    alt="Photo"
                    className="rounded-md"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '70vw',
                      maxHeight: '70vh',
                    }}
                    draggable={false}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </InfiniteSlider>
        </motion.section>
      )}
    </motion.main>
  )
}
