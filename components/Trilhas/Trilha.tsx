import { Botao } from "../Botao";

export const Trilha = () => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden relative">
      <div className="w-full h-48 bg-cover bg-center">
        <img
          className="block w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
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
            Image Overlay
          </h3>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          <div
            className="  
              flex
              justify-between
              items-center
              mt-4
              "
          >
            <Botao />
          </div>
        </div>
      </div>
    </div>
  );
};
