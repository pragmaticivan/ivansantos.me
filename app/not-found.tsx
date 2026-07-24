import Link from "next/link";
import pageStyles from "../styles/page.module.scss";

const Custom404 = () => (
  <main className={`${pageStyles.page} ${pageStyles.notFound}`}>
    <p className={pageStyles.notFoundCode}>404</p>
    <div>
      <h2>This page wandered off.</h2>
      <p>
        The address may have changed, but there is plenty more to explore from
        the homepage.
      </p>
      <Link className={pageStyles.primaryButton} href="/">
        Back to homepage
      </Link>
    </div>
  </main>
);

export default Custom404;
