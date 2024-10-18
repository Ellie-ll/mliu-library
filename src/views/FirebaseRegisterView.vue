<template>
  <div class="container mt-5">
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Save to Firebase</button></p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
const db = getFirestore()

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()


const register = async () => {
  try {
    // create user
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // save user info to Firestore 
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      role: 'user'  // default role 
    });

    console.log('Firebase Register and Firestore Save Successful!');
    router.push('/FireLogin');
  } catch (error) {
    console.log(error.code);
  }
};
</script>
