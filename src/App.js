import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./view/dashboard/Dashboard";

/**
 * React Router Mentioneds
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
