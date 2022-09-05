import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type Props = {
  children: ReactNode
  title: string
  description: string
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const ArticleLayout = ({ children, title, description }: Props): JSX.Element => (
  <div>
    <NextSeo title={title} description={description} openGraph={{ title, description }} />
    {children}
  </div>
)

export default ArticleLayout;
