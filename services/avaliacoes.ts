import { ENV } from "@/constants/environment";

const base_url = ENV.AVALIACAO_API_URL;

export interface Avaliacao {
  id: number;
  nomeTrilha: string;
  nome: string;
  descricao: string;
}

export const buscarTodas = async (nomeTrilha: string): Promise<Avaliacao[]> => {
  try {
    const avaliacoes = await fetch(`${base_url}`);
    return avaliacoes.json();
  } catch (error) {
    return [];
  }
};
