<script setup lang="ts">
import PshLogo from '~/assets/svgs/psh-logo.svg'
</script>

<template>
  <div class="">
    <header>
      <n-space justify="space-between" align="center" class="h-20 bg-gradient-to-r" style="background-image: linear-gradient(to bottom, rgba(197, 127, 127, 0.3), rgba(247, 247, 247, 0.1));">
        <n-space align="center" class="pl-3">
          <PshLogo style="height: 40px;" :font-controlled="false" />
          <p class="text-2xl text-center text-red-600 font-thin tracking-wider">
            PrepShipHub
          </p>
        </n-space>
        <div class="">
          d
        </div>
      </n-space>
    </header>
    <slot />
  </div>
</template>

<style lang="scss" scoped>

</style>
