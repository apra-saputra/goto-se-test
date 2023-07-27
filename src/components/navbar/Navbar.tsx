import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "@/components/navbar/navbar.styles";
import { LISTMENU } from "@/utils/constant";

const Navbar: React.FC = ({}) => {
  const router = useRouter();
  const navbarRef = useRef<HTMLDivElement>(null);

  const [navbar, setNavbar] = useState(false);

  const handleNavbar = (path: string) => {
    router.push(path);
    setNavbar(false);
  };

  return (
    <header css={styles.header}>
      <nav css={styles.nav} ref={navbarRef}>
        <div css={styles.container}>
          <div css={styles.heading}>
            <div>
              <h1
                css={[styles.title, styles.hoverClick]}
                onClick={() => router.push("/")}
              >
                My Anime
              </h1>
            </div>
            <div
              css={[styles.toggleButton, styles.hoverClick]}
              onClick={() => setNavbar((state) => !state)}
            >
              {navbar ? (
                <FontAwesomeIcon icon={faXmark} color="var(--color-primary)" />
              ) : (
                <FontAwesomeIcon icon={faBars} color="var(--color-primary)" />
              )}
            </div>
          </div>
          <div
            css={[
              styles.menu,
              navbar ? styles.displayBlock : styles.displayHidden,
            ]}
          >
            <ul css={styles.menulist}>
              {LISTMENU.map((item, index) => {
                return (
                  <li
                    key={index}
                    css={[
                      styles.menuListItem,
                      styles.hoverClick,
                      (router.pathname === item.path ||
                        router.pathname.startsWith(`${item.path}/`)) &&
                        styles.menuListItemAfter,
                    ]}
                    onClick={() => handleNavbar(item.path)}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
