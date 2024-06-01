import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar"
function Layout({ children }) {
  return (
    <>
      <div
        className="flex w-full justify-between">
        <LeftSidebar></LeftSidebar>
        {children}
        <RightSidebar></RightSidebar>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Layout;
