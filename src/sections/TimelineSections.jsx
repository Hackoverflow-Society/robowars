export const TimelineSections = ({ Date, Topic, Description, direction }) => {
  return (
    <>
      {" "}
      <div className="order-1 w-5/12"></div>
      <div className={`order-1 w-5/12 px-1 py-4 ${direction}`}>
        <p className="mb-3 text-base text-[#ff431a]">{Date}</p>
        <h4
          className={`mb-3 text-lg font-bold md:text-2xl text-[#ff431a] ${direction}`}
        >
          {Topic}
        </h4>
        <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
          {Description}
        </p>
      </div>
    </>
  );
};
