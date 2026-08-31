import { useState } from 'react'
import './App.css'

function App() {

  const [subject, setSubject] = useState(0)
  const [marks, setMarks] = useState([])
  const [total, setTotal] = useState(0)
  const [maxMarks, setMaxMarks] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const inputs = []

  for (let i = 1; i <= subject; i++) {
    inputs.push(
      <div key={i} className="mb-3">
        <input
          className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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

  const percentage =
    subject > 0 && maxMarks > 0
      ? (total / (subject * maxMarks)) * 100
      : 0

  const getGrade = () => {

    if (percentage >= 90) return 'A+'
    else if (percentage >= 80) return 'A'
    else if (percentage >= 70) return 'B+'
    else if (percentage >= 60) return 'B'
    else if (percentage >= 50) return 'C+'
    else if (percentage >= 40) return 'C'
    else if (percentage >= 35) return 'D'
    else return 'Fail'
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Marks card Calculations by Manoj H
        </h1>

        {/* Maximum Marks */}
        <input
          className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          type="number"
          placeholder="Enter Maximum Marks"
          onChange={(e) => {
            setMaxMarks(Number(e.target.value))
            setShowResult(false)
          }}
        />

        {/* Number of Subjects */}
        <input
          className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          type="number"
          value={subject || ''}
          placeholder="Enter Number of Subjects"
          onChange={(e) => {
            setSubject(Number(e.target.value))
            setShowResult(false)
          }}
        />

        {/* Subject Inputs */}
        {inputs}

        {/* Calculate Button */}
        <button
          className="mt-2 w-full rounded-lg bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          onClick={() => {

            let temp = 0

            for (let i = 0; i < marks.length; i++) {
              temp += marks[i]
            }

            setTotal(temp)
            setShowResult(true)
          }}
        >
          Calculate
        </button>

        {/* Result */}
        {showResult && (
          <div className="mt-6 rounded-xl bg-gray-100 p-5">

            <h2 className="mb-3 text-xl font-bold text-gray-800">
              Result
            </h2>

            <p className="mb-2 text-lg">
              Total Marks:
              <span className="ml-2 font-bold">{total}</span>
            </p>

            <p className="mb-2 text-lg">
              Percentage:
              <span className="ml-2 font-bold">
                {percentage.toFixed(2)}%
              </span>
            </p>

            <p className="text-lg">
              Grade:
              <span className="ml-2 font-bold text-blue-600">
                {getGrade()}
              </span>
            </p>

          </div>
        )}

        <div>
          <button
          className='bg-slate-700 text-white mt-2 p-1 rounded-lg'
          onClick={()=> {
            setSubject(0)
            setMarks([])
            setTotal(0)
            setShowResult(false)
          }}
          >Refresh</button>
        </div>

      </div>
    </div>
  )
}

export default App