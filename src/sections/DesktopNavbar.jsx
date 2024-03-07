// import line from "/images/navbar-line.webp";
// import cuLogo from "/images/cuLogo.webp";
import htflogo from "/images/hacktheffest.png";
import logo from "/images/logo.png";

export default function DesktopNavbar() {
  // const section1=useRef();
  // const section2=useRef();
  // const section3=useRef();
  // const section4=useRef();

  // const scrollHandler =(elmRef)=>{
  //     console.log(elmRef.current);
  //     window.scrollTo({top:elmRef.current.scrollTop,behavior:"smooth"});
  // };

  return (
    <>
      <ul className="scroll-smooth tracking-wider font-BebasNeue flex gap-24 justify-between items-center text-lg">
        <li className="nav-links w-2/12">
          <a href="#hero">
            <img className="h-[20vh]" src={logo} alt="logo" />
          </a>
        </li>
        <li className="nav-links whitespace-nowrap">
          <a
            href="#about"
            className="decoration-[#FF431A] hover:underline decoration-2"
          >
            The Game
          </a>
        </li>
        <li className="nav-links ">
          <a
            href="#timeline"
            className="scroll-pt-12 decoration-[#FF431A] hover:underline decoration-2"
          >
            Timeline
          </a>
        </li>
        <li className="nav-links ">
          <a
            href="#Register"
            className="scroll-pt-12 decoration-[#FF431A] hover:underline decoration-2"
          >
            Register
          </a>
        </li>
        <li className="nav-links ">
          <a
            href="#prize"
            className="decoration-[#FF431A] hover:underline decoration-2"
          >
            Prize
          </a>
        </li>
        <li className="nav-links ">
          <a
            href="#faq"
            className="decoration-[#FF431A] hover:underline decoration-2"
          >
            FAQ
          </a>
        </li>
        <a href="/pdf/CodeOfConductHTF.pdf" download="CodeOfConduct.pdf">
          <li className="nav-links ">
            <img src={htflogo} alt="htflogo" className="lg:w-[12vw]" />
          </li>
        </a>
      </ul>
    </>
  );
}
