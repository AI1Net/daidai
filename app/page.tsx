import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import MusicPlayerUI from "@/components/music-player-ui"
import Roadmap from "@/components/roadmap";
import Tokenomics from "@/components/tokenomics";
import Community from "@/components/community";
import Doodles from "@/components/doodles";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MusicPlayerUI />
      <Roadmap />
      <Tokenomics />
      <Community />
      <Doodles />
      <Footer />
    </main>
  );
}