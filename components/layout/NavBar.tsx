import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full flex flex-row justify-between bg-transparent p-10 h-fit"
      aria-label="main-navigation"
    >
    <div className="text-6xl pl-5 font-bold">Marketing Legends</div>
      <ul className="flex flex-row justify-end items-center gap-8 text-2xl">
        <li>
          <Link href="/#home" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#services" aria-label="Services">
            Services
          </Link>
        </li>
        <li>
          <Link href="/#case-studies" aria-label="Case Studies">
            Case Studies
          </Link>
        </li>

        <li>
          <Link href="/about" aria-label="About">
            About
          </Link>
        </li>
                <li>
          <Link href="/contact" aria-label="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
