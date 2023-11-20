import { FEATURES } from "@/constants";
import Image from "next/image";
import { title } from "process";
import React from "react";

export const Features = () => {
  return (
    <section
      className="flex-col flexCenter overflow-hidden
     bg-feature-bg bg-no-repeat py-24 lg:py-20 bg-center"
    >
      <div className="max-container flex padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64 mt-1 lg:mt-2">Nossos recursos</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeaturesItens
                key={feature.title}
                icon={feature.icon}
                description={feature.description}
                title={feature.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface FeaturesItem {
  title: string;
  description: string;
  icon: string;
}
const FeaturesItens = ({ title, description, icon }: FeaturesItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full bg-green-50 p-4 lg:p-7">
        <Image src={icon} alt="Logo" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};
