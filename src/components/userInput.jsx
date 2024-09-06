import { useState } from 'react'

function PersonalInformation() {
   const [fullName, setFullName] = useState('John Smith')
   const[email, setEmail] = useState('JohnSmith@gmail.com')
   const [phoneNumber, setPhonenumber] = useState('+22 06302 631313')

   function inputHandler(e, setFunction) {
        setFunction(e.target.value)      
   }
   
   return (
    <div className='WholePage'>
        <div className='inputs'>
            <Input
                label="Full name"
                value = {fullName}
                onChange = {(e) => inputHandler(e, setFullName)}
            />
            <Input
                label="Email"
                value = {email}
                onChange = {(e) => inputHandler(e, setEmail)}
            />
            <Input
                label="Phone number"
                value = {phoneNumber}
                onChange = {(e) => inputHandler(e, setPhonenumber)}
            />
        </div>
        <div className='outputs'>
            <Output
                label = "Full name"
                value = {fullName}
            />
            <Output
                label = "Email"
                value = {email}
            />
            <Output
            label = "Phone number"
            value = {phoneNumber}
            />
        </div>
    </div>
   )  
}

function Input({label, value, onChange}) {
    return (
        <label>
            {label}
            <input
                value={value}
                onChange={onChange}
            />
        </label>
    )
}


function Output({label, value}) {
    return (
        <p> {label} : {value} </p>
    )
}


//  needs to be subbmited then do also think about making this code as reusable as possible 
// need to have two things basically one form and one final product/draft
// need to be able to add multiple education / work exp (both very similar so should use reusable components)
// check last two lessons very useful for this
export { PersonalInformation, Input, Output}