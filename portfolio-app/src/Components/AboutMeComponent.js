import React from "react";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'

function AboutMeComponent(props) {


    return<>

        <div className="grid grid-cols-2 pt-10 w-fit">
            <div className="flex justify-end pr-10">
                <img src="https://cdn.myanimelist.net/images/characters/7/83946.jpg" className="justify-start" alt="aboutme"/>
            </div>
            <div className="w-1/2 ">
                <p className="text-center text-lg font-normal tracking-tight text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>

        <ScrollAnimation animateIn="fadeIn" duration={2}>
            <div className="grid grid-cols-2 pt-10 w-fit">
                <img src="../../public/aboutMe.jpg" alt="aboutMe"/>
                <div className="w-1/2 ">
                    <p className="text-center text-lg font-normal tracking-tight text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={2}>
            <div className="grid grid-cols-2 pt-10 w-fit">
                <img src="../../public/aboutMe.jpg" alt="aboutMe"/>
                <div className="w-1/2 ">
                    <p className="text-center text-lg font-normal tracking-tight text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={2}>
            <div className="grid grid-cols-2 pt-10 w-fit">
                <img src="../../public/aboutMe.jpg" alt="aboutMe"/>
                <div className="w-1/2 ">
                    <p className="text-center text-lg font-normal tracking-tight text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </ScrollAnimation>
    </>;
}
export default AboutMeComponent;