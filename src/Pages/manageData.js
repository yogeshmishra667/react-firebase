import React, {useState, useEffect} from 'react';
import { updateDoc, serverTimestamp } from 'firebase/firestore';
import { DB } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';



const EditStudent = () => {
  const [student, setStudent] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    // Update the student document in Firestore
    setIsEditing(false);
  };

 useEffect(() => {
  const updateData = async (id) => {
    try {
      const docRef = doc(DB, 'student', id);
const updateTimestamp = await updateDoc(docRef, {
  timestamp: serverTimestamp(),
});
    }
    
  }, []);

  return (
    <div>
      <h2>Student Information</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={student.firstName}
            disabled={!isEditing}
            onChange={(e) => setStudent({ ...student, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={student.lastName}
            disabled={!isEditing}
            onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={student.age}
            disabled={!isEditing}
            onChange={(e) => setStudent({ ...student, age: e.target.value })}
          />
        </div>
        {/* And so on, for each field in the student document */}
      </form>
      {!isEditing && (
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      )}
      {isEditing && (
        <>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default EditStudent;

//  <div>
//       <h2>Student Information</h2>
//       <form>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             value={student.firstName}
//             disabled={!isEditing}
//             onChange={(e) => setStudent({ ...student, firstName: e.target.value })}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             value={student.lastName}
//             disabled={!isEditing}
//             onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             value={student.age}
//             disabled={!isEditing}
//             onChange={(e) => setStudent({ ...student, age: e.target.value })}
//           />
//         </div>
//         {/* And so on, for each field in the student document */}
//       </form>
//       {!isEditing && (
//         <button type="button" onClick={handleEdit}>
//           Edit
//         </button>
//       )}
//       {isEditing && (
//         <>
//           <button type="button" onClick={handleSave}>
//             Save
//           </button>
//           <button type="button" onClick={handleCancel}>
//             Cancel
//           </button>
//         </>
//       )}
//     </div>
//   );