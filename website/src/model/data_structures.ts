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
  publication?: string
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
