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