import { Route, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Contents from "./pages/Contents";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import Store from "./pages/Store";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/contents" element={<Contents />} />
      <Route path="/community" element={<Community />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
