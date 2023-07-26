import { ENV } from "@/constants/environment";

const base_url = ENV.AVALIACAO_API_URL;

export interface Avaliacao {
  id: number;
  nomeTrilha: string;
  nome: string;
  descricao: string;
}

export const buscarTodas = async (): Promise<Avaliacao[]> => {
  try {
    const avaliacoes = await fetch(`${base_url}`, { next: { tags: ["todas_avaliacoes"] } });
    return avaliacoes.json();
  } catch (error) {
    return [];
  }
};

export const apagar = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(`${base_url}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};
