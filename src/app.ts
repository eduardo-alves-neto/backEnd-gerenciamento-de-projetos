import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";
import customerRouter from "./routes/customer.routes";
import occurrenceRouter from "./routes/occurrence.routes";
import collaboratorRouter from "./routes/collaborator.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", customerRouter);
app.use("/api", occurrenceRouter);
app.use("/api", collaboratorRouter);
app.use(errorHandler);

export default app;
