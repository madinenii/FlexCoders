import React from 'react';
import NavBar from './navbar';

const SoftwareDevelopment = () => (
    <>
     <NavBar />
  <div className="max-w-5xl mx-auto px-6 py-16 text-gray-900 dark:text-white">
    <h1 className="text-4xl font-bold mb-4 text-blue-700">Software Development</h1>
    <h2 className="text-2xl font-semibold mb-2">Build. Innovate. Transform.</h2>
    <p className="mb-6 text-lg">GradSculpt delivers high-performance software solutions designed to help businesses scale, automate, and thrive in the digital world.</p>
    <div className="mb-8 flex flex-wrap gap-2">
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Custom Software</span>
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Web & Mobile Apps</span>
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">IT Consulting</span>
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">AI Solutions</span>
    </div>
    <ol className="space-y-8">
      <li>
        <h3 className="text-xl font-bold mb-1">1. Custom Software Development</h3>
        <p className="mb-1">Build tailor-made solutions that match your workflows, goals, and growth.<br/>We develop scalable, secure, and high-performance applications that solve real business problems.</p>
        <span className="font-semibold">Includes:</span>
        <ul className="list-disc ml-6">
          <li>Enterprise systems</li>
          <li>Process automation</li>
          <li>Workflow management tools</li>
          <li>API development & integrations</li>
        </ul>
      </li>
      <li>
        <h3 className="text-xl font-bold mb-1">2. Web Application Development</h3>
        <p className="mb-1">Responsive, modern, and fast web applications built with the latest technologies.</p>
        <span className="font-semibold">Capabilities:</span>
        <ul className="list-disc ml-6">
          <li>Full-stack development</li>
          <li>SaaS platforms</li>
          <li>E-commerce solutions</li>
          <li>Admin dashboards & portals</li>
        </ul>
      </li>
      <li>
        <h3 className="text-xl font-bold mb-1">3. Mobile App Development</h3>
        <p className="mb-1">Deliver user-friendly mobile experiences across iOS and Android.</p>
        <span className="font-semibold">Apps we build:</span>
        <ul className="list-disc ml-6">
          <li>Business apps</li>
          <li>Social & lifestyle apps</li>
          <li>Marketplace apps</li>
          <li>Hybrid and native solutions</li>
        </ul>
      </li>
      <li>
        <h3 className="text-xl font-bold mb-1">4. UI/UX Design</h3>
        <p className="mb-1">Design that enhances user engagement and brings your product vision to life.</p>
        <span className="font-semibold">We provide:</span>
        <ul className="list-disc ml-6">
          <li>User research</li>
          <li>Wireframes & prototypes</li>
          <li>Product branding</li>
          <li>Interface design</li>
        </ul>
      </li>
      <li>
        <h3 className="text-xl font-bold mb-1">5. AI & Automation Solutions</h3>
        <p className="mb-1">Transform your operations with intelligent systems.</p>
        <span className="font-semibold">Areas of expertise:</span>
        <ul className="list-disc ml-6">
          <li>Machine learning integration</li>
          <li>Intelligent chatbots</li>
          <li>Predictive analytics</li>
          <li>Business automation</li>
        </ul>
      </li>
      <li>
        <h3 className="text-xl font-bold mb-1">6. IT Consulting & Digital Strategy</h3>
        <p className="mb-1">Get expert guidance to turn your technological challenges into strategic advantages.</p>
        <span className="font-semibold">We help with:</span>
        <ul className="list-disc ml-6">
          <li>Digital transformation</li>
          <li>Tech stack evaluation</li>
          <li>Cloud migration</li>
          <li>Product roadmap planning</li>
        </ul>
      </li>
    </ol>
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-2 text-blue-700">Why Choose GradSculpt?</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>✔ Tailored, business-ready solutions</li>
        <li>✔ Transparent communication</li>
        <li>✔ On-time delivery</li>
        <li>✔ Cutting-edge technologies</li>
        <li>✔ Dedicated support & maintenance</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2 text-blue-700">Our Process</h2>
      <ol className="list-decimal ml-6 mb-6">
        <li>Discovery & Strategy – Understanding your goals and mapping the solution</li>
        <li>UI/UX Design – Creating intuitive and beautiful user experiences</li>
        <li>Development – Clean, scalable, and high-quality code</li>
        <li>Testing & QA – Ensuring everything works perfectly</li>
        <li>Deployment – Smooth launch and integration</li>
        <li>Maintenance & Support – Continuous enhancements and updates</li>
      </ol>
      <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-blue-700">Ready to build something great?</h3>
        <p className="mb-2">Let's bring your vision to life with intelligent, scalable software.</p>
        <p className="font-semibold">👉 Contact us today<br/>
        <a href="mailto:info@gradsculpt.in" className="text-blue-700 underline">info@gradsculpt.in</a></p>
      </div>
    </div>
  </div>
  </>
);

export default SoftwareDevelopment;
