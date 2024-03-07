import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    disablePrev,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  // submit form funtion
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming 'https://robowarsregistration.vercel.app/submit' is your endpoint
      const response = await axios.post(
        "https://robowarsregistration.vercel.app/submit",
        data
      );

      if (response.status === 200) {
        console.log(response.data);
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Error submitting the form. Please try again.");
    }
  };
  const content = (
    <form className="form flex-col " onSubmit={handleSubmit}>
      <header>
        <h2 className="text-white text-[3vh] mb-[15px]">{title[page]}</h2>
        <FormInputs />

        <div className="button-container mt-10 text-white">
          <button
            type="button"
            className={`button w-[90px] ${prevHide}`}
            onClick={handlePrev}
            disabled={disablePrev}
          >
            Prev
          </button>

          <button
            type="button"
            className={`button w-[90px] ${nextHide}`}
            onClick={handleNext}
            // disabled={disableNext}
          >
            Next
          </button>

          <button
            type="submit"
            className={`button w-[90px] ${submitHide}`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </header>
    </form>
  );

  return content;
};
export default Form;
