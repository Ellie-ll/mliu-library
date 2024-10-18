<script setup>
import { ref } from 'vue'
import router from '@/router/index'
import { isAuthenticated } from '../router/authentication'


const formData = ref({
  username: '',
  password: ''
})

const sampleUserName = 'user'
const samplePasswrod = '12345678'

const submitForm = () => {
  validateName(true)
  validatePassword(true)

  if (
    !errors.value.username &&
    !errors.value.password &&
    formData.value.username == sampleUserName &&
    formData.value.password == samplePasswrod
  ) {
    alert('Login success!')
    isAuthenticated.value = true
    console.log('loginView value:', isAuthenticated.value)
    router.push('/about')
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: ''
  }
}

const errors = ref({
  username: null,
  password: null
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}
const validatePassword = (blur) => {
  const minlength = 8

  if (formData.value.password.length < minlength) {
    if (blur) errors.value.password = `Password must be at least ${minlength} characters long.`
  } else {
    errors.value.password = null
  }
}
</script>

<template>
  <!-- 🗄️ W3. Library Registration Form -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">👤 Library Login Form</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>

            <div class="col-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(flase)"
                @input="() => validatePassword(true)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
