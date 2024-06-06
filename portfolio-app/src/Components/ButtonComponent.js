import React from "react";

function ButtonComponent() {
    return <div>
        <div>
            <a href="#"
               className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">my projects</h5>
            </a>
        </div>
        <div>
            <a href="#"
               className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">about mse</h5>
            </a>
        </div>
    </div>;
}

export default ButtonComponent;