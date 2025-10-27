import { Miembro } from "./miembro";

export type AreaOportunidad = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  responsable: Miembro;
  image: string;
  background_image: string;
  features: string[];
  longDescription: string;
  brochure?: string;
  images: Image[];
  logo?: string;
  document?: string;
};

interface Image {
  src?: string;
  alt?: string;
}
