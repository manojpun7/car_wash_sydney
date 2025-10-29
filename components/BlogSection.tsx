"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const ACCENT_YELLOW = "#fdb813";
const HEADING_COLOR = "#1e1e1e";

const blogPosts = [
  {
    id: 1,
    imagePath: "/blog/blog1.png",
    category: "Cash For Cars",
    title: "How to Get the Best Cash for Your Old Car in Sydney",
    description:
      "Discover proven ways to boost your car's value before selling it — and find out how to get top cash offers in Sydney.",
    link: "#blog-post-1",
  },
  {
    id: 2,
    imagePath: "/blog/blog2.png",
    category: "Cash For Cars",
    title: "How to Get the Best Cash for Your Old Car in Sydney",
    description:
      "Discover proven ways to boost your car's value before selling it — and find out how to get top cash offers in Sydney.",
    link: "#blog-post-2",
  },
];

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const fromDirection = index % 2 === 0 ? -100 : 100; // alternate left/right

  return (
    <motion.div
      initial={{ opacity: 0, x: fromDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col sm:flex-row border border-gray-100"
    >
      {/* Image */}
      <div className="relative w-full sm:w-1/2 lg:w-2/5 min-h-[250px] sm:min-h-full overflow-hidden">
        <Image
          src={post.imagePath}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-2xl sm:rounded-r-none"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2 lg:w-3/5 p-6 sm:p-8 flex flex-col justify-center relative">
        <div className="absolute top-0 right-0 transform -translate-y-1/2 -translate-x-4 sm:relative sm:transform-none">
          <span
            className="inline-block text-sm font-semibold tracking-wide px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "#00d08d" }}
          >
            {post.category}
          </span>
        </div>

        <div className="mt-4 sm:mt-0">
          <h3
            className="text-2xl font-bold mb-3 leading-snug transition-colors duration-200 group-hover:text-blue-700"
            style={{ color: HEADING_COLOR }}
          >
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 text-base">{post.description}</p>
          <a
            href={post.link}
            className="inline-flex items-center text-sm font-semibold transition-colors duration-200 hover:text-gray-700 uppercase"
            style={{ color: PRIMARY_BLUE }}
          >
            READ MORE
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection: React.FC = () => {
  const HEADING_BLUE = PRIMARY_BLUE;

  return (
    <section id="blogs" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          <div className="flex items-center mb-3">
            <h3
              className="text-md font-semibold uppercase tracking-widest relative mr-4"
              style={{ color: PRIMARY_BLUE }}
            >
              BLOGS
            </h3>
            <div className="w-1/3 h-0.5 bg-gray-300"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mt-4" style={{ color: HEADING_COLOR }}>
            TIPS, INSIGHTS &{" "}
            <span className="inline-block relative z-10 text-[#044E9E]">
              ADVICE

              <span
                className="absolute left-0 right-0 -z-10"
                style={{
                  backgroundColor: ACCENT_YELLOW,
                  height: "14px",
                  bottom: "8px",
                }}
              ></span>
            </span>{" "}
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
