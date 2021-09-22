// import React, { useEffect, useState } from "react";
// import { db } from "../../lib/firebase-config";
// import { getDocs, query, collection } from "firebase/firestore";
// import {
//   Paper,
//   TableContainer,
//   Table,
//   TableBody,
//   TableHead,
//   TableRow,
//   TableCell,
// } from "@material-ui/core";
// import "./dashboard.css";

// function Dashboard() {
//   const q1 = query(collection(db, "applyasdev"));
//   const q2 = query(collection(db, "hiredevdata"));

//   const [applyasDevData, setApplyasDevData] = useState([]);
//   const [hireDevData, setHireDevData] = useState([]);

//   async function FetchApplydata() {
//     const querySnapshot = await getDocs(q1);
//     querySnapshot.forEach((doc) => {
//       setApplyasDevData(doc.data());
//     });
//   }
//   async function FetchHireData() {
//     const querySnapshot = await getDocs(q2);
//     const devData = [];
//     querySnapshot.forEach((doc) => {
//       devData.push(doc.data());
//     });
//     setHireDevData(devData);
//   }
//   useEffect(() => {
//     FetchApplydata();
//     FetchHireData();
//   }, []);

//   // console.log(typeof hireDevData);
//   return (
//     <>
//       <div className="applyDev">
//         <h1 className="apply__heading">Apply As Developers Details</h1>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Phone_No.</TableCell>
//                 <TableCell>Experience</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Salary Expectation</TableCell>
//                 <TableCell>Primary Skills</TableCell>
//                 <TableCell>Secondary Skills</TableCell>
//                 <TableCell>Linkedin URL</TableCell>
//                 <TableCell>Github URL</TableCell>
//                 <TableCell>Best Project</TableCell>
//                 <TableCell>Tech Explain</TableCell>
//                 <TableCell>Heard About US</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {hireDevData.map((user) => {
//                 return;
//                 <>
//                   <h1>{user.name}</h1>;
//                 </>;
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </>
//   );
// }

// export default Dashboard;
