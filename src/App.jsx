import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import SingleMenuItem from "./pages/SingleMenuItem";

const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Menu = lazy(() => import("./pages/Menu"));
// const SingleMenuItem = lazy(() => import("./pages/SingleMenuItem"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

// kontakt (reCaptcha/reAptcha)
// cookie consent (videti sta je problem)
// nauci nodemailer
// terms of use strana
// lokalizacija do kraja
// lazy loading slika (svih)
// What's in store sekcija
// // // mission & vision u gornjem redu
// // // future plans & milestones u drugom

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <HomeLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "menu",
        element: (
          <Suspense fallback={<Loading />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "menuitem/:id",
        element: <SingleMenuItem />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
