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
    const response = await fetch(`${base_url}/${id}`, { cache: "no-store" });
    return response.json();
  } catch {
    return null;
  }
};

export const criar = async (trilha: Trilha): Promise<Trilha | null> => {
  try {
    const response = await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trilha),
    });
    return response.json();
  } catch {
    return null;
  }
};

export const atualizar = async (trilha: Trilha): Promise<Trilha | null> => {
  console.log(trilha);

  try {
    const response = await fetch(`${base_url}/${trilha.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trilha),
    });
    if (!response.ok) {
      return Promise.reject(await response.json());
    }

    return response.json();
  } catch (error) {
    console.log("erro");
    console.log(error);

    return null;
  }
};

export const apagar = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(`${base_url}/${id}`, { method: "DELETE" });
    return response.status === 204;
  } catch {
    return false;
  }
};
