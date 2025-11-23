import React from 'react';
import NavBar from './navbar';

const CloudDevOpsServices = () => (
  <>
    <NavBar />
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Cloud & DevOps Services</h1>
      <p className="text-lg mb-6 text-gray-700 font-medium">
        Transform Your IT Infrastructure With Scalable, Secure & Automated Solutions<br/>
        At GradSculpt, we help businesses modernize their applications, automate operations, and scale effortlessly with powerful Cloud & DevOps solutions.<br/>
        Whether you’re migrating to the cloud or optimizing your existing setup, our expert team ensures high performance, reliability, and cost efficiency.
      </p>
      <h2 className="text-2xl font-bold text-purple-700 mb-4 mt-10">⭐ Our Cloud Services</h2>
      <ul className="mb-8 space-y-4">
        <li>
          <span className="text-xl font-semibold">☁️ Cloud Consultation & Strategy</span><br/>
          We evaluate your current infrastructure and design the most suitable cloud strategy tailored to your business goals—ensuring seamless transformation with minimal downtime.
        </li>
        <li>
          <span className="text-xl font-semibold">☁️ Cloud Migration & Modernization</span><br/>
          Move your applications, databases, and workloads from on-premise to cloud platforms like AWS, Azure, or Google Cloud.<br/>
          We ensure a smooth, secure, and cost-effective migration.
        </li>
        <li>
          <span className="text-xl font-semibold">☁️ Cloud Architecture & Deployment</span><br/>
          We build scalable, high-availability cloud architectures that improve performance, reduce costs, and support future growth.
        </li>
        <li>
          <span className="text-xl font-semibold">☁️ Cloud Optimization & Cost Management</span><br/>
          Stop overspending on cloud resources.<br/>
          We optimize workloads, storage, and compute to give you peak performance at the lowest cost.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 mt-10">🔧 Our DevOps Services</h2>
      <ul className="mb-8 space-y-4">
        <li>
          <span className="text-xl font-semibold">⚙️ CI/CD Pipeline Automation</span><br/>
          Accelerate your development cycle with automated build, test, and deployment pipelines using tools like GitHub Actions, Jenkins, GitLab CI, and Azure DevOps.
        </li>
        <li>
          <span className="text-xl font-semibold">⚙️ Infrastructure as Code (IaC)</span><br/>
          We automate and manage your entire infrastructure using Terraform, Ansible, and CloudFormation—ensuring consistency, faster deployments, and zero manual errors.
        </li>
        <li>
          <span className="text-xl font-semibold">⚙️ Containerization & Orchestration</span><br/>
          Deploy applications using Docker & Kubernetes for improved portability, scalability, and reliability.
        </li>
        <li>
          <span className="text-xl font-semibold">⚙️ Monitoring, Logging & Performance Tracking</span><br/>
          Gain real-time visibility into system performance.<br/>
          We implement monitoring tools like Prometheus, Grafana, ELK Stack, and CloudWatch.
        </li>
        <li>
          <span className="text-xl font-semibold">⚙️ Automated Security (DevSecOps)</span><br/>
          We integrate security into every stage of development—automated scans, vulnerability checks, and compliance validation.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-green-700 mb-4 mt-10">🚀 Why Choose GradSculpt for Cloud & DevOps?</h2>
      <ul className="mb-8 space-y-2">
        <li>✔ Expert team with hands-on experience</li>
        <li>✔ Faster deployments, reduced downtime</li>
        <li>✔ Highly scalable cloud architectures</li>
        <li>✔ Strong focus on security & automation</li>
        <li>✔ Proven processes + modern DevOps tools</li>
        <li>✔ End-to-end support from planning to maintenance</li>
      </ul>
      <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-10">🙌 Let’s Build a Future-Ready Infrastructure</h2>
      <p className="mb-4 text-lg text-gray-700">
        Whether you’re a startup or enterprise, GradSculpt helps you innovate faster, reduce costs, and scale securely with world-class Cloud & DevOps solutions.<br/>
        Ready to modernize your IT setup?
      </p>
      <div className="flex flex-col items-start gap-2">
        <span className="font-semibold text-lg">Let’s talk:</span>
        <a href="mailto:info@gradsculpt.in" className="text-blue-600 underline text-lg font-bold">info@gradsculpt.in</a>
      </div>
    </div>
  </>
);

export default CloudDevOpsServices;
