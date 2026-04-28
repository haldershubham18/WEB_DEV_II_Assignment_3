import React from 'react'
import StudentRow from './StudentRow'

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-title">STUDENT RECORDS</div>
        <div className="table-count">{students.length} entries</div>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <StudentRow
                key={index}
                student={student}
                onUpdateScore={onUpdateScore}
                studentId={index}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-students">
                No students added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
