// Footer.js
import React from 'react';

const FooterComponent = () => {
    return (
        <footer className=" text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    {/*{new Date().getDate()}*/}
                </div>
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/zuhairm2001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .296a12 12 0 00-3.797 23.4c.6.11.82-.26.82-.577v-2.185c-3.338.724-4.043-1.61-4.043-1.61a3.181 3.181 0 00-1.332-1.751c-1.089-.746.084-.73.084-.73a2.514 2.514 0 011.834 1.242c.96 1.644 2.52 1.168 3.135.892a2.515 2.515 0 01.745-1.573c-2.665-.303-5.466-1.32-5.466-5.88a4.61 4.61 0 011.23-3.216 4.266 4.266 0 01.115-3.17s1.005-.322 3.3 1.23a11.17 11.17 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23.33.87.36 1.842.113 3.17a4.61 4.61 0 011.228 3.216c0 4.567-2.805 5.573-5.478 5.866a2.832 2.832 0 01.824 2.183v3.242c0 .32.218.694.825.575A12 12 0 0012 .296z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/zuhair-malik-53322919b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19.998 3A1.99 1.99 0 0021.999 5v14a2.002 2.002 0 01-2.001 2h-14A1.999 1.999 0 013.999 19V5c0-1.099.9-2 1.998-2h14zM8.002 19v-9h-3v9h3zm-1.5-10.235c1.075 0 1.499-.749 1.5-1.691-.002-.941-.425-1.688-1.497-1.688C5.927 5.385 5.5 6.131 5.5 7.074c0 .942.425 1.691 1.502 1.691zM18 19v-5.396c0-2.981-1.581-4.379-3.689-4.379-1.691 0-2.52.942-2.975 1.605h-.043v-1.375h-3v9h3v-4.892c0-1.234.225-2.478 1.79-2.478 1.538 0 1.555 1.373 1.555 2.553V19h3z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
