import Link from "next/link";
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header_nav}>
      <h1>My header</h1>
      <nav>
        <Link 
          href="/"
        >
          <a>Home</a>
        </Link>
        <Link href="/terms">
          <a>Terms of use</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
