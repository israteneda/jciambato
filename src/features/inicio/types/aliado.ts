export type Aliado = {
  id: string;
  titulo: string;
  url: string;
  imagenUrl: string;
  /** Altura relativa del logo dentro de su caja (para logos vectoriales sin margen interno). */
  alturaRelativa?: string;
};
