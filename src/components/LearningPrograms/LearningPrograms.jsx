const LearningPrograms = () => {
  const programs = [
    {
      title: "Programming & Development",
      subtitle: "Web Development Fundamentals",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      students: "2.5k students",
      lessons: "45 lessons",
      color: "bg-blue-500"
    },
    {
      title: "PROJECT MANAGEMENT",
      subtitle: "Complete Project Management Course",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      students: "3.2k students", 
      lessons: "52 lessons",
      color: "bg-green-500"
    },
    {
      title: "TECHNOLOGY",
      subtitle: "Advanced Technology Concepts",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      students: "1.8k students",
      lessons: "38 lessons", 
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Learning Programs</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${program.color} h-48 flex items-center justify-center text-white text-xl font-bold relative`}>
                <div className="text-center">
                  <div className="text-sm font-normal mb-2">{program.title}</div>
                  <BookOpen className="w-12 h-12 mx-auto" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{program.subtitle}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(Math.floor(program.rating))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{program.rating}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {program.students}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {program.lessons}
                  </span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningPrograms;