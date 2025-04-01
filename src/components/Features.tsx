import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Autobot Academy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p>Learn from industry professionals with real-world experience.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Hands-on Projects</h3>
            <p>Build practical skills through real-world projects.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>Join a vibrant community of learners and mentors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;