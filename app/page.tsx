import { Trilhas } from "@/components/Trilhas";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className="h-full">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Trilhas</h2>
      <Trilhas />
    </main>
  );
}
