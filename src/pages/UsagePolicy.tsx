import { PolicyPage, PolicySection } from "@/components/marketing/PolicyPage";

const UsagePolicy = () => {
  return (
    <PolicyPage title="Usage Policy">
      <PolicySection title="1. Acceptable Use">
        <p>
          Grillhashpowermine provides cloud mining services for legitimate cryptocurrency mining purposes. Users are
          expected to use our platform in a responsible and lawful manner.
        </p>
      </PolicySection>

      <PolicySection title="2. Prohibited Activities">
        <p>The following activities are strictly prohibited:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>Using the service for any illegal activities</li>
          <li>Attempting to hack, breach, or compromise system security</li>
          <li>Creating multiple accounts to circumvent limits or restrictions</li>
          <li>Using automated scripts or bots without authorization</li>
          <li>Interfering with or disrupting the service or servers</li>
          <li>Impersonating any person or entity</li>
          <li>Violating any applicable laws or regulations</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Account Responsibilities">
        <p>Users are responsible for:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
          <li>Maintaining the security of their account credentials</li>
          <li>All activities that occur under their account</li>
          <li>Ensuring their account information is accurate and up-to-date</li>
          <li>Notifying us immediately of any unauthorized access</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Service Limitations">
        <p>
          We reserve the right to limit, suspend, or terminate accounts that violate this policy. We may also implement
          usage limits to ensure fair access to our services for all users.
        </p>
      </PolicySection>

      <PolicySection title="5. Intellectual Property">
        <p>
          All content, features, and functionality of the Grillhashpowermine platform are owned by us and are protected by
          international copyright, trademark, and other intellectual property laws.
        </p>
      </PolicySection>

      <PolicySection title="6. Modifications to Service">
        <p>
          We reserve the right to modify, suspend, or discontinue any part of our service at any time, with or without
          notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation.
        </p>
      </PolicySection>

      <PolicySection title="7. Contact Information">
        <p>For questions about this Usage Policy, please contact us at support@grillhashpowermine.com</p>
      </PolicySection>

      <section className="pt-4 border-t border-slate-200">
        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </PolicyPage>
  );
};

export default UsagePolicy;
