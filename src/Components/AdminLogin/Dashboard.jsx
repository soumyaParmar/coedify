import React, { useState } from "react";
import { db } from "../../lib/firebase-config";
import { getDocs, query, collection } from "firebase/firestore";

function Dashboard() {
  const q = query(collection(db, "applyasdev"));

  const [info, setInfo] = useState([]);
  window.addEventListener("load", () => {
    Fetchdata();
  });
  async function Fetchdata() {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setInfo(doc.data());
    });
  }

  console.log(info);
  return (
    <div>
      <h1>Apply As Developers Details</h1>
    </div>
  );
}

export default Dashboard;
