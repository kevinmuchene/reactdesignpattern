import React, {useRef} from 'react'

function UncontrolledForm() {

    const firstNameInput = useRef("");
    const lastNameInput = useRef("");
    const ageInput = useRef(0);
    const salaryInput = useRef(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;
        const age = ageInput.current.value;
        const salary = salaryInput.current.value;
        console.log(firstName, lastName, age, salary);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder='First Name' type='text' ref={firstNameInput}/>
        <input name="lastName" placeholder='Last Name' type='text' ref={lastNameInput}/>
        <input name="age" placeholder='Age' type='text' ref={ageInput}/>
        <input name="salary" placeholder='Salary' type='number' ref={salaryInput}/>
        <input type='submit' value={"Submit Details"}/>
    </form>
  )
}

export default UncontrolledForm