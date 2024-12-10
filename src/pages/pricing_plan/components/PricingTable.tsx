import { Button } from "@/components/ui/button"
import { Check, X } from 'lucide-react'

const pricingData = {
  features: [
    "Access to candidate profiles but without a possibility to contact them.",
    "Basic search filters and AI recommendations.",
    "Basic analytical dashboards.",
    "By default, one free credit offered to unlock a selected profile",
    "Possibility to unlock further profiles with 1 credit payment (1 credit=1profile unlocked)",
    "Ideal for discovering the platform, getting overall insights or companies with occasional hiring needs.",
    "Full and unlimited access to our extensive candidate database.",
    "Advanced search filters and AI-powered candidate matching.",
    "Comprehensive workspace analytics, dashboards and reports with essential metrics",
    "Priority customer support with essential metrics",
    "Suitable for medium-sized businesses with regular hiring demands.",
    "Custom reports tailored to your company's recruitment metrics.",
    "Dedicated account manager and 24/7 support.",
    "Perfect for large enterprises with ongoing recruitment efforts.",
  ],
  plans: [
    {
      name: "Free Basic Plan",
      price: "Free",
      description: "Ideal for discovering the platform and getting overall insights",
      features: [true, true, true, true, true, true, false, false, false, false, false, false, false, false],
    },
    {
      name: "Professional Monthly Plan",
      price: "60 EUR/month",
      description: "60 EUR/month",
      features: [false, false, false, false, false, false, true, true, true, true, true, false, false, false],
    },
    {
      name: "Professional Annual Plan",
      price: "Saving plan 600 EUR/an",
      description: "Saving plan 600 EUR/an",
      features: [false, false, false, false, false, false, true, true, true, true, true, true, true, true],
    },
  ],
}

export function PricingTable() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl font-bold text-[#ff4500] mb-8">Our Pricing Plans Include:</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Features column */}
          <div className="space-y-4">
            {pricingData.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-[#2d4356] text-white min-h-[80px] flex items-center text-sm"
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Plan columns */}
          {pricingData.plans.map((plan, planIndex) => (
            <div key={planIndex} className="space-y-4">
              <div className="bg-[#2d4356] p-4 text-white text-center min-h-[120px] flex flex-col justify-center">
                <h3 className="font-bold mb-2">{plan.name}</h3>
                <p className="text-sm">{plan.price}</p>
                {plan.description && <p className="text-xs mt-2 bg-black">{plan.description}</p>}
              </div>
              <div className="text-center mb-4">
                <Button className="bg-[#ff4500] hover:bg-[#ff5722]">Buy Now</Button>
              </div>
              {plan.features.map((hasFeature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="p-4 flex items-center justify-center min-h-[80px]"
                >
                  {hasFeature ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

