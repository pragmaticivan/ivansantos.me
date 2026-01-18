"use client";

import type { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

const DefaultLayout = ({ children }: Props): JSX.Element => (
  <div>{children}</div>
);

export default DefaultLayout;
