import Image from "next/image";
import FrontendImage from "../images/Frontend-Development-(1).webp";
import BackendImage from "../images/Backend-Development.webp";
import FullstackImage from "../images/full-stack-web-development.jpg";

const ProgramsSection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Find your Perfect program</h2>
        <p className="mb-8">
          Our curriculum uses a project-based learning approach and is perfect
          for both beginners and experienced individuals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Frontend Development Program Card */}
          <div className="border rounded-lg overflow-hidden shadow-md flex flex-col"> {/* Added flex-col */}
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                ON CAMPUS
              </span>
              <Image
                src={FrontendImage}
                alt="Frontend Development"
                className="w-full"
              />
            </div>
            <div className="p-6 flex-grow"> {/* Added flex-grow */}
              <h3 className="text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="mb-4">
                Embark on a creative adventure with our Frontend Development
                course! Where you&apos;ll gain the skills to design and build
                captivating user interfaces, bringing your web design visions to
                life with cutting-edge technologies.
              </p>
              <div className="flex justify-around text-sm text-gray-600">
                <span>
                  <i className="fa fa-calendar mr-1"></i> 26 weeks
                </span>
                <span>
                  <i className="fa fa-clock-o mr-1"></i> Weekdays
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100">
              <div>
                <h3>₦350,000</h3>
              </div>
              {/* Download button */}
              <div>
                <a
                  href="/pdf/docker_cheatsheet.pdf"
                  download={"Frontend-syllabus"}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Download Syllabus
                </a>
              </div>
            </div>
          </div>

          {/* Backend Development Program Card */}
          <div className="border rounded-lg overflow-hidden shadow-md flex flex-col"> {/* Added flex-col */}
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                ON CAMPUS
              </span>
              <Image
                src={BackendImage}
                alt="Backend Development"
                className="w-full"
              />
            </div>
            <div className="p-6 flex-grow"> {/* Added flex-grow */}
              <h3 className="text-xl font-semibold mb-2">
                Backend Development
              </h3>
              <p className="mb-4">
                Unlock the secrets of Backend Development! Join us for a focused
                journey where you&apos;ll learn to architect robust server
                systems, manage complex databases, and craft seamless APIs that
                power modern web applications.
              </p>
              <div className="flex justify-around text-sm text-gray-600">
                <span>
                  <i className="fa fa-calendar mr-1"></i> 26 weeks
                </span>
                <span>
                  <i className="fa fa-clock-o mr-1"></i> Weekdays
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100">
              <div>
                <h3>₦450,000</h3>
              </div>
              {/* Download button */}
              <div>
                <a
                  href="/pdf/docker_cheatsheet.pdf"
                  download={"Backend-syllabus"}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Download Syllabus
                </a>
              </div>
            </div>
          </div>

          {/* Fullstack Development Program Card */}
          <div className="border rounded-lg overflow-hidden shadow-md flex flex-col"> {/* Added flex-col */}
            <div className="relative">
              <span className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                ON CAMPUS
              </span>
              <Image
                src={FullstackImage}
                alt="Fullstack Development"
                className="w-full"
              />
            </div>
            <div className="p-6 flex-grow"> {/* Added flex-grow */}
              <h3 className="text-xl font-semibold mb-2">
                Fullstack Development
              </h3>
              <p className="mb-4">
                Dive into the world of Fullstack Development! Where you&apos;ll
                master the art of building complete web applications, from
                stunning user interfaces to powerful server-side logic, and
                emerge as a versatile web developer.
              </p>
              <div className="flex justify-around text-sm text-gray-600">
                <span>
                  <i className="fa fa-calendar mr-1"></i> 26 weeks
                </span>
                <span>
                  <i className="fa fa-clock-o mr-1"></i> Weekdays
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100">
              <div>
                <h3>₦800,000</h3>
              </div>
              {/* Download button */}
              <div>
                <a
                  href="/pdf/docker_cheatsheet.pdf"
                  download={"Fullstack-syllabus"}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Download Syllabus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;