import { Titulo } from "@/components/Titulo";
import Link from "next/link";

import * as trilhaService from "@/services/trilhas";

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
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody
          className="
          bg-gray-100
          text-gray-700
          "
        >
          {trilhas.map((trilha) => (
            <tr key={trilha.id}>
              <td className="px-4">{trilha.id}</td>
              <td className="w-1/3 truncate">{trilha.nome}</td>
              <td className="max-w-xs truncate">{trilha.descricao}</td>
              <td className="w-1/6">
                <Link href="/trilhas/gerenciar/1/editar">Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/trilhas">Voltar</Link>
    </main>
  );
};

export default GerenciarTrilhaPage;
