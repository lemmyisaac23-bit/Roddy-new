import { PublicPageLayout } from "./PublicPageLayout";

type PolicyPageProps = {
  title: string;
  children: React.ReactNode;
};

export function PolicyPage({ title, children }: PolicyPageProps) {
  return (
    <PublicPageLayout title={title}>
      <div className="space-y-6 text-slate-700 policy-content">{children}</div>
    </PublicPageLayout>
  );
}

export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-slate-900 font-serif">{title}</h2>
      {children}
    </section>
  );
}
