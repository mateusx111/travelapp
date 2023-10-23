import React from "react";
import { Button } from "./Button";
import Image from "next/image";

export const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex flex-col items-star flex-1 justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>

          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Apple Store"
              variant="btn_white"
              icon="/apple.svg"
              full
            />
            <Button
              type="button"
              title="Play Store"
              variant="btn_dark_green"
              icon="/android.svg"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};
