import { WorkingTimeline } from "./WorkingTimeline";
import { TimelineSections } from "./TimelineSections";
const Timeline = () => {
  return (
    <section>
      <div id="timeline" className="py-8 text-white ">
        <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
          <WorkingTimeline />
          <div className="sticky ml-0 md:ml-12 lg:w-2/3">
            <div className="container w-full h-full mx-auto">
              <div className="relative h-full p-10 overflow-hidden wrap">
                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  style={{
                    right: "50%",
                    border: "2px solid #e73d18",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  style={{
                    left: "50%",
                    border: "2px solid #e73d18",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#ff431a]">
                      1-6 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl text-[#ff431a]">
                      Registration
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-[#ff431a]">
                      6-9 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl text-[#ff431a]">
                      Participation
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#ff431a]">
                      {" "}
                      10 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl text-[#ff431a]">
                      Result Declaration
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the results will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mb-8 right-timeline"></div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="Tech Fest"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
