import { ENV } from "@/constants/environment";

export interface Trilha {
  id?: number;
  nome: string;
  descricao: string;
}

const base_url = ENV.TRILHA_API_URL;

export const buscarTodas = async (): Promise<Trilha[]> => {
  try {
    const response = await fetch(base_url, { next: { tags: ["todas_trilhas"] } });
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

export const criarTrilha = async (trilha: FormData): Promise<Trilha | null> => {
  try {
    const object = Object.fromEntries(trilha.entries());
    console.log(object);

    const response = await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    return response.json();
  } catch {
    return null;
  }
};

export const apagarTrilha = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(`${base_url}/${id}`, { method: "DELETE" });
    return response.status === 204;
  } catch {
    return false;
  }
};
