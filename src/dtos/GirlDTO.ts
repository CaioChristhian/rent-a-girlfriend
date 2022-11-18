export interface GirlDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;
  types: string;
  thumbnail: string;
  details: {
    id: string;
    type: string;
    name: string;
  }[];
  photos: {
    id: string;
    photo: string;
  }[];
}

