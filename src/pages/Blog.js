import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Art of Home-Cooked Meals",
    excerpt: "Discover the joy of traditional cooking with TiffinHub.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Healthy Eating Made Easy",
    excerpt: "Learn how TiffinHub helps you eat better every day.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Top 5 Tiffin Recipes",
    excerpt: "Explore our favorite recipes for a delicious meal.",
    image: "https://via.placeholder.com/400",
  },
];

const Blog = () => {
  return (
    <section className="py-12 sm:py-16 bg-white min-h-screen">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Blog
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">{post.excerpt}</p>
            <a
              href="#"
              className="text-red-600 hover:underline mt-2 inline-block"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
