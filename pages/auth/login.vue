<script setup lang="ts">
import type { FormInst, FormItemRule, FormRules, FormValidationError } from 'naive-ui'

const client = useSupabaseClient()

interface ILogin {
  email: string
  password: string
}

const formRef = ref<FormInst | null>(null)
const message = useMessage()

const registration = reactive<ILogin>({
  email: '',
  password: '',
})

const rules: FormRules = {
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value)
          return new Error('Email is required')

        else if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(value))
          return new Error('Not valid email')

        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Password is required',
    },
  ],
}

const router = useRouter()
function handlePasswordInput() {
}
function handleValidateButtonClick() {
  formRef.value?.validate(
    (errors: Array<FormValidationError> | undefined) => {
      if (!errors)
        signIn()

      else message.error('Invalid')
    },
  )
}

const errorMsg = ref(null)

async function signIn() {
  client.auth.signInWithPassword({
    email: registration.email,
    password: registration.password,
  }).then(() => {
    router.push({ name: 'auth-profile' })
  })
}

function signOut() {
  client.auth.signOut().then((res) => {
  })
  router.push('/')
}
</script>

<template>
  <div class="flex justify-center">
    <n-button @click="signOut">
      Sign out
    </n-button>
    <n-card class="m-10 p-5 bg-blue-50" style="max-width: 500px;">
      <n-form ref="formRef" :model="registration" :rules="rules" class="">
        <n-form-item path="email" label="e-Mail">
          <n-input v-model:value="registration.email" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="Password">
          <n-input
            v-model:value="registration.password"
            type="password"
            @input="handlePasswordInput"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <div style="display: flex; justify-content: flex-end">
              <n-button
                round
                type="primary"
                @click="handleValidateButtonClick"
              >
                Login
              </n-button>
            </div>
          </n-col>
        </n-row>
      </n-form>
    </n-card>
    <div>
      {{ errorMsg }}
    </div>
  </div>
</template>

<style scoped>

</style>
