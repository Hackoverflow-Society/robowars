import useFormContext from "../hooks/useFormContext";

const Player4 = () => {
  const { data, handleChange, errors, handleBlur } = useFormContext();

  const content = (
    <div className="flex-col ">
      <div className="split-container">
        <div className="flex-col gap-[4vh] mb-[2vh]">
          <label htmlFor="player4Name" className="lg:pr-[6vw]  text-[#FF692D]">
            Name*
          </label>
          <input
            type="text"
            id="p4_name"
            name="p4_name"
            placeholder="Enter player Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.p4_name}
            className={`bg-transparent translate-y-2 border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.p4_name ? "border-red-500" : "" // Add a red border for error
            }`}
            onChange={handleChange}
          />
          {errors.p4_name && (
            <p className="text-red-500 text-[1.5vh] mt-2">{errors.p4_name}</p>
          )}
        </div>
      </div>

      <div className="mb-[4vh]">
        <label
          htmlFor="player4ContactNo"
          className="pr-[2.4vw]  text-[#FF692D]"
        >
          Contact No *
        </label>
        <input
          type="tel"
          id="p4_contact"
          name="p4_contact"
          className={`bg-transparent mt-[2vh]  border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p4_contact ? "border-red-500" : "" // Add a red border for error
          }`}
          placeholder="Enter a 10-digit contact number"
          value={data.p4_contact}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.p4_contact && (
          <p className="text-red-500 text-[1.5vh] mt-2">{errors.p4_contact}</p>
        )}
      </div>
      <div>
        <label htmlFor=" player4MailId" className="lg:pr-[5vw] text-[#FF692D]">
          Mail ID *
        </label>
        <input
          type="email"
          id="p4_email"
          name="p4_email"
          placeholder="xyz@gmail.com"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p4_email ? "border-red-500" : "" // Add a red border for error
          }`}
          value={data.p4_email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.p4_email && (
          <p className="text-red-500 text-[1.5vh] mt-2">{errors.p4_email}</p>
        )}
      </div>
    </div>
  );

  return content;
};
export default Player4;
