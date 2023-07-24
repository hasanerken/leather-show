<script setup lang="ts">
import type { Database } from '@/types/supabase'

const supabase = useSupabaseClient<Database>()
const message = useMessage()
const { data, error } = await supabase.from('tenants').select('*') // upsert({ email: 'mybest@gmail.com' })

const mydata = await $fetch('https://xfiber-production.up.railway.app/tenants')// Use $fetch with your api routes to get typesafety
if (error)
  message.warning('Communication can not taken')
</script>

<template>
  <div>
    My Profile
    {{ data }}

    ------

    {{ mydata }}
  </div>
</template>

<style scoped>

</style>
