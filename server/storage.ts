import { type User, type InsertUser, type Consultation, type InsertConsultation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private consultations: Map<string, Consultation>;

  constructor() {
    this.users = new Map();
    this.consultations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      message: insertConsultation.message ?? null,
      createdAt: new Date().toISOString(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }
}

export const storage = new MemStorage();
