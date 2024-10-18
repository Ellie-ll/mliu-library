<template>
  <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getBookCountAPI()
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get('https://countbooks-66zhjspwya-uc.a.run.app')
        this.jsondata = response.data
        this.error = null
      } catch (err) {
        console.log('Error fetching book count: ', err)
        this.count = null
        this.error = null
      }
    }
  }
}
</script>
