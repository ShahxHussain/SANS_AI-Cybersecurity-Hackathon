import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Connection.js"; // Ensure this matches the export in Connection.js
import datasetRoutes from "./Routes/datasetRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;



// Connect to MongoDB
connectDB();

// Middleware
// More specific CORS configuration
app.use(cors({
  origin: ['https://your-frontend-domain.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve routes
app.use("/datasets", datasetRoutes);


// Start ServeZ
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
