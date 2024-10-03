import { useState } from "react";

function Experiences({ experiences, setExperiences }) {
    
  const [active, setActive] = useState("inactive");
  const [showExperiences, setShowExperiences] = useState("experiencesInput");
  const [currentForm, setCurrentForm] = useState({
    id: crypto.randomUUID(),
    name: false,
    title: false,
    description: false,
    dateStart: false,
    dateEnd: false,
  });
  const [copyForm, setCopy] = useState({});
  function editOnClick(
    active,
    experience = {
      id: crypto.randomUUID(),
      name: "",
      title: "",
      description: "",
      dateStart: "",
      dateEnd: "",
    }
  ) {
    if (active === "inactive") {
      setActive("experienceForm");
      setCurrentForm({ ...experience });
      setCopy({ ...experience });
      setShowExperiences("inactive");
    } else {
      setActive("inactive");
      setCurrentForm({
        id: crypto.randomUUID(),
        name: false,
        title: false,
        description: false,
        dateStart: false,
        dateEnd: false,
      });
      setShowExperiences("experiencesInput");
    }
  }

  function finder(experiences, currentForm) {
    for (let i = 0; i < experiences.length; i++) {
      if (experiences[i].id === currentForm.id) {
        setExperiences(
          [...experiences],
          (experiences[i].name = currentForm.name),
          (experiences[i].title = currentForm.title),
          (experiences[i].description = currentForm.description),
          (experiences[i].dateStart = currentForm.dateStart),
          (experiences[i].dateEnd = currentForm.dateEnd)
        );
        return true;
      }
    }
    return setExperiences([...experiences, currentForm]);
  }

  function deleteOnClick(active, currentForm) {
    setExperiences((experiences) =>
      experiences.filter((item) => item.id !== currentForm.id)
    );
    editOnClick(active);
  }
  return (
    <>
      <button
        className="add"
        onClick={() => {
          editOnClick(active);
        }}
      >
        Add{" "}
      </button>
      {experiences.map((experience) => (
        <div className={showExperiences} key={experience.id}>
          <p> {experience.title} </p>
          <button
            className="editIcon"
            onClick={() => {
              editOnClick(active, experience);
            }}
          >
            {" "}
            ✎{" "}
          </button>
        </div>
      ))}

      <div className={active}>
        {Object.keys(currentForm).map(function (key) {
          let required = "*";
          let type = "input";
          if (key === "dateStart" || key === "dateEnd") type = "date";
          if (key === "description") {
            required = "";
            return (
              <label className="formLabel" key={key}>
                {key + required}
                <textarea
                  type={type}
                  value={currentForm[key]}
                  onChange={(e) => {
                    setCurrentForm({ ...currentForm, [key]: e.target.value });
                    const index = experiences.findIndex(
                      (x) => x.id === currentForm.id
                    );
                    if (index !== -1)
                      setExperiences(
                        [...experiences],
                        (experiences[index][key] = e.target.value)
                      );
                  }}
                ></textarea>
              </label>
            );
          }
          if (key === "id") {
            return;
          } else {
            return (
              <label className="inputLabel" key={key}>
                {key + required}
                <input
                  type={type}
                  value={currentForm[key]}
                  onChange={(e) => {
                    setCurrentForm({ ...currentForm, [key]: e.target.value });
                    const index = experiences.findIndex(
                      (x) => x.id === currentForm.id
                    );
                    if (index !== -1)
                      setExperiences(
                        [...experiences],
                        (experiences[index][key] = e.target.value)
                      );
                  }}
                ></input>
              </label>
            );
          }
        })}
        <button
          onClick={() => {
            deleteOnClick(active, currentForm);
          }}
        >
          delete
        </button>
        <button
          onClick={() => {
            finder(experiences, currentForm);
            editOnClick(active);
          }}
        >
          submit
        </button>
        <button
          onClick={() => {
            setCurrentForm(copyForm);
            const index = experiences.findIndex((x) => x.id === copyForm.id);
            const copy = [...experiences];
            copy[index] = { ...copyForm };
            setExperiences([...copy]);
            editOnClick(active);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export { Experiences };
