import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../pages/shop/CartModal";
import avatarImg from "../assets/avatar.png";
import adminImg from "../assets/admin.png";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  // show user if logged in
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();
  //dropdowm menu
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  //admin DropDown
  const adminDropDownMenu = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Items", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add new Product", path: "/dashboard/add-product" },
  ];

  // user DropDown
  const userDropDownMenu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const dropDownMenu =
    user?.role === "admin" ? [...adminDropDownMenu] : [...userDropDownMenu];

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to logging out", error);
    }
  };
  return (
    <header className="fixed-nav-bar w-nav bg-red-900">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center ">
        <ul className="nav__links">
          <li className="link ">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/pagess">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* logo */}
        <div className="nav__logo">
          <Link to="/">
            TU-Merch<span></span>
          </Link>
        </div>
        {/*nav icon */}
        <div className="nav__icons relative">
          <span>
            <Link to="/search">
              <i className="ri-search-line text-white"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} className="hover:text-primary">
              <i className="ri-shopping-basket-2-line text-white"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            {user && user ? (
              <>
                <img
                  onClick={handleDropDownToggle}
                  src={
                    user?.role === "admin"
                      ? adminImg
                      : user?.profileImage || avatarImg
                  }
                  // src={user?.profileImage || avatarImg}
                  alt=""
                  className="size-6 rounded-full cursor-pointer bg-white"
                />
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-3 p-4 w-48  bg-white border border-gray-200 rounded-lg shadow-lg  z-50">
                    <ul className="font-medium space-y-4 p-2">
                      {dropDownMenu.map((menu, index) => (
                        <li key={index}>
                          <Link
                            onClick={() => setIsDropDownOpen(false)}
                            className="dropdown-items"
                            to={menu.path}
                          >
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link onClick={handleLogout} className="dropdown-items">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <i className="ri-user-5-line"></i>
              </Link>
            )}
          </span>
        </div>
      </nav>
      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Navbar;
