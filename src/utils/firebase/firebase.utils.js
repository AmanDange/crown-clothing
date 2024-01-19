import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  writeBatch, 
  query, 
  getDocs, 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLkTqMOJE6UTt6SEG2ZjE9F6P3z96eY8M",
  authDomain: "crown-clothing-db-1faec.firebaseapp.com",
  projectId: "crown-clothing-db-1faec",
  storageBucket: "crown-clothing-db-1faec.appspot.com",
  messagingSenderId: "249876975580",
  appId: "1:249876975580:web:faf63c9aab97e4e4e98919"
};

const firebaseApp = initializeApp(firebaseConfig); 

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    console.log('User signed in successfully');
  } catch (error) {
    if (error.code === 'auth/popup-closed-by-user') {
      console.log('Authentication popup closed by the user.');
    } else {
      console.error('Authentication error:', error.message);
    }
  }
};

export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  try {
    await batch.commit();
    console.log('Done');
  } catch (error) {
    console.error('Error committing batch:', error.message);
  }
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  try {
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  } catch (error) {
    console.error('Error fetching documents:', error.message);
    return [];
  }
};

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  try {
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    }
  } catch (error) {
    console.error('Error creating the user', error.message);
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Authentication error:', error.message);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Authentication error:', error.message);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign-out error:', error.message);
  }
};

export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);
