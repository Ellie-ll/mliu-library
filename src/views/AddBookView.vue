<template>
  <div class="container mt-5">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div class="row-6 mb-3">
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div class="row-6 mb-3">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
      <h1>Books with ISBN > 1000</h1>
      <BookList :isbn-filter="1000" />
    </form>
  </div>
</template>

<script>
import BookList from '../components/BookList.vue'
import axios from 'axios'

export default {
  data() {
    return {
      isbn: null,
      name: null
    }
  },
  components: {
    BookList
  },
  methods: {
    async addBook() {
      try {
        const response = await axios.put('https://addbook-66zhjspwya-uc.a.run.app', {
          isbn: Number(this.isbn),
          name: this.name
        })
        console.log('response', response.data)
        alert('Book added successfully!')
        this.isbn = ''
        this.name = ''
      } catch (err) {
        console.log('Error adding book : ', err)
      }
    }
  }
}

// import { ref } from 'vue'
// import db from '../Firebase/init.js'
// import { collection, addDoc } from 'firebase/firestore'
// import BookList from '../components/BookList.vue'

// const isbn = ref('')
// const name = ref('')

// const addBook = async () => {
//   try {
//     const isbnNumber = Number(isbn.value)
//     if (isNaN(isbnNumber)) {
//       alert('ISBN must be a valid number')
//       return
//     }
//     await addDoc(collection(db, 'books'), {
//       isbn: isbnNumber,
//       name: name.value
//     })
//     isbn.value = ''
//     name.value = ''
//     alert('Book added successfully!')
//   } catch (error) {
//     console.error('Error adding book: ', error)
//   }
// }
</script>
