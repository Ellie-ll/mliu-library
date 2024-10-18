<template>
  <div>
    
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.name }} - ISBN: {{ book.isbn }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '../Firebase/init.js'
import { collection, query, where, getDocs, limit } from 'firebase/firestore'

// Props to accept query conditions
const props = defineProps({
  queryLimit: { type: Number, default: null }, // Optional limit condition
  isbnFilter: { type: Number, default: null }, // Optional where condition for isbn
})

const books = ref([])
const fetchBooks = async () => {
  try {
    let q = query(collection(db, 'books'))

    // Apply where condition if isbnFilter is provided
    if (props.isbnFilter) {
      q = query(q, where('isbn', '>', props.isbnFilter))
    }

    // Apply limit if limit condition is provided
    if (props.queryLimit) {
      q = query(q, limit(props.queryLimit))
    }

    const querySnapshot = await getDocs(q)
    const booksArray = []
    querySnapshot.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() })
    })
    books.value = booksArray
  } catch (error) {
    console.error('Error fetching books: ', error)
  }
}

onMounted(() => {
  fetchBooks()
})
</script>
