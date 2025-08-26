const StatsSection = () => {
  const stats = [
    { number: "200k+", label: "Students completed their exams with our platform" },
    { number: "99%+", label: "Students are very happy using our online exam platform" },
    { number: "50k+", label: "New registrations in the last 6 months" }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;