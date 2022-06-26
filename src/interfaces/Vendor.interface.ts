export interface GoogleLocation {
  label: string;
}

export interface VendorCategory {
  id: string | number;
  attributes: {
    name: string;
    image_url?: string;
    slug: string;
    example?: string;
    description?: string;
  };
}

export interface Vendor {
  id: number;
  name: string;
  location: string;
  google_location: GoogleLocation;
  about: string;
  subdomain: string;
  verified?: boolean;
  country: string;

  owner: string | number;

  // Dates
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;

  //socials
  instagram?: string | null;
  facebook?: string | null;
  tiktok?: string | null;
  twitter?: string | null;

  // Options
  nationwide_delivery?: boolean | null;
  money_back_guarantee?: boolean | null;
  international_delivery?: boolean | null;

  // images
  logo_url?: string | null;
  banner_url?: string | null;
}
