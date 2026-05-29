import { PublicPageLayout } from "@/components/marketing/PublicPageLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Team = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate("/dashboard");
    return null;
  }

  return (
    <PublicPageLayout
      title="Our Team"
      subtitle="Meet the dedicated professionals behind Grillhashpowermine"
    >
      <p className="text-slate-700 leading-relaxed text-center max-w-2xl mx-auto">
        Our team works tirelessly to provide you with the best cloud mining experience — from infrastructure engineers
        and operations specialists to customer support professionals available around the clock.
      </p>
      <p className="text-slate-500 text-center mt-8">
        Sign in to your account to view detailed team information in your dashboard.
      </p>
    </PublicPageLayout>
  );
};

export default Team;
