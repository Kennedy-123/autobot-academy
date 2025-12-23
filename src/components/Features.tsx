import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '👨‍🏫',
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience."
    },
    {
      icon: '💻',
      title: "Hands-on Projects",
      description: "Build practical skills through real-world projects."
    },
    {
      icon: '👥',
      title: "Community Support",
      description: "Join a vibrant community of learners and mentors."
    },
    {
      icon: '📜',
      title: "Certification",
      description: "Earn recognized certificates upon completion."
    },
    {
      icon: '⏱️',
      title: "Flexible Learning",
      description: "Learn at your own pace with our flexible scheduling."
    },
    {
      icon: '💼',
      title: "Career Services",
      description: "Get career guidance and job placement assistance."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Autobot Academy?
          </h2>
          <p className="text-gray-600">
            We provide industry-leading education with a focus on practical skills and real-world applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl mb-4" role="img" aria-label={feature.title}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;