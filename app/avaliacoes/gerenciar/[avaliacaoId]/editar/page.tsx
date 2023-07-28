import { Botao } from "@/components/Botao";
import { BotaoLink } from "@/components/BotaoLink";
import { Titulo } from "@/components/Titulo";
import * as avaliacaoService from "@/services/avaliacoes";
import * as trilhaService from "@/services/trilhas";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const EditarAvaliacaoPage = async ({ params }: { params: { avaliacaoId: number } }) => {
  const trilhas = await trilhaService.buscarTodas();
  const avaliacao = await avaliacaoService.buscarPorId(params.avaliacaoId);

  if (!avaliacao) {
    return (
      <main>
        <Titulo>Avaliação não encontrada</Titulo>
      </main>
    );
  }

  const submeter = async (data: FormData) => {
    "use server";

    const avaliacaoData = Object.fromEntries(data.entries());
    await avaliacaoService.atualizar({
      id: Number(avaliacaoData.id),
      nome: avaliacaoData.nome as string,
      descricao: avaliacaoData.descricao as string,
      nomeTrilha: avaliacaoData.trilha as string,
    });
    revalidateTag("todas_avaliacoes");
    redirect("/avaliacoes/gerenciar");
  };

  return (
    <main>
      <Titulo>Editar Avaliação</Titulo>
      <form action={submeter}>
        <input type="hidden" name="id" id="id" defaultValue={avaliacao.id} />
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="nome">
            Nome
          </label>
          <input
            defaultValue={avaliacao.nome}
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
            defaultValue={avaliacao.descricao}
            className="border border-gray-400 rounded px-4 py-2"
            id="descricao"
            name="descricao"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="descricao">
            Trilha relacionada:
          </label>
          <select
            defaultValue={
              trilhas.find((trilha) => trilha.nome === avaliacao.nomeTrilha)?.nome ?? ""
            }
            className="border border-gray-400 rounded px-4 py-2"
            id="trilha"
            name="trilha"
          >
            {trilhas.map((trilha) => (
              <option key={trilha.id} value={trilha.nome}>
                {trilha.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <BotaoLink href="/avaliacoes/gerenciar">Cancelar</BotaoLink>
          <Botao type="submit">Salvar</Botao>
        </div>
      </form>
    </main>
  );
};

export default EditarAvaliacaoPage;
