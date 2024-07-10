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
      <body>
        {children}
      </body>
    </html>
  );
}
