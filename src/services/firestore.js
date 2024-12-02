import { db } from './config.js';
import { collection, addDoc, getDocs, query, } from "firebase/firestore";

const getShops = async () => {
    const ref = collection(db, 'shops');
    const queryDoc = query(ref);
    const snapshot = await getDocs(queryDoc);

    const fetchShops = [];
    snapshot.forEach((doc) => {
        fetchShops.push({ id: doc.id, ...doc.data() });
    });
    return fetchShops
};

const submitShop = async (social, suggestedSong, shopName, city, country, description) => {
    try {
        const docRef = await addDoc(collection(db, "submissions"), {
        social,
        suggestedSong,
        shopName,
        city,
        country,
        description
        });

        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export { submitShop, getShops };