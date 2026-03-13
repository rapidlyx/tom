import React from "react";
export const Itoim = () => {
  return (
    <div>
      {" "}
      <div className="h-[600px] md:h-[616px]  bg-white flex flex-col items-center justify-evenly">
        <div className="flex flex-col md:flex-row items-center bg-gray-200 text-gray-800 rounded-2xl">
          <div className="h-64 w-[343px] md:h-[480px] md:w-xl bg-gray-50 rounded-2xl flex  justify-center items-center">
            <img
              src="Picture.png"
              alt=""
              className="h-48 w-[259px] md:h-96 md:w-[460px] rounded-2xl"
            />
          </div>
          <div className="h-64 w-[343px] md:w-xl md:h-[480px] bg-white ">
            <div className="md:p-15 md:flex md:flex-col md:h-[500px] p-3 md:justify-evenly">
              <p className="md:text-2xl text-xl font-bold">Mentorhub</p>
              <p className="text-xs md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className=" flex gap-1 flex-wrap">
                <button className="h-6  w-[79px]  bg-gray-200 rounded-2xl ">
                  React
                </button>
                <button className="h-6 w-[85px]  bg-gray-200 rounded-2xl ">
                  Next.js
                </button>
                <button className="h-6  w-28  bg-gray-200 rounded-2xl ">
                  Typescript
                </button>
                <button className="h-6  w-[87px]  bg-gray-200 rounded-2xl ">
                  Nest.js
                </button>
                <button className="h-6  w-[120px]  bg-gray-200 rounded-2xl ">
                  PostreSQL
                </button>
                <button className="h-6  w-[130px]  bg-gray-200 rounded-2xl ">
                  Tailwindcss
                </button>
                <button className="h-6  w-[81px]  bg-gray-200 rounded-2xl ">
                  Figma
                </button>
                <button className="h-6  w-24  bg-gray-200 rounded-2xl ">
                  Cypress
                </button>
                <button className="h-6  w-[110px]  bg-gray-200 rounded-2xl ">
                  Storybook
                </button>
                <button className="h-6  w-[60px]  bg-gray-200 rounded-2xl ">
                  Git
                </button>
              </div>
              <a href="" className="href">
                <img src="share.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itoim;
