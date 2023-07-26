import { Botao } from "@/components/Botao";
import { BotaoLink } from "@/components/BotaoLink";
import { Titulo } from "@/components/Titulo";
import * as avaliacaoService from "@/services/avaliacoes";
import { revalidateTag } from "next/cache";

const GerenciarAvaliacoesPage = async () => {
  const avaliacoes = await avaliacaoService.buscarTodas();

  return (
    <main>
      <Titulo>Gerenciar Avaliações</Titulo>
      <table className="table-auto border-collapse border-2 border-gray-500 w-full">
        <thead
          className=" bg-gray-800 text-white
        "
        >
          <tr>
            <th className="py-2">Id</th>
            <th className="py-2">Nome</th>
            <th className="py-2">Trilha</th>
            <th className="py-2">Descrição</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody
          className="
          bg-gray-100
          text-gray-700
          "
        >
          {avaliacoes.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-2">
                Nenhuma trilha encontrada
              </td>
            </tr>
          )}
          {avaliacoes.length > 0 &&
            avaliacoes.map((aval) => (
              <tr key={aval.id}>
                <td className="py-2 px-4">{aval.id}</td>
                <td className="py-2">{aval.nome}</td>
                <td className="py-2">{aval.nomeTrilha}</td>
                <td className="py-2 max-w-xs truncate">{aval.descricao}</td>
                <td className="py-2 w-1/6">
                  <form>
                    <div className="flex justify-around">
                      <BotaoLink href="/avaliacoes/gerenciar/1/editar">Editar</BotaoLink>
                      <Botao
                        type="submit"
                        formAction={async () => {
                          "use server";
                          console.log(aval.id);
                          await avaliacaoService.apagar(aval.id!).then((res) => {
                            console.log(res);
                            revalidateTag("todas_avaliacoes");
                          });
                        }}
                      >
                        Apagar
                      </Botao>
                    </div>
                  </form>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="mt-4 flex gap-3">
        <BotaoLink color="blue" href="gerenciar/novo">
          Nova avaliação
        </BotaoLink>
        <BotaoLink href="/trilhas">Voltar</BotaoLink>
      </div>
    </main>
  );
};

export default GerenciarAvaliacoesPage;
