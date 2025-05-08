interface NavMenuItem {
  label: string;
  id: string;
  icon: React.ElementType;
}

interface SocialLink {
  name: string;
  link: string;
  icon: React.ElementType;
}

interface Contact {
  email: string;
  phone: string;
  socialLinks: SocialLink[];
}

interface AppLocation {
  name: string;
  address: string;
}

interface Data {
  name: string;
  email: string;
  phone: string;
  about: string;
  role: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  about?: string;
  role?: string;
}