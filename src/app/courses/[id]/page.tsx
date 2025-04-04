import Link from 'next/link';
import Image from 'next/image';

interface PageProp {
    params: { id: string }
}

const CourseDetails: React.FC<PageProp> = async ({params}) => {
    // In a real application, you would fetch course data based on the ID
    const courseData = {
        id: params.id,
        title: "Backend With Python Django",
        type: "ON CAMPUS & ONLINE",
        price: 420.38,
        instructor: "Pamela Foster",
        duration: "08 hr 15 mins",
        lectures: 29,
        level: "Secondary",
        language: "English",
        certificate: "Yes",
        enrolledStudents: 286,
        rating: 4.9,
        totalRatings: 5764,
        imageUrl: "https://www.ultimatewb.com/blog/wp-content/uploads/html-js-css-website-coding.jpg", // You'll need to add your actual image
        description: "In this course, you'll learn backend web development using Python and Django from scratch. Python is the most used programming language in the world today, for both web development and Artificial Intelligence although Python has several frameworks that is built on it for web development Django which is our choice is one of the most powerful and widely used web frameworks."
    };

    return (
        <div className="min-h-screen bg-[#f5faf7]">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center gap-2 text-sm">
                    <Link href="/" className="text-gray-600 hover:text-green-600">Home</Link>
                    <span>/</span>
                    <span className="text-green-600">Course Details</span>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-16">
                {/* Course Header with Image */}
                <div className="bg-[#00ffa3] rounded-lg p-8 mb-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="inline-block bg-white rounded-full px-4 py-1 text-sm font-medium mb-4">
                                {courseData.type}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                {courseData.title}
                            </h1>
                            <p className="text-gray-700 mb-6">
                                {courseData.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <button className="bg-[#1a2238] text-white px-6 py-3 rounded-md hover:bg-[#2a3248] transition-colors">
                                    Apply Now
                                </button>
                                <button className="bg-white px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                                    <Link href={`/syllabus-${courseData.id}.pdf`} download>
                                        Download Syllabus
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                                src={courseData.imageUrl}
                                alt={courseData.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Course Details Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex gap-4 mb-6">
                                <button className="text-green-600 border-b-2 border-green-600 pb-2">
                                    Description
                                </button>
                                <button className="text-gray-500 hover:text-green-600">
                                    Instructors
                                </button>
                                <button className="text-gray-500 hover:text-green-600">
                                    Reviews
                                </button>
                            </div>
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold mb-4">Description:</h3>
                                <p className="text-gray-600">
                                    {courseData.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Course Info Card */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="text-2xl font-bold text-green-600 mb-6">
                                ${courseData.price}
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-gray-600">Instructor</span>
                                    <span className="font-medium">{courseData.instructor}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-gray-600">Duration</span>
                                    <span className="font-medium">{courseData.duration}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-gray-600">Lectures</span>
                                    <span className="font-medium">{courseData.lectures}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-gray-600">Level</span>
                                    <span className="font-medium">{courseData.level}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-gray-600">Language</span>
                                    <span className="font-medium">{courseData.language}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-gray-600">Certificate</span>
                                    <span className="font-medium">{courseData.certificate}</span>
                                </div>
                            </div>
                            <button className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700 transition-colors">
                                Enroll Now
                            </button>

                            {/* Social Share */}
                            <div className="mt-6">
                                <p className="text-gray-600 mb-3">Share Course:</p>
                                <div className="flex gap-3">
                                    {['facebook', 'linkedin', 'twitter', 'skype', 'instagram'].map((social) => (
                                        <button key={social} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-600 hover:text-green-600">
                                            <span className="sr-only">{social}</span>
                                            {/* You can add social icons here */}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;