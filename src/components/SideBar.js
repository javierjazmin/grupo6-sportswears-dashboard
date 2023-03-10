import React from "react";
import image from "../assets/images/logo.png";
import UsersRow from "./UsersRow";
import MainContent from "./MainContent";
import ProductsInDb from "./ProductsInDb";
import CategoriesInDb from "./CategoriesInDb";
import { Link, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import LastProductInDb from "./LastProductInDb";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Sportswear" />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Sportswear</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Products</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Categories</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-table"></i>
            <span>Users</span>
          </Link>
        </li>

        {/*<!-- Nav Item - SearchMovies -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/lastProductInDb">
            <i className="fas fa-fw fa-table"></i>
            <span>Last Product In Data base</span>
          </Link>
        </li>


        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/products" element={<ProductsInDb />}></Route>
        <Route path="/categories" element={<CategoriesInDb />}></Route>
        <Route path="/users" element={<UsersRow />}></Route>
        <Route path="/lastProductInDb" element={<LastProductInDb />}></Route>
        <Route path="*" element={<NotFound />}></Route> 
      </Routes>
    </React.Fragment>
  );
}
export default SideBar;
