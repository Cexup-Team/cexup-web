<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()

const router = useRouter()

const { t } = useI18n()
</script>

<template>
  <div class="bg-gray-800">
    <p>Ini text</p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
