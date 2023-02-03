// import React, { useState } from 'react';
// import { DB } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';

// const Main = () => {
//   const [firstname, setFirstName] = useState('');
//   const [middlename, setMiddleName] = useState('');
//   const [lastname, setLastName] = useState('');
//   const [classs, setClasss] = useState('');
//   const [division, setDivision] = useState('');
//   const [address1, setAddress1] = useState('');
//   const [address2, setAddress2] = useState('');
//   const [landmark, setLandmark] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [pincode, setPincode] = useState('');

//   //for the class dropdown menu
//   const ClassData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   const divisionData = ['A', 'B', 'C', 'D', 'E'];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const addData = async () => {
//     try {
//       // Add a new document with a generated id.
//       const docRef = await addDoc(collection(DB, 'student'), {
//         firstname,
//         middlename,
//         lastname,
//         classs,
//         division,
//         address1,
//         address2,
//         landmark,
//         city,
//         pincode,
//       });
//       console.log('Document written with ID: ', docRef.id);
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   };

//   return (
//     <>
//       <h1>Student</h1>
//       <form onSubmit={handleSubmit}>
//         <label>First Name</label>
//         <input type="text" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)} />
//         <label>Middle Name</label>
//         <input type="text" placeholder="Enter Middle name" onChange={(e) => setMiddleName(e.target.value)} />
//         <label>Last Name</label>
//         <input type="text" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)} />
//         <label>Class</label>
//         <select value={classs} onChange={(e) => setClasss(e.target.value)}>
//           <option value="">Select a Class</option>
//           {ClassData.map((cls) => (
//             <option key={cls} value={cls}>
//               {cls}
//             </option>
//           ))}
//         </select>
//         <label>Division</label>
//         <select value={division} onChange={(e) => setDivision(e.target.value)}>
//           <option value="">Select a Division</option>
//           {divisionData.map((divs) => (
//             <option key={divs} value={divs}>
//               {divs}
//             </option>
//           ))}
//         </select>
//         <label>Address Line 1</label>
//         <textarea placeholder="Address Line 1" onChange={(e) => setAddress1(e.target.value)}></textarea>
//         <label>Address Line 2</label>
//         <textarea placeholder="Address Line 2" onChange={(e) => setAddress2(e.target.value)}></textarea>
//         <label>Landmark</label>
//         <input type="text" placeholder="Enter Landmark" onChange={(e) => setLandmark(e.target.value)} />
//         <label>City</label>
//         <input type="text" placeholder="Enter City" onChange={(e) => setCity(e.target.value)} />
//         <label>Pincode</label>
//         <input type="text" placeholder="Enter PinCode" onChange={(e) => setPincode(e.target.value)} />
//         <button onClick={addData}>Submit</button>
//       </form>
//     </>
//   );
// };

// export default Main;
