export interface GirlDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  types: string;
  thumbnail: string;
  details: {
    type: string;
    name: string;
  }[];
  photos: string[];
}