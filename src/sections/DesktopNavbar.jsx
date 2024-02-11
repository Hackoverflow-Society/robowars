// import line from "/images/navbar-line.webp";
// import cuLogo from "/images/cuLogo.webp";
import htflogo from "../../public/images/htflogo.png";
import logo from "../../public/images/logo.png";

export default function DesktopNavbar() {
  return (
    <>
      <ul className="tracking-wider font-BebasNeue flex gap-24 justify-between items-center ">
        <li className="nav-links w-1/12">
          <a href="#competetion">
          <img className="" src={logo} alt="logo"/>
          </a>
        </li>
        <li className="nav-links ">
          <a href="#workshops">The Game</a>
        </li>
        <li className="nav-links ">
          <a href="#multiverse">Timeline</a>
        </li>
        {/* <li className="nav-links ">
          <a href="#schedule">Schedule</a>
        </li> */}
      {/* </ul>
      <ul className="flex gap-8 items-center "> */}
        <li className="nav-links ">
          <a href="#ourTeam">Prize</a>
        </li>
        <li className="nav-links ">
          <a href="#faq">FAQ</a>
        </li>
        <a href="/pdf/CodeOfConductHTF.pdf" download="CodeOfConduct.pdf">
          <li className="nav-links ">
            <img src={htflogo} alt="htflogo"/>
          </li>
        </a>
      </ul>
    </>
  );
}
