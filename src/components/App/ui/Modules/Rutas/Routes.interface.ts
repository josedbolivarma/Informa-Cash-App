export interface Route {
  id:        string;
  name:      string;
  from:      string;
  to:        string;
  depart:    Date;
  return:    Date;
  stayRange: StayRange;
  routeType: string;
  supplier:  string[];
  currency:  string;
  image:     Image;
  price:     Price;
  offerId:   string;
}

export interface Image {
  id:   string;
  name: string;
  url:  string;
}

export interface Price {
  good:       string;
  great:      string;
  incredible: string;
}

export interface StayRange {
  max: number;
  min: number;
}