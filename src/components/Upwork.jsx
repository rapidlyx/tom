import React from "react";
export const Upwork = () => {
  return (
    <div className="bg-sky-300 w-full h-[1308px] flex flex-col justify-evenly items-center">
      <div className="flex flex-col items-center">
        <button className="h-7 w-[115px] bg-pink-300 rounded-2xl shadow-2xl">
          Experience
        </button>
        <div className="text-2xl text-center md:pt-10">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
      </div>
      <div className="bg-white h-[372px] w-[343px] md:h-72 md:w-4xl text-green-500 flex  justify-center rounded-2xl shadow-2xl">
        <div className="p-6 flex flex-col md:flex-row justify-evenly md:gap-20 content-center">
          <img src="upwork.png" alt="" className="h-7 w-[102px]" />

          <div className="text-xs md:text-lg md:h-56 md:w-[384px]">
            <p className="text-xl font-bold md:text-2xl p-2 md:text-center">
              Sr. Frontend Developer
            </p>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, temporibus cum.
            </li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>

          <p className="text-xs">Nov 2021 - Present</p>
        </div>
      </div>
      <div className="bg-white h-[372px] w-[343px] md:h-72 md:w-4xl text-green-500 flex justify-center rounded-2xl shadow-2xl">
        <div className="p-6 flex flex-col md:flex-row justify-evenly md:gap-20 content-center">
          <img src="upwork.png" alt="" className="h-7 w-[102px]" />

          <div className="text-xs md:text-lg md:h-56 md:w-[384px]">
            <p className="text-xl font-bold md:text-2xl p-2 md:text-center">
              Team Lead
            </p>
            <li>Sed quis justo ac magna.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, temporibus cum.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>

          <p className="md:text-xs">Jul 2017 - Oct 2021</p>
        </div>
      </div>
      <div className="bg-white h-[372px] w-[343px] md:h-72 md:w-4xl text-green-500 flex justify-center rounded-2xl shadow-2xl">
        <div className="p-6 flex flex-col md:flex-row justify-evenly gap-20 content-center">
          <img src="upwork.png" alt="" className="h-7 w-[102px]" />

          <div className="text-lg md:text-md md:h-56 md:w-[384px]">
            <p className="text-xl font-bold md:text-2xl p-2 text-center">
              Full Stack Developer
            </p>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          </div>

          <p className="md:text-xs">Dec 2015 - May 2017</p>
        </div>
      </div>
    </div>
  );
};
