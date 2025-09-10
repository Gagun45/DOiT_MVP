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

export interface CommentInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type SeverityType = "success" | "error" | "warning" | "info";