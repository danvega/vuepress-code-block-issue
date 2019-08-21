<template>
  <span>{{ language }}</span>
</template>

<script>
export default {
  name: 'current-language',
  data() {
    return {
      language: ''
    }
  },
  methods: {
    getCookie() {
      return document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    },
  },
  mounted() {
    const cookieValue =
    this.language = (this.getCookie() === 'java') ? 'Java' : 'C#';
  }
}
</script>
