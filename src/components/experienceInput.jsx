import { useState} from 'react'

// try to make as reusable as possible as i can probalby just reuse for rest of inputs and outputs (experiences and educational)
function Experiences() {
    const [experiences, setExperiences] = useState([
        {id: crypto.randomUUID(), name: "Worked at a place", title: "Mcdonalds", description: "made burgers", dateStart: "23/03/25", dateEnd: "23/04/2027"},
        {id: crypto.randomUUID(), name: "Worked at a place", title: "Wendy's", description: "made burgers", dateStart: "23/03/25", dateEnd: "23/04/2027"}
    ])

   return (
        <>
            {experiences.map((experience) => (
                <div 
                id = {experience.id}
                >
                <p> {experience.title} </p>
                <button> edit</button>
                <button>delete</button>
                </div>
            ))}
        
        </>
   )
   
}


export {Experiences}
/*
could probably re use some lo
gic from userinput
try not to put evertying in one function probably
uhh needs to have an add thingy which lets yo add another education exp
so differnt kinda 
probably shouldnt have all forms at once cus look ugly and confusing 
yes.



               homepage
               /       /
input contianer         output container
*/