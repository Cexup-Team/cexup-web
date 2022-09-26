<script setup>
  import { useRouter, useRoute } from 'vue-router'
  const $router = useRouter()
  const route = useRoute()
  const token = useSession().getItem("cexup-token")
  const users = useSession().getItem("cexup-user")

  // if (!token && !users) {
  //   $router.push('/auth')
  // }
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
