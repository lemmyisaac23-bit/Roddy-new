import { PolicyPage, PolicySection } from "@/components/marketing/PolicyPage";

const PrivacyPolicy = () => {
  return (
    <PolicyPage title="Privacy Policy">
      <PolicySection title="1. Introduction">
        <p>
          Grillhashpowermine (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
          cloud mining platform.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We Collect">
        <p className="mb-2">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>Name, email address, and contact information</li>
          <li>Account credentials and authentication information</li>
          <li>Payment information and transaction history</li>
          <li>Mining activity and performance data</li>
          <li>Communication preferences and support tickets</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Monitor and analyze usage patterns</li>
          <li>Detect, prevent, and address technical issues</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Information Sharing and Disclosure">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information only:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and safety</li>
          <li>With service providers who assist in our operations</li>
        </ul>
      </PolicySection>

      <PolicySection title="5. Data Security">
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information.
          However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection title="6. Cookies and Tracking Technologies">
        <p>
          We use cookies and similar tracking technologies to track activity on our platform and hold certain
          information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>
      </PolicySection>

      <PolicySection title="7. Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>Access and receive a copy of your personal data</li>
          <li>Rectify inaccurate personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing</li>
          <li>Data portability</li>
        </ul>
      </PolicySection>

      <PolicySection title="8. Children's Privacy">
        <p>
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
          information from children under 18.
        </p>
      </PolicySection>

      <PolicySection title="9. Changes to This Privacy Policy">
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the &quot;Last updated&quot; date.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact us at support@grillhashpowermine.com
        </p>
      </PolicySection>

      <section className="pt-4 border-t border-slate-200">
        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </PolicyPage>
  );
};

export default PrivacyPolicy;
