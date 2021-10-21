export type Tour = {
  id: number;
  age_max: number;
  age_min: number;
  length: number;
  price: number;
  title: string;
  img_url: string;
  map_url: string;
  flexible_booking: boolean;
  destinations: Array<string>;
  operated_in: Array<string>;
  regions: Array<string>;
  travel_styles: Array<string>;
  reviews: {
    avg: number;
    cnt: number;
    sample: string;
  };
};
