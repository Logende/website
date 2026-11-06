import { describe, expect, it } from 'vitest'
import projects from '@/assets/main_projects.json'
import publications from '@/assets/main_publications.json'
import videos from '@/assets/main_videos.json'
import type { Publication, Video } from '@/model/data_structures'
import { getPublicationGroup, resolveVideo } from '@/utils'

const allPublications = publications.publications as Publication[]

describe('video data', () => {
  it('only references existing projects and publications', () => {
    const projectTitles = projects.projects.map(project => project.title)
    const publicationIds = allPublications.map(pub => pub.id)

    for (const video of videos.videos as Video[]) {
      expect(projectTitles).toEqual(
        expect.arrayContaining(video.related_projects ?? []),
      )
      expect(publicationIds).toEqual(
        expect.arrayContaining(video.related_publications ?? []),
      )
    }
    expect(new Set(publicationIds).size).toBe(publicationIds.length)
  })
})

describe('resolveVideo', () => {
  it('handles IDs, YouTube URLs, TIB URLs and other URLs', () => {
    expect(resolveVideo('abc')).toEqual({
      href: 'https://www.youtube.com/watch?v=abc',
      embedUrl: 'https://www.youtube.com/embed/abc',
    })
    expect(resolveVideo('https://youtu.be/abc').embedUrl).toBe(
      'https://www.youtube.com/embed/abc',
    )
    expect(resolveVideo('https://av.tib.eu/media/73764')).toEqual({
      href: 'https://av.tib.eu/media/73764',
      embedUrl: 'https://av.tib.eu/player/73764',
    })
    expect(resolveVideo('https://example.org/v').embedUrl).toBeUndefined()
  })
})

describe('getPublicationGroup', () => {
  const group = (tags: Publication['tags'], supervised_by?: string) =>
    getPublicationGroup({ tags, supervised_by } as Publication)

  it('maps tags to the four groups', () => {
    expect(group(['Preprint'])).toBe('Articles')
    expect(group(['ConferencePaper', 'Poster'])).toBe('Articles')
    expect(group(['Workshop'])).toBe('Talks')
    expect(group(['Poster'])).toBe('Posters')
    expect(group(['MasterThesis'])).toBe('Student Projects')
    expect(group(['ResearchProject'], 'Felix Neubauer')).toBe('Student Projects')
  })
})
