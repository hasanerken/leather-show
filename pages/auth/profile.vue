<script setup lang="ts">
const supabase = useSupabaseClient()
const message = useMessage()
const { data, error } = await supabase.from('countries').select('id, name')
if (error)
  message.warning('Countries can not taken')
</script>

<template>
  <div>
    My Profile
    {{ data }}
  </div>
</template>

<style scoped>

</style>
