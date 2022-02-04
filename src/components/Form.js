import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [error, setError] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (firstName.length > 1) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      }
      const dataArr = [...submittedData, formData]
      setSubmittedData(dataArr)
      setFirstName('')
      setLastName('')
      setError([])
    } else {
      setError(['First name please'])
    }
  }

  const renderSubmittedData = submittedData.map(el => {
      return (
        <div key={el.firstName}>
          {el.firstName} {el.lastName}
        </div>
      )
    }
  )

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      <h3>Submitted Data</h3>
      {renderSubmittedData}
      {error.length > 0 ? error.map(er => <div key={er[0]}>{er}</div>) : null }
    </form>
  );
}

export default Form;
