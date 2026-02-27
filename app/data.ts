type Project = {
  title: string
  authors: string[]
  year: number
  image?: string
  award?: string
  selected?: boolean
  links?: Record<string, string>
  id: string
  description?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
  icon: string
}

export const SITE_URL = 'https://liubruce.me'

export const PERSONAL_INFO = {
  name: {
    english: 'Zhengyang Li',
    chinese: '李正扬',
  },
  title: 'Ph.D. Candidate @ UCLA',
}

export const HIGHLIGHTED_AUTHORS = ['Xingyu Bruce Liu', 'Xingyu Liu']

export const PROJECTS: Project[] = [
  {
    title: 'Cognitive Load-Driven Adaptive VR Space (Mind-Adaptive Space)',
    authors: ['Zhengyang Li', 'Hailing Deng'],
    year: 2026,
    image: '/img/projects/VR+EEG.png',
    selected: true,
    links: {
      'HCII 2025': 'https://2025.hci.international/',
      video: 'https://youtu.be/Jo_5ap1tqqE',
      paper: 'https://doi.org/10.48550/arXiv.2506.02700',
    },
    id: 'liu2026doki',
    description:
      "An EEG-driven VR system that dynamically reshapes environments based on users' cognitive load. It senses brain activity, models mental states, and adjusts spatial parameters (layout, scale, visual complexity) to support focus and memory. Unlike static VR, it treats space as a responsive medium evolving with cognition. Through neurofeedback and data-driven adaptation, it explores personalized virtual spaces for regulating cognitive load and boosting attention—demonstrating brain-responsive environments as a new design paradigm for immersive learning and cognitive support in VR.",
  },
  {
    title:
      'DocLens: A Visualization System for Multi-Document Operations and Knowledge Base Retrieval in LLMs',
    authors: ['Zhengyang Li'],
    year: 2025,
    image: '/img/projects/doclen2.png',
    selected: false,
    description:
      'LLMs are widely used in document tasks, but current LLM-assisted tools lack transparency and fine-grained control over content retrieval and utilization. We present DocLens, a visual interactive system for LLM multi-document operations and knowledge base retrieval. It features a map-based interface for intuitive document filtering, plus a multifunctional panel with text highlighting, real-time LLM content visualization, customizable rules, and seamless knowledge base integration for persistent storage.',
    id: 'liu2025uistdc',
  },
  {
    title:
      'Seasonal Perception and Sentiment in Urban Scenes: A Multimodal Time-Series Study Using Social Media Data',
    authors: ['Yan Lan', 'Jinghan Liu', 'Zhengyang Li', 'Han Tu'],
    year: 2025,
    image: '/img/projects/Urban Data.png',
    selected: true,
    links: {
      'eCAADe 2025': 'https://ecaade.org/',
      paper: 'https://papers.cumincad.org/data/works/att/ecaade2025_405.pdf',
      video: 'https://youtu.be/TvVcw8_kxos',
    },
    description:
      'Street view data aids urban visual assessment but lacks temporal resolution, impeding dynamic human perception research. We propose a dual-path multimodal framework using social media to analyze seasonal urban perception, and via deep learning, YOLO and SNLP, we analyzed scene classifications and object-sentiment correlations in Beijing’s Second Ring Road. Results show natural scenes vary seasonally while architectural/cultural ones are stable; vegetation/buildings drive consistent positive sentiment, with other elements showing seasonal emotional fluctuations. This validates social media’s potential for dynamic urban perception analysis.',
    id: 'liu2025inner',
  },
  {
    title: 'TextScape: Dyslexia-Focused Text Visualization System',
    authors: ['Zhengyang Li', 'Wenyan Xie', 'Zhenzhen Guo'],
    year: 2024,
    image: '/img/projects/Portfolio_Zhengyang Li_0116(1)_14.png',
    selected: true,

    id: 'liu2024humanio',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  // empty to hide Connect buttons
]

export const EMAIL = 'lzyqwe2500@outlook.com'

export const PHOTO_GALLERY = [
  '000006.jpg',
  '000041 2.jpg',
  '000044 2.jpg',
  '000048 2.jpg',
  '000049.jpg',
  '000060 3.jpg',
  '000063110001.jpg',
  '000063110005.jpg',
  '000063110002.jpg',
  '000063110027.jpg',
  '000068.jpg',
  '000209220013.jpg',
  '000209220036.jpg',
  '000209240034.jpg',
  '000209310006.jpg',
  '000209310013.jpg',
  '000209310024.jpg',
  '000282940011.jpg',
  '000379820033.jpg',
  '000379830014.jpg',
  '34fa1cee0s9a874595ef9acb0dbbb712.jpeg',
  '8f385aaedk695be0b7da3713f974dee2.jpeg',
  '94a8a218dv08f7da0a6e775e45a6192e.jpeg',
]

export const SHOW_PHOTO_GALLERY = false
