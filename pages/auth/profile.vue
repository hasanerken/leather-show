<script setup lang="ts">
import type { Database } from '@/types/supabase'

const supabase = useSupabaseClient<Database>()
const message = useMessage()
const { data, error } = await supabase.from('communication').select('*') // upsert({ email: 'mybest@gmail.com' })
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
