import React from "react";
export const About = () => {
  return (
    <div className="h-[1434px] md:h-[826px] md:w-full w-full bg-sky-300 flex flex-col md:gap-y-6 justify-evenly md:justify-center items-center ">
      <button className="h-7 w-[105px] bg-blue-100 rounded-2xl shadow-2xl">
        About me
      </button>
      <div className="md: flex md:flex-row flex-col md:gap-x-12 p-5">
        <div className="flex flex-col md:flex-row p-4 md:justify-center md:items-center items-center justify-evenly ">
          <img
            src="mobpic2.png"
            alt=""
            className="h-[380px] w-[343px] flex md:hidden justify-center"
          />
          <img
            src="nestpic.png"
            alt=""
            className="md:flex hidden h-[520px] w-[440px]"
          />{" "}
        </div>

        <div className="flex flex-col h-[826px] md:h-[558px] md:w-[584px] justify-evenly md:justify-center md:gap-4">
          <div className="text-4xl font-bold">
            <p>Curious about me? Here you have it:</p>
          </div>
          <div>
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </div>
          <div>
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </div>
          <div>
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </div>
          <div>Finally, some quick bits about me.</div>
          <div className="flex flex-col text-md">
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
            <li>Avid learner</li>
          </div>
          <div>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
