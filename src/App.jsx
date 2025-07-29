import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/Courses";
import CourseLayout from "./layout/CourseLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route element={<CourseLayout />}>
            <Route path="/courses" element={<Courses />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
