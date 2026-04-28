import React, { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { name: 'Aman', score: 76 },
    { name: 'Riya', score: 45 },
    { name: 'Karan', score: 90 },
    { name: 'Neha', score: 32 },
  ])

  const handleUpdateScore = (studentId, newScore) => {
    const updatedStudents = [...students]
    updatedStudents[studentId].score = newScore
    setStudents(updatedStudents)
  }

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent])
  }

  // Calculate statistics
  const totalStudents = students.length
  const passedStudents = students.filter(s => s.score >= 40).length
  const avgScore = students.length > 0 
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / students.length)
    : 0

  return (
    <div className="app">
      <Header />
      <main className="container">
        <AddStudentForm onAddStudent={handleAddStudent} />
        
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-label">TOTAL</div>
            <div className="stat-value">{totalStudents}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">PASSED</div>
            <div className="stat-value">{passedStudents}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">AVG SCORE</div>
            <div className="stat-value">{avgScore}</div>
          </div>
        </div>

        <StudentTable students={students} onUpdateScore={handleUpdateScore} />
      </main>
    </div>
  )
}

export default App
