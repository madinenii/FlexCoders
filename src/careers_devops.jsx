import React from 'react';
import NavBar from "./navbar";
// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 flex-grow">{children}</p>
  </div>
);

const skills = [
  'Cloud Platforms: AWS, Azure, Google Cloud',
  'DevOps Tools: Jenkins, Git, Docker, Kubernetes, Terraform',
  'Scripting: Bash, Python, YAML',
  'Monitoring: Prometheus, Grafana, CloudWatch',
  'Version Control: GitHub, GitLab',
  'Understanding of Networking, Security & Linux Admin',
];

const roles = [
  'DevOps Engineer',
  'Cloud Engineer (AWS, Azure, GCP)',
  'Build & Release Engineer',
  'Infrastructure Automation Engineer',
];

const features = [
  {
    icon: '⚡',
    title: 'Automated CI/CD',
    description: 'Design and implement robust CI/CD pipelines for rapid, reliable deployments.'
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description: 'Build, monitor, and optimize scalable cloud environments.'
  },
  {
    icon: '🤖',
    title: 'Infrastructure as Code',
    description: 'Automate provisioning and management using tools like Terraform and Ansible.'
  },
  {
    icon: '🔒',
    title: 'Security & Monitoring',
    description: 'Implement best practices for security, monitoring, and cost optimization.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Work closely with developers, QA, and product teams for seamless delivery.'
  },
];

const growthPath = [
  'Intern',
  'DevOps Associate',
  'DevOps Engineer',
  'Cloud Architect',
  'Infrastructure Manager',
  'Head of Cloud Ops',
];

const CareersDevops = () => (
  <><NavBar />
  <div className="py-16 bg-blue-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* 1. Header and Tagline */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-blue-700">
          ☁️ Cloud & DevOps Engineering Careers at GradSculpt
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          <b>Automate. Deploy. Empower.</b> Our Cloud & DevOps engineers bridge the gap between development and deployment. You’ll design and maintain cloud infrastructure, build CI/CD pipelines, and keep systems secure, scalable, and fast.
        </p>
      </div>

      {/* 2. Roles and Skills (Two-Column Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Roles Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">🚀 Roles You Can Explore</h2>
          <ul className="space-y-3">
            {roles.map((role, index) => (
              <li key={index} className="flex items-center text-lg text-gray-800">
                <span className="text-blue-500 mr-3 font-extrabold text-xl">»</span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        {/* Skills Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">🧠 Core Technologies & Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full inline-block transition hover:bg-blue-200">
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
            <span key={step} className="path-step bg-blue-600 text-white p-3 rounded-full shadow-lg m-2">{step}</span>
            {idx < growthPath.length - 1 && <span className="text-3xl text-gray-400">→</span>}
          </>
        ))}
      </div>
      <p className="text-center text-md text-gray-600 mb-16">
        *At each stage, you’ll gain more ownership of architecture, scalability, and team leadership.*
      </p>

      {/* 5. Why Join & Eligibility (Combined Block) */}
      <div className="bg-white p-10 rounded-xl shadow-2xl border-b-8 border-blue-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-600">🎯 Why Join Cloud & DevOps @ GradSculpt?</h2>
            <ul className="space-y-3">
              {[
                'Work on real deployment projects from day one',
                'Learn from engineers experienced with enterprise-grade cloud systems',
                'Get hands-on training in automation and containerization',
                'Access to internal hackathons and certification support',
                'Opportunity to move into Cloud Architecture and SRE roles',
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
              <b>Eligibility:</b> Graduates from B.Tech (CS/IT/ECE) or MCA. Freshers passionate about cloud and automation, or developers willing to shift into DevOps.
            </p>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Ready to build the next generation of reliable, scalable infrastructure?
            </p>
            <a 
              href="mailto:careers@gradsculpt.com" 
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg"
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

export default CareersDevops;
