import { FiBell, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <FiMenu size={20} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
            <li>Homepage</li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="#" className="btn btn-ghost text-xl">
          Easy-Menu
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FiBell size={20} />
            <span className="badge badge-xs badge-primary indicator-item" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
