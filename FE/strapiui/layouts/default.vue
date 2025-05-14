<script setup lang="ts">
import "/assets/styles/main.scss";
</script>

<template>
  <div>
    <AppHeader />
    <div>
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
