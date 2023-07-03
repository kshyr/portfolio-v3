import type { ReactNode } from "react";

type Link = {
    title: string;
    url: string;
    icon?: string | ReactNode;
};

type Image = {
    url: string;
    alt: string;
    twClasses?: string;
};

export type Project = {
    handle?: string;
    type: "project" | "blog";
    title: string;
    description: string;
    tags?: string[];
    previewUrl?: string;
    links?: Link[];
    images?: Image[];
    bodyMarkdown?: ReactNode;
};