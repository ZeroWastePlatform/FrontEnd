import { Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Community from "./pages/Community";
import Contents from "./pages/Contents";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import ProductList from "./pages/Store/ProductList";
import ProductDetail from "./pages/Store/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/store/product/:id" element={<ProductDetail />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
