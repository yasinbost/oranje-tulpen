import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";
export default function WelcomeSection() {
  return (
    <div className="bg-gray-300 py-20 mx-auto text-center flex flex-col items-center ">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {" "}
        Heb je ooit schilderen op water
      </h1>

      <p className="mt-text-lg max-w-prose text-muted-foreground">
        {" "}
        Welcome to Oranje tulpen Art school{" "}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href="/products" className={buttonVariants()}>
          {" "}
          Browse Trending{" "}
        </Link>
        <Button variant="secondary"> Our Quality promise &rarr </Button>
      </div>
    </div>
  );
}
