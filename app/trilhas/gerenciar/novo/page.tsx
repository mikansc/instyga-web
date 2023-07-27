import { Titulo } from "@/components/Titulo";
import * as trilhaService from "@/services/trilhas";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const NovaTrilhaPage = () => {
  const adicionaTrilha = async (data: FormData) => {
    "use server";
    await trilhaService.criar(data);
    revalidateTag("todas_trilhas");
    redirect("/trilhas/gerenciar");
  };

  return (
    <main>
      <Titulo>Nova Trilha</Titulo>
      <form action={adicionaTrilha}>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="nome">
            Nome
          </label>
          <input
            className="border border-gray-400 rounded px-4 py-2"
            type="text"
            id="nome"
            name="nome"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            className="border border-gray-400 rounded px-4 py-2"
            id="descricao"
            name="descricao"
          />
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out">
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 ease-in-out"
          >
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
};

export default NovaTrilhaPage;
