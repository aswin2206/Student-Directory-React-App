import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  const handleAdd = () => {
    if (!name.trim() || !course.trim()) return;
    const newStudent = { id: Date.now(), name, course };
    setStudents([...students, newStudent]);
    setName("");
    setCourse("");
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Directory</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="cards">
        {students.map((student) => (
          <div className="card" key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
