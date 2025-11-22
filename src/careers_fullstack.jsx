import React from 'react';
import NavBar from "./navbar";

// Assuming you have a standard checkmark icon component or SVG utility
// For demonstration, I'll use simple Tailwind/Emoji equivalents.

// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-[#A100FF]">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 flex-grow">{children}</p>
  </div>
);

// --- The Main Innovative Component ---
const CareersFullstack = () => (
  <>
    <NavBar />
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* 1. Header and Tagline */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-[#A100FF]">
            💻 Full Stack Careers at GradSculpt
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            **Build. Innovate. Deploy. Repeat.** Our Full Stack Engineers are **creators — not just coders**. They bring ideas to life, build end-to-end applications, and drive innovation that scales. If you love solving problems across both frontend and backend, this is your domain.
          </p>
        </div>

        {/* 2. Roles and Skills (Two-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Roles Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-700">🚀 Roles You Can Explore</h2>
            <ul className="space-y-3">
              {[
                'Full Stack Developer',
                'Backend Developer (Java Spring Boot)',
                'Frontend Developer (React/Angular)',
                'API Developer',
                'Software Engineer',
              ].map((role, index) => (
                <li key={index} className="flex items-center text-lg text-gray-800">
                  <span className="text-[#A100FF] mr-3 font-extrabold text-xl">»</span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Skills Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-700">🧠 Core Technologies & Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Java, Spring Boot, Hibernate',
                'React.js, Angular (Frontend)',
                'HTML, CSS, JavaScript (ES6+)',
                'RESTful APIs, JSON, Postman',
                'MySQL, MongoDB (Databases)',
                'Git, GitHub, CI/CD basics',
                'Cloud familiarity (AWS, Azure)',
              ].map((skill, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full inline-block transition hover:bg-purple-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. What You'll Do (Feature Cards) */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">🧩 What You’ll Be Building</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard icon="✨" title="End-to-End Development">
            Design and develop responsive, high-performance web applications from concept to deployment.
          </FeatureCard>
          <FeatureCard icon="⚙️" title="API & Service Integration">
            Write clean, reusable code, building and integrating robust **REST APIs** and **microservices**.
          </FeatureCard>
          <FeatureCard icon="🤝" title="Collaborative Delivery">
            Work with design, QA, and product teams. Participate in **code reviews, deployment**, and performance optimization.
          </FeatureCard>
        </div>

        {/* 4. Growth Path (Timeline/Roadmap) */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">📈 Your Growth Path</h2>
        <div className="flex flex-wrap justify-center items-center text-center font-mono text-lg mb-16">
          <span className="path-step bg-[#A100FF] text-white p-3 rounded-full shadow-lg m-2">Trainee</span>
          <span className="text-3xl text-gray-400">→</span>
          <span className="path-step bg-purple-600 text-white p-3 rounded-full shadow-lg m-2">Junior Developer</span>
          <span className="text-3xl text-gray-400">→</span>
          <span className="path-step bg-purple-500 text-white p-3 rounded-full shadow-lg m-2">Full Stack Developer</span>
          <span className="text-3xl text-gray-400">→</span>
          <span className="path-step bg-purple-400 text-white p-3 rounded-full shadow-lg m-2">Senior Developer</span>
          <span className="text-3xl text-gray-400">→</span>
          <span className="path-step bg-purple-300 text-gray-800 p-3 rounded-full shadow-lg m-2">Tech Lead</span>
          <span className="text-3xl text-gray-400">→</span>
          <span className="path-step bg-purple-200 text-gray-800 p-3 rounded-full shadow-lg m-2">Architect</span>
        </div>
        <p className="text-center text-md text-gray-600 mb-16">
          *At each stage, you’ll gain exposure to architecture design, system optimization, and team mentoring.*
        </p>


        {/* 5. Why Join & Eligibility (Combined Block) */}
        <div className="bg-white p-10 rounded-xl shadow-2xl border-b-8 border-indigo-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-600">🎯 Why Join Our Full Stack Team?</h2>
              <ul className="space-y-3">
                {[
                  'Work on live client projects from day one',
                  'Get mentored by senior engineers from top MNCs',
                  'Exposure to modern tools like Docker, Jenkins, and AWS',
                  'Continuous learning through hackathons and internal challenges',
                ].map((reason, index) => (
                  <li key={index} className="flex items-start text-lg text-gray-700">
                    <span className="text-green-500 mr-3 text-2xl">•</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-red-600">💡 Eligibility & Next Steps</h2>
              <p className="text-lg text-gray-700 mb-6 font-medium">
                **Eligibility:** Graduates from B.Tech, BCA, B.Sc (CS/IT) or equivalent. Freshers passionate about coding, or developers with up to 3 years experience.
              </p>
              <p className="text-xl font-semibold mb-4 text-gray-800">
                Ready to build something real?
              </p>
              <a 
                href="mailto:careers@gradsculpt.com" 
                className="inline-block bg-[#A100FF] hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg"
              >
                📬 Apply Now | Mail: careers@gradsculpt.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CareersFullstack;