import context from '../assets/images/context.png'
import component from '../assets/images/component.png'
import responsive from '../assets/images/responsive.jpg'
import hooks from '../assets/images/blogs/hooks/hooks.jpg'
import hooks_2 from '../assets/images/blogs/hooks/hooks_2.jpg'


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

export const allBlogsDetails = [
    {
        id: '0',
        title: 'Title: A breif introduction to React Hooks',
        content: [
            {
                id: '01',
                type: 'text',
                title: 'Introduction',
                content: [
                    `React, one of the most popular JavaScript libraries for building user interfaces, introduced a game-changing feature with the release of version 16.8 – React Hooks. These Hooks offer a new way to write React components by allowing functional components to utilize state, lifecycle methods, and other React features without the need for class components.`,
                ],
            },
            {
                id: '02',
                type: 'text',
                title: 'What are React Hooks ?',
                content: [
                    `React Hooks are functions that enable the use of state, component lifecycle and other React features in functional components. They aim to simplify the reuse of logic between components, previously only achievable through class components or higher-order components (HOCs). Hooks are backward-compatible and offer a more readable and reusable alternative.`,
                ],
            },
            {
                id: 'img1',
                type: 'image',
                title: '',
                content: hooks,
            },
            {
                id: '03',
                type: 'code',
                title: 'Understandong React Hooks',
                content: [
                    {
                        id: 'code_01',
                        title: 'useState',
                        intro: 'useState is one of the most fundamental Hooks in React. It enables functional components to manage local state. For instance, you can declare and update state within a functional component using this Hook:',
                        content: [
                            `import React, { useState } from 'react';

                            function Counter() {
                             const [count, setCount] = useState(0);
                            
                             return (
                               <div>
                                 <p>Count: {count}</p>
                                 <button onClick={() => setCount(count + 1)}>Increment</button>
                               </div>
                             );
                            }
                            `,
                        ],
                    },
                    {
                        id: 'code_02',
                        title: 'useEffect',
                        intro: 'This Hook mimics lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in functional components. It allows performing side effects in a React component:',
                        content: [
                            `import React, { useState, useEffect } from 'react';

                            function DataFetching() {
                             const [data, setData] = useState([]);
                            
                             useEffect(() => {
                               // Fetch data from an API
                               fetch('https://api.example.com/data')
                                 .then((response) => response.json())
                                 .then((data) => setData(data))
                                 .catch((error) => console.error(error));
                             }, []); // Empty dependency array for componentDidMount behavior
                            
                             return (
                               <div>
                                 <ul>
                                   {data.map((item) => (
                                     <li key={item.id}>{item.name}</li>
                                   ))}
                                 </ul>
                               </div>
                             );
                            }
                            `,
                        ],
                    },
                    {
                        id: 'code_03',
                        title: 'useContext',
                        intro: 'The useContext Hook allows functional components to consume data from a React context. It provides a way to access values passed down through the component tree without explicitly passing props at every level.',
                        content: [
                            `import React, { useContext } from 'react';

                            const ThemeContext = React.createContext('light');
                            
                            function ThemedButton() {
                             const theme = useContext(ThemeContext);
                            
                             return <button style={{ background: theme }}>Themed Button</button>;
                            }
                            `,
                        ],
                    },
                    {
                        id: 'code_04',
                        title: 'useReducer',
                        intro: 'Similar to Redux, the useReducer Hook is used for managing more complex state logic in components. It takes in a reducer function and an initial state, returning the current state and a dispatch method to update the state.',
                        content: [
                            `import React, { useReducer } from 'react';

                            const initialState = { count: 0 };
                            
                            function reducer(state, action) {
                             switch (action.type) {
                               case 'increment':
                                 return { count: state.count + 1 };
                               case 'decrement':
                                 return { count: state.count - 1 };
                               default:
                                 throw new Error();
                             }
                            }
                            
                            function Counter() {
                             const [state, dispatch] = useReducer(reducer, initialState);
                            
                             return (
                               <div>
                                 Count: {state.count}
                                 <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                                 <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                               </div>
                             );
                            }
                            `,
                        ],
                    },
                    {
                        id: 'code_05',
                        title: 'useCallback',
                        intro: `The useCallback Hook memoizes functions to prevent unnecessary re-renders of components that rely on those functions. It's useful for optimizing performance by caching callbacks.`,
                        content: [
                            `import React, { useCallback, useState } from 'react';

                            function MemoizedComponent() {
                             const [count, setCount] = useState(0);
                            
                             const memoizedCallback = useCallback(() => {
                               // Do something with count
                             }, [count]);
                            
                             return (
                               <div>
                                 <p>Count: {count}</p>
                                 <button onClick={() => setCount(count + 1)}>Increment</button>
                                 {/* Pass memoizedCallback as a prop */}
                                 <ChildComponent callback={memoizedCallback} />
                               </div>
                             );
                            }
                            `,
                        ],
                    },
                    {
                        id: 'code_06',
                        title: 'useMemo',
                        intro: 'The useMemo Hook memoizes expensive computations and recalculates them only when the dependencies change, optimizing performance by caching values.',
                        content: [
                            `import React, { useMemo } from 'react';

                            function MemoizedComponent({ a, b }) {
                             const expensiveResult = useMemo(() => {
                               // Expensive computation based on a and b
                               return a * b;
                             }, [a, b]);
                            
                             return <div>Result: {expensiveResult}</div>;
                            }
                            `,
                        ],
                    },
                    {
                        id: 'code_07',
                        title: 'useRef',
                        intro: `The useRef Hook creates a mutable reference object that persists across re-renders and doesn't trigger component re-renders when its value changes.`,
                        content: [
                            `import React, { useRef, useEffect } from 'react';

                            function TextInputWithFocusButton() {
                             const inputRef = useRef(null);
                            
                             useEffect(() => {
                               inputRef.current.focus();
                             }, []);
                            
                             return (
                               <div>
                                 <input ref={inputRef} type="text" />
                                 <button onClick={() => inputRef.current.focus()}>Focus Input</button>
                               </div>
                             );
                            }
                            `,
                        ],
                    },
                ],
            },
            {
                id: '04',
                type: 'points',
                title: 'Benefits of React Hooks',
                content: [
                    `Encourages Reusability: Hooks promote the reuse of logic across components, making it easier to share functionality without restructuring the component hierarchy.`,
                    `Simplifies Component Logic: Functional components with Hooks are more concise and easier to understand compared to class components.`,
                    `Reduces Boilerplate Code: Hooks eliminate the need for HOCs and wrapper components, reducing the verbosity of code.`,
                ],
            },
            {
                id: 'img2',
                type: 'image',
                title: '',
                content: hooks_2,
            },
            {
                id: '05',
                type: 'points',
                title: 'Best Practices',
                content: [
                    `Only use Hooks at the top level: Ensure Hooks are called at the top level of your functional components, not inside loops, conditions, or nested functions.`,
                    `Use Hooks in functional components: Hooks are designed to be used in functional components and not in regular JavaScript functions or class components.`,
                    `Declare dependencies correctly: Provide an accurate dependency array in Hooks like useEffect, useCallback, and useMemo to avoid unnecessary re-renders or side effects.`,
                    `Avoid unnecessary computations: In useMemo and useCallback, use them judiciously to memoize values or functions only when necessary, as excessive usage can impact performance negatively.`,
                ],
            },
            {
                id: '06',
                type: 'text',
                title: 'Conclusion',
                content: [
                    `React Hooks revolutionized the way developers write React components, enabling functional components to handle state and lifecycle methods effectively. They simplify component logic, promote reusability, and offer a more streamlined approach to building React applications`,
                    `In subsequent articles, we'll delve deeper into each Hook, explore advanced usage, and demonstrate best practices for leveraging Hooks effectively in React applications.`,
                    `Stay tuned for more insights into mastering React Hooks!`,
                ],
            },
        ],
    }
];