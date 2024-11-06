import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
 

export default function Home() {
    return(
        <main>
            <Navbar/>
            <HeroSection />
            <Footer />
        </main>
    )
}