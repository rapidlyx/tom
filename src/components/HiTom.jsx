export const HiTom = () => {
  return (
    <div className="h-[904px] md:h-[556px] md:w-full w-full bg-sky-300 flex flex-col p-4 md:justify-center md:items-center justify-evenly md:flex-row">
      <div className="flex justify-center md:hidden">
        <img src="piccon.png" alt="" className="h-[300px] w-[280px] " />
      </div>
      <div className="md:h-[364px] md:w-[600px] flex flex-col gap-7">
        <div>
          <h1 className="text-3xl md:text-7xl">Hi, I'm Tom👋</h1>
          <p className="md:text-2xl text-xl">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <img src="locicon.png" alt="" />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex gap-2">
            <img src="active.png" alt="" />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="h-9 w-9" src="muur.png" alt="" />
          <img className="h-9 w-9" src="twitter.png" alt="" />
          <img className="h-9 w-9" src="figma.png" alt="" />
        </div>
      </div>
      <div className="w-[568px] h-[364px] hidden md:flex justify-end">
        <img src="picnest.png" alt="" className="w-[320px] h-[360px]" />
      </div>
    </div>
  );
};
