import { NextSeo } from "next-seo";
import type { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

const ArticleLayout = ({
  children,
  title,
  description,
}: Props): JSX.Element => (
  <div>
    <NextSeo
      description={description}
      openGraph={{ title, description }}
      title={title}
    />
    {children}
  </div>
);

export default ArticleLayout;
