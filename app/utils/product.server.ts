import { prisma } from "./prisma.server";
import { productInterface } from "./types";

export async function addProduct(productData: productInterface) {
  try {
    const product = prisma.product.create({ data: productData });
    return product;
  } catch (err: any) {
    return { error: true, msg: err.message };
  }
}
export async function deleteProduct(id: number) {
  try {
    const product = prisma.product.delete({ where: { id } });
    return product;
  } catch (err: any) {
    return { error: true, msg: err.message };
  }
}
export async function updateProduct(id: number, productData: productInterface) {
  try {
    const product = prisma.product.update({ where: { id }, data: productData });
    return product;
  } catch (err: any) {
    return { error: true, msg: err.message };
  }
}
