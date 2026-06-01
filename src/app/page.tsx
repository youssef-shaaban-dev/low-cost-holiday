import Hero from "../components/Hero";
// import Destinations from "../components/Destinations";
import Packages from "../components/Packages";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
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
    </>
  );
}
