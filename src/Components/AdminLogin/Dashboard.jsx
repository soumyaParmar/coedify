import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase-config";
import { getDocs, query, collection } from "firebase/firestore";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import "./dashboard.css";

function Dashboard() {
  const q1 = query(collection(db, "applyasdev"));
  const q2 = query(collection(db, "hiredevdata"));

  const [applyasDevData, setApplyasDevData] = useState([]);
  const [hireDevData, setHireDevData] = useState([]);

  async function FetchApplydata() {
    const querySnapshot = await getDocs(q1);
    const applyData = [];
    querySnapshot.forEach((doc) => {
      applyData.push(doc.data());
    });
    setApplyasDevData(applyData);
  }
  async function FetchHireData() {
    const querySnapshot = await getDocs(q2);
    const devData = [];
    querySnapshot.forEach((doc) => {
      devData.push(doc.data());
    });
    setHireDevData(devData);
  }
  useEffect(() => {
    FetchApplydata();
    FetchHireData();
  });

  console.log(applyasDevData);
  console.log(hireDevData);
  return (
    <>
      <div className="applyDev">
        <h1 className="apply__heading">Apply As Developers Details</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone_No.</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Salary Expectation</TableCell>
                <TableCell>Primary Skills</TableCell>
                <TableCell>Secondary Skills</TableCell>
                <TableCell>Linkedin URL</TableCell>
                <TableCell>Github URL</TableCell>
                <TableCell>Resume</TableCell>
                <TableCell>Tech Explain</TableCell>
                <TableCell>Heard About US</TableCell>
                <TableCell>portfoliourl</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applyasDevData.map((user) => {
                return (
                  <TableRow>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.number}</TableCell>
                    <TableCell>{user.experience}</TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>{user.salary}</TableCell>
                    <TableCell>{user.primarySkills}</TableCell>
                    <TableCell>{user.secondarySkills}</TableCell>
                    <TableCell>{user.linkedinurl}</TableCell>
                    <TableCell>{user.githuburl}</TableCell>
                    <TableCell>{user.summary}</TableCell>
                    <TableCell>{user.techEssay}</TableCell>
                    <TableCell>{user.heard}</TableCell>
                    <TableCell>{user?.portfoliourl}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Dashboard;
