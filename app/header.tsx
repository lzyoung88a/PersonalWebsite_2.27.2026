'use client'
import { TextScramble } from '@/components/ui/text-scramble'
import { Tilt } from '@/components/ui/tilt'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { PERSONAL_INFO } from './data'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isChinese, setIsChinese] = useState(false)
  const pathname = usePathname()

  useEffect(() => {}, [])

  if (pathname?.startsWith('/projects')) {
    return null
  }

  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3 }}
        >
          <Tilt rotationFactor={10} isRevese>
            <Image
              src="/img/projects/touxiang.jpg"
              alt="Zhengyang Li"
              width={700}
              height={700}
              className="h-40 w-28 rounded-md object-cover"
            />
          </Tilt>
        </motion.div>
        <div>
          <div
            onClick={() => setIsChinese(!isChinese)}
            className="text-foreground inline-block cursor-pointer text-xl font-medium sm:text-2xl"
          >
            <TextScramble
              characterSet={`${PERSONAL_INFO.name.chinese}${PERSONAL_INFO.name.english}`}
              key={isChinese ? 'chinese' : 'english'}
            >
              {isChinese
                ? PERSONAL_INFO.name.chinese
                : PERSONAL_INFO.name.english}
            </TextScramble>
          </div>
        </div>
      </div>
    </header>
  )
}
