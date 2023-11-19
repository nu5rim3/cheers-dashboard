import { collection, addDoc, doc, getDoc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { db } from '..';
import { IProfile } from '../../pages/Profile/interface';

const collectionName: string = 'profiles';

const useProfileServices = () => {
    /**
     * save profile
     * @param payload
     */
    const save = async (payload: IProfile) => {
        try {
            await addDoc(collection(db, collectionName), payload)
                .then((docRef: any) => {
                    console.log(`[SUCCESS][SAVE]| ${collectionName} written with ID: `, docRef.id);
                    return docRef.id;
                })
                .catch((error: any) => {
                    console.error(`[ERROR][SAVE] | ${collection}: `, error);
                });
        } catch (error) {
            console.error(`[ERROR][SAVE] |  ${collectionName} : `, error);
        }
    };

    /**
     * get List data
     */
    const getList = async () => {
        try {
            await getDocs(collection(db, collectionName))
                .then((res: any) => {
                    const documents = res.docs.map((doc: { data: () => any }) => doc.data());
                    console.log(`[SUCCESS][GET] | ${collectionName} : `, documents);
                    return documents;
                })
                .catch((error: any) => {
                    console.error(`[ERROR][GET] | ${collectionName} : `, error);
                });
        } catch (error) {
            console.error(`[ERROR][GET] | ${collectionName} : `, error);
        }
    };

    /**
     * get List data by user id
     * @param uid
     * @returns
     */
    const getListByUserId = async (uid: string) => {
        const qry = query(collection(db, collectionName), where('uid', '==', uid));
        try {
            const querySnapshot = await getDocs(qry);
            if (!querySnapshot.empty) {
                const response = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                console.log(`[SUCCESS][GETBYIT] | ${collectionName} : `, response);
                return response;
            } else {
                console.log(`[SUCCESS][GETBYIT] | ${collectionName} : Document does not exist`);
                return [];
            }
        } catch (error) {
            console.error(`[ERROR][GET] | ${collectionName} : `, error);
            // You might want to throw the error here or handle it as needed
            throw error;
        }
    };

    /**
     * get single data by id
     * @param id
     */
    const getById = async (id: string) => {
        try {
            const docRef = doc(db, collectionName, id);
            await getDoc(docRef)
                .then((resDoc: any) => {
                    if (resDoc.exists()) {
                        const response = resDoc.data();
                        console.log(`[SUCCESS][GETBYIT] | ${collectionName} : `, response);
                        return response;
                    } else {
                        console.log(`[SUCCESS][GETBYIT] | ${collectionName} : Document does not exist`);
                    }
                })
                .catch((error: any) => {
                    console.error(`[ERROR][GETBYID] | ${collectionName} : `, error);
                });
        } catch (error) {
            console.error(`[ERROR][GETBYID] | ${collectionName} : `, error);
        }
    };

    /**
     * update single data by id
     * @param id
     * @param pyaload
     */
    const updateById = async (id: string, pyaload: IProfile) => {
        try {
            const docRef = doc(db, collectionName, id);
            await setDoc(docRef, pyaload, { merge: true })
                .then((resDoc: any) => {
                    console.log(`[SUCCESS][UPDATE] | ${collectionName} : Document updated successfully`);
                })
                .catch((error: any) => {
                    console.error(`[ERROR][UPDATE] | ${collectionName} : `, error);
                });
        } catch (error) {
            console.error(`[ERROR][UPDATE] | ${collectionName} : `, error);
        }
    };

    return { save, getList, getListByUserId, getById, updateById };
};

export default useProfileServices;
