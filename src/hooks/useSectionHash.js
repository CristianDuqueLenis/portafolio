import { useEffect, useState } from 'react'

function getHashId() {
  return window.location.hash.replace('#', '')
}

function setHash(id) {
  const nextHash = `#${id}`
  if (window.location.hash === nextHash) return
  window.history.replaceState(null, '', nextHash)
}

function getActiveSectionId(sectionIds) {
  const offset = Math.round(window.innerHeight * 0.28)
  const reachedBottom =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8

  if (reachedBottom) {
    return sectionIds[sectionIds.length - 1]
  }

  let current = sectionIds[0]

  for (const id of sectionIds) {
    const element = document.getElementById(id)
    if (!element) continue
    if (element.getBoundingClientRect().top - offset <= 0) {
      current = id
    }
  }

  return current
}

function useSectionHash(sectionIds) {
  const [activeId, setActiveId] = useState(() => {
    const hashId = getHashId()
    return sectionIds.includes(hashId) ? hashId : sectionIds[0] ?? ''
  })

  useEffect(() => {
    if (!sectionIds.length) return undefined

    let frame = 0

    const sync = () => {
      const current = getActiveSectionId(sectionIds)
      setActiveId((previous) => (previous === current ? previous : current))
      setHash(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        sync()
      })
    }

    const startId = window.setTimeout(sync, 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.clearTimeout(startId)
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  return activeId
}

export default useSectionHash
