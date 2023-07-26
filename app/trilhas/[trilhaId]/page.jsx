/* eslint-disable @next/next/no-img-element */
import { Avaliacoes } from "@/components/Avaliacoes/Avaliacoes";
import { Titulo } from "@/components/Titulo";

export default function TrilhaDetalhesPage() {
  return (
    <main>
      <div className="relative">
        <img
          className="w-full h-48 object-cover
          bg-blend-overlay
          filter brightness-50
          rounded-t-lg
          mb-4
        "
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="React"
        />
        <div
          className="absolute bottom-0 left-0 right-0 text-white px-4 flex 
        items-center justify-between
        bg-gradient-to-t from-black via-transparent to-transparent
        "
        >
          <Titulo>Trilha React</Titulo>
          <div
            className="bg-white text-gray-700 rounded-full
          px-4 py-2 flex items-center space-x-2"
          >
            <strong
              className="text-sm font-bold 
            text-gray-900"
            >
              2 avaliações disponíveis
            </strong>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam,
        quia, quos voluptatem voluptatum quod consequatur voluptates quas doloribus quidem. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod consequatur voluptates quas
        doloribus quidem.
      </p>
      <Titulo as={"h3"}>Avaliações disponíveis</Titulo>
      <Avaliacoes />
    </main>
  );
}
