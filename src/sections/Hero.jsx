import heroshade from "/images/heroshade.png";
import robo from "/images/robo.png";
import NavbarSimple from "./Nav";
import arrow from "/images/arrow.png";

function Hero() {
  return (
    <>
      <div className=" min-h-screen text-white z-5">
        <img className="z-5 absolute min-h-screen w-full min" src={heroshade} alt="shade" />
        <NavbarSimple />
        <br />
        <br />
        <div className="z-0 flex item-center justify-center">
          <img
            className="object-contain hidden lg:block absolute mt-[-8rem] item-center min-h-screen mx-auto"
            src={robo}
            alt="robo"
          />
        </div>
        {/* <img
            className="absolute item-center w-screen z-2 m-auto"
            src={shadehero}
            alt="shade"
          /> */}
        <div className="w-full lg:pt-0 md:pt-60 justify-center tracking-wider font-BebasNeue absolute text-center mx-auto">
          <p className="text-6xl text-[#FF431A]">BATTLEBOTS</p>
          <h1 className="text-7xl md:text-8xl tracking-[4px] py-8">
            EXPERIENCE THE FORGE!
          </h1>
          <p className="text-2xl font-thin uppercase pb-20 px-2">
            Lorem ipsum dolor sit amet consectetur. Ornare at elit ut ut arcu
            interdum.{" "}
          </p>
          <button className="bg-[#FF431A] bg-opacity-90 tracking-[1px] text-white text-xl py-4 px-6 rounded focus:outline-none focus:shadow-outline">
            <a href="#">Register Now!</a>
          </button>
          <a href="#">
            <p className="text-md opacity-50 font-thin uppercase pt-12">
              Scroll Down{" "}
            </p>
            <img
              className="flex justify-center items-center mx-auto"
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
