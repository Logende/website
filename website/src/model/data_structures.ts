export interface Project {
  title: string
  description: string
  icon?: string
  favorite: boolean
  size: string
  tags?: string[]
  when: TimeRange
  where?: string
  source_code?: string
  project_page?: string
  article?: string
  demo?: string
  relations?: ProjectRelation[]
}

export interface ProjectRelation {
  relatedProject: string // project id or title
  note?: string
  label:
    | 'predecessorOf'
    | 'inspiredBy'
    | 'refinementOf'
    | 'supersedes'
    | 'sharesConceptWith'
    | 'reusesCodeFrom'
    | 'proofOfConceptFor'
    | 'relatedTo'
}

export interface Publication {
  id: string
  title: string
  abstract?: string
  authors: string[]
  related_projects?: string[]
  conference: string
  date: string
  link?: string
  doi?: string
  supervised_by?: string
  tags:
    (| 'ConferencePaper'
    | 'JournalPaper'
    | 'MasterThesis'
    | 'BachelorThesis'
    | 'ResearchProject'
    | 'ConferenceTalk'
    | 'WorkshopTalk'
    | 'OtherTalk'
    | 'Poster'
    | 'ThesisSupervision'
    | 'Preprint'
    | 'Workshop')[],
  derived_from?: string,
  favorite?: boolean
}

export interface Video {
  title: string
  source: string // YouTube video ID or full video URL
  related_publications?: string[] // publication ids
  related_projects?: string[] // project titles
}

export interface WorkExperience {
  timeRange: TimeRange
  role: string
  description: string
  icon?: string
  organization: string
  location?: string
  tags?: string[]
}

export interface Education {
  timeRange: TimeRange
  role: string
  description?: string
  icon?: string
  organization: string
  location?: string
  grade: number
  degree: string
  subject: string
  tags?: string[]
}

export interface TimeRange {
  start: string
  end: string
}
