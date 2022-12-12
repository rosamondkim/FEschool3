import { appFireStore, timeStamp } from "../firebase/config"
import { addDoc, collection } from "firebase/firestore"
import { useReducer } from "react"

const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null, error: null, success: false }
        case 'addDoc':
            return { isPending: false, document: action.payload, error: null, success: true }
        case 'error':
            return { isPending: false, document: null, error: action.payload, success: false }
        default:
            return state
    }
}

export const useFirestore = (transaction) => {
    const [response, dispatch] = useReducer(storeReducer, initState);

    const colRef = collection(appFireStore, transaction);

    const addDocument = async (doc) => {
        dispatch({ type: "isPending" });
        try {
            const createdTime = timeStamp.fromDate(new Date());
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            dispatch({ type: "addDoc", payload: docRef });
        } catch (e) {
            dispatch({ type: "error", payload: e.message });
        }

    }

    const deleteDocument = (id) => {

    }

    return { addDocument, deleteDocument, response }
}