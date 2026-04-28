import React, { useState } from 'react'

function StudentRow({ student, onUpdateScore, studentId }) {
  const status = student.score >= 40 ? 'Pass' : 'Fail'
  const statusClass = status === 'Pass' ? 'pass' : 'fail'
  const [updateScore, setUpdateScore] = useState(student.score)

  const handleSave = () => {
    onUpdateScore(studentId, updateScore)
  }

  const handleInputChange = (e) => {
    const newScore = parseInt(e.target.value, 10)
    if (!isNaN(newScore)) {
      setUpdateScore(newScore)
    }
  }

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td className={`status ${statusClass}`}>{status}</td>
      <td>
        <input
          type="number"
          value={updateScore}
          onChange={handleInputChange}
          className="score-input"
          min="0"
          max="100"
        />
        <button className="save-btn" onClick={handleSave}>Save</button>
      </td>
    </tr>
  )
}

export default StudentRow
