import Image from "next/image";

import Link from "next/link";
import type { Article } from "../../types/article";
import brFlag from "./br-flag@2x.png";
import enFlag from "./en-flag@2x.png";
import styles from "./styles.module.scss";

interface Props {
  article: Article;
}

const ArticleItem = ({ article }: Props) => {
  const langFlag = article.language === "en" ? enFlag : brFlag;
  return (
    <div className={styles.articleItem}>
      <Link href={`/blog/${article.slug}/`} passHref={true}>
        <div className={styles.date}>{article.date}</div>
        <div className={styles.title}>
          <Image
            alt={article.language === "en" ? "American Flag" : "Brazilian Flag"}
            height={23}
            src={langFlag}
            width={36}
          />{" "}
          - {article.title}
        </div>
        <div className={styles.description}>{article.description}</div>
      </Link>
    </div>
  );
};

export default ArticleItem;
