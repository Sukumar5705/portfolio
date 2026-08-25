import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/nav.jsx";
import Footer from "./components/footer.jsx";

import MainPage from "./pages/MainPage.jsx";
const MoreOfMe = lazy(() => import("./pages/moreOfMe"));

// Loading screen
const Loading = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse blur-sm" />
    <span className="ml-4 text-gray-600 animate-pulse">Loading page...</span>
  </div>
);

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/more";

  return (
    <>
      {!hideNavbar && <NavBar />}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="fixed inset-0 -z-10" />
                <MainPage />
              </>
            }
          />
          <Route path="/more" element={<MoreOfMe />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
