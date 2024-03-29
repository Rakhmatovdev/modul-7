function Border() {
    return (
      <>
      <h1>Border</h1>
        <span className="h-10 w-10 p-6 inline-block mt-4 ml-3 border border-sky-500"></span>
        <span className="h-10 w-10 p-6 inline-block mt-4 ml-3 border-2 border-sky-500"></span>
        <span className="h-10 w-10 p-6 inline-block mt-4 ml-3 border-4 border-sky-500"></span>
        <span className="h-10 w-10 p-6 inline-block mt-4 ml-3 border-8 border-sky-500"></span>
        <br />
        <br />
        <h1>Border l t b r</h1>
        <span className="h-10 w-10 p-10 inline-block mt-4 ml-3 border-t-4 border-indigo-500 "></span>
        <span className="h-10 w-10 p-10 inline-block mt-4 ml-3 border-r-4 border-indigo-500"></span>
        <span className="h-10 w-10 p-10 inline-block mt-4 ml-3 border-b-4 border-indigo-500"></span>
        <span className="h-10 w-10 p-10 inline-block mt-4 ml-3 border-l-4 border-indigo-500"></span>
        <br />
        <br />
        <h1></h1>
        <span className="h-10 w-10 p-6 inline-block mt-4 ml-3 border-x-4 border-sky-500"></span>
        <span className="h-10 w-10 p-6 inline-block mt-4 ml-10 border-y-8 border-sky-500"></span>
        <br />
        <h1 className="text-5xl font-bold text-center mb-4">Border style</h1>
        <div className="border-solid border-2 border-sky-500 p-6 w-[200px] mt-3"></div>
        <div className="border-dashed border-2 border-sky-500 p-6 w-[200px] mt-3"></div>
        <div className="border-dotted border-4 border-sky-500 p-6 w-[200px] mt-3"></div>
        <div className="border-double border-8 border-sky-500 p-6 w-[200px] mt-3"></div>
        <h1 className="text-5xl font-bold text-center mb-4">Outline</h1>
        <button className="outline outline-offset-2 outline-1 outline-sky-500 m-10">Button A</button>
        <button className="outline outline-offset-2 outline-2 outline-sky-500 m-10">Button B</button>
        <button className="outline outline-offset-2 outline-4 outline-sky-500 m-10">Button C</button>
        <br />
        <button className="outline outline-offset-2 outline-1 outline-sky-500 m-10">Button A</button>
        <button className="outline-dashed outline-offset-2 outline-1 outline-sky-500 m-10">Button A</button>
        <button className="outline-dotted outline-offset-2 outline-2  outline-sky-500 m-10">Button B</button>
        <button className="outline-double outline-offset-2 outline-4 outline-sky-500 m-10">Button C</button>
        <br />
        <button className="ring-offset-2 ring-2  outline-offset-2 outline-1 outline-sky-500 m-10">Button A</button>
        <button className="ring-offset-2 ring outline-offset-2 outline-1 outline-sky-500 m-10">Button A</button>
        <button className="ring-offset-2 ring-4 outline-offset-2 outline-2  outline-sky-500 m-10">Button B</button>
      </>
    );
  }
  
  export default Border;