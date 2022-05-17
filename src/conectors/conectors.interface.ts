export type IConector = {
  name: string;
  type: 'REST' | 'BD' | 'SOAP';
  privacity: 'PUBLIC' | 'PRIVATE';
  base_url?: string;
  logo_url?: string;
  category: string;
  description?: string;
  status?: string;
  deleted_at?: Date;
};
