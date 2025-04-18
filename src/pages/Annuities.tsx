
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Annuities = () => {
  // Add a function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead title="Annuities" description="Secure your financial future with our annuity solutions. Learn how annuities can provide income for life and help meet your retirement goals." canonicalUrl="https://illuminated-links.com/annuities" />
      
      {/* Navbar - moved to top */}
      <NavBarDemo />
      
      {/* Hero Section - with specific height to avoid overlap */}
      <div className="w-full pt-16">
        <ServiceHero title="Annuities" subheading="Secure your peace of mind with income you cannot outlive" height="24rem" />
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 mt-4">
        <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow rounded-xl overflow-visible max-w-2xl mx-auto">
          <CardContent className="p-8 md:p-10">
            <article className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold mb-4">Annuity</h2>
              
              <p className="mb-4">
                An annuity is an agreement where you pay a premium (either a lump sum or multiple payments) to an insurance company, and in return, they promise to make payments to you either now or in the future. The interest your money earns while it's in the annuity grows tax-deferred, meaning you don't pay taxes on it until you start receiving payouts or take withdrawals. These payments can continue for a set period or for the rest of your life, helping ensure you have income even if you live longer than expected.
              </p>
              
              <p className="mb-4">
                When you withdraw or get payments, that money is taxed as ordinary income. If you pull money out before you are 59½, you might face a 10% federal tax penalty on top of the regular income tax. Annuities have fees and charges associated with the contract, and a surrender charge also may apply if the contract owner elects to give up the annuity before certain time-period conditions are satisfied.
              </p>
              
              <p className="mb-2">Here's how the process breaks down:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Accumulation Phase: During this phase, you contribute money to the annuity, and your investment grows tax-deferred, meaning you don't pay taxes on any earnings until you start receiving payments.</li>
                <li className="mb-2">Distribution Phase: This is when the insurance company begins paying you back. You can choose to receive a lump sum or regular payments (e.g., monthly or annually), which are taxed as ordinary income.</li>
              </ul>
              
              <p className="mb-4">
                Annuities are particularly valuable in retirement because they can replace the regular paycheck you no longer receive, offering peace of mind by reducing the risk of outliving your savings. However, they often come with fees, and withdrawing money before age 59½ may incur penalties, so they require careful planning.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Types of Annuities</h2>
              <p className="mb-4">
                There are three primary types of annuities—fixed, variable, and indexed—each with distinct features, risks, and benefits. Here's a detailed look at each:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. Fixed Annuities</h3>
              <p className="mb-2"><strong>How It Works:</strong> A fixed annuity guarantees a specific payment amount that doesn't change, regardless of market performance. The insurance company invests your premium and promises a set return.</p>
              
              <p className="mb-1"><strong>Pros:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Predictable, stable income.</li>
                <li>Low risk, as payments are guaranteed.</li>
              </ul>
              
              <p className="mb-1"><strong>Cons:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Returns are typically lower than other annuity types.</li>
                <li>Inflation may reduce the purchasing power of fixed payments over time.</li>
              </ul>
              
              <p className="mb-4"><strong>Best For:</strong> Conservative retirees who value security and predictable cash flow over higher growth potential.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Variable Annuities</h3>
              <p className="mb-2"><strong>How It Works:</strong> With a variable annuity, your payments depend on the performance of the investments (called sub-accounts, like mutual funds) you select within the annuity. You have control over how aggressively or conservatively your money is invested.</p>
              
              <p className="mb-1"><strong>Pros:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Potential for higher returns if the investments perform well.</li>
                <li>Flexibility to tailor investments to your goals.</li>
              </ul>
              
              <p className="mb-1"><strong>Cons:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Higher risk—payments can decrease if investments underperform, and you could lose money.</li>
                <li>Typically comes with higher fees than fixed annuities.</li>
              </ul>
              
              <p className="mb-4"><strong>Best For:</strong> Retirees comfortable with market fluctuations who seek greater growth potential.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. Indexed Annuities</h3>
              <p className="mb-2"><strong>How It Works:</strong> Indexed annuities offer returns tied to a market index (like the S&P 500), but with protection against market downturns. They provide a guaranteed minimum return plus potential for higher returns based on the index performance.</p>
              
              <p className="mb-1"><strong>Pros:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Combines features of both fixed and variable annuities.</li>
                <li>Protection against market losses while allowing participation in market gains.</li>
              </ul>
              
              <p className="mb-1"><strong>Cons:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Complex fee structures and participation rates may limit upside potential.</li>
                <li>Returns are typically capped and may not fully match market performance.</li>
              </ul>
              
              <p className="mb-4"><strong>Best For:</strong> Individuals who want some market exposure but with downside protection.</p>
              
              <h2 className="text-2xl font-bold mb-4 mt-8">Choosing the Right Annuity</h2>
              <p className="mb-4">
                The best type of annuity for you depends on your financial situation and retirement goals:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><strong>Fixed:</strong> Ideal if you prioritize stability and guaranteed income.</li>
                <li className="mb-2"><strong>Variable:</strong> Suitable if you're willing to take on risk for the chance of higher returns.</li>
                <li className="mb-2"><strong>Indexed:</strong> A good middle-ground option if you want growth potential with a safety net.</li>
              </ul>
              
              <p className="mb-4">
                Annuities can be a powerful tool to secure retirement income, but they're not one-size-fits-all. Fees, tax implications, and your personal risk tolerance should all factor into your decision. Consulting a financial advisor can help you determine if an annuity—and which type—fits your retirement plan.
              </p>
              
              <div className="mt-8 text-center">
                <Link to="/contact" onClick={handleNavigation}>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Schedule a Consultation <MoveRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          </CardContent>
        </Card>
      </div>
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};
export default Annuities;
