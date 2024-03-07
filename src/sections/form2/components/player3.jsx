import useFormContext from "../hooks/useFormContext";

const Player3 = () => {
  const { data, handleChange, errors, handleBlur } = useFormContext();

  const content = (
    <div className="flex-col ">
      <div className="split-container">
        <div className="flex-col gap-[4vh] mb-[2vh]">
          <label htmlFor="player3Name" className="lg:pr-[6vw]  text-[#FF692D]">
            Name*
          </label>
          <input
            type="text"
            id="p3_name"
            name="p3_name"
            placeholder="Enter player Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.p3_name}
            className={`bg-transparent translate-y-2 border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.p3_name ? "border-red-500" : "" // Add a red border for error
            }`}
            onChange={handleChange}
          />
          {errors.p3_name && (
            <p className="text-red-500 text-[1.5vh] mt-2">{errors.p3_name}</p>
          )}
        </div>
      </div>

      <div className="mb-[4vh]">
        <label
          htmlFor="player3ContactNo"
          className="pr-[2.4vw]  text-[#FF692D]"
        >
          Contact No *
        </label>
        <input
          type="tel"
          id="p3_contact"
          name="p3_contact"
          className={`bg-transparent mt-[2vh]  border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p3_contact ? "border-red-500" : "" // Add a red border for error
          }`}
          placeholder="Enter a 10-digit contact number"
          value={data.p3_contact}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.p3_contact && (
          <p className="text-red-500 text-[1.5vh] mt-2">{errors.p3_contact}</p>
        )}
      </div>
      <div>
        <label htmlFor=" player3MailId" className="lg:pr-[5vw] text-[#FF692D]">
          Mail ID *
        </label>
        <input
          type="email"
          id="p3_email"
          name="p3_email"
          placeholder="xyz@gmail.com"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p3_email ? "border-red-500" : "" // Add a red border for error
          }`}
          value={data.p3_email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.p3_email && (
          <p className="text-red-500 text-[1.5vh] mt-2">{errors.p3_email}</p>
        )}
      </div>
    </div>
  );

  return content;
};
export default Player3;
