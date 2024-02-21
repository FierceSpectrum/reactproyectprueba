
/*
// Importa las funciones necesarias desde los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

// Clase para manejar la conexión a Firebase
class FirebaseConnection {

    constructor() {
        // Configuración de Firebase
        this.firebaseConfig = {
            apiKey: "AIzaSyAm-3pahEEIkanKF7enLPcMkBkl4Xc9Dl4",
            authDomain: "singleton-653ba.firebaseapp.com",
            projectId: "singleton-653ba",
            storageBucket: "singleton-653ba.appspot.com",
            messagingSenderId: "449612426118",
            appId: "1:449612426118:web:8a51fb3df9a97baa635a07",
            measurementId: "G-R0WZENJ50B"
        };
        // Inicializa la aplicación de Firebase con la configuración proporcionada
        this.app = initializeApp(this.firebaseConfig);
        // Obtiene una instancia de la base de datos Firestore
        this.db = getFirestore(this.app);
    }

    // Método estático para obtener la instancia única de FirebaseConnection
    static getInstance() {
        // Si la instancia única no existe, crea una nueva instancia
        if (!this.instancia) {
            this.instancia = new FirebaseConnection();
        }
        // Devuelve la instancia única
        return this.instancia;
    }

    // Método para obtener una colección de documentos desde Firestore
    async getCollection(collectionName) {
        try {
            const collectionRef = collection(this.db, collectionName);
            const snapshot = await getDocs(collectionRef);
            // Mapea los documentos a un formato más manejable
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return data;
        } catch (error) {
            console.error("Error al obtener colección:", error);
            return null;
        }
    }

    // Método para agregar un documento a una colección en Firestore
    async addDocument(collectionName, data) {
        try {
            const docRef = await addDoc(collection(this.db, collectionName), data);
            console.log("Documento agregado con ID:", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Error al agregar documento:", error);
            return null;
        }
    }

    // Método para actualizar un documento en una colección en Firestore
    async updateDocument(collectionName, documentId, newData) {
        try {
            await updateDoc(doc(this.db, collectionName, documentId), newData);
            console.log("Documento actualizado:", documentId);
            return true;
        } catch (error) {
            console.error("Error al actualizar documento:", error);
            return false;
        }
    }

    // Método para eliminar un documento de una colección en Firestore
    async deleteDocument(collectionName, documentId) {
        try {
            await deleteDoc(doc(this.db, collectionName, documentId));
            console.log("Documento eliminado:", documentId);
            return true;
        } catch (error) {
            console.error("Error al eliminar documento:", error);
            return false;
        }
    }
}

// Exporta la instancia única de FirebaseConnection para usarla en otros archivos
export default FirebaseConnection.getInstance();
*/
