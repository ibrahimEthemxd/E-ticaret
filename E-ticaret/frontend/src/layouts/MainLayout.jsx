import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Dialog from "../components/Modals/Dialog/Dialog";
import Search from "../components/Modals/Search/Search";
import Proptypes from "prop-types";
import { useState, useEffect } from "react";
const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
      setIsDialogShow(dialogStatus);
    }, 50000);
  }, []);

  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
MainLayout.propTypes = {
  children: Proptypes.node,
};
