<script setup lang="ts">
const supabase = await useSupabaseClient()
const { data, error } = await supabase.from('countries').select('id, name')
</script>

<template>
  <div>
    My Profile
    {{ data }}
  </div>
</template>

<style scoped>

</style>
