import useFormContext from "../hooks/useFormContext";

const TeamLeader = () => {
  const { data, handleChange, errors, handleBlur } = useFormContext();

  const content = (
    <div className="flex-col ">
      <div className="split-container">
        <div className="flex-col gap-[4vh] mb-[2vh]">
          <label
            htmlFor="TeamLeaderName"
            className="lg:pr-[6vw]  text-[#FF692D]"
          >
            Name*
          </label>
          <input
            type="text"
            id="leader_name"
            name="leader_name"
            placeholder="Enter Team Leader Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.leader_name}
            className={`bg-transparent translate-y-2 border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.leader_name ? "border-red-500" : "" // Add a red border for error
            }`}
            onChange={handleChange}
          />
          {errors.leader_name && (
            <p className="text-red-500 text-[1.5vh] mt-2">
              {errors.leader_name}
            </p>
          )}
        </div>
      </div>

      <div className="mb-[4vh]">
        <label
          htmlFor="TeamLeaderContactNo"
          className="pr-[2.4vw]  text-[#FF692D]"
        >
          Contact No *
        </label>
        <input
          type="tel"
          id="leader_contact"
          name="leader_contact"
          className={`bg-transparent mt-[2vh]  border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.leader_contact ? "border-red-500" : "" // Add a red border for error
          }`}
          placeholder="Enter a 10-digit contact number"
          value={data.leader_contact}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.leader_contact && (
          <p className="text-red-500 text-[1.5vh] mt-2">
            {errors.leader_contact}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor=" TeamLeaderMailId"
          className="lg:pr-[5vw] text-[#FF692D]"
        >
          Mail ID *
        </label>
        <input
          type="email"
          id="leader_email"
          name="leader_email"
          placeholder="xyz@gmail.com"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.leader_email ? "border-red-500" : "" // Add a red border for error
          }`}
          value={data.leader_email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.leader_email && (
          <p className="text-red-500 text-[1.5vh] mt-2">
            {errors.leader_email}
          </p>
        )}
      </div>
    </div>
  );

  return content;
};
export default TeamLeader;
