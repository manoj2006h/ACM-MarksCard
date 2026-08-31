
import { useState } from 'react'
import './App.css'

function App() {

  const [subject, setSubject] = useState(0);
  const [marks, setMarks] = useState([])
  const [total, setTotal] = useState(0)
  const [maxMarks, setMaxMarks] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const inputs = []

  for (let i = 1; i <= subject; i++) {
    inputs.push(
      <div key={i}>
        <input
          className="bg-gray-500"
          type="number"
          placeholder={`Subject ${i} marks`}
          onChange={(e) => {
            let newMarks = [...marks]
            newMarks[i - 1] = Number(e.target.value)
            setMarks(newMarks)
          }}
        />
      </div>
    )
  }

  const percentage = (total / (subject * maxMarks)) * 100

  const setGrade = () => {

    if (percentage >= 90) {
     return 'A+'
    }
    else if (percentage >= 80) {
     return 'A'
    }
    else if (percentage >= 70) {
     return 'B+'
    }
    else if (percentage >= 60) {
     return 'B'
    }
    else if (percentage >= 50) {
       return'C+'
    }
    else if (percentage >= 40) {
     return 'C'
    }
    else if (percentage >= 35) {
     return 'D'
    }
    else {
     return 'Fail'
    }
  }



  // console.log(percentage);

  return (
    <>

      <div>
        <input type="number"
          placeholder='Enter Maximum marks'
          onChange={(e) => {
            setMaxMarks(Number(e.target.value))
          }} />
      </div>

      <div>
        <input type="number"
          placeholder='Enter Number of subjecs'
          onChange={(e) => {
            setSubject((Number(e.target.value)))
          }} />
      </div>



      {inputs}

      <div>
        <button
          onClick={() => {
            let temp = 0;
            for (let i = 0; i < marks.length; i++) {
              temp += marks[i]
            }
            setTotal(temp)
            setShowResult(true)

          }}>Enter</button>
      </div>

      {showResult && (<div>
        <h1>Total Marks : {total}</h1>
        <h1>Percetage : {percentage}%</h1>
        <h1>Grade : {setGrade()}</h1>
      </div>)}
    </>
  )
}

export default App
