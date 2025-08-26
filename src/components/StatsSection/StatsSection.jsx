import ai1 from "../../assets/images/ai1.png";
import ai2 from "../../assets/images/ai2.png";
import ai3 from "../../assets/images/ai3.png";
const StatsSection = () => {
  const stats = [
    {
      number: ai1,
      label: "Learn smarter with AI-powered coaching",
    },
    {
      number: ai2,
      label: "Build real skills through quizzes and smart feedback",
    },
    { number: ai3, label: "Your personal AI tutor for exam success" },
  ];

  return (
    <section className="py-16 bg-[#0074C4]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={stat.number}
                alt={stat.label}
                className="mx-auto mb-4"
              />
              <p className="text-white font-bold text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
