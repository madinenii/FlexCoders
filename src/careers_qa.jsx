import React from 'react';

// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-yellow-500">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 flex-grow">{children}</p>
  </div>
);

const roles = [
  'Quality Assurance Engineer',
  'Software Test Engineer',
  'Automation Test Engineer',
  'QA Analyst',
  'Test Lead',
];

const skills = [
  'Manual Testing: Test planning, bug reporting, SDLC/STLC',
  'Automation Tools: Selenium WebDriver, TestNG, Cypress, Playwright',
  'APIs & Performance: Postman, JMeter, REST API testing',
  'Languages: Java, Python (basic scripting)',
  'Version Control: Git, GitHub',
  'Familiarity with CI/CD pipelines and Agile process',
];

const features = [
  { icon: '🧪', title: 'Manual & Automated Testing', description: 'Design and execute test cases, both manual and automated, to ensure product quality.' },
  { icon: '⚡', title: 'Automation Frameworks', description: 'Build and maintain robust automation scripts using Selenium, Cypress, and more.' },
  { icon: '🔍', title: 'Defect Tracking', description: 'Log, track, and verify defects in issue-tracking systems for continuous improvement.' },
  { icon: '🤝', title: 'Collaboration', description: 'Work closely with developers and product teams throughout the SDLC.' },
  { icon: '🚦', title: 'Release Quality', description: 'Ensure every release meets the highest quality benchmarks and user expectations.' },
];

const growthPath = [
  'Intern QA',
  'Test Engineer',
  'Automation Engineer',
  'QA Lead',
  'Test Manager',
  'Head of Quality',
];

const CareersQa = () => (
  <div className="py-16 bg-yellow-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* 1. Header and Tagline */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-yellow-600">
          🧪 Software Testing & QA Automation Careers at GradSculpt
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          <b>Because Quality Builds Trust.</b> At GradSculpt, we believe innovation means nothing without reliability. Our QA & Testing team ensures that every line of code we deploy is solid, secure, and user-ready. If you love finding bugs before users do, welcome aboard.
        </p>
      </div>

      {/* 2. Roles and Skills (Two-Column Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Roles Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">🚀 Roles You Can Explore</h2>
          <ul className="space-y-3">
            {roles.map((role, index) => (
              <li key={index} className="flex items-center text-lg text-gray-800">
                <span className="text-yellow-500 mr-3 font-extrabold text-xl">»</span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        {/* Skills Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">🧠 Core Technologies & Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full inline-block transition hover:bg-yellow-200">
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
            <span key={step} className="path-step bg-yellow-500 text-white p-3 rounded-full shadow-lg m-2">{step}</span>
            {idx < growthPath.length - 1 && <span className="text-3xl text-gray-400">→</span>}
          </>
        ))}
      </div>
      <p className="text-center text-md text-gray-600 mb-16">
        *Each level adds more ownership over test strategy, team management, and release quality.*
      </p>

      {/* 5. Why Join & Eligibility (Combined Block) */}
      <div className="bg-white p-10 rounded-xl shadow-2xl border-b-8 border-yellow-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-600">🎯 Why Join QA @ GradSculpt?</h2>
            <ul className="space-y-3">
              {[
                'Work on real client applications from day one',
                'Exposure to both manual & automation frameworks',
                'Learn directly from senior QA professionals',
                'Get certification support and project-based learning',
                'Build confidence through continuous integration and testing practices',
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
              <b>Eligibility:</b> Graduates from B.Tech (CS/IT/ECE), BCA, or MCA. Freshers interested in testing or developers transitioning into QA roles.
            </p>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Every great product needs a guardian of quality — that could be you.
            </p>
            <a 
              href="mailto:careers@gradsculpt.com" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg"
            >
              📬 Apply Now | Mail: careers@gradsculpt.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CareersQa;
