import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import NavBar from "@/components/NavBar";
import DocumentSection from "@/components/DocumentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
        <NavBar />
      <main>
        <HeroSection/>
        <Features/>
        {/* <DocumentSection /> */}

      </main>

        <Footer />
      </>

  );
}
