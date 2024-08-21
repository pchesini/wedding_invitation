export interface Confirmation {
    id: string;
    name: string;
    email: string;
    confirmationDate?: Date | null;  // La fecha puede ser null si la confirmación aún no ha sido realizada
  }