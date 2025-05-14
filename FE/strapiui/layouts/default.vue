<script setup lang="ts">
import "/assets/styles/main.scss";
</script>

<template>
  <div class="main-wrapper">
    <AppHeader />
    <div>
      <slot />
    </div>
    <!-- <AppFooter /> -->
    <AppFooter />
  </div>
</template>
