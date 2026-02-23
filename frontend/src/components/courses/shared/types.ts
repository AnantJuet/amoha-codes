export type TabName = 'Features' | 'Syllabus' | 'Pre-requisites' | 'FAQs';

export interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ModuleItem {
  title: string;
  subtopics: string[];
}

export interface FaqItem {
  isOpenInImage: boolean;
  q: string;
  a: string;
}

export interface FaqCategory {
  name: string;
  questions: FaqItem[];
}

export interface PrerequisiteItem {
  icon: 'book' | 'clock' | 'laptop' | 'code';
  title: string;
  content: string;
}

export interface HeroData {
  title: string;
  description: string;
  trustedText: string;
}

export interface AboutData {
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  features: string[];
}

export interface CourseData {
  tabs: TabName[];
  hero: HeroData;
  about: AboutData;
  features: FeatureItem[];
  syllabus: ModuleItem[];
  faqs: FaqCategory[];
  prerequisites: PrerequisiteItem[];
}
