import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import RightSidebar from "../RightSidebar/RightSidebar";
import TabToTop from "../TabToTop/TabToTop";

export default function Switcherapp() {
  document
    .querySelector("body")
    ?.classList.add("ltr", "main-body", "app", "sidebar-mini");
  document.querySelector("body")?.classList.remove("error-page1", "bg-primary");
  const responsiveSidebarclose = () => {
    //leftsidemenu
    if (window.innerWidth < 992){
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
    }
    //rightsidebar
    document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
    //swichermainright
    document.querySelector(".demo_changer")?.classList.remove("active");
    let switcherMainright:any = document.querySelector(".demo_changer")
    switcherMainright.style.right = "-270px";
  };
 
  function Sidebargone(gone:any) {
    if (gone.matches) { // If media query matches
      document.querySelector("body")?.classList.add("sidebar-gone");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-gone");
      document.querySelector("body")?.classList.remove("sidenav-toggled");
    }
  }

  var gone = window.matchMedia("(max-width: 1024px)")
  Sidebargone(gone) // Call listener function at run time
  gone.addListener(Sidebargone)
  return (
    <>
        {/* <Provider store={Store}> */}
          <div className="horizontalMenucontainer">
            <TabToTop />
            <div className="page">
              <div className="open">
                <Sidebar />
              </div>
              <div className="main-content app-content">
                <div className="side-app">
                  <div
                    className="main-container container-fluid"
                    onClick={() => {
                      responsiveSidebarclose();
                    }}
                  >
                  </div>
                </div>
              </div>
              <RightSidebar />
              <Footer />
            </div>
          </div>
    </>
  );
}
