// FIRSTS START

// import React from 'react';

// function Table() {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>John Doe</td>
//           <td>30</td>
//           <td>john@example.com</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jane Smith</td>
//           <td>25</td>
//           <td>jane@example.com</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Mike Johnson</td>
//           <td>35</td>
//           <td>mike@example.com</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// export default Table;



// its secound ok


// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>phone no</th>
//           <th>Image</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>John Doe</td>
//           <td>john@example.com</td>
//           <td>9876513432</td>
//           <td>
//             <input type="file" onChange={handleImageChange} />
//           </td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jane Smith</td>
//           <td>jane@example.com</td>
          
//           <td>
//             <input type="file" onChange={handleImageChange} />
//           </td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Mike Johnson</td>
//           <td>mike@example.com</td>
//           <td>9876513432</td>
//           <td>
//             <input type="file" onChange={handleImageChange} />
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// export default Table;







// ok hai


// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//     // Add your edit logic here
//   };

//   const handleDelete = (id) => {
//     console.log(`Deleting row with ID ${id}`);
//     // Add your delete logic here
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>phone no</th>
//           <th>Email</th>
//           <th>Image</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>John Doe</td>
//           <td>98876542</td>
//           <td>john@example.com</td>
//           <td>
//             <input type="file" onChange={handleImageChange} />
//           </td>
//           <td>
//             <button onClick={() => handleEdit(1)}>Edit</button>
//             <button onClick={() => handleDelete(1)}>Delete</button>
//           </td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jane Smith</td>
//           <td>98876542</td>
//           <td>jane@example.com</td>
//           <td>
//             <input type="file" onChange={handleImageChange} />
//           </td>
//           <td>
//             <button onClick={() => handleEdit(2)}>Edit</button>
//             <button onClick={() => handleDelete(2)}>Delete</button>
//           </td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Mike Johnson</td>
//           <td>98876542</td>
//           <td>mike@example.com</td>
//           <td>
//             <input type="file" onChange={handleImageChange} />
//           </td>
//           <td>
//             <button onClick={() => handleEdit(3)}>Edit</button>
//             <button onClick={() => handleDelete(3)}>Delete</button>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// export default Table;










// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', email: 'mike@example.com' }
//   ]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//     // Add your edit logic here
//   };

//   const handleDelete = (id) => {
//     console.log(`Deleting row with ID ${id}`);
//     // Add your delete logic here
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     // Add your save logic here
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', email: '' };
//     setRows([...rows, newRow]);
//   };

//   return (
//     <div>
    
//     <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>phone</th>
//             <th>Email</th>
  
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td><input type="text" value={row.name} onChange={(e) => {}} /></td>
//               <td><input type="text" value={row.email} onChange={(e) => {}} /></td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(row.id)}>Edit</button>
//                 <button onClick={() => handleDelete(row.id)}>Delete</button>
//                 <button onClick={() => handleSave(row.id)}>Save</button>
//                 <button onClick={handleAdd}>Add</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;




















// OK HO GYA AB BTUUON KO SET KARNA HAI




// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'John Doe', phone: '08-83298390932', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//     // Add your edit logic here
//   };

//   const handleDelete = (id) => {
//     console.log(`Deleting row with ID ${id}`);
//     // Add your delete logic here
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     // Add your save logic here
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '08-83298390932', email: '@gmail.com' };
//     setRows([...rows, newRow]);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td><input type="text" value={row.name} onChange={(e) => {}} /></td>
//               <td><input type="text" value={row.phone} onChange={(e) => {}} /></td>
//               <td><input type="text" value={row.email} onChange={(e) => {}} /></td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(row.id)}>Edit</button>
//                 <button onClick={() => handleDelete(row.id)}>Delete</button>
//                 <button onClick={() => handleSave(row.id)}>Save</button>
//                 <button onClick={handleAdd}>Add</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </div>
//   );
// }

// export default Table;



















// DELETE BUTTON SET HO GYA





// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'John Doe', phone: '08-83298390932', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//     // Add your edit logic here
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter(row => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     // Add your save logic here
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '08-83298390932', email: '@gmail.com' };
//     setRows([...rows, newRow]);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td><input type="text" value={row.name} onChange={(e) => {}} /></td>
//               <td><input type="text" value={row.phone} onChange={(e) => {}} /></td>
//               <td><input type="text" value={row.email} onChange={(e) => {}} /></td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(row.id)}>Edit</button>
//                 <button onClick={() => handleDelete(row.id)}>Delete</button>
//                 <button onClick={() => handleSave(row.id)}>Save</button>
//                 <button onClick={handleAdd}>Add</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </div>
//   );
// }

// export default Table;











// IS MIAN CHCK KARNA HAI SABER

// OK HAI SAVE K BUTOON ADD KARNA HAI

// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'MALIK ', phone: '897398723986', email: 'MALIKw@GMAIL.COM' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);
//   const [editingRow, setEditingRow] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     setEditingRow(id);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter(row => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     setEditingRow(null);
//     // Add your save logic here
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '08-83298390932', email: '@gmail.com' };
//     setRows([...rows, newRow]);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>{editingRow === row.id ? <input type="text" value={row.name} onChange={(e) => {}} /> : row.name}</td>
//               <td>{editingRow === row.id ? <input type="text" value={row.phone} onChange={(e) => {}} /> : row.phone}</td>
//               <td>{editingRow === row.id ? <input type="text" value={row.email} onChange={(e) => {}} /> : row.email}</td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 {editingRow !== row.id ? (
//                   <>
//                     <button onClick={() => handleEdit(row.id)}>Edit</button>
//                     <button onClick={() => handleDelete(row.id)}>Delete</button>
//                     <button onClick={handleAdd}>Add</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleSave(row.id)}>Save</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
     
      
//       </table>
//     </div>
//   );
// }

// export default Table;


























// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'MALIK ', phone: '897398723986', email: 'MALIKw@GMAIL.COM' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);
//   const [editingRow, setEditingRow] = useState(null);
//   const [newRowAdded, setNewRowAdded] = useState(false); // Track if a new row is being added

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     setEditingRow(id);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter(row => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     setEditingRow(null);
//     // Add your save logic here
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '08-83298390932', email: '@gmail.com' };
//     setRows([...rows, newRow]);
//     setNewRowAdded(true); // Set flag to indicate new row added
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.name} onChange={(e) => {}} />
//                 ) : (
//                   (newRowAdded && row.name === '') ? 'New Name' : row.name
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.phone} onChange={(e) => {}} />
//                 ) : (
//                   (newRowAdded && row.phone === '08-83298390932') ? 'New Phone' : row.phone
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.email} onChange={(e) => {}} />
//                 ) : (
//                   (newRowAdded && row.email === '@gmail.com') ? 'New Email' : row.email
//                 )}
//               </td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 {editingRow !== row.id ? (
//                   <>
//                     <button onClick={() => handleEdit(row.id)}>Edit</button>
//                     <button onClick={() => handleDelete(row.id)}>Delete</button>
//                     <button onClick={handleAdd}>Add</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleSave(row.id)}>Save</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;







































// edit button jsut ak pay he active howa







// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'MALIK ', phone: '897398723986', email: 'MALIKw@GMAIL.COM' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);
//   const [editingRow, setEditingRow] = useState(null);
//   const [newRowAdded, setNewRowAdded] = useState(false); // Track if a new row is being added

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     setEditingRow(id);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter(row => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     setEditingRow(null);
//     setNewRowAdded(false);
//     // Add your save logic here
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '08-83298390932', email: '@gmail.com' };
//     setRows([...rows, newRow]);
//     setNewRowAdded(true); // Set flag to indicate new row added
//     setEditingRow(newId); // Set editingRow to the newly added row
//   };

//   const handleInputChange = (e, id, field) => {
//     const updatedRows = rows.map(row => {
//       if (row.id === id) {
//         return { ...row, [field]: e.target.value };
//       }
//       return row;
//     });
//     setRows(updatedRows);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.name} onChange={(e) => handleInputChange(e, row.id, 'name')} />
//                 ) : (
//                   (newRowAdded && row.name === '') ? 'New Name' : row.name
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.phone} onChange={(e) => handleInputChange(e, row.id, 'phone')} />
//                 ) : (
//                   (newRowAdded && row.phone === '08-83298390932') ? 'New Phone' : row.phone
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.email} onChange={(e) => handleInputChange(e, row.id, 'email')} />
//                 ) : (
//                   (newRowAdded && row.email === '@gmail.com') ? 'New Email' : row.email
//                 )}
//               </td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 {editingRow !== row.id ? (
//                   <>
//                     <button onClick={() => handleEdit(row.id)}>Edit</button>
//                     <button onClick={() => handleDelete(row.id)}>Delete</button>
//                     <button onClick={handleAdd}>Add</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleSave(row.id)}>Save</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;


































// OK HO GYA JUST FIREBASE ATTCH KARNI HAI


// import React, { useState } from 'react';

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'MALIK ', phone: '897398723986', email: 'MALIKw@GMAIL.COM' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);
//   const [editingRow, setEditingRow] = useState(null);
//   const [newRowAdded, setNewRowAdded] = useState(false); // Track if a new row is being added

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     setEditingRow(id);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter(row => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     setEditingRow(null);
//     setNewRowAdded(false);
//     // Add your save logic here
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '', email: '' };
//     setRows([...rows, newRow]);
//     setNewRowAdded(true); // Set flag to indicate new row added
//     setEditingRow(newId); // Set editingRow to the newly added row
//   };

//   const handleInputChange = (e, id, field) => {
//     const updatedRows = rows.map(row => {
//       if (row.id === id) {
//         return { ...row, [field]: e.target.value };
//       }
//       return row;
//     });
//     setRows(updatedRows);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.name} onChange={(e) => handleInputChange(e, row.id, 'name')} />
//                 ) : (
//                   (newRowAdded && row.name === '') ? 'New Name' : row.name
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.phone} onChange={(e) => handleInputChange(e, row.id, 'phone')} />
//                 ) : (
//                   (newRowAdded && row.phone === '') ? 'New Phone' : row.phone
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.email} onChange={(e) => handleInputChange(e, row.id, 'email')} />
//                 ) : (
//                   (newRowAdded && row.email === '') ? 'New Email' : row.email
//                 )}
//               </td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 {editingRow !== row.id ? (
//                   <>
//                     <button onClick={() => handleEdit(row.id)}>Edit</button>
//                     <button onClick={() => handleDelete(row.id)}>Delete</button>
//                     <button onClick={handleAdd}>Add</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleSave(row.id)}>Save</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

























































// // Table.js

// import React, { useState } from 'react';
// import { storage, db } from './firebase'; // Import Firebase storage and database objects

// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'MALIK ', phone: '897398723986', email: 'MALIKw@GMAIL.COM' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);
//   const [editingRow, setEditingRow] = useState(null);
//   const [newRowAdded, setNewRowAdded] = useState(false); // Track if a new row is being added

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     setEditingRow(id);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter(row => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     setEditingRow(null);
//     setNewRowAdded(false);

//     // Save data to Firebase
//     const newData = rows.find(row => row.id === id);
//     db.ref('tableData/' + id).set(newData); // Replace 'tableData' with the appropriate path in your database

//     // Upload image to Firebase Storage
//     if (image) {
//       const storageRef = storage.ref('images/' + image.name); // 'images/' is the path where images will be stored
//       storageRef.put(image).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//       });
//     }
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '', email: '' };
//     setRows([...rows, newRow]);
//     setNewRowAdded(true); // Set flag to indicate new row added
//     setEditingRow(newId); // Set editingRow to the newly added row
//   };

//   const handleInputChange = (e, id, field) => {
//     const updatedRows = rows.map(row => {
//       if (row.id === id) {
//         return { ...row, [field]: e.target.value };
//       }
//       return row;
//     });
//     setRows(updatedRows);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.name} onChange={(e) => handleInputChange(e, row.id, 'name')} />
//                 ) : (
//                   (newRowAdded && row.name === '') ? 'New Name' : row.name
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.phone} onChange={(e) => handleInputChange(e, row.id, 'phone')} />
//                 ) : (
//                   (newRowAdded && row.phone === '') ? 'New Phone' : row.phone
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.email} onChange={(e) => handleInputChange(e, row.id, 'email')} />
//                 ) : (
//                   (newRowAdded && row.email === '') ? 'New Email' : row.email
//                 )}
//               </td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 {editingRow !== row.id ? (
//                   <>
//                     <button onClick={() => handleEdit(row.id)}>Edit</button>
//                     <button onClick={() => handleDelete(row.id)}>Delete</button>
//                     <button onClick={handleAdd}>Add</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleSave(row.id)}>Save</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;






























// Table.js

// import React, { useState } from 'react';
// import { storage, db } from './firebase'; // Import Firebase storage and database objects


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { db, storage } from './firebase'; // Import Firebase configuration
// import { collection, addDoc, deleteDoc, doc ,getDocs } from "firebase/firestore";
// import { ref, uploadBytes } from "firebase/storage";





// function Table() {
//   const [image, setImage] = useState(null);
//   const [rows, setRows] = useState([
//     { id: 1, name: 'MALIK ', phone: '897398723986', email: 'MALIKw@GMAIL.COM' },
//     { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
//   ]);
//   const [editingRow, setEditingRow] = useState(null);
//   const [newRowAdded, setNewRowAdded] = useState(false); // Track if a new row is being added

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleEdit = (id) => {
//     setEditingRow(id);
//   };

//   const handleDelete = (id) => {
//     const updatedRows = rows.filter(row => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleSave = (id) => {
//     console.log(`Saving row with ID ${id}`);
//     setEditingRow(null);
//     setNewRowAdded(false);

//     // Save data to Firebase
//     const newData = rows.find(row => row.id === id);
//     db.ref('tableData/' + id).set(newData)
//       .then(() => {
//         console.log("Data saved successfully!");
//       })
//       .catch((error) => {
//         console.error("Error saving data: ", error);
//       });

//     // Upload image to Firebase Storage
//     if (image) {
//       const storageRef = storage.ref('images/' + image.name); // 'images/' is the path where images will be stored
//       storageRef.put(image).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//       });
//     }
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = { id: newId, name: '', phone: '', email: '' };
//     setRows([...rows, newRow]);
//     setNewRowAdded(true); // Set flag to indicate new row added
//     setEditingRow(newId); // Set editingRow to the newly added row
//   };

//   const handleInputChange = (e, id, field) => {
//     const updatedRows = rows.map(row => {
//       if (row.id === id) {
//         return { ...row, [field]: e.target.value };
//       }
//       return row;
//     });
//     setRows(updatedRows);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.name} onChange={(e) => handleInputChange(e, row.id, 'name')} />
//                 ) : (
//                   (newRowAdded && row.name === '') ? 'New Name' : row.name
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.phone} onChange={(e) => handleInputChange(e, row.id, 'phone')} />
//                 ) : (
//                   (newRowAdded && row.phone === '') ? 'New Phone' : row.phone
//                 )}
//               </td>
//               <td>
//                 {editingRow === row.id ? (
//                   <input type="text" value={row.email} onChange={(e) => handleInputChange(e, row.id, 'email')} />
//                 ) : (
//                   (newRowAdded && row.email === '') ? 'New Email' : row.email
//                 )}
//               </td>
//               <td>
//                 <input type="file" onChange={handleImageChange} />
//               </td>
//               <td>
//                 {editingRow !== row.id ? (
//                   <>
//                     <button onClick={() => handleEdit(row.id)}>Edit</button>
//                     <button onClick={() => handleDelete(row.id)}>Delete</button>
//                     <button onClick={handleAdd}>Add</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleSave(row.id)}>Save</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;































































































































import React, { useState, useEffect } from 'react';
import './App.css';
import { db, storage } from './firebase'; // Import Firebase configuration
import { collection, addDoc, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function Table() {
  const [image, setImage] = useState(null);
  const [rows, setRows] = useState([
    { id: 1, name: 'MALIK ', phone: '897398723986', email: 'MALIKw@GMAIL.COM' },
    { id: 2, name: 'Jane Smith', phone: '08-83298390932', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', phone: '08-83298390932', email: 'mike@example.com' }
  ]);
  const [editingRow, setEditingRow] = useState(null);
  const [newRowAdded, setNewRowAdded] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleEdit = (id) => {
    setEditingRow(id);
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
  };

  const handleSave = async (id) => {
    console.log(`Saving row with ID ${id}`);
    setEditingRow(null);
    setNewRowAdded(false);

    // Save data to Firebase Firestore
    const newData = rows.find(row => row.id === id);
    try {
      const docRef = await addDoc(collection(db, 'tableData'), newData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Upload image to Firebase Storage
    if (image) {
      const storageRef = ref(storage, 'images/' + image.name);
      uploadBytes(storageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    }
  };

  const handleAdd = () => {
    const newId = rows.length + 1;
    const newRow = { id: newId, name: '', phone: '', email: '' };
    setRows([...rows, newRow]);
    setNewRowAdded(true);
    setEditingRow(newId);
  };

  const handleInputChange = (e, id, field) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [field]: e.target.value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                {editingRow === row.id ? (
                  <input type="text" value={row.name} onChange={(e) => handleInputChange(e, row.id, 'name')} />
                ) : (
                  (newRowAdded && row.name === '') ? 'New Name' : row.name
                )}
              </td>
              <td>
                {editingRow === row.id ? (
                  <input type="text" value={row.phone} onChange={(e) => handleInputChange(e, row.id, 'phone')} />
                ) : (
                  (newRowAdded && row.phone === '') ? 'New Phone' : row.phone
                )}
              </td>
              <td>
                {editingRow === row.id ? (
                  <input type="text" value={row.email} onChange={(e) => handleInputChange(e, row.id, 'email')} />
                ) : (
                  (newRowAdded && row.email === '') ? 'New Email' : row.email
                )}
              </td>
              <td>
                <input type="file" onChange={handleImageChange} />
              </td>
              <td>
                {editingRow !== row.id ? (
                  <>
                    <button onClick={() => handleEdit(row.id)}>Edit</button>
                    <button onClick={() => handleDelete(row.id)}>Delete</button>
                    <button onClick={handleAdd}>Add</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleSave(row.id)}>Save</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;



























































