import logo from "/images/logo.png";
import htflogo from "/images/hacktheffest.png";
import burgermenu from "/images/burgermenu.svg";

export default function MobileNavbar({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`border-b-2 ${
          !isOpen ? "border-none" : "border-none"
        } w-[90%] h-full relative flex justify-between items-center duration-300 mx-auto`}
      >
        <div className="flex h-[75%] place-content-around">
          <img src={logo} className="h-full w-16"/>

        </div>
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* Menu */}
          <img src={burgermenu} alt="burger" className="item-center justify-center w-8"/>
        </span>
        <div className="flex h-[75%] place-content-around">
          <img src={htflogo} className="h-full w-16 relative" />
        </div>
        {/* bg-[#F8522E] */}
        <div
          className={`w-full absolute bottom-0 translate-y-full backdrop-blur-md bg-[rgba(0,0,0,0.5)] px-4 py-2 rounded-md ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } duration-300`}
        >
          <ul className="flex flex-col gap-2 text-center">
            <li>
              <a href="#about">The Game</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
            <li>
              <a href="#prize">Prize</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            
            <a href="/pdf/CodeOfConductHTF.pdf" download="CodeOfConduct.pdf">
              <li className="nav-links ">Code of contact </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
