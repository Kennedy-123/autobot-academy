import Image from "next/image"
import Link from "next/link"

const courses = [
    {
        name: "Backend With Python Django",
        img: "https://www.ultimatewb.com/blog/wp-content/uploads/html-js-css-website-coding.jpg",
        duration: "6 months",
        desc: "Build and deploy robust web applications and apps using Django. Using Django's security implications to create safe web applications with it.",
        availability: "ON CAMPUS & ONLINE"
    }
]

export default function Courses() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Our Courses</h1>
                <div className="flex items-center mb-6">
                    <label className="mr-3 font-medium">Course Tracks:</label>
                    <select className="border rounded-md px-4 py-2 w-64">
                        <option value="all">All</option>
                        <option value="programming">Programming</option>
                        <option value="design">Design</option>
                        <option value="data">Data Science</option>
                    </select>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <div key={course.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <Image 
                                src={course.img} 
                                alt="Backend Development" 
                                width={500}
                                height={500}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                                {course.availability}
                            </span>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-3">
                                <Link href={`/courses/${course.name}`}>
                                    {course.name}
                                
                                </Link>
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {course.desc}
                            </p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span className="flex items-center mr-4">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                                    </svg>
                                    {course.duration}
                                </span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                                    </svg>
                                    Twice a week
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}