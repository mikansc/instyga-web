import { Titulo } from "@/components/Titulo/Titulo";

/* eslint-disable @next/next/no-img-element */
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Titulo>Bem vindo!</Titulo>
      <p>Navegue pelo menu lateral para acessar as trilhas.</p>
    </main>
  );
}
