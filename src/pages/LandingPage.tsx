import Hero from "../components/Landing/Hero";
import Faq from "../components/Landing/FAQ/FAQ";
import Features from "../components/Landing/Features/Features";
import Testimonials from "../components/Landing/Testimonials/Testimonials";
import Footer from "../components/Landing/Footer/Footer";
import ContactForm from "../components/Landing/Contact/Contact";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
