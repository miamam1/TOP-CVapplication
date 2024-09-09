import { useState } from 'react'

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
            <div className={`${submit} personalDetailsForm`}>
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
            </div>
            <div>
                <button
                className= {`${edit} edit`}
                onClick={onSubmit}
                >Edit</button>
                <button
                className={`${submit} personalButton`}
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
export {PersonalInformation, Output}