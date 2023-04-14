import React from 'react';
import Banner from '../Banner/Banner';

const Blogs = () => {
    return (
        <div>
            <div>
                <Banner blogBanner = {true}></Banner>
            </div>
            <div className='xl:w-4/5 w-11/12 mx-auto mt-32  bg-[#f4f4f4] text-[#525252] rounded-lg p-5'>
                <h2 className='text-2xl font-bold mb-3'>
                    1. When should we use context API?
                </h2>
                <p>
                    The Context API is a way to share data between components in a React application, without having to pass props down through each level of the component tree. It can be useful when: <br />
                    Multiple components need access to the same data: If you have data that is needed by multiple components at different levels of the component tree, you can use the Context API to make that data available to all those components without having to pass it down through each level of the tree. <br />
                    Data needs to be updated from anywhere in the component tree: If you have data that needs to be updated from a component that is several levels deep in the component tree, you can use the Context API to make that data available to all components in the tree and update it from anywhere. <br />

                    Avoiding prop drilling: Prop drilling is the practice of passing down props through multiple levels of a component tree. It can make your code more complex and harder to maintain. The Context API can help to avoid prop drilling by providing a way to share data between components without having to pass props down through each level of the tree.
                    <br />
                    Managing global state: If you have state that needs to be shared across multiple components, you can use the Context API to manage that state in a centralized location.
                    <br />
                    In general, the Context API can be a good choice when you need to share data between multiple components in a React application and want to avoid prop drilling or manage global state. However, it's important to note that using the Context API can add complexity to your code, so you should carefully consider whether it's the best solution for your specific use case.
                </p>
            </div>
            <div className='xl:w-4/5 w-11/12 mx-auto mt-5 bg-[#f4f4f4] text-[#525252] rounded-lg p-5'>
                <h2 className='text-2xl font-bold mb-3'>
                    2. What is custom hook?
                </h2>
                <p>
                    A custom hook in React is a reusable function that allows you to share stateful logic between multiple components. With custom hooks, you can create your own hooks by using the built-in React hooks like useState, useEffect, useRef, and more. By defining a custom hook, you can encapsulate complex state management logic into a single function, making it easier to reuse in different parts of your application. <br />

                    The convention for naming custom hooks is to use the use prefix in the name of the function. For example, you might create a custom hook called useCounter that manages a counter state with the useState hook. Other components can then use this custom hook to manage their own counter state, without needing to write the same state management logic over and over again. <br />

                    Using custom hooks can help to improve the readability and maintainability of your code by abstracting away complex logic into simple and reusable functions. This can also help to reduce the amount of boilerplate code in your components, making them easier to understand and modify. Overall, custom hooks are a powerful feature in React that can help to make your code more modular and reusable.
                </p>
            </div>
            <div className='xl:w-4/5 w-11/12 mx-auto mt-5 bg-[#f4f4f4] text-[#525252] rounded-lg p-5'>
                <h2 className='text-2xl font-bold mb-3'>
                    3. What is useRef?
                </h2>
                <p>
                    useRef is a built-in hook in React that allows you to create a mutable reference to a DOM element or any other mutable value. It returns a reference object that can be used to store a value that persists between renders of a component. It is useful for accessing or modifying a value between renders, or when you want to store a value that is not part of the component's state. It can also be used to create a reference to a function that can be called from multiple places in a component.

                </p>
            </div>
            <div className='xl:w-4/5 w-11/12 mx-auto mt-5 mb-32 bg-[#f4f4f4] text-[#525252] rounded-lg p-5'>
                <h2 className='text-2xl font-bold mb-3'>
                    4. What is useMemo?
                </h2>
                <p>
                    useMemo is a built-in hook in React that allows you to memoize the result of a function so that it is only recomputed when its dependencies change. It takes a function that computes the value and an array of dependencies that determine when the value should be recomputed. It is useful for optimizing computationally expensive functions that are called frequently, but whose result does not change unless its inputs change.
                </p>
            </div>
        </div>
    );
};

export default Blogs;