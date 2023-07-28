import { ENV } from "@/constants/environment";

const base_url = ENV.AVALIACAO_API_URL;

export interface Avaliacao {
  id?: number;
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

export const buscarPorId = async (id: number): Promise<Avaliacao | null> => {
  try {
    const avaliacao = await fetch(`${base_url}/${id}`);
    return avaliacao.json();
  } catch (error) {
    return null;
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

export const criar = async (avaliacao: Avaliacao): Promise<Avaliacao | null> => {
  try {
    const response = await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(avaliacao),
    });
    return response.json();
  } catch {
    return null;
  }
};

export const atualizar = async (avaliacao: Avaliacao): Promise<Avaliacao | null> => {
  try {
    const response = await fetch(`${base_url}/${avaliacao.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(avaliacao),
    });
    return response.json();
  } catch {
    return null;
  }
};
