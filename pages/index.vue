<script setup lang="ts">
import { NCard } from 'naive-ui'
</script>

<template>
  <div>
    <div>
      For login: <nuxt-link :to="{ name: 'auth-login' }">
        <n-button>Login</n-button>
      </nuxt-link>
    </div>
    <NCard>
      <n-button>Merhaba</n-button>
      Bu bir deneme
    </NCard>
    <NCard title="Merhaba" size="medium" class="">
      ne haber
    </NCard>
  </div>
</template>

<style scoped>

</style>
