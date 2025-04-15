import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-transparent py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">About Me</h2> */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>MCA - Master Of Computer Application:</strong> Kongu Engineering College, Perundurai, Anna University (2023 - 2025)</li>
            <li><strong>BCA - Bachelor of Computer Applications:</strong> Sasuri College Of Art and Science, Tiruppur, Bharathiar University (2019 - 2022)</li>
            <li><strong>CT - Computer Technology:</strong> Kongu Polytechnic College, Perundurai, DOTE (2016 - 2019)</li>
            <li><strong>SSLC:</strong> Sakthi Vigneshwara Kalvi Nilayam Higher Secondary School (2015)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Skillset</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-700">Web Development:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>MERN Stack: MongoDB, Express.js, React.js, Node.js</li>
                <li>Frontend Technologies: HTML5, CSS3, Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Programming Languages:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>JavaScript: DOM Manipulation, Async/Await</li>
                <li>Java: Intermediate (OOP concepts, basic syntax)</li>
                <li>Python: Basics (OOP concepts, basic syntax)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Development Tools:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Code Editor: Visual Studio Code</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Internship Experience</h3>
          <div className="text-gray-600 space-y-2">
            <p><strong>Full Stack Developer Intern</strong><br />
              Veyyil Robotic Private Limited, Remote<br />
              Jan 2025 – Present
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Contributing to a live project called <strong>Emission Tracking</strong>, designed for greenhouse gas management and reporting.</li>
              <li>Developed frontend features using Next.js, React, and Ant Design, including data entry forms, dashboards, and user interactions.</li>
              <li>Built and integrated backend APIs using Python Flask, connected to a PostgreSQL database.</li>
              <li>Implemented features like editable tables, localStorage persistence, template-based data saving, and real-time API integration.</li>
              <li>Collaborated with a team to ensure responsive design, data validation, and smooth user experience.</li>
              <li>Focused on Scoped Emissions Tracking, supporting organizational sustainability goals.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Courses Completed</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Completed Python certification</li>
            <li>Completed React certification in DevTown</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Languages Known</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Tamil</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
