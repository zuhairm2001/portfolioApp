import React from "react";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'
import images from "../ImageList";


function AboutMeComponent(props) {


    return<>

        <div className="grid grid-cols-2 pt-10 pb-10 w-fit">
            <div className="flex justify-end pr-10">
                <img src="/aboutMe.jpg" className="justify-start rounded-full" alt="aboutme" height={300} width={300}/>
            </div>
            <div className="w-1/2 ">
                <p className="text-center text-lg font-normal tracking-tight text-white">
                    Welcome to my portfolio! I'm a Computer Science student at the University of Technology Sydney (UTS),
                    majoring in <b>Artificial Intelligence</b> and am currently completing my honours year. My passion lies in
                    both general software development and the innovative world of AI.
                </p>
                <p className="text-center text-lg font-normal tracking-tight text-white pt-3">
                    Here, you can explore my projects,
                    skills, and experiences that showcase my journey and expertise in creating intelligent solutions and
                    robust software applications. Dive in to see how I merge creativity with technology to solve complex
                    problems and drive progress in the tech industry.

                </p>
            </div>
        </div>

        <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h1 className="justify-center text-4xl font-bold tracking-tight text-white pb-6 pt-6">
                languages
            </h1>
            <div className="grid grid-cols-4">
                {images.map(image => (
                    <img src={image} key={image} alt="image" height='150' width='150'
                         className="p-4"/>
                ))}
            </div>


        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h1 className="justify-center text-4xl font-bold tracking-tight text-white pb-6 pt-6">
                experience
            </h1>
            <h1 className="justify-center text-2xl font-bold tracking-tight text-white pb-6 pt-6">
                - risk professionals | 2022-present
            </h1>
            <h1 className="justify-center text-xl font-normal tracking-tight text-white pb-6 pt-6">
                lead developer and manager
            </h1>
            <ul className="justify-start text-lg font-normal tracking-tight text-white pb-6">
                <li>- founding member</li>
                <li>- developed website interface using wordpress stack</li>
                <li>- liason for partner companies</li>
                <li>- first contact for b2b and b2c</li>
                <li>- in charge of social media and graphic creation</li>
                <li>- developed tool to conduct current state assessment/audit for ISO22301, CPS234 and CPS230 </li>

            </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h1 className="justify-center text-2xl font-bold tracking-tight text-white pb-6 pt-6">
                - loanoptions.ai | 2022 feb-may
            </h1>
            <h1 className="justify-center text-xl font-normal tracking-tight text-white pb-6 pt-6">
                data science and software intern
            </h1>
            <ul className="justify-start text-lg font-normal tracking-tight text-white pb-6">
                <li>- participated in agile work environment</li>
                <li>- resolved a major roadblock pertaining to data collection and analysis for a potential new feature</li>
                <li>- optimised driver license OCR program to improve functionality and efficiency for broker dashboard</li>
                <li>- suggested and developed an document search tool with nlp to improve broker efficiency</li>


            </ul>
        </ScrollAnimation>
    </>;
}

export default AboutMeComponent;