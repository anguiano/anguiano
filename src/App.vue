<template>
  <div class="app">
    <WelcomePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WelcomePage from "@/views/WelcomePage.vue";

export default defineComponent({
  name: "App",
  components: {
    WelcomePage,
  }
});

</script>

<style lang="scss" scoped>
.app {
  @apply h-screen;
}
</style>
