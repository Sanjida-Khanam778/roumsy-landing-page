import React, { useEffect } from "react";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import icon from "../../assets/images/thunder.png";
import blog from "../../assets/images/blog.png";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Blogs = () => {
  const newsArticles = [
    {
      id: 1,
      image: blog,
      title: "The Impact of Technology Modern Classrooms Education",
      date: "August 15, 2025",
      category: "Marketing"
    },
    {
      id: 2,
      image: blog,
      title: "The Impact of Technology Modern Classrooms Education",
      date: "August 15, 2025",
      category: "Marketing"
    },
    {
      id: 3,
      image: blog,
      title: "The Impact of Technology Modern Classrooms Education",
      date: "August 15, 2025",
      category: "Marketing"
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for the animation
      once: false, // Allow animation to trigger every time the element enters the viewport
    });
  }, []);

  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-6xl py-10 mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-blue-100 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 text-sm font-medium text-black">
              <div>
                <img src={icon} alt="badge" />
              </div>
              <span>News & Blogs</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Latest News Updates
          </h1>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <div
              key={article.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200} // Stagger the animation delay
              className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray w-full md:w-2/3 lg:w-full mx-auto"
            >
              {/* Image */}
              <div className="relative overflow-hidden mt-10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 leading-relaxed">
                  {article.title}
                </h3>

                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray border-b border-dashed border-gray/60 pb-4">
                  <div className="flex items-center gap-1">
                    <MdOutlineAccessTime className="text-lg text-primary" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegFolder className="text-lg text-primary" />
                    <span>{article.category}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <a href="https://medium.com/@anonhossain1710" target="_blank" className="group flex items-center gap-2 text-primary font-medium transition-colors duration-200">
                  <span>read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
