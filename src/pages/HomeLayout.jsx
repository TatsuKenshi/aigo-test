import { useState, lazy } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import {
  menuItemsFull,
  menuItemsShort,
  sideDishes,
  introImages,
  menuPreview,
  people,
  story,
} from "../data";
import ScrollReset from "../components/ScrollReset";
// import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const Footer = lazy(() => import("../components/Footer"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const [item, setItem] = useState({});
  const [sidebarStatus, setSidebarStatus] = useState("hidden");

  return (
    <main>
      <ScrollReset>
        <Navbar />
        <Sidebar />
        <Hero />
        <section>
          {isPageLoading ? (
            <div></div>
          ) : (
            <Outlet
              context={{
                item,
                setItem,
                menuItemsFull,
                menuItemsShort,
                sideDishes,
                introImages,
                menuPreview,
                people,
                story,
                sidebarStatus,
                setSidebarStatus,
              }}
            />
          )}
        </section>
        <ScrollToTop />
        <Footer />
      </ScrollReset>
    </main>
  );
};

export default withNamespaces()(HomeLayout);
