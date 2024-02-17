import Footimg from "/images/image 4.png";
import SocIcons from "./SocIcons";
import FootLinks from "./FootLinks";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around py-6 text-white border-t-2 border-red-600 font-BebasNeue">
      <div className="flex flex-col gap-3">
        <div>
          <img src={Footimg} alt="footerImage" />
          <h1 className="text-red-600 text-center mt-[-14px]">BATTLEBOTS</h1>
        </div>
        <div>
          <SocIcons />
        </div>
      </div>

      <div className="flex flex-col w-1/2 pl-4 sm:flex-row sm:pl-0">
        <div className="flex justify-center order-2 w-full md:block sm:order-1">
          <FootLinks />
        </div>
        <div className="flex justify-center order-1 w-full md:block sm:order-2">
          <FootLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
