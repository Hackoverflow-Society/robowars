import heroshade from "/images/heroshade.png";
import robo from "/images/robo.png";
import NavbarSimple from "./Nav";
import arrow from "/images/arrow.png";

function Hero() {
  return (
    <>
      <div className="min-h-screen text-white  z-5">
        <img className="absolute w-full z-5" src={heroshade} alt="shade" />
        <NavbarSimple />
        <br />
        <br />
        <div className="z-0 flex justify-center">
          <img
            className="bg-repeat-y object-contain lg:block absolute mt-[-8rem] item-center min-h-screen mx-auto"
            src={robo}
            alt="robo"
          />
        </div>
        {/* <img
            className="absolute w-screen m-auto item-center z-2"
            src={shadehero}
            alt="shade"
          /> */}
        <div className="absolute w-full mx-auto tracking-wider text-center font-BebasNeue">
          <p className="text-5xl text-[#FF431A]">BATTLEBOTS</p>
          <h1 className="text-7xl lg:text-8xl tracking-[4px] py-8">
            EXPERIENCE THE FORGE!
          </h1>
          <p className="px-2 pb-20 text-xl font-thin uppercase">
            Lorem ipsum dolor sit amet consectetur. Ornare at elit ut ut arcu
            interdum.{" "}
          </p>
          <button className="bg-[#FF431A] bg-opacity-90 tracking-[1px] text-white text-xl py-4 px-6 rounded focus:outline-none focus:shadow-outline">
            <a href="#">Register Now!</a>
          </button>
          <a href="#">
            <p className="pt-12 font-thin uppercase opacity-50 text-md">
              Scroll Down{" "}
            </p>
            <img
              className="flex items-center justify-center mx-auto"
              src={arrow}
              alt="arrow"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
