import type { ElementType } from "react";

export interface DrawerLinkInterface {
  label: string;
  href: string;
  icon: ElementType;
}

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}
