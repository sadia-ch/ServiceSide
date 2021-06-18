import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const createUserInDb = (uid, fullName, email) => {
    return firestore().collection('providers').doc(uid).set(
        {
            uid,
            fullName,
            email
        }
    )
}


// signup handling
const signUp = async (fullName, email, password) => {
    try {
        const cred = await auth().createUserWithEmailAndPassword(email, password);
        const { uid } = cred.user;

        auth().currentUser.updateProfile({
            displayName: fullName
        });
        const uid_1 = uid;
        return createUserInDb(uid_1, fullName, email);
    } catch (err) {
        return Alert.alert(err.code, err.message);
    }
}

const signIn = async (email, password) => {
    if(!email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    try {
        await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
        return Alert.alert(err.code, err.message);
    }
}

const forgetPassword = (email) => {
    if(!email){
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(email)
}

const signOut = () => {
    return auth().signOut()
}

const sendOtp = (number) => {
    if(!number){
        Alert.alert('Error', 'Please Enter number')
    }

    return auth().signInWithPhoneNumber(number)
}

const confirmCode = (state, code) => {
    return state.confirm(code)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message))
}
const acceptRequest =async () => {
    
        try {
            const snap = await firestore()
                .collection("requests")
                .get();
            const products = [];
            snap.forEach(
                product => {
                    let obj = {['latitude']:product.data().data.google.latitude,
                    ['longitude']:product.data().data.google.longitude,
                    ['requestid']: product.data().uid}
                    products.push(obj);});
           
            console.log(products);
            return products;

        } catch (err) {
            return err;
        }
    
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut,
    sendOtp,
    confirmCode,
    acceptRequest

}

export default Auth