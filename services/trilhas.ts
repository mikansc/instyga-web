import { ENV } from "@/constants/environment";

interface Trilha {
  id: number;
  nome: string;
  descricao: string;
}

const base_url = ENV.TRILHA_API_URL;

export const buscarTodas = async (): Promise<Trilha[]> => {
  try {
    const response = await fetch(base_url);
    return response.json();
  } catch {
    return [];
  }
};

export const buscarPorId = async (id: number): Promise<Trilha | null> => {
  try {
    const response = await fetch(`${base_url}/${id}`);
    return response.json();
  } catch {
    return null;
  }
};
