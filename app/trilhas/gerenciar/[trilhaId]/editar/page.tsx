import { Botao } from "@/components/Botao";
import { BotaoLink } from "@/components/BotaoLink";
import { Titulo } from "@/components/Titulo";
import * as trilhaService from "@/services/trilhas";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const EditarTrilhaPage = async ({ params }: { params: { trilhaId: number } }) => {
  const trilha = await trilhaService.buscarPorId(params.trilhaId);

  if (!trilha) {
    return (
      <main>
        <Titulo>Trilha não encontrada</Titulo>
      </main>
    );
  }

  const submeter = async (data: FormData) => {
    "use server";

    const object = Object.fromEntries(data.entries());
    await trilhaService.atualizar({
      id: Number(object.id),
      nome: String(object.nome),
      descricao: String(object.descricao),
    });
    revalidateTag("todas_trilhas");
    redirect("/trilhas/gerenciar");
  };

  return (
    <main>
      <Titulo>Nova Trilha</Titulo>
      <form action={submeter}>
        <input type="hidden" name="id" id="id" defaultValue={trilha.id} />
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="nome">
            Nome
          </label>
          <input
            defaultValue={trilha.nome}
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
            defaultValue={trilha.descricao}
            className="border border-gray-400 rounded px-4 py-2"
            id="descricao"
            name="descricao"
          />
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <BotaoLink href="/trilhas/gerenciar">Cancelar</BotaoLink>
          <Botao color="green" type="submit">
            Salvar
          </Botao>
        </div>
      </form>
    </main>
  );
};

export default EditarTrilhaPage;
