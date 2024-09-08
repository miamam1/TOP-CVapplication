import { useState} from 'react'

// try to make as reusable as possible as i can probalby just reuse for rest of inputs and outputs (experiences and educational)
// TODO:  user is able to edit, submit and close experiences but cant delete or add new experiences
function Experiences({experiences, setExperiences}) {
    const [active, setActive] = useState('inactive')
    const [showExperiences, setShowExperiences] = useState('experiencesInput')
    const [currentForm, setCurrentForm] = useState({
        id: crypto.randomUUID() , name: false, title: false, description: false, dateStart: false , dateEnd : false
    })

    function editOnClick(active, experience) {
        if(active === "inactive") {
            setActive("experienceForm")
            setCurrentForm({...experience})
            setShowExperiences('inactive')
        } else {
            setActive("inactive")
            setCurrentForm({id: crypto.randomUUID() , name: false, title: false, description: false, dateStart: false , dateEnd : false})
            setShowExperiences('experiencesInput')
        }
    }

    function finder(experiences, currentForm) {
        experiences.map((experience,index) => {
            if(experience.id === currentForm.id) {
                setExperiences([...experiences], 
                    experience.name = currentForm.name, 
                    experience.title = currentForm.title,
                    experience.description = currentForm.description,
                    experience.dateStart = currentForm.dateStart,
                    experience.dateEnd = currentForm.dateEnd
                    )
                console.log(experiences)
                return
            }
            })

    }
   return (
        <>
            <button>Add </button>
            {experiences.map((experience) => (
                <div 
                className={showExperiences}
                key = {experience.id}
                >
                <p> {experience.title} </p>
                <button 
                 onClick={() => (editOnClick(active, experience))}
                > edit</button>
                </div>
            ))}
            
            <div className={active}>
            <label>
                {Object.keys(currentForm)[1]}
                <input
                value = {currentForm.name}
                onChange={((e) => setCurrentForm({...currentForm, name : e.target.value}))}
                >
                </input>
            </label>
            <label>
                {Object.keys(currentForm)[2]}
                <input
                value = {currentForm.title}
                onChange={(e) => ( setCurrentForm({...currentForm, title : e.target.value}))}
                >
                </input>
            </label>
            <button>delete</button>
            <button
                onClick={() => {finder(experiences, currentForm)
                        editOnClick(active)           
                }}
            >submit</button>
            <button
                onClick={() => (editOnClick(active))}
            >close</button>
            </div>
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