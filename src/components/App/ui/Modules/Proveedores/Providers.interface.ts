export interface Provider {
  id:             string;
  name:           string;
  avatar:         string;
  socialNetworks: SocialNetworks;
  destinations:   Destination[];
}

export interface Destination {
  country:  string;
  airports: string[];
}

export interface SocialNetworks {
  website:  string;
  facebook: string;
  twitter:  string;
  phones:   string;
}