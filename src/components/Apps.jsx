import { stack } from "@/stacks/stack";

export const Apps = () => {
  return (
    <div className="bg-white md:h-[450px] h-[800px] md:w-full w-full flex flex-col  gap-4 items-center justify-evenly">
      <button className="h-7 w-[75px] bg-gray-200 text-black   rounded-2xl shadow-2xl">
        Skills
      </button>
      <div className="text-2xl text-center text-black">
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div>
        <div className="grid grid-cols-3  w-[334px] md:grid-cols-8 md:w-[1216px] gap-2 place-items-center md:place-content-between text-gray-600">
          {stack.map(({ image, title, width, widthImg }) => (
            <div
              className="flex flex-col  text-center gap-y-2 items-center  "
              style={{ width }}
            >
              <div className="h-16" style={{ width, widthImg }}>
                <img src={image} alt="" />
              </div>
              <div className="text-lg font-normal">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
