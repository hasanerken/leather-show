<script setup lang="ts">
</script>

<template>
  <div>
    <div>
      For login: <nuxt-link :to="{ name: 'auth-profile' }">
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
