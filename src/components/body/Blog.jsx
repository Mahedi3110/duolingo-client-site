import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle("Blog")

    return (
        <div className="flex flex-col flex-wrap text-justify md:mx-p2 px-28 pt-36 pb-36 bg-black text-white">
            <h1 className="text-5xl font-bold text-center underline text-orange-400">Question and Answer</h1>
            <div className="mt-16 mb-4">
                <div className="mb-1 flex text-orange-400">
                    <h1 className="text-xl font-bold mr-3">Q1.</h1>
                    <h1 className="text-xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                </div>
                <div className='mt-3'>
                    <div className="flex">
                        <p className="font-bold mr-2">Ans:</p>
                        <p className="text-justify">An access token is a credential used to access a protected resource, and a refresh token is used to obtain a new access token when the current one expires. They should be stored securely on the client-side, such as in browser cookies with the HttpOnly and Secure flags set, to prevent unauthorized access or theft.</p>
                    </div>
                </div>
                <div className="mt-10 mb-4">
                    <div className="mb-1 flex text-orange-400">
                        <h1 className="text-xl font-bold mr-3">Q2.</h1>
                        <h1 className="text-xl font-bold">Compare SQL and NoSQL databases?</h1>
                    </div>
                    <div className='mt-3'>
                        <div className="flex">
                            <p className="font-bold mr-3">Ans:</p>
                            <p className="text-justify">SQL databases are relational and use SQL, while NoSQL databases are non-relational and use document-based, key-value, or graph-based models. SQL is better for complex transactions, NoSQL for large volumes of unstructured data. SQL is rigid in schema, NoSQL is flexible.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="mb-1 flex text-orange-400">
                        <h1 className="text-xl font-bold mr-3">Q3.</h1>
                        <h1 className="text-xl font-bold">What is express js? What is Nest JS?</h1>
                    </div>
                    <div className='mt-3'>
                        <div className="flex">
                            <p className="font-bold mr-3">Ans:</p>
                            <p className="text-justify">Express.js is a popular minimalist web framework for Node.js, used for building web applications and APIs. It provides a simple and flexible API for handling HTTP requests, routing, middleware, and more.
                                <br /><br />
                                NestJS is a framework for building scalable and efficient server-side applications with Node.js. It is inspired by Angular and provides a modular architecture based on controllers, services, and modules, along with powerful features such as dependency injection, middleware, and more. It is often used for building enterprise-level applications and microservices.</p>
                        </div>
                    </div>
                </div >
                <div className="mt-10">
                    <div className="mb-1 flex text-orange-400">
                        <h1 className="text-xl font-bold mr-3">Q4.</h1>
                        <h1 className="text-xl font-bold">What is MongoDB aggregate and how does it work?</h1>
                    </div>
                    <div className='mt-3'>
                        <div className="flex">
                            <p className="font-bold mr-3">Ans:</p>
                            <p className="text-justify">MongoDB's aggregation framework is a pipeline-based tool that allows users to process and analyze data from one or more collections in a MongoDB database. It works by allowing users to specify a sequence of stages, each of which performs a specific operation on the input data and passes the result to the next stage in the pipeline. The output of the final stage in the pipeline is the result of the aggregation operation.</p>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Blog;