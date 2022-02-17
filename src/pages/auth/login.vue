<script setup lang="ts">

</script>
<template>
    <div class="h-screen w-screen bg-blue-500">
        <p>Username</p>
        <input placeholder="username"/>
        <p>Password</p>
        <input placeholder="username"/>
        <button>Login</button>
    </div>
</template>
<route lang="yaml">
meta:
  layout: auth
</route>