import { PolicyPage, PolicySection } from "@/components/marketing/PolicyPage";

const TermsOfService = () => {
  return (
    <PolicyPage title="Terms of Service">
          <PolicySection title="1. Acceptance of Terms">
            <p>
              By accessing and using Grillhashpowermine ("we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </PolicySection>

          <PolicySection title="2. Use License">
            <p>
              Permission is granted to temporarily access the materials on Grillhashpowermine's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on Grillhashpowermine's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Mining Services">
            <p>
              Grillhashpowermine provides cloud mining services for cryptocurrency. By using our services, you acknowledge that:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Cryptocurrency mining involves risk and may result in losses</li>
              <li>Mining rewards are not guaranteed and depend on network conditions</li>
              <li>We reserve the right to modify mining plans and terms at any time</li>
              <li>All mining activities are subject to applicable laws and regulations</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. User Accounts">
            <p>
              You are responsible for maintaining the confidentiality of your account and password. You agree to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Provide accurate and complete information when creating an account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Payments and Refunds">
            <p>
              All payments for mining services are final. Refunds may be considered on a case-by-case basis at our sole discretion. Deposits and withdrawals are subject to processing fees and may take time to process.
            </p>
          </PolicySection>

          <PolicySection title="6. Limitation of Liability">
            <p>
              In no event shall Grillhashpowermine or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Grillhashpowermine's website.
            </p>
          </PolicySection>

          <PolicySection title="7. Revisions and Errata">
            <p>
              The materials appearing on Grillhashpowermine's website could include technical, typographical, or photographic errors. Grillhashpowermine does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact Information">
            <p>
              If you have any questions about these Terms of Service, please contact us at support@Grillhashpowermine.com
            </p>
          </PolicySection>

          <section className="pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
          </section>
    </PolicyPage>
  );
};

export default TermsOfService;

