import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contactRoute.js";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://my-frontend.vercel.app",
  }),
);
app.use(express.json());

connectDB();

app.use("/api", contactRoute);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
