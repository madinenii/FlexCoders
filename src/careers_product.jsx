import React from 'react';
import NavBar from './navbar';
    
// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-indigo-500">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 flex-grow">{children}</p>
  </div>
);

const roles = [
  'Associate Product Manager',
  'Product Manager',
  'Business Analyst',
  'Strategy Associate',
  'Product Owner',
];

const skills = [
  'Frameworks: Agile / Scrum, Kanban, Design Thinking',
  'Tools: JIRA, Confluence, Figma, Notion, Excel / Google Sheets',
  'Core Skills: Market Research, Business Analysis, User Research',
  'Communication: Excellent written & verbal skills',
  'Basic understanding of software development lifecycle (SDLC)',
];

const features = [
  { icon: '🧭', title: 'Vision & Roadmap', description: 'Define product goals, roadmap, and success metrics for impactful solutions.' },
  { icon: '🔗', title: 'Cross-Functional Leadership', description: 'Collaborate with design, development, and QA teams to deliver value.' },
  { icon: '📊', title: 'Market & User Research', description: 'Conduct user research, competitor analysis, and market validation.' },
  { icon: '⚡', title: 'Agile Execution', description: 'Prioritize features, manage backlogs, and drive sprints in Agile setups.' },
  { icon: '📈', title: 'Continuous Improvement', description: 'Track KPIs and iterate to improve product performance and user satisfaction.' },
];

const growthPath = [
  'Associate PM',
  'Product Manager',
  'Senior PM',
  'Product Lead',
  'Head of Product',
  'Director of Strategy',
];

const CareersProduct = () => (
  <>
  <NavBar />
  <div className="py-16 bg-indigo-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* 1. Header and Tagline */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-indigo-700">
          🧭 Product Management & Strategy Careers at GradSculpt
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          <b>From Vision to Reality. Lead the Innovation.</b> Our Product Management & Strategy team shapes the “why” and “how” behind every product. They connect ideas, technology, and people — turning concepts into market-ready solutions that make an impact. If you think like an entrepreneur and love solving user problems, this is your domain.
        </p>
      </div>

      {/* 2. Roles and Skills (Two-Column Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Roles Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">🚀 Roles You Can Explore</h2>
          <ul className="space-y-3">
            {roles.map((role, index) => (
              <li key={index} className="flex items-center text-lg text-gray-800">
                <span className="text-indigo-500 mr-3 font-extrabold text-xl">»</span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        {/* Skills Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">🧠 Core Technologies & Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full inline-block transition hover:bg-indigo-200">
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
            <span key={step} className="path-step bg-indigo-600 text-white p-3 rounded-full shadow-lg m-2">{step}</span>
            {idx < growthPath.length - 1 && <span className="text-3xl text-gray-400">→</span>}
          </>
        ))}
      </div>
      <p className="text-center text-md text-gray-600 mb-16">
        *Each stage brings stronger business ownership, people management, and innovation leadership.*
      </p>

      {/* 5. Why Join & Eligibility (Combined Block) */}
      <div className="bg-white p-10 rounded-xl shadow-2xl border-b-8 border-indigo-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-600">🎯 Why Join Product Management @ GradSculpt?</h2>
            <ul className="space-y-3">
              {[
                'Work with cross-functional teams on end-to-end product lifecycle',
                'Learn from senior PMs and industry mentors',
                'Build products that impact real users',
                'Opportunity to shape strategy and influence company direction',
                'Exposure to both B2B and B2C product environments',
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
              <b>Eligibility:</b> Graduates or postgraduates in B.Tech, MBA, or related domains. Analytical thinkers from engineering, business, or finance backgrounds. Freshers with leadership mindset & good communication welcome.
            </p>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              If you dream of leading innovation and building meaningful products...
            </p>
            <a 
              href="mailto:careers@gradsculpt.com" 
              className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg"
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

export default CareersProduct;
