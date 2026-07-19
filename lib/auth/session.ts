import "server-only";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import {
  studentSessionOptions,
  staffSessionOptions,
  type StudentSessionData,
  type StaffSessionData,
} from "./session-config";

export type { StudentSessionData, StaffSessionData };

export async function getStudentSession() {
  return getIronSession<StudentSessionData>(cookies(), studentSessionOptions);
}

export async function getStaffSession() {
  return getIronSession<StaffSessionData>(cookies(), staffSessionOptions);
}
