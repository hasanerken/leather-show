<script setup lang="ts">
definePageMeta({
  redirect: {
    name: 'home',
  },
})
</script>

<template>
  <div>
    <div>
      For login: <nuxt-link :to="{ name: 'auth-login' }">
        <n-button>Login</n-button>
      </nuxt-link>
    </div>
    <n-card>
      <n-button>Merhaba</n-button>
      Bu bir deneme
    </n-card>
    <n-card title="Merhaba" size="medium" class="">
      ne haber
    </n-card>
  </div>
</template>

<style scoped>

</style>
