import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black p-10 h-fit"
      aria-label="main-navigation"
    >
      <ul className="flex flex-row gap-8 text-2xl">
        <li>
          <Link href="/" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" aria-label="Services">
            Services
          </Link>
        </li>
        <li>
          <Link href="/case-studies" aria-label="Case Studies">
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
