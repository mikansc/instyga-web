/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BotaoLink } from "../BotaoLink";

interface TrilhaProps {
  data: {
    id: number;
    nome: string;
    descricao: string;
  };
}

export const CardTrilha = ({ data: { id, descricao, nome } }: TrilhaProps) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden relative">
      <div className="w-full h-48 bg-cover bg-center">
        <div
          className="
              h-full
              absolute
              bottom-0
              left-0
              right-0
              px-6
              py-4
              border
              border-gray-200
            "
        >
          <h3
            className="
                text-2xl
                font-bold
                mb-2
                leading-tight
              "
          >
            {nome}
          </h3>
          <p className="text-sm">{descricao}</p>
          <div
            className="  
              flex
              justify-between
              items-center
              mt-4
              "
          >
            <BotaoLink href={`/trilhas/${id}`}>Ver detalhes</BotaoLink>
          </div>
        </div>
      </div>
    </div>
  );
};
