<template>
  <div class="start">
    <div class="flex flex-col md:flex-row text-center items-center gap-4">
      <p class="text-white text-4xl sm:text-7xl font-normal">Gencode</p>
      <p class="text-white text-xl sm:text-3xl font-normal">
        Se especializada en el desarrollo de software.
      </p>
    </div>
    <p
      class="text-gray-50 text-xl sm:text-2xl font-normal text-center lg:px-40"
    >
      Brindando consultoria tanto en la implementacion como en integracion de
      nuevas tecnolgias de acuerdo a las necesidades de cada cliente.
    </p>
    <a
      class="text-gray-50 text-2xl font-normal text-center"
      href="mailto:info@gencode.dev?subject = Informacion"
    >
      info@gencode.dev
    </a>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "TheStart",
});
</script>

<style>
.start {
  @apply h-full flex flex-col m-auto justify-center items-center p-4 sm:p-8 gap-8;
}
</style>
