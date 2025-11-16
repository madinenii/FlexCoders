import React from 'react';

// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-purple-600">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 flex-grow">{children}</p>
  </div>
);

const roles = [
  { title: 'Data Analyst', description: 'Transform raw data into actionable insights for business growth.' },
  { title: 'Business Intelligence Analyst', description: 'Design dashboards and reports to drive strategic decisions.' },
  { title: 'Data Engineer', description: 'Build and maintain robust data pipelines and architectures.' },
  { title: 'Machine Learning Engineer', description: 'Develop predictive models and deploy AI solutions.' },
  { title: 'AI Specialist', description: 'Innovate with advanced AI and automation for real-world impact.' },
];

const skills = [
  'Python (NumPy, Pandas, Matplotlib, Seaborn)',
  'SQL and database querying',
  'Power BI & visualization tools',
  'Excel Sheets (advanced formulas & pivoting)',
  'Statistics & Probability for business analysis',
  'Basics of Machine Learning (Regression, Classification, Clustering)',
];

const features = [
  { icon: '📊', title: 'Live Industry Data', description: 'Work on real datasets and AI projects that impact businesses.' },
  { icon: '🤝', title: 'Mentorship', description: 'Learn from experts with Fortune 500 experience.' },
  { icon: '🛠️', title: 'Hands-on Tools', description: 'Master automation, dashboards, and the latest analytics tech.' },
  { icon: '🚀', title: 'Career Support', description: 'Resume workshops, mock interviews, and placement guidance.' },
  { icon: '💡', title: 'AI-Driven Solutions', description: 'Contribute to innovative, AI-powered business solutions.' },
];

const growthPath = [
  'Trainee Analyst',
  'Junior Data Analyst',
  'Data Scientist',
  'AI Engineer',
  'Analytics Manager',
  'Head of Data',
];

const CareersDataAnalytics = () => (
  <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* 1. Header and Tagline */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-purple-700">
          📊 Data Analytics & AI Careers at GradSculpt
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          <b>Turn Data into Decisions. Build Intelligence that Matters.</b> Our Data Analysts and AI Engineers bridge the gap between raw data and smart business decisions. You’ll work on projects that reveal insights, automate processes, and shape the way organizations think about information.
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
                <span className="text-purple-600 mr-3 font-extrabold text-xl">»</span>
                <span>
                  <span className="font-semibold">{role.title}</span>
                  <span className="block text-gray-500 text-sm font-normal">{role.description}</span>
                </span>
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
            <span key={step} className="path-step bg-purple-600 text-white p-3 rounded-full shadow-lg m-2">{step}</span>
            {idx < growthPath.length - 1 && <span className="text-3xl text-gray-400">→</span>}
          </>
        ))}
      </div>
      <p className="text-center text-md text-gray-600 mb-16">
        *Each step adds exposure to advanced modeling, data pipelines, and leadership in AI-driven projects.*
      </p>

      {/* 5. Why Join & Eligibility (Combined Block) */}
      <div className="bg-white p-10 rounded-xl shadow-2xl border-b-8 border-purple-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-600">🎯 Why Join Data Analytics @ GradSculpt?</h2>
            <ul className="space-y-3">
              {[
                'Work on real datasets and AI projects',
                'Mentorship from experts with Fortune 500 experience',
                'Hands-on training in analytics and automation tools',
                'Resume workshops, mock interviews, and placement guidance',
                'Opportunity to move into Data Science and AI leadership roles',
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
              <b>Eligibility:</b> Graduates from B.Com, BBA, B.Sc, B.Tech, MBA (Finance) or any analytical background. Freshers interested in data, or professionals shifting from finance/business domains.
            </p>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Ready to transform data into career growth?
            </p>
            <a 
              href="mailto:careers@gradsculpt.com" 
              className="inline-block bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg"
            >
              📬 Apply Now | Mail: careers@gradsculpt.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CareersDataAnalytics;
