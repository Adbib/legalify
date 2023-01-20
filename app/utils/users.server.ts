import { prisma } from "./prisma.server";
import { userInterface } from "./types";

export async function addUser(userData: userInterface) {
  try {
    const user = prisma.user.create({ data: userData });
    return user;
  } catch (err: any) {
    return { error: true, msg: err.message };
  }
}
export async function deleteUser(id: number) {
  try {
    const user = prisma.user.delete({ where: { id } });
    return user;
  } catch (err: any) {
    return { error: true, msg: err.message };
  }
}
export async function updateUser(id: number, userData: userInterface) {
  try {
    const user = prisma.user.update({ where: { id }, data: userData });
    return user;
  } catch (err: any) {
    return { error: true, msg: err.message };
  }
}
