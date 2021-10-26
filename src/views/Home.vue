<template>
  <div class="home">
    <button @click="goToDaybook" class="btn btn-primary">Entrar a mi diario</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>