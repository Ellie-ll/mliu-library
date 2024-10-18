<template>
  <div class="container">
    <h1>All Books in JSON Format</h1>
    <pre>{{ jsonData }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsonData: null,
      error: null
    }
  },
  mounted() {
    this.getAllBooks()
  },
  methods: {
    async getAllBooks() {
      try {
        const response = await axios.get('https://getallbooks-66zhjspwya-uc.a.run.app')
        this.jsonData = response.data
      } catch (err) {
        console.error('Error fetching book data:', err)
        this.error = 'Failed to fetch book data'
      }
    }
  }
}
</script>
