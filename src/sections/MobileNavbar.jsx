// import cuLogo from "/images/cuLogo.webp";
// import htfLogo from "/images/htfLogo.webp";

export default function MobileNavbar({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`border-b-2 ${
          !isOpen ? "border-white" : "border-none"
        } w-[90%] h-full relative flex justify-between items-center duration-300 mx-auto`}
      >
        <div className="flex gap-4 h-[175%] ">
          {/* <img src={cuLogo} className="h-full w-20" /> */}
          {/* <img src={htfLogo} className="h-full relative -top-2" /> */}
        </div>
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Menu
        </span>
        {/* bg-[#F8522E] */}
        <div
          className={`w-full absolute bottom-0 translate-y-full backdrop-blur-md bg-[rgba(0,0,0,0.5)] px-4 py-2 rounded-md ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } duration-300`}
        >
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#competetion">The Game</a>
            </li>
            <li>
              <a href="#workshops">Timeline</a>
            </li>
            <li>
              <a href="#multiverse">Prize</a>
            </li>
            <li>
              <a href="#schedule">FAQ</a>
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
