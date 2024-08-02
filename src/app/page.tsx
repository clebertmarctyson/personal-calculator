import { Button } from "@/components/ui/button";

import Link from "next/link";

const Home = () => {
  return (
    <section className="flex flex-col gap-5 mx-auto p-8">
      <h1 className="text-2xl font-bold text-center">
        Basic Financial Calculations
      </h1>

      <div className="flex items-center justify-center gap-4">
        <Link href="/growth-rate">
          <Button>Growth Rate Calculator</Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
