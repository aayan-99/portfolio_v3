export interface SingleBlogDetailsProps {
    id: string;
    title: string;
    content: BlogDataText[] | BlogDataCode[] | string;
};

interface BlogDataText {
    id: string;
    type: string;
    title: string;
    content: string[];
};

interface BlogDataCode {
    id: string;
    title: string;
    type: string;
    content: CodeDataObj[];
}

interface CodeDataObj {
    id: string;
    title: string;
    intro: string;
    content: string[];
};