<script setup lang="ts">
// import type { Database } from '@/types/supabase'
import { useQuery } from '@tanstack/vue-query'

const message = useMessage()
// const supabase = useSupabaseClient<Database>()
// const { data, error } = await supabase.from('tenants').select('*') // upsert({ email: 'mybest@gmail.com' })

// const mydata = await $fetch('https://xfiber-production.up.railway.app/tenants')
const { isLoading, isError, data, error, suspense } = useQuery({
  queryKey: ['todos'],
  queryFn: () => $fetch('https://xfiber-production.up.railway.app/tenants'),
})
await suspense()
if (error)
  message.warning('Communication can not taken')
</script>

<template>
  <div>
    My Profile
    {{ data }}
  </div>
</template>

<style scoped>

</style>
