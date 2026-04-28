import React, { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({ name: '', score: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClear = () => {
    setFormData({ name: '', score: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim() === '' || formData.score === '') {
      alert('Please fill in both fields')
      return
    }
    
    const score = parseInt(formData.score, 10)
    if (isNaN(score)) {
      alert('Please enter a valid score')
      return
    }

    onAddStudent({
      name: formData.name.trim(),
      score: score
    })

    setFormData({ name: '', score: '' })
  }

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <div style={{display: 'flex', alignItems: 'flex-end', gap: '10px', flexWrap: 'wrap'}}>
        <div className="form-group">
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Student name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Score:</label>
          <input
            type="number"
            id="score"
            name="score"
            value={formData.score}
            onChange={handleInputChange}
            placeholder="Score (0-100)"
            className="form-input"
            min="0"
            max="100"
          />
        </div>
        <button type="button" onClick={handleClear} className="clear-btn" title="Clear">✕</button>
        <button type="submit" className="submit-btn">Add Student</button>
      </div>
    </form>
  )
}

export default AddStudentForm
