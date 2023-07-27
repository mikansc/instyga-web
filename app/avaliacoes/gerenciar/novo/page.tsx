import { Titulo } from "@/components/Titulo";
import * as avaliacaoService from "@/services/avaliacoes";
import * as trilhaService from "@/services/trilhas";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const NovaAvaliacaoPage = async () => {
  const trilhas = await trilhaService.buscarTodas();

  if (trilhas.length === 0) {
    return (
      <main>
        <Titulo>Nova Avaliação</Titulo>
        <p className="text-center">
          Não há trilhas cadastradas. Cadastre uma trilha antes de criar uma avaliação.
        </p>
      </main>
    );
  }

  const submeter = async (data: FormData) => {
    "use server";

    const avaliacaoData = Object.fromEntries(data.entries());
    await avaliacaoService.criar({
      nome: avaliacaoData.nome as string,
      descricao: avaliacaoData.descricao as string,
      nomeTrilha: avaliacaoData.trilha as string,
    });
    revalidateTag("todas_avaliacoes");
    redirect("/avaliacoes/gerenciar");
  };

  return (
    <main>
      <Titulo>Nova Avaliação</Titulo>
      <form action={submeter}>
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
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="descricao">
            Trilha relacionada:
          </label>
          <select className="border border-gray-400 rounded px-4 py-2" id="trilha" name="trilha">
            {trilhas.map((trilha) => (
              <option key={trilha.id} value={trilha.nome}>
                {trilha.nome}
              </option>
            ))}
          </select>
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

export default NovaAvaliacaoPage;
