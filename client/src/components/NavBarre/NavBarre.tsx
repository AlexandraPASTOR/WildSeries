import { Link } from "react-router";

function NavBarre() {
  return (
    <nav className="flex justify-between items-end p-4">
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-[#F7146B]">
          <Link to="/">WILD SERIES</Link>
        </h1>
      </div>
      <div>
        <ul className="flex gap-4 font-semibold text-sm md:text-base">
          <li>
            <Link to="/programs" className="hover:text-[#F7146B]">
              Séries
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-[#F7146B]">
              Catégories
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#F7146B]">
              Connexion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarre;
