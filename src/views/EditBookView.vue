<template>
  <div class="container mt-5">
    <h1>Edit Book</h1>
    <form @submit.prevent="editBook">
      <div class="row-6 mb-3">
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div class="row-6 mb-3">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
    </form>
    
    <h1>Delete Book</h1>
    <div class="row-6 mb-3">
      <label for="targetIsbn">ISBN:</label>
      <input type="text" v-model="targetIsbn" id="targetIsbn" required />
    </div>
    <button type="submit" @click="deleteBook">Delete Book</button>

    <!-- Include BookList with custom query conditions for EditBookView -->
    <h1>Book List</h1>
    <BookList :queryLimit="5" :isbnFilter="0" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import db from '../Firebase/init.js'
import { query, collection, getDocs, updateDoc, where, deleteDoc } from 'firebase/firestore'
import BookList from '../components/BookList.vue'

const isbn = ref('')
const name = ref('')

const editBook = async () => {
  try {
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }

    // query name based on isbn input
    const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const docRef = querySnapshot.docs[0].ref
      await updateDoc(docRef, { name: name.value })
      alert('Book Edit successfully!')
    } else {
      console.log('No such document!')
    }

    // reset input field value
    isbn.value = ''
    name.value = ''
  } catch (error) {
    console.log('Error Edit book: ', error)
  }
}

const targetIsbn = ref('')
const deleteBook = async () => {
  try {
    const isbnNumber = Number(targetIsbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }

    // delete based on isbn input
    const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const docRef = querySnapshot.docs[0].ref
      await deleteDoc(docRef)
      alert('Book Delete successfully!')
    } else {
      console.log('No such document!')
    }

    // reset input field value
    targetIsbn.value = ''
  } catch (error) {
    console.log('Error delete book: ', error)
  }
}
</script>
