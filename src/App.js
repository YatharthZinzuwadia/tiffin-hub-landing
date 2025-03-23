import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import Testimonials from "./components/Testimonials";

const App = () => {
  const services = [
    {
      title: "Daily Delivery",
      description: "Fresh meals delivered every day.",
    },
    { title: "Custom Menus", description: "Choose your favorite dishes." },
    { title: "Affordable Plans", description: "Starting at just $10/month." },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-16 bg-white text-center" id="services">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default App;
