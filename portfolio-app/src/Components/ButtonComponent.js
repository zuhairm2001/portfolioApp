import React from "react";
import * as PropTypes from "prop-types";
import AboutMeComponent from "./AboutMeComponent";


function ButtonComponent() {
    const[showAboutMe, setShowAboutMe] = React.useState(false);
    const[textColor, setTextColor] = React.useState("white");
    const[aboutMeButtonStyle, setAboutMeButtonStyle] = React.useState("about-me-button");

    const textElementRef = React.useRef(null);


    const unHide = () => {
        setShowAboutMe((showAboutMe) => {
            setShowAboutMe(!showAboutMe);
        });
    };


    return <>
        <div className="grid grid-cols-2 pt-10 gap-48">
            <div>
                <button href="#"
                   className="button">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-gray-900">my
                        projects</h5>
                </button>
            </div>
            <div>
                <button onClick={() => unHide()}
                   className="button">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-gray-900 " ref={textElementRef}>about
                        me</h5>
                </button>
            </div>
        </div>
        {showAboutMe ? <AboutMeComponent/> : null }
    </>
}

export default ButtonComponent;