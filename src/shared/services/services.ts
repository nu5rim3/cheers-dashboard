import {db} from "../config/firebase-config";
import { Restaurent, PaymentOptions, Cusines, StoreType, DressCode } from '../services/interfaces';

import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc , setDoc } from "firebase/firestore"

const restarunetCollectionRef = collection(db,"restarurent")

class RestaurentService {

    getRestaurentDetails(Id: string){}

    addRestaurent(res:Restaurent)
    {
        const newCityRef = doc(collection(db, "restarurent"));
        res.id = newCityRef.id;
        return setDoc(newCityRef, res);
    }


    }

    export default new RestaurentService();

