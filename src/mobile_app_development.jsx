import React from 'react';
import NavBar from './navbar';

const MobileAppDevelopment = () => (
    <>
    <NavBar />
  <div className="max-w-5xl mx-auto px-6 py-16 text-gray-900 dark:text-white">
    <h1 className="text-4xl font-bold mb-4 text-blue-700">Mobile App Development</h1>
    <h2 className="text-2xl font-semibold mb-2">Build Mobile Experiences That Inspire and Perform</h2>
    <p className="mb-6 text-lg">At GradSculpt, we create powerful, user-friendly, and scalable mobile applications that help businesses connect with customers, streamline operations, and unlock new digital opportunities. Whether you're launching a new product or modernizing an existing platform, our mobile solutions are designed to deliver performance, innovation, and long-term value.</p>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">⭐ What We Do</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><span className="font-semibold">Custom Mobile App Development:</span> We build mobile apps tailored to your business needs, ensuring every feature aligns with your goals and user expectations.</li>
        <li><span className="font-semibold">iOS & Android Development:</span> Native or hybrid—your choice. We create apps that run smoothly on both platforms using modern frameworks and best practices.</li>
        <li><span className="font-semibold">Cross-Platform App Development:</span> With frameworks like Flutter and React Native, we deliver high-quality apps that work flawlessly across multiple devices, reducing cost and time-to-market.</li>
        <li><span className="font-semibold">UI/UX for Mobile:</span> Beautiful, intuitive, and conversion-focused app designs that elevate user engagement and retention.</li>
        <li><span className="font-semibold">API & System Integration:</span> We integrate your app with secure APIs, payment gateways, CRM systems, AI tools, and any third-party services you need.</li>
        <li><span className="font-semibold">Maintenance & Support:</span> Our job doesn’t end at launch. We ensure your app stays updated, secure, and optimized for evolving technologies.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🚀 Why Choose GradSculpt?</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>✔ End-to-end development — from idea to app store</li>
        <li>✔ Scalable architecture that grows with your business</li>
        <li>✔ Fast development cycles with agile methodology</li>
        <li>✔ Experienced engineers & designers</li>
        <li>✔ Secure, stable & high-performance apps</li>
        <li>✔ Transparent communication and regular updates</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🔧 Technologies We Use</h3>
      <ul className="flex flex-wrap gap-3">
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Flutter</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React Native</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Swift & SwiftUI</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Kotlin</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js / Python for backends</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Firebase & AWS cloud services</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🛠️ Our Mobile App Development Process</h3>
      <ol className="list-decimal ml-6 space-y-2">
        <li><span className="font-semibold">Discovery & Strategy:</span> We analyze your goals, audience, and technical needs to draft a clear roadmap.</li>
        <li><span className="font-semibold">UI/UX Design:</span> Wireframes, prototypes, and visual designs based on user behavior and brand identity.</li>
        <li><span className="font-semibold">Development:</span> Clean code, scalable architecture, and reliable performance across all devices.</li>
        <li><span className="font-semibold">Testing & QA:</span> Comprehensive testing to ensure speed, consistency, and error-free experiences.</li>
        <li><span className="font-semibold">Deployment:</span> We publish your app on the App Store and Google Play with optimized store listings.</li>
        <li><span className="font-semibold">Ongoing Support:</span> Updates, bug fixes, new features, and continuous improvements.</li>
      </ol>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🌟 Industries We Serve</h3>
      <ul className="flex flex-wrap gap-3">
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Education</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Healthcare</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">E-commerce</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Real Estate</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Finance & FinTech</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Logistics</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Hospitality</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Startups & On-demand Services</li>
      </ul>
    </div>
    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2 text-blue-700">📩 Let’s Build the Next Big App</h3>
      <p className="mb-2">Have an idea? We’ll bring it to life.<br/>Need improvements? We’ll transform your existing mobile experience.<br/>Grow faster with GradSculpt — your trusted mobile app development partner.</p>
      <p className="font-semibold">👉 Contact us to get started.<br/>
        <a href="mailto:info@gradsculpt.in" className="text-blue-700 underline">info@gradsculpt.in</a></p>
    </div>
  </div>
  </>
);

export default MobileAppDevelopment;
