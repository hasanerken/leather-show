<script setup>
import HeroIcons from '~/assets/svgs/hero-icons.svg'

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <n-layout>
    <n-layout-content>
      <n-space justify="center" align="center" wrap class="mt-24">
        <n-card :bordered="false" style="max-width: 800px;">
          <h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-lime-400">First Class Solutions</span> for Streamlined e-commerce Excellence
          </h1>
          <p class="font-light text-lg text-gray-700 lg:text-2xl dark:text-gray-400 spacey">
            Unlock seamless operations and efficiency with PrepShipHub - your trusted partner for faster, more reliable, and cost-effective e-commerce solutions.
            Join forces with e-commerce sellers and merchants to create an unbeatable customer experience!
          </p>
          <n-space class="mt-8">
            <n-button color="#7A3D8D" class="h-10 w-40 p-6">
              More Information
            </n-button>
            <n-button color="#B3D764" class="h-10 w-40 p-6">
              Get Started
            </n-button>
          </n-space>
        </n-card>
        <n-card :bordered="false">
          <HeroIcons style="width: 480px;" :font-controlled="false" class="" />
        </n-card>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.spacey {
  line-height: 1.5em;
}
</style>
