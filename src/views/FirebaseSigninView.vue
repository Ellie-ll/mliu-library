<template>
  <div class="container mt-5">
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
const db = getFirestore()
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    // get user document from firestore
    const userRef = doc(db, 'users', user.uid)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      const role = userDoc.data().role
      if (role == 'admin') {
        alert('Admin login successful')
        router.push('/')
      } else {
        console.log('Regular user login')
        router.push('/about')
      }
      
    } else {
      console.log('No role information found for this user')
    }
  }
  catch (error) {
    console.log('Error during sign in: ', error.message)
  }
}
</script>
