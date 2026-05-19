import Header from "../components/Header";
import Hero from "../components/Hero";
// import Destinations from "../components/Destinations";
import Packages from "../components/Packages";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

export default function Home() {
  return (
    <>
      {/* Header / Navigation Bar */}
      <Header />

      <main className="grow">
        {/* Premium Hero Section */}
        <Hero />

        {/* Animated Destinations Grid */}
        {/* <Destinations /> */}

        {/* Featured Packages Grid */}
        <Packages />

        {/* 'Why Choose Us' Value Proposition Section */}
        <WhyChooseUs />

        {/* Customer Reviews/Testimonials Section */}
        <Reviews />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Sticky Floating Pulsing WhatsApp FAB */}
      <FloatingWA />
    </>
  );
}
