import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FaClock,
  FaUserGraduate,
  FaCertificate,
  FaStar,
  FaUserTie,
  FaCalendarAlt,
  FaGlobe,
} from "react-icons/fa";
import courses from "@/data/courses";

interface PageProps {
    params: Promise<{ id: string }>;
}

const CourseDetails = async ({ params }: PageProps) => {
    const courseId = decodeURIComponent((await params).id).toLowerCase();
  // Find the course with the matching ID
  const course = courses.find((c) => c.name.toLowerCase() === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pb-16">
        {/* Course Header with Image */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {course.availability}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {course.name}
              </h1>
              <p className="text-gray-600 text-lg mb-6">{course.desc}</p>
              <div className="rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src={course.img}
                  alt={course.name}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {course.courseDetails.rating} ({course.courseDetails.totalRatings}{" "}
                    reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  <FaUserGraduate className="w-5 h-5 mr-1" />
                  {course.courseDetails.enrolledStudents} students enrolled
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Apply Now
                </button>
                <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:cursor-pointer px-6 py-3 rounded-lg font-medium transition-colors">
                  Download Syllabus
                </button>
              </div>
            </div>
            <div className="md:w-1/3 bg-gray-50 p-8 border-l border-gray-200">
              <div className="sticky top-24 space-y-6">
                {/* Course Fee */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Course Fee
                  </h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-6">
                    {course.price}
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="w-5 h-5 mr-2 text-emerald-500" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="w-5 h-5 mr-2 text-emerald-500" />
                      <span>Start Date: {course.courseDetails.startDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaUserTie className="w-5 h-5 mr-2 text-emerald-500" />
                      <span>Instructor: {course.courseDetails.instructor}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaGlobe className="w-5 h-5 mr-2 text-emerald-500" />
                      <span>Language: {course.courseDetails.language}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCertificate className="w-5 h-5 mr-2 text-emerald-500" />
                      <span>Certificate: {course.courseDetails.certificate}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/enroll?course=${encodeURIComponent(course.name)}&price=${encodeURIComponent(course.price)}`}
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Course Description */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Course
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">{course.desc}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What You&apos;ll Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {course.courseDetails.whatYoullLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Requirements */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Requirements
              </h3>
              <ul className="space-y-2">
                {course.courseDetails.requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

// Generate static paths for all courses
export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}
