import React from "react";
import './Questions.css'

const Questions = () => {
  return (
    <div class="p-4 row ques">
      <div className="col-lg-8">
        <h1 class="text-4xl font-bold text-center mb-10 text-violet-800 underline underline-offset-4 ">
          Blogs
        </h1>
        <ol>
          <li class="mb-8">
            <strong class="text-xl text-purple-800">
              What are the differences between props and state?
            </strong>
            <p class="font-medium text-violet-900 mt-3">
              - In React, <strong>"props"</strong> are used to pass data from a parent component to a child component, while <strong>"state"</strong> is used to manage data within a component.
            </p>
            <p class="font-medium text-violet-900 mt-3">
            <strong>"props"</strong> are passed from a parent component down to its children and cannot be modified by the child component. <strong>"state"</strong>, on the other hand, is managed and updated within a component and can only be modified by that component itself.
            </p>
          </li>
          <li class="mb-8">
            <strong class="text-xl text-purple-800">
            How does useState work?
            </strong>
            <p class="font-medium text-violet-900 mt-3">
              - useState is a function in React that allows you to create and update state variables in a functional component. It returns an array with two elements: the current value of the state variable and a function to update the value. When you call the update function, React will re-render the component and display the new value of the state variable.
            </p>
          </li>
          <li class="mb-8">
            <strong class="text-xl text-purple-800">
            What's the Purpose of useEffect other than fetching data?
            </strong>
            <p class="font-medium text-violet-900 mt-3">
              - useEffect is a hook in React that allows you to perform side effects in a functional component, such as updating the DOM. The effect function is called after every rendering cycle, and you can control its behavior with dependencies. Overall, useEffect is a powerful tool to manage the effects of your component and keep it in sync with the rest of the application.
            </p>
          </li>
          <li class="mb-8">
            <strong class="text-xl text-purple-800">
            How Does React work?
            </strong>
            <p class="font-medium text-violet-900 mt-3">
              - React is a JavaScript library for building user interfaces. It uses a virtual DOM to efficiently update and render changes to the UI. React components are reusable and can be nested to create complex UIs. Data flows in one direction, from parent components to child components, which helps to keep the code organized and easier to debug. React also allows developers to use JSX, a syntax extension that lets us write HTML-like code inside JavaScript files. Overall, React helps developers build scalable, maintainable, and performant web applications.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Questions;
