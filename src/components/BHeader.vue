<script setup>
// import router from '@/router/index'
// import { isAuthenticated } from '../router/authentication'

// const logout = () => {
//   isAuthenticated.value = false
//   alert('Logout successful!')
//   router.push({ name: 'Home' })
// }

import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'

const currentUserEmail = ref('No Auth')  
const auth = getAuth()


if (auth.currentUser) {
  currentUserEmail.value = auth.currentUser.email 
  console.log('Current User:', auth.currentUser)
} else {
  console.log('No Auth')
}

const fireLogOut = () => {
  if (auth.currentUser) {
    
    console.log('Logging out user:', auth.currentUser)

    signOut(auth)
      .then(() => {
        console.log('Log out success')
        currentUserEmail.value = 'not logged in'  
      })
      .catch((error) => {
        console.log('Log out fail:', error)
      })
  } else {
    console.log('No user is currently logged in.')
  }
}

</script>
<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li> -->
        <!-- <li class="nav-item" v-if="isAuthenticated">
          <button class="nav-link" active-class="active" @click="logout">Logout</button>
        </li> -->
        <li class="nav-item">
          <router-link to="/Firelogin" class="nav-link" active-class="active"
            >Firebase Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/Fireregister" class="nav-link" active-class="active"
            >Firebase Register</router-link
          >
        </li>
        <li class="nav-item">
          <button class="nav-link" active-class="active" @click="fireLogOut">Firebase Logout</button>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active"
            >Add Book</router-link
          > 
        </li>
        <li class="nav-item">
          <router-link to="/editbook" class="nav-link" active-class="active"
            >Edit Book</router-link
          > 
        </li>
        <li class="nav-item">
          <router-link to="/getbookcount" class="nav-link" active-class="active"
            >Get Book Count</router-link
          > 
        </li>
        <li class="nav-item">
          <router-link to="/GetWeather" class="nav-link" active-class="active"
            >Get Weather</router-link
          > 
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active"
            >Count Book API</router-link
          > 
        </li>
        <li class="nav-item">
          <router-link to="/getallbookAPI" class="nav-link" active-class="active"
            >Get All Book API</router-link
          > 
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
