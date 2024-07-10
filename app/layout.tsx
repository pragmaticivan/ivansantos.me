import '../styles/tailwind.css';
import '../styles/globals.css';

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ivan Santos',
  description: 'YAY!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS 2.0"
        href="/feed.xml"
      ></link>
      <body>{children}</body>
    </html>
  );
}
