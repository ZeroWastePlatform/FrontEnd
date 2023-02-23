import { Route, Routes } from "react-router-dom";
import Contents from "./pages/Contents";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import ProductList from "./pages/Store/ProductList";
import ProductDetail from "./pages/Store/ProductDetail";
import HeaderContainer from "./components/Common/Header/HeaderContainer";
import ProductBuy from "./pages/Store/ProductBuy";
import CommunityList from "./pages/Community/CommunityList";
import Write from "./pages/Community/Write";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<ProductList />} />
          <Route path="/store/buy" element={<ProductBuy />} />
          <Route path="/store/product/:id" element={<ProductDetail />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/community/:type" element={<CommunityList />} />
          <Route path="/community/write" element={<Write />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
