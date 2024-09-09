import { useState} from 'react'

// try to make as reusable as possible as i can probalby just reuse for rest of inputs and outputs (experiences and educational)
// User is able to delete, add and edit experiences and can close out of forms.
function Experiences({experiences, setExperiences}) {
    const [active, setActive] = useState('inactive')
    const [showExperiences, setShowExperiences] = useState('experiencesInput')
    const [currentForm, setCurrentForm] = useState({
        id: crypto.randomUUID() , name: false, title: false, description: false, dateStart: false , dateEnd : false
    })

    function editOnClick(active, experience = {id: crypto.randomUUID() , name: "", title: "", description: "", dateStart: "" , dateEnd : ""}) {
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
       for(let i = 0; i < experiences.length; i++) {
            if(experiences[i].id === currentForm.id) {
                setExperiences([...experiences], 
                    experiences[i].name = currentForm.name, 
                    experiences[i].title = currentForm.title,
                    experiences[i].description = currentForm.description,
                    experiences[i].dateStart = currentForm.dateStart,
                    experiences[i].dateEnd = currentForm.dateEnd
                    )
                return;
            }
       }
       return setExperiences([...experiences, currentForm])
            
    }
    

    function deleteOnClick(active, currentForm) {
        setExperiences(experiences => experiences.filter(item => item.id !== currentForm.id))
        editOnClick(active)
    }
   return (
        <>
            <button
            onClick={() => {
                editOnClick(active)
            }}
            
            >Add </button>
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
            {Object.keys(currentForm).map(function(key) {
                if(key === "id") {
                    return
                } else {
                    return (
                        <label
                            key = {key}
                        >
                            {key}
                            <input
                                value = {currentForm[key]}
                                onChange={(e) => {
                                    setCurrentForm({...currentForm, [key] : e.target.value})
                                }}
                            ></input>
                        </label>
                    )
                    
                }
            })}
            <button
                onClick={() => {
                    deleteOnClick(active, currentForm)
                }}
            >delete</button>
            <button
                onClick={() => {
                        finder(experiences, currentForm)
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