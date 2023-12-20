import hooks from '../assets/images/hooks.jpg'
import context from '../assets/images/context.png'
import component from '../assets/images/component.png'
import responsive from '../assets/images/responsive.jpg'


export const allBlogsData = [
    {
        id: 0,
        title: 'A breif Introduction to React Hooks',
        image: hooks,
        text: 'Hooks allow developers to use stateful features, such as controlled components and lifecycle methods, in functional components.',
    },
    {
        id: 1,
        title: 'Demystifying the Context API in React',
        image: context,
        text: `The Context API is a part of React that allows you to share data across the component tree, without having to pass props down manually at every level.`,
    },
    {
        id: 2,
        title: 'Diving into React Component Design',
        image: component,
        text: `This comprehensive guide delves into the best practices and pro tips for crafting React components that exhibit optimal performance and robustness`,
    },
    {
        id: 3,
        title: 'Responsive User Interfaces with React',
        image: responsive,
        text: `In today's fast-paced digital landscape, creating responsive user interfaces is essential for delivering a seamless and engaging user experience.`,
    },
];