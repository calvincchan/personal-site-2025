'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { Button } from 'nextra/components'
import type { FC } from 'react'

export const GoBack: FC = () => {
  const router = useTransitionRouter()
  const segments = usePathname().split('/')

  const isNestedPage = segments.length > 2
  if (!isNestedPage) return null
  return (
    <Button role="navigation" onClick={router.back} className="print:hidden underline">
      ← Back
    </Button>
  )
}
