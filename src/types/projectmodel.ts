export interface SingleProjectProps {
    id: string;
    projectname: string;
    title: string;
    image_1: string;
    image_2: string;
    responsive?: Responsive;
    intro: Intro[];
    execution: Execution;
    deployment: Deployment;
    testing: Testing;
    conclusion: Conclusion;
};

interface Responsive {
    title: string;
    content: ResponsiveContent[];
}

interface ResponsiveContent {
    id: string;
    type: string;
    image: string;
}

interface Intro {
    id: string;
    title: string;
    content: string[];
}

interface Execution {
    title: string;
    content: ExecutionContent[];
}

interface ExecutionContent {
    id: string;
    title: string;
    content: ExecutionContentData[];
}

interface ExecutionContentData {
    id: string;
    title: string;
    content: string[];
}

interface Deployment {
    title: string;
    content: string[];
}

interface Testing {
    title: string;
    content: string[];
}

interface Conclusion {
    title: string;
    content: string[];
}