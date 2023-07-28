import { Titulo } from "@/components/Titulo";

import { Botao } from "@/components/Botao";
import { BotaoLink } from "@/components/BotaoLink";
import * as trilhaService from "@/services/trilhas";
import { revalidateTag } from "next/cache";

const GerenciarTrilhaPage = async () => {
  const trilhas = await trilhaService.buscarTodas();

  return (
    <main>
      <Titulo>Gerenciar Trilhas</Titulo>
      <table className="table-auto border-collapse border-2 border-gray-500 w-full">
        <thead
          className=" bg-gray-800 text-white
        "
        >
          <tr>
            <th className="py-2">Id</th>
            <th className="py-2">Nome</th>
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
          {trilhas.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-2">
                Nenhuma trilha encontrada
              </td>
            </tr>
          )}
          {trilhas.length > 0 &&
            trilhas.map((trilha) => (
              <tr key={trilha.id}>
                <td className="py-2 px-4">{trilha.id}</td>
                <td className="py-2 w-1/3 truncate">{trilha.nome}</td>
                <td className="py-2 max-w-xs truncate">{trilha.descricao}</td>
                <td className="py-2 w-1/6">
                  <form>
                    <div className="flex justify-around">
                      <BotaoLink href={`/trilhas/gerenciar/${trilha.id}/editar`}>Editar</BotaoLink>
                      <Botao
                        type="submit"
                        formAction={async () => {
                          "use server";
                          console.log(trilha.id);
                          await trilhaService.apagar(trilha.id!).then((res) => {
                            console.log(res);
                            revalidateTag("todas_trilhas");
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
          Nova trilha
        </BotaoLink>
        <BotaoLink href="/trilhas">Voltar</BotaoLink>
      </div>
    </main>
  );
};

export default GerenciarTrilhaPage;
