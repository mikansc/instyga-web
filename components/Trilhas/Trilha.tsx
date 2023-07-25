/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface TrilhaProps {
  data: {
    id: number;
    title: string;
    description: string;
    img: string;
  };
}

export const CardTrilha = ({
  data: { id, title, description, img },
}: TrilhaProps) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden relative">
      <div className="w-full h-48 bg-cover bg-center">
        <img className="block w-full h-48 object-cover" src={img} alt={title} />
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
            {title}
          </h3>
          <p className="text-sm">{description}</p>
          <div
            className="  
              flex
              justify-between
              items-center
              mt-4
              "
          >
            <Link
              href={`/trilhas/${id}`}
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
