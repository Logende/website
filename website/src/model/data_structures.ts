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
  videos?: string[]
  relations?: ProjectRelation[]
}

export interface ProjectRelation {
  relatedProject: string // project id or title
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
    | 'ThesisSupervision')[],
  derived_from?: string
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
