import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ProductoDB } from "../interface/ProductoDB";
const { dbCon }: any = global;

export const guardar = (product: ProductoDB) => {
  const productRef = doc(dbCon, "Productos", product.codigo);
  setDoc(productRef, product);
};

export const consultar = async (funtionality: Function) => {
  const productosRef = collection(dbCon, "Productos");
  const productsSnap = await getDocs(productosRef);
  let productosArray: any = [];

  productsSnap.forEach((documento) => {
    productosArray.push(documento.data());
    funtionality(productosArray);
  });
};
