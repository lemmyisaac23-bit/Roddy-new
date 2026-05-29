import { PolicyPage, PolicySection } from "@/components/marketing/PolicyPage";

const CookiePolicy = () => {
  return (
    <PolicyPage title="Cookie Policy">
      <PolicySection title="1. What Are Cookies">
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They
          are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
      </PolicySection>

      <PolicySection title="2. How We Use Cookies">
        <p>Grillhashpowermine uses cookies for the following purposes:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>
            <strong>Essential Cookies:</strong> Required for the website to function properly
          </li>
          <li>
            <strong>Authentication Cookies:</strong> To keep you logged in and maintain your session
          </li>
          <li>
            <strong>Preference Cookies:</strong> To remember your settings and preferences
          </li>
          <li>
            <strong>Analytics Cookies:</strong> To understand how visitors interact with our website
          </li>
          <li>
            <strong>Security Cookies:</strong> To detect and prevent security threats
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Types of Cookies We Use">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Session Cookies</h3>
            <p>
              These are temporary cookies that are deleted when you close your browser. They help maintain your session
              while using our platform.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Persistent Cookies</h3>
            <p>
              These cookies remain on your device for a set period or until you delete them. They remember your
              preferences and settings.
            </p>
          </div>
        </div>
      </PolicySection>

      <PolicySection title="4. Third-Party Cookies">
        <p>
          We may also use third-party cookies from trusted partners for analytics and service improvement. These cookies
          are subject to the respective third-party privacy policies.
        </p>
      </PolicySection>

      <PolicySection title="5. Managing Cookies">
        <p>You can control and manage cookies in various ways:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>Browser settings allow you to refuse or accept cookies</li>
          <li>You can delete cookies that have already been set</li>
          <li>Most browsers provide options to block third-party cookies</li>
        </ul>
        <p className="mt-2">
          <strong>Note:</strong> Disabling cookies may affect the functionality of our website and your ability to use
          certain features.
        </p>
      </PolicySection>

      <PolicySection title="6. Cookie Consent">
        <p>
          By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy. If
          you do not agree to our use of cookies, you should disable them in your browser settings or refrain from using
          our website.
        </p>
      </PolicySection>

      <PolicySection title="7. Updates to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons.
        </p>
      </PolicySection>

      <PolicySection title="8. Contact Us">
        <p>If you have any questions about our use of cookies, please contact us at support@grillhashpowermine.com</p>
      </PolicySection>

      <section className="pt-4 border-t border-slate-200">
        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </PolicyPage>
  );
};

export default CookiePolicy;
