import Link from "next/link";

const GerenciarTrilhaPage = (props) => {
  return (
    <main>
      <p>GerenciarTrilhaPage</p>
      <Link href="/trilhas/gerenciar/1/editar">Trilha 1</Link>
    </main>
  );
};

export default GerenciarTrilhaPage;
