import type { SidebarItem, MainContent } from './types';

export const sidebarData: SidebarItem[] = [
  { id: 'anger-management', title: 'Anger Management', isSection: true },
  { id: 'analysis', title: 'Analysis of Anger' },
  { id: 'myths-facts', title: 'Anger Myths & Facts' },
  { id: 'why-management', title: 'Why Anger Management?' },
  { id: 'symptoms', title: 'Symptoms of Anger' },
  { id: 'cues', title: 'Cues To Anger' },
  { id: 'behaviors', title: 'Angry Behaviors' },
  { id: 'aggression-cycle', title: 'The Aggression Cycle' },
  { id: 'abcd-model', title: 'The A-B-C-D Model' },
  { id: 'control', title: 'How to control Anger?' },
  { id: 'communication', title: 'Communication & Anger' },
  { id: 'tips', title: 'Anger Management Tips' },
  { id: 'quick-guide', title: 'Anger Management - Quick Guide' },
  { id: 'resources', title: 'Anger Management - Resources' },
  { id: 'discussion', title: 'Anger Management - Discussion' },
];

export const selectedReadingData: SidebarItem[] = [
  { id: 'upsc-notes', title: 'UPSC IAS Exams Notes' },
  { id: 'best-practices', title: 'Download\'s Best Practices' },
];

export const mainContentData: MainContent = {
  title: 'Anger Management Tutorial',
  subtitle: 'Anger Management is the set of practices that assist in Temper Control and aims at improving skills to deploy anger successfully. Anger Management helps in identifying the motivation factor behind anger, so that we can analyze it and address it.',
  sections: [
    'Job Search',
    'PDF Version', 
    'Quick Guide',
    'Resources',
    'Discussion'
  ],
  audience: 'This tutorial is for designed primarily for the students and professionals who seek assistance in managing their frustration and anger while handling exhaustive academic workload and high expectations at work respectively.',
  prerequisites: 'Before proceeding with this tutorial, you are expected to have a calm mindset and be open to exploring the suggestions mentioned here.'
};