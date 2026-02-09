import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";
import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen relative">
      <ScrollyCanvas />
      <Skills />
      <UnderConstruction />

      <footer className="py-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rupesh Mahire. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
