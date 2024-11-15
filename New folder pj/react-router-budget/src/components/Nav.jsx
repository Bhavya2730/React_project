import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid"; // Adjust this import path if needed

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <HomeIcon width={24} />
        <span>HomeBudget</span>
      </Link>
    </nav>
  );
};

export default Nav;
