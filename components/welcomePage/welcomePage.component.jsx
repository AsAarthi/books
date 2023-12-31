import { NavLink } from "react-router-dom";


const WelcomePage = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-8">
        <h1 className="text-[22px] font-[700] text-center">
          BOOKS APPLICATION
        </h1>
        <div className="flex gap-8 items-center justify-center">
          <NavLink to={`/history`} className="text-[18px] font-[600] border-2 px-[1rem] border-green-400 bg-green-400 text-white hover:bg-green-600 hover:border-green-600 cursor-pointer">
            HISTORY
          </NavLink>
          <NavLink to={`/science`} className="text-[18px] font-[600] border-2 px-[1rem] border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
            SCIENCE
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
