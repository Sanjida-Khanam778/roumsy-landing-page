const BecomeInstructor = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/400/300" 
                alt="Professional woman working on laptop" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            {/* Header Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Let's Join With Us
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Become an Instructor and Join With Us
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              This platform offers personalized feedback, fostering a sense of community 
              through discussion forums and group projects, and providing continuous 
              support to address challenges and improve.
            </p>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Start Teaching Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;