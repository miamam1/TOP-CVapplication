import {useState} from 'react'
import {PersonalInformation, Output} from './personalDetailsInput'
import { Experiences } from './experienceInput'
function MainPage() {
    const [personalDetails, setPersonalDetails] = useState([
        {id: crypto.randomUUID(), input: "First name:", output: "John"},
        {id: crypto.randomUUID(), input: "Second name:", output: "Smith"},
        {id: crypto.randomUUID(), input: "email:", output: "JohnSmith@gmail.com"},
        {id: crypto.randomUUID(), input: "Phone number:", output: "06302631313"},
    ])

    const [education, setEducation] = useState([
            {id: crypto.randomUUID(), name: "Cool primary school", title: "High school", description: "School", dateStart: "2025-03-27", dateEnd: "2027-04-03"},
            {id: crypto.randomUUID(), name: "College", title: "Computer scince BSC", description: "School", dateStart: "2025-03-27", dateEnd: "2025-03-27"}
        
    ])

    const [experiences, setExperiences] = useState([
        {id: crypto.randomUUID(), name: "Mcdonalds", title: "Cashier", description: "made burgers", dateStart: "2025-03-27", dateEnd: "2025-03-27"},
        {id: crypto.randomUUID(), name: "Wendy's", title: "Burger flipper", description: "made burgers", dateStart: "2025-03-27", dateEnd: "2025-03-27"}
    ])
    return (
    <div className="WholePage">
        <div className='inputs'>
            <h3>Personal details: </h3>
            <PersonalInformation 
            personalDetails={personalDetails} 
            setPersonalDetails={setPersonalDetails}
            ></PersonalInformation>
            <h3>Education: </h3>
            <Experiences
            experiences={education}
            setExperiences={setEducation}
            ></Experiences>
            <h3>Experience: </h3>
            <Experiences
            experiences={experiences}
            setExperiences={setExperiences}
            ></Experiences>
            
        </div>
        <div className="outputs">
            <Output 
            personalDetails={personalDetails}
            ></Output>
            
            <h4 className='ExperienceTitle'>Education</h4>
            {education.map((experience) =>
                <div 
                    key={experience.id}
                    className='experienceContainer'
                >
                    <h5>School: {experience.name}</h5>
                    <p>Study: {experience.title}</p>
                    {experience.description !== "" && <p> Description: {experience.description} </p>}
                    <p>{experience.dateStart} to {experience.dateEnd} </p>
                </div>
            )}

            <h4 className='ExperienceTitle' >Experience</h4>
            {experiences.map((experience) =>
                <div 
                key={experience.id}
                className='experienceContainer'
                >
                    <h5>Company: {experience.name}</h5>
                    <p>Position: {experience.title}</p>
                    <p> Role description: {experience.description} </p>
                    <p>{experience.dateStart} to {experience.dateEnd} </p>
                </div>
            )}
        </div>
    </div>
    )
}

export {MainPage}