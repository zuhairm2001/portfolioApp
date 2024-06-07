import React from "react";
import * as PropTypes from "prop-types";
import AboutMeComponent from "./AboutMeComponent";


function ButtonComponent() {
    const[showAboutMe, setShowAboutMe] = React.useState(false);
    const[backgroundColor, setBackgroundColor] = React.useState("282C34")
    const[textColor, setTextColor] = React.useState("white");

    const elementRef = React.useRef(null);
    const textElementRef = React.useRef(null);


    const unHide = (e) => {
        setShowAboutMe((prevShowAboutMe) => {
            const newShowAboutMe = !prevShowAboutMe;
            const newBackgroundColor = newShowAboutMe ? "white" : "#282C34";
            const newTextColor = newShowAboutMe ? "white" : "black";

            setBackgroundColor(newBackgroundColor);
            setTextColor(newTextColor);

            elementRef.current.style.backgroundColor = newBackgroundColor;
            elementRef.current.style.borderRadius = 3;
            textElementRef.current.style.color = textColor;

            return newShowAboutMe;
        });

    };


    return <>
        <div className="grid grid-cols-2 pt-10 gap-48">
            <div>
                <a href="#"
                   className="block max-w-sm p-8 bg-282C34 border-gray-200 rounded-lg shadow hover:bg-white">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-gray-900">my
                        projects</h5>
                </a>
            </div>
            <div onClick={() => unHide()}>
                <a href="#"
                   className="block max-w-sm p-8 bg-282C34 border-gray-200 rounded-lg shadow hover:bg-white" ref={elementRef}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-gray-900 " ref={textElementRef}>about
                        me</h5>
                </a>
            </div>
        </div>
        {showAboutMe ? <AboutMeComponent/> : null }
    </>
}

export default ButtonComponent;