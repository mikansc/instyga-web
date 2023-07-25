import { Titulo } from "@/components/Titulo/Titulo";
import { Trilhas } from "@/components/Trilhas";
import { CardTrilha } from "@/components/Trilhas/Trilha";

export default function TrilhasPage() {
  return (
    <main>
      <Titulo>Trilhas</Titulo>
      <Trilhas>
        <CardTrilha
          key={1}
          data={{
            id: 1,
            title: "React",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }}
        />
      </Trilhas>
    </main>
  );
}
