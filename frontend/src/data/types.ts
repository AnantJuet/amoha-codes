export interface SidebarItem {
  id: string;
  title: string;
  href?: string;
  isSection?: boolean;
}

export interface MainContent {
  title: string;
  subtitle: string;
  sections: string[];
  audience: string;
  prerequisites: string;
}