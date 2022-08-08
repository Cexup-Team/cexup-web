<script setup>
  import { useRouter } from 'vue-router'
  const $router = useRouter()
  
  const token = useSession().getItem("cexup-token")
  const users = useSession().getItem("cexup-user")

  if (!token && !users) {
    $router.push('/auth')
  }
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
