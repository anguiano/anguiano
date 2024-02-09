<template>
  <div class="under-construction">
    <h1 class="under-construction-title">Under construction</h1>
    <p class="under-construction-subtitle">Guanajuato, Mexico.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UnderConstruction",
});
</script>

<style lang="scss">
.under-construction {
  @apply flex flex-col items-center justify-center h-full;

  &-title {
    @apply text-white font-mono text-2xl uppercase font-light;
  }

  &-subtitle {
    @apply text-white font-mono text-sm uppercase font-light;
  }
}
</style>
