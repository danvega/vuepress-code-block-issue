<template>
  <div class="language">
    <p>We have a single student book where we display code examples written in multiple languages. To make sure that you see the correct code examples
    please select your default track.</p>

    <p>This will place a cookie on your machine that won't expire for 120 days so unless you clear your cookies you shouldn't
    have to do this again. If you select the wrong language you can simply clear the language cookie for this site and it will redirect you back to this page
    when you load the student book again.</p>

    <p>Current Language: {{ currentLanguage }}</p>

    <select @change="updateLanguage($event)">
      <option value="">--- Change Language ---</option>
      <option value="java">Java</option>
      <option value="csharp">C#</option>
    </select>

  </div>
</template>

<script>
export default {
  name: 'language-select',
  data() {
    return {
      languages: [
        { label: 'Java', value: 'java' },
        { lagel: 'C#', value: 'csharp' }
      ],
      currentLanguage: ''
    }
  },
  methods: {
    updateLanguage(event) {
      const language = event.target.value;
      this.setCookie(language);
      this.currentLanguage = language;
    },
    setCookie(value) {
      document.cookie = `language=${value};max-age=${60*60*24*120};path=/`;
    },
    getCookie() {
      return document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    },
  },
  mounted() {
    this.currentLanguage = this.getCookie();
  }
}
</script>

<style scoped>
select {
  font-size:15px;
  padding: 10px;
}
</style>
