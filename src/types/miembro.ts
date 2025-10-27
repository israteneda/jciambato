export interface Miembro {
  id: string; // ID único para referenciar
  nombre: string;
  apellido: string;
  correo?: string;
  cargo?: string;
  imagen: string;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}
