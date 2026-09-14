export interface ServiceItem {
  id: string;
  title: string;
  category: 'architectural' | 'civil' | 'safety';
  description: string;
  features: string[];
  iconName: string;
  badge?: string;
}

export interface ProjectSample {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface ConsultationForm {
  name: string;
  phone: string;
  serviceType: string;
  projectLocation: string;
  buildingType: string;
  area: string;
  notes: string;
}
