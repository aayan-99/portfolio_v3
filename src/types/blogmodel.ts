export interface SingleBlogDetailsProps {
    id: string;
    title: string;
    content: (TextContent | ImageContent | CodeContent | PointsContent)[];
}

interface TextContent {
    id: string;
    type: string;
    title: string;
    content: string[];
}

interface ImageContent {
    id: string;
    type: string;
    title: string;
    content: string;
}

interface CodeContent {
    id: string;
    type: string;
    title: string;
    content: SingleCodeContent[];
}

interface SingleCodeContent {
    id: string;
    title: string;
    intro: string;
    content: string[];
}

interface PointsContent {
    id: string;
    type: string;
    title: string;
    content: string[];
}