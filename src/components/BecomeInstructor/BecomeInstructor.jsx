import icon from "../../assets/images/thunder.png";
import become from "../../assets/images/become.png";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";
const BecomeInstructor = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <img src={become} alt="" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Header Badge */}
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-blue-100 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
                <div>
                  <img src={icon} alt="badge" />
                </div>
                <span>Let’s Join With Us</span>
              </div>
            </div>

            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              Become an Instructor and Join With Us
            </h2>

            <p className="text-gray leading-relaxed">
              This includes offering personalized feedback, fostering a sense of
              community through discussion forums and group projects, and
              providing continuous support to address challenges and improve.
            </p>
            <Link to={"/form"}>
              <div className="mt-8">
                <Button rounded="lg" padding="px-4 py-2">
                Start Teaching Today
              </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;
