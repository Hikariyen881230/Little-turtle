import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/page.module.css';
import { CiSearch } from 'react-icons/ci';

function Navbar(props) {
  return (
    <div className="bg-primary">
      <nav className={`${styles.menu} container  d-flex align-items-center`}>
        <Link href="/" className="me-3">
          <Image
            src="/images/turtle.png"
            width="35"
            height="35"
            alt="little-turtlr logo"
          />
          <span className="ps-1">小龜</span>
        </Link>
        <ul className={`${styles.menuItems} list-unstyled text-white`}>
          <li>
            <Link href="/forum">討論版</Link>
          </li>
          <li>
            <Link href="/news">最新消息</Link>
          </li>
          <li>
            <Link href="/contact">聯繫我們</Link>
          </li>
        </ul>
        <div className="d-flex position-relative w-50 ms-3">
          <CiSearch className={`${styles.searchIcon} position-absolute`} />
          <input
            className={`${styles.searchBar} w-100`}
            type="text"
            placeholder="Search something..."
          />
        </div>
        <div className="d-flex h-100 align-items-center ms-3">
          <Link href="/logIn" className={`${styles.btnLogin} btn`}>
            Log in
          </Link>
          <Link href="/signUp" className={`${styles.btnSignup} btn`}>
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
