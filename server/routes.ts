import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/consultations", async (req, res) => {
    try {
      const data = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(data);
      res.status(201).json(consultation);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation failed", details: err.errors });
      }
      res.status(500).json({ error: "Failed to submit consultation" });
    }
  });

  return httpServer;
}
