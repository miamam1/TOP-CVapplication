import {useState} from 'react'
import {PersonalInformation, Output} from './personalDetailsInput'
import { Experiences } from './experienceInput'

function MainPage() {
    const [personalDetails, setPersonalDetails] = useState([
        {id: crypto.randomUUID(), input: "First name:", output: "John"},
        {id: crypto.randomUUID(), input: "Second name:", output: "Smith"},
        {id: crypto.randomUUID(), input: "Email:", output: "JohnSmith@gmail.com"},
        {id: crypto.randomUUID(), input: "Phone number:", output: "06302631313"},
    ])

    const [education, setEducation] = useState([
            {id: crypto.randomUUID(), name: "Cool primary school", title: "High school", description: "School", dateStart: "23/03/25", dateEnd: "23/04/2027"},
            {id: crypto.randomUUID(), name: "College", title: "Computer scince BSC", description: "School", dateStart: "23/03/25", dateEnd: "23/04/2027"}
        
    ])

    const [experiences, setExperiences] = useState([
        {id: crypto.randomUUID(), name: "Mcdonalds", title: "Cashier", description: "made burgers", dateStart: "23/03/25", dateEnd: "23/04/2027"},
        {id: crypto.randomUUID(), name: "Wendy's", title: "Burger flipper", description: "made burgers", dateStart: "23/03/25", dateEnd: "23/04/2027"}
    ])
    return (
    <div className="WholePage">
        <div className='inputs'>
            <h3>Personal details</h3>
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
            <h3>Final output</h3>
            <Output 
            personalDetails={personalDetails}
            ></Output>
            {education.map((experience) =>
                <div key={experience.id}>
                    <p>School: {experience.name}</p>
                    <p>Study: {experience.title}</p>
                    {experience.description !== "" && <p> Description: {experience.description} </p>}
                    <p>{experience.dateStart} to {experience.dateEnd} </p>
                </div>
            )}
            {experiences.map((experience) =>
                <div key={experience.id}>
                    <p>Company: {experience.name}</p>
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