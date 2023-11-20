import Image from "next/image";

export const Guide = () => {
  return (
    <section className=" flexCenter flex-col">
      <div
        className="padding-container
      max-container w-full pb-24"
      >
        <Image src="/camp.svg" alt="capm" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          estamos aqui por você!
        </p>
        <div className="flex flex-wrap justify-between gap-3 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guie você para o caminho fácil
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Somente com o aplicativo hilink você não vai mais se perder e ficar
            perdido novamente, porque já oferecemos suporte a mapas offline
            quando não há conexão com a internet no campo. Convide seus amigos,
            parentes e amigos para se divertirem no deserto através do vale e
            alcançar o topo da montanha
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-center 2xl:rounded-5xl"
        />

        <div
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3
          rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          {" "}
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destino</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Iniciar trilha</p>

              <h4 className="bold-20 mt-2">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
