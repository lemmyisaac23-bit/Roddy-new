import { PublicPageLayout } from "@/components/marketing/PublicPageLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AboutUs = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate("/dashboard");
    return null;
  }

  return (
    <PublicPageLayout title="About Us" subtitle="Learn more about Grillhashpowermine">
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p>
          Grillhashpowermine is one of the leading cryptocurrency mining platforms, offering cryptocurrency mining
          capacities in every range — for newcomers and experienced miners alike. Our mission is to make acquiring
          cryptocurrencies easy and fast for everyone.
        </p>
        <p>
          We provide the full spectrum of hosted cryptocurrency mining services without the complexities of managing
          mining hardware or software. Our turn-key solutions include software, firmware, mining pool management, and
          farm operations across the United Kingdom and worldwide.
        </p>
        <p>
          From ASIC miners to mobile industrial mining containers and power transformers, Grillhashpowermine delivers
          professional infrastructure with 24/7 support and transparent operations.
        </p>
      </div>
    </PublicPageLayout>
  );
};

export default AboutUs;
