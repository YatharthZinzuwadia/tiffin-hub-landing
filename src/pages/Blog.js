import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: "The Art of Home-Cooked Meals",
    excerpt: "Discover the joy of traditional cooking with TiffinHub.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Healthy Eating Made Easy",
    excerpt: "Learn how TiffinHub helps you eat better every day.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Top 5 Tiffin Recipes",
    excerpt: "Explore our favorite recipes for a delicious meal.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
  },
];

const Blog = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full">
      <section className="py-18 sm:py-20 bg-white min-h-screen">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="text-red-600 hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
