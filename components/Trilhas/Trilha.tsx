/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface TrilhaProps {
  titulo: string;
  descricao: string;
  imagem: string;
  link: string;
}

export const Trilha = ({ titulo, descricao, imagem, link }: TrilhaProps) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden relative">
      <div className="w-full h-48 bg-cover bg-center">
        <img
          className="block w-full h-48 object-cover"
          src={imagem}
          alt={titulo}
        />
        <div
          className="
              h-full
              absolute
              bottom-0
              left-0
              right-0
              px-6
              py-4
              bg-gradient-to-b
              from-gray-900
              to-transparent
              text-white
              opacity-0
              hover:opacity-100
              transition-opacity
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
            {titulo}
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
            <Link
              href={link}
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out"
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
