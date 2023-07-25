<script setup lang="ts">
import PshLogo from '~/assets/svgs/psh-logo.svg'
</script>

<template>
  <div class="">
    <header>
      <n-space align="center" class="h-20 via-transparent">
        <div class="pl-3">
          <PshLogo style="height: 40px;" :font-controlled="false" class="" />
        </div>
        <p class="text-2xl text-center text-red-600 font-thin tracking-wider">
          PrepShipHub
        </p>
      </n-space>
    </header>
    <slot />
  </div>
</template>

<style lang="scss" scoped>

</style>
