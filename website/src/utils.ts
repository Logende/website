import type { Project, Publication, TimeRange } from '@/model/data_structures'

export function formatTimeRange(range: TimeRange) {
  // if end date is higher than today, replace it with "Present"
  const today = new Date()
  const endDate = new Date(range.end)
  if (endDate > today) return formatDate(range.start) + ' to Present'
  else if (range.end)
    return formatDate(range.start) + ' to ' + formatDate(range.end)
}

function formatDate(dateString: string) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = new Date(dateString)
  return months[date.getMonth()] + ' ' + date.getFullYear()
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getProjectSlug(project: Project) {
  const articleMatch = project.article?.match(/articles\/([^/]+)\//)
  return articleMatch?.[1] ?? slugify(project.title)
}

function parseHttpUrl(value: string): URL | undefined {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? url
      : undefined
  } catch {
    return undefined
  }
}

function getYouTubeVideoId(url: URL): string | undefined {
  const hostname = url.hostname.toLowerCase().replace(/^www\./, '')

  if (hostname === 'youtu.be') {
    return url.pathname.split('/').filter(Boolean)[0]
  }

  if (hostname !== 'youtube.com' && hostname !== 'youtube-nocookie.com') {
    return undefined
  }

  if (url.pathname === '/watch') return url.searchParams.get('v') ?? undefined

  const [, route, videoId] = url.pathname.split('/')
  return ['embed', 'shorts', 'live'].includes(route) ? videoId : undefined
}

function getTibEmbedUrl(url: URL): string | undefined {
  const hostname = url.hostname.toLowerCase().replace(/^www\./, '')
  const mediaMatch = url.pathname.match(/^\/media\/(\d+)\/?$/)

  return hostname === 'av.tib.eu' && mediaMatch
    ? `https://av.tib.eu/player/${mediaMatch[1]}`
    : undefined
}

// Resolves a video source (YouTube ID or URL) to its page and, if the provider
// is supported, its embed URL.
export function resolveVideo(source: string): {
  href: string
  embedUrl?: string
} {
  const url = parseHttpUrl(source)
  const youtubeId = url ? getYouTubeVideoId(url) : source

  if (youtubeId) {
    const id = encodeURIComponent(youtubeId)
    return {
      href: url?.href ?? `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube.com/embed/${id}`,
    }
  }

  return { href: url!.href, embedUrl: getTibEmbedUrl(url!) }
}

export const publicationGroups = [
  'Articles',
  'Talks',
  'Posters',
  'Student Projects',
] as const

export function getPublicationGroup(
  pub: Publication,
): (typeof publicationGroups)[number] {
  const hasTag = (...tags: Publication['tags']) =>
    tags.some(tag => pub.tags.includes(tag))

  // Student work the user supervised is always grouped last, regardless of type.
  if (pub.supervised_by) return 'Student Projects'
  if (hasTag('JournalPaper', 'ConferencePaper', 'Preprint')) return 'Articles'
  if (hasTag('ConferenceTalk', 'WorkshopTalk', 'OtherTalk', 'Workshop'))
    return 'Talks'
  if (hasTag('Poster')) return 'Posters'
  return 'Student Projects'
}
