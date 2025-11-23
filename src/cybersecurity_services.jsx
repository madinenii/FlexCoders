import React from 'react';
import NavBar from './navbar';

const CybersecurityServices = () => (
  <>
    <NavBar />
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Cybersecurity Services</h1>
      <h2 className="text-2xl font-semibold mb-2">Protect. Prevent. Secure.</h2>
      <p className="mb-6 text-lg">In today’s digital world, cyber threats are smarter, faster, and more destructive than ever. At GradSculpt, we deliver advanced cybersecurity solutions that safeguard your data, systems, and infrastructure while ensuring your business stays compliant, resilient, and always protected.<br/>Whether you're a startup, SME, or enterprise, our experts help you identify vulnerabilities, strengthen defenses, and respond quickly to security risks — before they impact your business.</p>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 text-blue-700">⭐ Our Cybersecurity Services</h3>
        <ol className="list-decimal ml-6 space-y-4">
          <li>
            <span className="font-semibold">Vulnerability Assessment & Penetration Testing (VAPT):</span> Identify weaknesses before cybercriminals do.<br/>
            We test your systems, networks, and applications to uncover vulnerabilities and provide clear remediation steps.
            <ul className="list-disc ml-6">
              <li>Network penetration testing</li>
              <li>Web & mobile app testing</li>
              <li>Cloud environment assessments</li>
              <li>Security reports & recommendations</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Security Monitoring & Threat Detection:</span> Stay protected 24/7 with continuous monitoring of your digital environment.
            <ul className="list-disc ml-6">
              <li>Real-time threat analysis</li>
              <li>Intrusion detection</li>
              <li>Network traffic monitoring</li>
              <li>Incident alerts & response guidance</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Cybersecurity Consulting & Strategy:</span> Build a long-term cybersecurity roadmap aligned with your business goals.
            <ul className="list-disc ml-6">
              <li>Risk assessments</li>
              <li>Security policies & compliance</li>
              <li>Data governance</li>
              <li>Infrastructure security planning</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Cloud Security Services:</span> Ensure your cloud platforms are secure, compliant, and resistant to evolving threats.
            <ul className="list-disc ml-6">
              <li>AWS</li>
              <li>Azure</li>
              <li>Google Cloud</li>
              <li>Private cloud systems</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Data Protection & Encryption:</span> Safeguard sensitive data with enterprise-grade encryption and secure storage.
            <ul className="list-disc ml-6">
              <li>Database encryption</li>
              <li>Secure backups</li>
              <li>Access control management</li>
              <li>Data loss prevention (DLP)</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Incident Response & Recovery:</span> Minimize damage and restore operations quickly after a security breach.
            <ul className="list-disc ml-6">
              <li>Forensic investigation</li>
              <li>Malware removal</li>
              <li>System restoration</li>
              <li>Post-incident reporting & improvement strategy</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Firewall & Network Security:</span> Strengthen your network perimeter and eliminate potential entry points.
            <ul className="list-disc ml-6">
              <li>Firewall configuration</li>
              <li>VPN setup</li>
              <li>Zero-trust network design</li>
              <li>Secure remote access solutions</li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 text-blue-700">🚀 Why Choose GradSculpt for Cybersecurity?</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>✔ Certified cybersecurity professionals</li>
          <li>✔ Advanced tools & proven methodologies</li>
          <li>✔ 24/7 monitoring & fast response</li>
          <li>✔ Tailored security plans for every business size</li>
          <li>✔ Compliance-ready solutions (GDPR, HIPAA, ISO, etc.)</li>
          <li>✔ Strong focus on prevention + recovery</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 text-blue-700">🛠️ Our Approach</h3>
        <ol className="list-decimal ml-6 space-y-2">
          <li><span className="font-semibold">Analyze</span> – We assess your current security posture.</li>
          <li><span className="font-semibold">Identify</span> – We uncover risks, vulnerabilities, and blind spots.</li>
          <li><span className="font-semibold">Protect</span> – We implement strong, layered security measures.</li>
          <li><span className="font-semibold">Monitor</span> – We continually track threats and performance.</li>
          <li><span className="font-semibold">Support</span> – We deliver ongoing updates, patches, and guidance.</li>
        </ol>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 text-blue-700">🌍 Who We Protect</h3>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Startups & SMEs</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Enterprises</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Healthcare organizations</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Financial services</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Retail & e-commerce</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Real estate & logistics</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Education & government sectors</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-blue-700">📩 Secure Your Business with GradSculpt</h3>
        <p className="mb-2">Don’t wait for a cyberattack — prevent one.<br/>Let GradSculpt help you build a resilient digital ecosystem with end-to-end cybersecurity protection.</p>
        <p className="font-semibold">👉 Contact us today to secure your systems and data.<br/>
          <a href="mailto:info@gradsculpt.in" className="text-blue-700 underline">info@gradsculpt.in</a></p>
      </div>
    </div>
  </>
);

export default CybersecurityServices;
