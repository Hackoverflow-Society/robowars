import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  // submit form funtion
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setIsSubmitting(true);

    // try {
    //   // Assuming 'https://robowarsregistration.vercel.app/submit' is your endpoint
    //   const response = await axios.post(
    //     "https://robowarsregistration.vercel.app/submit",
    //     data
    //   );

    //   if (response.status === 200) {
    //     console.log(response.data);
    //     toast.success("Form submitted successfully!");
    //   } else {
    //     toast.error("Error submitting the form. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting the form:", error);
    //   toast.error("Error submitting the form. Please try again.");
    // } finally {
    //   setIsSubmitting(false); // Set isSubmitting state to false after the response is received
    // }
    e.preventDefault();
    setIsSubmitting(true); // Set isSubmitting state to true when the form is submitting

    let response;

    try {
      response = await axios.post(
        "https://robowarsregistration.vercel.app/submit",
        data
      );

      if (response && response.status === 200) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false); // Set isSubmitting state to false after the response is received
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

          {isSubmitting ? (
            <div className="spinner"></div>
          ) : (
            <button type="submit" className={`button w-[90px] ${submitHide}`}>
              Submit
            </button>
          )}
        </div>
      </header>
    </form>
  );

  return content;
};
export default Form;
