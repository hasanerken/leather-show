<script setup>
import HeroIcons from '~/assets/svgs/hero-icons.svg'

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div>
      <div justify="center" align="center" wrap class="mt-24">
        <div :bordered="false" style="max-width: 800px;">
          <h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-lime-400">First Class Solutions</span> for Streamlined e-commerce Excellence
          </h1>
          <p class="font-light text-lg text-gray-700 lg:text-2xl dark:text-gray-400 spacey">
            Unlock seamless operations and efficiency with <span class="text-red-600 font-extrabold  px-2 py-1">PrepShipHub</span>
            &mdash;your trusted partner for faster, more reliable, and cost-effective e-commerce solutions.
            Join forces with e-commerce sellers and merchants to create an unbeatable customer experience!
          </p>
          <div class="mt-8">
            <button color="#EE2B3A" class="h-10 w-40 p-6">
              More Information
            </button>
            <button color="#89C225" class="h-10 w-40 p-6">
              Get Started
            </button>
          </div>
        </div>
        <div class="hidden sm:block" :bordered="false">
          <HeroIcons style="width: 480px;" :font-controlled="false" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spacey {
  line-height: 1.5em;
}
</style>
