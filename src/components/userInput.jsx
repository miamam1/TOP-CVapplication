import { useState } from 'react'

function PersonalInformation() {
    const [personalDetails, setPersonalDetails] = useState([
        {id: crypto.randomUUID(), input: "First name:", output: "John"},
        {id: crypto.randomUUID(), input: "Second name:", output: "Smith"},
        {id: crypto.randomUUID(), input: "Email:", output: "JohnSmith@gmail.com"},
        {id: crypto.randomUUID(), input: "Phone number:", output: "06302631313"},
    ])

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
    <div className='WholePage'>
        <div className='inputs'>
            <h2>Personal information:</h2>
            {personalDetails.map((info) => (
                <Input 
                    key = {info.id}
                    label = {info.input}
                    value = {info.output}
                    onChange={((e) => setPersonalDetails([...personalDetails], info.output = e.target.value))}
                    active = {active}   
                ></Input>
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
           
        </div>
        <div className='outputs'>
            {personalDetails.map((info) => (
                <Output
                    key = {info.id}
                    label = {info.input}
                    value = {info.output}
                ></Output>
            ))}
        </div>
    </div>
   )  
}

function Input({label, value, onChange, active}) {
    return (
        <label>
            {label}
            <input
                disabled={active}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}


function Output({label, value}) {
    return (
        <p> {label}  {value} </p>
    )
}


//  needs to be subbmited then do also think about making this code as reusable as possible 
// need to have two things basically one form and one final product/draft
// need to be able to add multiple education / work exp (both very similar so should use reusable components)
// check last two lessons very useful for this
export { PersonalInformation, Input, Output}