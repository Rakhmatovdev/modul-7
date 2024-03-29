import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  function handleTheme() {
    theme ? (localStorage.theme = "dark") : (localStorage.theme = "light");
    setTheme((e) => !e);
  }
  return (
    <>
      <div>
        <div className="h-screen flex flex-col">
          <nav className="p-4 px-8 flex justify-between">
           <img className="rounded-full w-20" src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=75" alt="" />
            <button
              className="rounded-full outline-slate-50 outline-4 "
              onClick={handleTheme}
            >
              {localStorage.theme=="light" ? <box-icon name='moon'></box-icon> : <box-icon name='sun' ></box-icon>}
            </button>
          </nav>
          <header className="flex-1 p-8 bg-white dark:bg-gray-900">
            <div className="hero">
              <h1 className="bold text-black dark:text-white">Some Content</h1>
              <p className="px-16 pt-8 text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit eveniet possimus excepturi sint? Fugit nisi,
                quaerat similique, inventore incidunt harum facere ullam odit
                eius provident ex. Aliquid obcaecati unde autem quisquam, ea
                assumenda commodi eaque. Tenetur culpa beatae obcaecati
                deserunt. Omnis voluptatibus commodi aspernatur quisquam est
                dolores. Perferendis numquam, ipsam reprehenderit error
                temporibus hic eligendi ratione facilis eveniet inventore nobis
                modi cupiditate accusamus sequi quaerat asperiores? Vitae
                architecto officia quibusdam cumque, necessitatibus enim quos
                soluta consequatur praesentium, ut obcaecati rerum, consequuntur
                optio in natus inventore! Ducimus iste autem, omnis id eos
                dolore eum ipsum repellat ipsa fugit rem, provident porro.
              </p>
            
            </div>
            <div className="flex text-black justify-between mt-10">
<div className="py-8 px-16 bg-slate-100 shadow-sm shadow-violet-500">Card</div>
<div className="py-8 px-16 bg-slate-100 shadow-md shadow-cyan-500">Card</div>
<div className="py-8 px-16 bg-slate-100 shadow-lg shadow-sk">Card</div>
            </div>
          </header>
          <footer className="p-6  bg-lime-700 text-white text-bold text-center">
            Footer
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;