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
        <div className='outputPersonalDetails'>
            <h2> {personalDetails[0].output + " " + personalDetails[1].output} </h2>
            <div className='contactInfo'>
            <p>  ✉️ {personalDetails[2].output} </p>
            <p> 📞 {personalDetails[3].output} </p>
            </div>
        </div>
    )
}



export {PersonalInformation, Output}