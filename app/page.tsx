import { Header } from "../components/Header";
import { SideMenu } from "../components/SideMenu";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <div className="flex h-full">
        <SideMenu />
        <div className="flex-1">content</div>
      </div>
    </main>
  );
}
