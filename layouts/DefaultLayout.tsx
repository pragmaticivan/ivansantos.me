'use client';

import React, { JSX, ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const DefaultLayout = ({
  children,
  title,
  description,
}: Props): JSX.Element => (
  <div>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    {children}
  </div>
);

export default DefaultLayout;
