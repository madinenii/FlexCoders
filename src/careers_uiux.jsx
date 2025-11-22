import React from 'react';
import NavBar from './navbar';

// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-[#A100FF]">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 flex-grow">{children}</p>
  </div>
);

const skills = [
  'Design Tools: Figma, Adobe XD, Photoshop, Illustrator',
  'Frontend Skills: HTML, CSS, JavaScript, React.js',
  'UX Principles: User Research, Wireframing, Prototyping, Design Thinking',
  'Other Skills: Responsive Design, Accessibility, Interaction Design',
  'Collaboration with developers via Git, Zeplin, Design Handoff Tools',
];

const roles = [
  'UI/UX Designer',
  'Product Designer',
  'Front-End Developer',
  'Interaction Designer',
  'Visual Designer',
];

const features = [
  {
    icon: '🔍',
    title: 'User Research',
    description: 'Understand user needs, create personas, and map journeys for delightful experiences.'
  },
  {
    icon: '🖌️',
    title: 'Design & Prototyping',
    description: 'Craft wireframes, prototypes, and interactive workflows using modern tools.'
  },
  {
    icon: '💻',
    title: 'Front-End Engineering',
    description: 'Build responsive, accessible UIs with HTML, CSS, JavaScript, and React.'
  },
  {
    icon: '🧪',
    title: 'Usability Testing',
    description: 'Test, iterate, and improve designs based on real user feedback.'
  },
  {
    icon: '🎨',
    title: 'Design Systems',
    description: 'Create and maintain scalable design systems and ensure brand consistency.'
  },
];

const growthPath = [
  'Intern Designer',
  'Junior UI/UX Designer',
  'Front-End Developer',
  'Product Designer',
  'UI/UX Lead',
  'Design Manager',
];

const CareersUiux = () => (
  <>
  <NavBar/>
  <div className="py-16 bg-pink-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* 1. Header and Tagline */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-[#A100FF]">
          🎨 UI/UX Design & Front-End Engineering Careers at GradSculpt
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          <b>Design Experiences. Build Connections.</b> At GradSculpt, creativity meets technology. Our UI/UX and Front-End team design digital experiences that not only look stunning but also perform flawlessly. If you love blending design, usability, and code — this is your playground.
        </p>
      </div>

      {/* 2. Roles and Skills (Two-Column Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Roles Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">🚀 Roles You Can Explore</h2>
          <ul className="space-y-3">
            {roles.map((role, index) => (
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
            {skills.map((skill, index) => (
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
        {features.map((feature) => (
          <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
            {feature.description}
          </FeatureCard>
        ))}
      </div>

      {/* 4. Growth Path (Timeline/Roadmap) */}
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">📈 Your Growth Path</h2>
      <div className="flex flex-wrap justify-center items-center text-center font-mono text-lg mb-16">
        {growthPath.map((step, idx) => (
          <>
            <span key={step} className="path-step bg-[#A100FF] text-white p-3 rounded-full shadow-lg m-2">{step}</span>
            {idx < growthPath.length - 1 && <span className="text-3xl text-gray-400">→</span>}
          </>
        ))}
      </div>
      <p className="text-center text-md text-gray-600 mb-16">
        *At each level, you’ll refine your creativity, business understanding, and leadership in design-driven development.*
      </p>

      {/* 5. Why Join & Eligibility (Combined Block) */}
      <div className="bg-white p-10 rounded-xl shadow-2xl border-b-8 border-indigo-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-600">🎯 Why Join UI/UX @ GradSculpt?</h2>
            <ul className="space-y-3">
              {[
                'Work on live projects with real clients and startups',
                'Learn from top UI/UX mentors and creative directors',
                'Collaborate with full stack and product teams',
                'Build an impressive design portfolio',
                'Get support for Dribbble/Behance showcasing and LinkedIn branding',
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
              <b>Eligibility:</b> Graduates from any stream with design or creative interest. Ideal for B.Des, B.Tech, BCA, BSc (CS), or creative minds with passion for UI/UX. Freshers or entry-level designers welcome.
            </p>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Want to design the next big digital experience?
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

export default CareersUiux;
