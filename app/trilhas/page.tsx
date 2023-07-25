import { Titulo } from "@/components/Titulo/Titulo";
import { Trilhas } from "@/components/Trilhas";
import { CardTrilha } from "@/components/Trilhas/Trilha";

import * as trilhaService from "@/services/trilhas";

export default async function TrilhasPage() {
  const trilhas = await trilhaService.buscarTodas();

  console.log(trilhas);

  return (
    <main>
      <Titulo as="h1">Trilhas</Titulo>
      <Trilhas>
        {trilhas.length === 0 && <p>Não existe nenhuma trilha disponível.</p>}
        {trilhas.length > 0 && trilhas.map((trilha) => <CardTrilha key={1} data={trilha} />)}
      </Trilhas>
    </main>
  );
}
