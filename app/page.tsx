import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import WelcomeSection from "@/components/WelcomeSection";

const perks = [
  {
    name: "Instant Delivery",
    description:
      "Get your assets delivered to your email in  seconds and download them right away",

    icon: ArrowDownToLine,
  },
  {
    name: "Guaranteed Quality",
    description:
      "Every  assets on our platform is verified by our team to ensure our highest quality standards.",

    icon: CheckCircle,
  },
  {
    name: "For the Planet",
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    icon: Leaf,
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <WelcomeSection />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-slate-300">
                    {" "}
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>{" "}
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-8 lg:ml-0">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
