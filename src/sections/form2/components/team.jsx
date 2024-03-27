import useFormContext from "../hooks/useFormContext";
import "./../index.css";

const Team = () => {
  const { data, handleChange, errors, handleBlur } = useFormContext();

  console.log("Data:", data);
  console.log("Errors:", errors);

  const content = (
    <div className="flex-col   text-[#FF692D] ">
      <div className="split-container  text-[#FF692D] flex flex-col gap-2">
        <div className="">
          <label htmlFor="TeamName" className="pr-6 text-[2vh]">
            Team Name*
          </label>
          <input
            type="text"
            id="team_name"
            className={`bg-transparent py-1 px-2 border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.team_name ? "border-red-500" : "" // Add a red border for error
            }`}
            name="team_name"
            placeholder="Enter Team Name"
            value={data.team_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.team_name && (
            <p className="text-red-500 text-[1.5vh] mt-2 ">
              {errors.team_name}
            </p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <label htmlFor="CollegeName" className="pr-4 text-[2vh]">
          College Name
        </label>
        <input
          type="text"
          id="college_name"
          name="college_name"
          className=" bg-transparent py-1 px-2 border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent"
          placeholder="Enter college Name"
          value={data.college_name}
          onChange={handleChange}
        />
      </div>
      <div className="mt-8">
        <label htmlFor="robot_drive" className="pr-4 text-[2vh]">
          Drive Link*
        </label>
        <input
          type="text"
          id="robot_drive"
          name="robot_drive"
          className={`py-1 px-2 bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.robot_drive ? "border-red-500" : "" // Add a red border for error
          }`}
          placeholder="Enter Drive Link"
          value={data.robot_drive}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.robot_drive && (
          <p className="text-red-500 text-[1.5vh] mt-2 ">
            {errors.robot_drive}
          </p>
        )}
      </div>
    </div>
  );

  return content;
};
export default Team;
