import React, {useState} from 'react'

function ControlledForm() {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[age, setAge] = useState(0);
    const[salary, setSalary] = useState(0);

    console.log(firstName, lastName, age, salary)

  return (
    <form>

        <input name="firstName" value={firstName} placeholder='First Name' type='text' onChange={e => setFirstName(e.target.value)}/>
        <input name="lastName" value={lastName} placeholder='Last Name' type='text' onChange={e => setLastName(e.target.value)}/>
        <input name="age" value={age} placeholder='Age' type='text' onChange={e => setAge(e.target.value)}/>
        <input name="salary" value={salary} placeholder='Salary' type='number' onChange={e => setSalary(e.target.value)}/>
        <button>Submit</button>


    </form>
  )
}

export default ControlledForm