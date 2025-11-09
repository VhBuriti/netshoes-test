import styles from "./index.module.scss";

export default function Breadcrumb() {
  let currentLink = "";
  const { pathname } = window.location;
  const pathParts = pathname.split("/").filter(Boolean);

  const crumbs = pathParts.map((crumb) => {
    currentLink += `/${crumb}`;
    const isCurrent = currentLink === pathname;
    const label = decodeURIComponent(crumb)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
      <li
        key={currentLink}
        data-breadcrumb-item
        data-current={isCurrent ? "true" : "false"}
      >
        <a
          href={currentLink}
          data-breadcrumb-link
          aria-current={isCurrent ? "page" : undefined}
        >
          {label}
        </a>
      </li>
    );
  });

  return (
    <div className={styles.breadcrumb}>
      <ul data-breadcrumb-list>
        <li
          data-breadcrumb-item
          data-current={pathname === "/" ? "true" : "false"}
        >
          <a
            href="/"
            data-breadcrumb-link
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </a>
        </li>
        {crumbs}
      </ul>
    </div>
  );
}
