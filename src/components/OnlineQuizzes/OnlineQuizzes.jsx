import { Award, BookOpen, Clock, Target, Trophy, Users } from "lucide-react";
import icon from "../../assets/images/top-course.png";
import Button from "../Shared/Button";
const OnlineQuizzes = () => {
  const quizCategories = [
    { icon: Target, title: "Math", color: "bg-blue-500" },
    { icon: BookOpen, title: "Science", color: "bg-green-500" },
    { icon: Users, title: "History", color: "bg-purple-500" },
    { icon: Award, title: "English", color: "bg-red-500" },
    { icon: Clock, title: "Physics", color: "bg-yellow-500" },
    { icon: Trophy, title: "Art & Design", color: "bg-pink-500" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-blue-100 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
            <div>
              <img src={icon} alt="badge" />
            </div>
            <span>Top Course Category</span>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 leading-relaxed">
            Explore <span className="text-primary">40000+</span> New <br />
            Online Quizzes
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {quizCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="text-center">
                <div
                  className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform cursor-pointer`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {category.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button rounded={"lg"}> Explore All Quizzes</Button>
        </div>
      </div>
    </section>
  );
};

export default OnlineQuizzes;
