import { getDetailResources } from "@/sanity/actions";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const resources = await getDetailResources({
    id,
  });

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="w-full">
        <div className="w-full flex lg:justify-between items-center max-[900px]:flex-col gap-14">
          <div className="w-full flex-row">
            <h1 className="font-bold sm:heading1 text-gradient_blue-purple max-md:text-center">
              {resources[0].title}
            </h1>
            <div className="max-lg:hidden">
              <h2 className="mb-2 text-lg font-semibold text-white-500 mt-4 dark:text-white">
                Application Details :
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Application made using Nextjs 13</li>
                <li>Authentication with Clerk</li>
                <li>Using Shadcn for UI</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              className="h-full rounded-md object-cover"
              src={resources[0].image}
              width={600}
              height={600}
              alt={resources[0].title}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
