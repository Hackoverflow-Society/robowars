import { useState } from "react";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Contacts() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    //Insert your api endpoint here
    try {
      const response = await axios.post("", {
        name: name,
        email: email,
        message: message,
      });
      toast.success("Succesfully sent");
      console.log(response);
    } catch (error) {
      toast.error("Failed to send message");
    }
  };
  return (
    <section
      className="relative flex flex-col py-8 md:justify-center md:items-center md:flex-row font-BebasNeue text-[#FF431A] "
      id="contact"
    >
      <div className="flex flex-col gap-2 pl-5 md:pl-8 w-[100%] md:w-[45%] ">
        <ul className="">
          <li className="flex">
            <div className="flex items-center justify-center w-12 h-12 rounded text-gray-50">
              <svg
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g>{" "}
                  <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"></g>{" "}
                  <g id="Layer_8"></g> <g id="Layer_9"></g>{" "}
                  <g id="Layer_10"></g> <g id="Layer_11"></g>{" "}
                  <g id="Layer_12"></g>{" "}
                  <g id="Layer_13">
                    {" "}
                    <path
                      d="M24,14c-3.86,0-7,3.09-7,6.89c0,2.5101,2.7787,6.0173,4.6625,8.11H15v-6c0-0.5527-0.4473-1-1-1H9v-4.5801 c1.3278-1.3408,6-6.2732,6-9.5298C15,4.09,11.86,1,8,1S1,4.09,1,7.89c0,3.2567,4.6722,8.1891,6,9.5298V23c0,0.5527,0.4473,1,1,1h5 v6c0,0.5527,0.4473,1,1,1h10c0.1298,0,0.2587-0.027,0.3816-0.077c0.0383-0.0158,0.067-0.0452,0.1027-0.0655 c0.074-0.041,0.1506-0.0757,0.2157-0.1376c0.64-0.63,6.3-6.25,6.3-9.83C31,17.09,27.86,14,24,14z"
                      fill="#ff00002197F3"
                    ></path>{" "}
                    <path
                      d="M24,14c-3.86,0-7,3.09-7,6.89c0,3.58,5.66,9.2,6.3,9.83C23.5,30.91,23.75,31,24,31s0.5-0.09,0.7-0.28 c0.64-0.63,6.3-6.25,6.3-9.83C31,17.09,27.86,14,24,14z"
                      fill="#ff0000"
                    ></path>{" "}
                    <path
                      d="M8,1C4.14,1,1,4.09,1,7.89c0,3.58,5.66,9.2,6.3,9.83C7.5,17.91,7.75,18,8,18s0.5-0.09,0.7-0.28 c0.64-0.63,6.3-6.25,6.3-9.83C15,4.09,11.86,1,8,1z"
                      fill="#ff0000"
                    ></path>{" "}
                    <path
                      d="M10,7.89c0,1.11-0.9,2-2,2S6,9,6,7.89c0-1.1,0.9-2,2-2S10,6.79,10,7.89z"
                      fill="#ff00002197F3"
                    ></path>{" "}
                    <path
                      d="M26,20.89c0,1.11-0.9,2-2,2s-2-0.89-2-2c0-1.1,0.9-2,2-2S26,19.79,26,20.89z"
                      fill="#ff00002197F3"
                    ></path>{" "}
                  </g>{" "}
                  <g id="Layer_14"></g> <g id="Layer_15"></g>{" "}
                  <g id="Layer_16"></g> <g id="Layer_17"></g>{" "}
                  <g id="Layer_18"></g> <g id="Layer_19"></g>{" "}
                  <g id="Maps_11_"></g> <g id="Maps_10_"></g>{" "}
                  <g id="Maps_9_"></g> <g id="Maps_8_"></g> <g id="Maps_7_"></g>{" "}
                  <g id="Maps_6_"></g> <g id="Maps_5_"></g> <g id="Maps_4_"></g>{" "}
                  <g id="Maps_3_"></g> <g id="Maps_2_"></g> <g id="Maps_1_"></g>{" "}
                  <g id="Maps"></g>{" "}
                </g>
              </svg>
            </div>
            <div className="mb-4 ml-4">
              <h3 className="mb-2 text-lg font-medium leading-6 ">
                Our Address
              </h3>
              <p className="text-gray-600 dark:text-slate-400">
                Chandigarh, Gharuan
              </p>
              <p className="text-gray-600 dark:text-slate-400">Kharar, CU</p>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center justify-center w-12 h-12 rounded text-gray-50">
              <svg
                viewBox="0 -56 1136 1136"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M354.461538 599.630769l481.87077-350.523077v316.849231s-8.664615 46.08-56.32 46.08c-47.852308 0-396.406154 9.255385-425.55077-12.406154z"
                    fill="#E3D9EA"
                  ></path>
                  <path
                    d="M878.867692 93.932308H303.458462c-26.387692 0-47.852308 24.221538-47.852308 53.956923v729.993846c0 29.538462 21.464615 53.956923 47.852308 53.956923h575.40923c26.387692 0 47.852308-24.221538 47.852308-53.956923V147.889231c0.196923-29.538462-21.464615-53.956923-47.852308-53.956923z m-42.535384 464.147692c0 29.538462-21.464615 53.956923-47.852308 53.956923h-403.692308c-26.387692 0-47.852308-24.221538-47.852307-53.956923v-309.169231c0-29.538462 21.464615-53.956923 47.852307-53.956923h403.495385c26.387692 0 47.852308 24.221538 47.852308 53.956923v309.169231z"
                    fill="#FF0000"
                  ></path>
                  <path
                    d="M879.064615 945.230769H303.458462c-33.870769 0-61.243077-30.129231-61.243077-67.347692V147.889231c0-37.218462 27.569231-67.347692 61.243077-67.347693h575.40923c33.870769 0 61.243077 30.129231 61.243077 67.347693v729.993846c0.196923 37.218462-27.372308 67.347692-61.046154 67.347692zM303.458462 107.52c-18.904615 0-34.461538 18.116923-34.461539 40.369231v729.993846c0 22.252308 15.36 40.369231 34.461539 40.369231h575.40923c18.904615 0 34.461538-18.116923 34.461539-40.369231V147.889231c0-22.252308-15.36-40.369231-34.461539-40.369231H303.458462z m484.824615 517.907692H384.787692c-33.870769 0-61.243077-30.129231-61.243077-67.347692v-309.169231c0-37.218462 27.569231-67.347692 61.243077-67.347692h403.495385c33.870769 0 61.243077 30.129231 61.243077 67.347692v309.169231c0.196923 37.218462-27.372308 67.347692-61.243077 67.347692zM384.787692 208.738462c-18.904615 0-34.461538 18.116923-34.461538 40.36923v309.169231c0 22.252308 15.36 40.369231 34.461538 40.369231h403.495385c18.904615 0 34.461538-18.116923 34.461538-40.369231v-309.169231c0-22.252308-15.36-40.369231-34.461538-40.36923H384.787692z"
                    fill="#493B4E"
                  ></path>
                  <path
                    d="M694.153846 798.326154H490.338462c-7.286154 0-13.390769-5.907692-13.39077-13.390769v-34.067693c0-7.286154 5.907692-13.390769 13.39077-13.390769h203.815384c7.286154 0 13.390769 5.907692 13.390769 13.390769v34.067693c0 7.483077-6.104615 13.390769-13.390769 13.390769z"
                    fill="#493B4E"
                  ></path>
                  <path
                    d="M677.021538 807.384615h-169.550769c-21.661538 0-39.384615-17.723077-39.384615-39.384615s17.723077-39.384615 39.384615-39.384615h169.550769c21.661538 0 39.384615 17.723077 39.384616 39.384615s-17.723077 39.384615-39.384616 39.384615z m-169.550769-60.84923c-11.815385 0-21.464615 9.649231-21.464615 21.464615s9.649231 21.464615 21.464615 21.464615h169.550769c11.815385 0 21.464615-9.649231 21.464616-21.464615s-9.649231-21.464615-21.464616-21.464615h-169.550769z"
                    fill="#493B4E"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="mb-4 ml-4">
              <h3 className="mb-2 text-lg font-medium leading-6 ">Contact</h3>
              <p className="text-gray-600 dark:text-slate-400">
                Mobile: +91 7059583075
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                Mail: mehdiabbas286@gmail.com
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center justify-center w-10 h-10 rounded text-gray-50">
              <svg
                viewBox="0 -43.5 1111 1111"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M378.88 248.685714l129.462857 162.377143 9.508572 11.702857v15.36l1.462857 155.062857v16.091429l-10.24 12.434286-147.748572 182.125714c-2.925714 3.657143-7.314286 16.091429-6.582857 21.211429v2.925714l2.925714 43.885714-87.771428 5.851429-2.925714-43.885715v-2.925714c-1.462857-27.062857 8.777143-61.44 26.331428-82.651428l147.748572-182.125715-9.508572 27.794286-1.462857-155.062857 9.508571 27.062857-148.48-185.782857-24.868571-30.72h112.64v-0.731429zM765.805714 775.314286l-129.462857-162.377143-9.508571-11.702857v-15.36l-1.462857-155.062857v-16.091429l10.24-12.434286 147.748571-182.125714c2.925714-3.657143 7.314286-16.091429 6.582857-21.211429v-2.925714l-2.925714-43.885714 87.771428-5.851429 2.925715 43.885715v2.925714c1.462857 27.062857-8.777143 61.44-26.331429 82.651428l-147.748571 182.125715 9.508571-27.794286 1.462857 155.062857-9.508571-27.062857 148.48 185.782857 24.868571 30.72h-112.64v0.731429z"
                    fill="#ff0000"
                  ></path>
                  <path
                    d="M577.828571 680.228571l80.457143 102.4h-160.914285z"
                    fill="#ff0000FC830A"
                  ></path>
                  <path
                    d="M577.828571 343.771429l80.457143-102.4h-160.914285z"
                    fill="#ff000061B6F2"
                  ></path>
                  <path
                    d="M249.417143 65.828571h738.742857s-5.12 87.771429-109.714286 87.771429h-716.8s7.314286-87.771429 87.771429-87.771429zM249.417143 863.085714h738.742857s-5.12 87.771429-109.714286 87.771429h-716.8s7.314286-87.771429 87.771429-87.771429z"
                    fill="#ff0000"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="mb-4 ml-4">
              <h3 className="mb-2 text-lg font-medium leading-6">
                Working hours
              </h3>
              <p className="text-gray-600 dark:text-slate-400">
                Monday - Friday: 08:00 - 17:00
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                Saturday &amp; Sunday: 08:00 - 12:00
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="md:w-[55%] md:justify-center w-[100%] ">
        <h1 className="pt-4 mb-4 pl-6 md:pl-0 text-2xl text-[#FF431A] lg:pt-0">
          Ask Your Queries
        </h1>
        <form
          id="contactForm"
          className="w-[100%] sm:w-[80%] flex flex-col justify-center items-center "
        >
          <div className="mb-6 w-[90%] sm:w-[100%]">
            <div className="mx-0 mb-1 sm:mb-4">
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="name"
                  className="pb-1 text-xs tracking-wider uppercase"
                ></label>
                <input
                  type="text"
                  id="name"
                  autoComplete="given-name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 pl-2 pr-4 mb-2 rounded-md shadow-md sm:mb-0 bg-slate-700"
                  name="name"
                />
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="email"
                  className="pb-1 text-xs tracking-wider uppercase"
                ></label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  value={email}
                  placeholder="Your email address"
                  className="w-full py-2 pl-2 pr-4 mb-2 rounded-md shadow-md sm:mb-0 bg-slate-700"
                  name="email"
                />
              </div>
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="textarea"
                className="pb-1 text-xs tracking-wider uppercase"
              ></label>
              <textarea
                id="textarea"
                onChange={(e) => setMessage(e.target.value)}
                name="textarea"
                cols="30"
                rows="5"
                value={message}
                placeholder="Write your message..."
                className="w-full py-2 pl-2 pr-4 mb-2 rounded-md shadow-md sm:mb-0 bg-slate-700"
              ></textarea>
            </div>
          </div>
          <div className="">
            <a
              href=""
              onClick={handleClick}
              className="px-5 py-2 md:py-3  mr-auto text-white bg-[#e73d18] rounded shadow hover:bg-[#e73e18b3] text-[1.2rem] hover:text-white hover:shadow-lg hover:border-transparent font-BebasNeue"
            >
              Submit
            </a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contacts;
