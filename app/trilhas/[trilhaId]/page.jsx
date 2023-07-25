/* eslint-disable @next/next/no-img-element */
import { AvaliacaoCard } from "@/components/Avaliacoes/AvaliacaoCard";
import { Avaliacoes } from "@/components/Avaliacoes/Avaliacoes";
import { Titulo } from "@/components/Titulo";

export default function TrilhaDetalhesPage() {
  return (
    <main>
      <div className="relative">
        <img
          className="w-full h-48 object-cover
          bg-blend-overlay bg-blend-multiply
          filter brightness-50
          rounded-t-lg
          mb-4
        "
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="React"
        />
        <div className="absolute bottom-0 left-0 right-0 text-white pl-4">
          <Titulo>Trilha React</Titulo>
        </div>
      </div>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequatur voluptates quas doloribus quidem. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequatur voluptates
        quas doloribus quidem.
      </p>
      <Titulo as={"h3"}>Cursos disponíveis</Titulo>
      <Avaliacoes />
    </main>
  );
}
