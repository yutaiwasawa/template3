import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

const BlogPost = ({ date, title, excerpt, image, category }: BlogPost) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-purple-400 text-sm">{category}</span>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <motion.a
        href="#"
        className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center text-sm uppercase tracking-wider"
        whileHover={{ x: 5 }}
      >
        Read More →
      </motion.a>
    </div>
  </motion.div>
);

const Blog = () => {
  const posts: BlogPost[] = [
    {
      date: "Mar 15, 2024",
      title: "The Future of Digital Marketing",
      excerpt: "Explore emerging trends and technologies shaping the future of digital marketing in 2024 and beyond...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Trends"
    },
    {
      date: "Mar 10, 2024",
      title: "Mastering Social Media Strategy",
      excerpt: "Learn how to create an effective social media strategy that drives engagement and converts followers...",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Social Media"
    },
    {
      date: "Mar 5, 2024",
      title: "SEO Best Practices for 2024",
      excerpt: "Stay ahead of the competition with these proven SEO strategies and techniques for better rankings...",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "SEO"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in digital marketing
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="/blog"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 uppercase tracking-wider text-sm"
          >
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;