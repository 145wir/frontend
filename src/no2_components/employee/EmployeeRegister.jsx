import React, { useState } from 'react'

const initialEmps = [
    {id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600},
    {id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600},
    {id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600},
    {id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600},
]

const initialEmp = {
  id: '', name: '', email: '', job: '', pay:''
}

const initialState = {
    empTable: initialEmps, emp: initialEmp
}

const reducer = (state, action)=>{
    switch(action.type){
        case "change":
            const {name, value}=event.target;
            return{
                ...state,
                emp: {...state.emp, [name]: value}
            }
    }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}


function EmployeeRegister({setState}) {
    const [emp, setEmp]=useState(initialEmp);
    const handleChange = (event)=>{
        const {name, value}=event.target;
        setEmp(prev => (
            {...prev, [name]: value}
        ))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setState(prev => (
            {
                ...prev,
                empTable: [
                    ...prev.empTable, {...emp, id: Date.now()}
                ]
            }
        ))
        setState(prev=>({
            ...prev, selectedId: prev.empTable[prev.empTable.length-1].id
        }))
        setEmp(initialEmp)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label>이름</label>
                <input
                    type="text"
                    name="name"
                    value={emp.name}
                    onChange={handleChange}
                    placeholder='이름'
                />
            </div>
            <div>
                <label>이메일</label>
                <input
                    type="email"
                    name="email"
                    value={emp.email}
                    onChange={handleChange}
                    placeholder='이메일'
                />
            </div>
            <div>
                <label>직종</label>
                <input
                    type="job"
                    name="job"
                    value={emp.job}
                    onChange={handleChange}
                    placeholder='직종'
                />
            </div>
            <div>
                <label>급여</label>
                <input
                    type="number"
                    name="pay"
                    value={emp.pay}
                    onChange={handleChange}
                    placeholder='급여'
                />
            </div>
            <button>등록</button>
        </div>
    </form>
      
    </>
  )
}

export default EmployeeRegister
