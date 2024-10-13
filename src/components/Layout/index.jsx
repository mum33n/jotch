import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

function Layout() {
  return (
    <div className="bg-[#2591FE] w-full min-h-screen">
      <div className="xl:px-[15%] px-5 flex flex-col gap-20">
        <Navbar />
      </div>
      {/* <div> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
}

export default Layout;
