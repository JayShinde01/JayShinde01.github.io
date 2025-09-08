import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";

import portfolioData from "./portfolioData.json"; // keep JSON in a file OR inline

export async function uploadPortfolio() {
  try {
    await setDoc(doc(db, "portfolio", "main"), portfolioData);
    console.log("✅ Portfolio uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading:", error);
  }
}

uploadPortfolio();
