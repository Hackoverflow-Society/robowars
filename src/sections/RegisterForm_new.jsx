import { FormProvider } from "../sections/form2/context/FormContext.jsx";
import Form from "../sections/form2/components/form.jsx";
import Lottie from "react-lottie";

import animationData from "../lottie/robowars_registration.json";

export default function RegisterForm() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      id="register"
      className="h-[100vh] w-[100%] box-border p-5 pt-5 md:pb-5 mb-[20vh] lg:mb-0 relative"
    >
      <span className="capitalize text-[#FF692D]">&#47;&#47; game on</span>
      <div className="flex h-full w-full gap-3 lg:gap-0">
        <div className="w-full hidden lg:block h-full">
          <h2 className="uppercase text-5xl font-bold text-white">register</h2>
        </div>
      </div>

      <div className="absolute flex mt-10 flex-col md:flex-row gap-10 lg:flex-row items-center justify-between lg:w-[full] lg:h-[auto] w-[80%] top-[10vh] z-2 h-full  ">
        <Lottie options={defaultOptions} height={300} width={300} />
        <FormProvider>
          <Form />
        </FormProvider>
      </div>
    </section>
  );
}
