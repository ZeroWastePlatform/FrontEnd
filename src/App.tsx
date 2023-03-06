import { Outlet, Route, Routes } from "react-router-dom";
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
import Article from "./pages/Community/Article";
import Footer from "./components/Common/Footer/Footer";
import Basket from "./pages/Store/Basket";
import Oauth from "./pages/Oauth/[Provider]";

function App() {
  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<ProductList />} />
          <Route path="/store/basket" element={<Basket />} />
          <Route path="/store/buy" element={<ProductBuy />} />
          <Route path="/store/product/:id" element={<ProductDetail />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/community/:type" element={<CommunityList />} />
          <Route path="/community/write" element={<Write />} />
          <Route path="/community/article/:id" element={<Article />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/oauth/:provider" element={<Oauth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
