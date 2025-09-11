import React from "react";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import icon from "../../assets/images/thunder.png";
import blog from "../../assets/images/blog.png";
const Blogs = () => {
  const newsArticles = [
    {
      id: 1,
      image: blog,
      title: "The Impact of Technology Modern Classrooms Education",
      date: "August 15, 2025",
      category: "Marketing",
      readMore: "Read More",
    },
    {
      id: 2,
      image: blog,
      title: "The Impact of Technology Modern Classrooms Education",
      date: "August 15, 2025",
      category: "Marketing",
      readMore: "Read More",
    },
    {
      id: 3,
      image: blog,
      title: "The Impact of Technology Modern Classrooms Education",
      date: "August 15, 2025",
      category: "Marketing",
      readMore: "Read More",
    },
  ];

  return (
    <div className="max-w-7xl my-10 mx-auto p-6 bg-gray-50 hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-blue-100 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
            <div>
              <img src={icon} alt="badge" />
            </div>
            <span>News & Blogs</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest News Updates
        </h1>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h3>

              {/* Meta Information */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <span>{article.category}</span>
                </div>
              </div>

              {/* Read More Button */}
              <button className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                <span>{article.readMore}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Section */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default Blogs;
