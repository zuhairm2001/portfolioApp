import React from "react";
import * as PropTypes from "prop-types";
import AboutMeComponent from "./AboutMeComponent";
import MyProjectsComponent from "./MyProjectsComponent";

function ButtonComponent() {
    const[showAboutMe, setShowAboutMe] = React.useState(false);
    const[showProjects, setShowProjects] = React.useState(false);
    const textElementRef = React.useRef(null);


    const unHide = (button) => {

        if(button === "aboutMe"){
            setShowAboutMe(!showAboutMe);
            setShowProjects(false);
        }
        if(button === "projects"){
            setShowProjects(!showProjects);
            setShowAboutMe(false);
        }

    };


    return <>
        <div className="grid grid-cols-2 pt-10 gap-48">
            <div>
                <button onClick={() => unHide("projects")}
                   className="button">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-gray-900">my
                        projects</h5>
                </button>
            </div>
            <div>
                <button onClick={() => unHide("aboutMe")}
                   className="button">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-gray-900 " ref={textElementRef}>about
                        me</h5>
                </button>
            </div>
        </div>
        {showAboutMe ? <AboutMeComponent/> : null }
        {showProjects ? <MyProjectsComponent/> : null}
    </>
}

export default ButtonComponent;