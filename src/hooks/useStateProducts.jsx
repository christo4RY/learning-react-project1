import { useContext } from "react";
import { StateProducts } from "../contexts/StateProductsContext";

export const useStateProducts = () => useContext(StateProducts)