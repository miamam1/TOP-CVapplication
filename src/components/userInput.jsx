import { useState } from 'react'
import { Experiences } from './experienceInput'
function MainPage() {
    const [personalDetails, setPersonalDetails] = useState([
        {id: crypto.randomUUID(), input: "First name:", output: "John"},
        {id: crypto.randomUUID(), input: "Second name:", output: "Smith"},
        {id: crypto.randomUUID(), input: "Email:", output: "JohnSmith@gmail.com"},
        {id: crypto.randomUUID(), input: "Phone number:", output: "06302631313"},
    ])
    return (
    <div className="WholePage">
        <div className='inputs'>
            <h3>Personal details</h3>
            <PersonalInformation 
            personalDetails={personalDetails} 
            setPersonalDetails={setPersonalDetails}
            ></PersonalInformation>
            <h3>Experiences </h3>
            <Experiences></Experiences>
        </div>
        <div className="outputs">
            <h3>Final output</h3>
            <Output 
            personalDetails={personalDetails}
            ></Output>
        </div>
    </div>
    )
}

function PersonalInformation({personalDetails, setPersonalDetails}) {
    const [submit, setSubmit] = useState("active")
    const [edit, setEdit] = useState("inactive")
    const [active, setActive] = useState(false)
    function onSubmit() {
        if(submit == "active") {
            setSubmit("inactive")
            setEdit("active")
            setActive(true)
        } else {
            setSubmit("active")
            setActive(false)
            setEdit("inactive")
        }
    }
   return (
    <>
            {personalDetails.map((info) => (
               <label
               key = {info.id}
               >
                {info.input}
                <input
                    disabled = {active}
                    value = {info.output}
                    onChange = {((e) => setPersonalDetails([...personalDetails], info.output = e.target.value))}
                ></input>
               </label>
            ))}
            <div>
                <button
                className={edit}
                onClick={onSubmit}
                >Edit</button>
                <button
                className={submit}
                onClick={onSubmit}
                >Submit</button>
            </div>
   </>
   )  
}


function Output({personalDetails}) {
    return (
        <>
        {personalDetails.map((info) => (
            <p key = {info.id}> {info.input} {info.output} </p>
        ))}
        </>
    )
}


//  needs to be subbmited then do also think about making this code as reusable as possible 
// need to have two things basically one form and one final product/draft
// need to be able to add multiple education / work exp (both very similar so should use reusable components)
// check last two lessons very useful for this
export {MainPage}