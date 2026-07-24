import pageStyles from "../styles/page.module.scss";

export default function Loading() {
  return (
    <output className={pageStyles.loader}>
      <div className={pageStyles.loaderInner}>
        <div aria-hidden="true" className={pageStyles.loaderMark} />
        <p>Loading page...</p>
      </div>
    </output>
  );
}
