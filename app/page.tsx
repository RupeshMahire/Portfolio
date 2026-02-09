import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Projects />

      <footer className="py-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rupesh Mahire. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
