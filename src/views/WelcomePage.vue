<template>
  <div class="welcome-page">
    <UnauthenticatedNavbar />
    <div class="welcome-page-content">
      <button v-if="currentSlot > 1" class="absolute top-[50px]" @click="prev">
        <ChevronUpIcon class="w-16 h-16 hover:opacity-80" />
      </button>
      <div class="h-full">
        <template v-for="(page, index) in pages">
          <Transition>
            <component v-if="show(index + 1)" :is="page" />
          </Transition>
        </template>
      </div>
      <button
        v-if="currentSlot < totalSlots"
        class="absolute bottom-0"
        @click="next"
      >
        <ChevronDownIcon class="w-16 h-16 hover:opacity-80" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import UnauthenticatedNavbar from "@/components/UnauthenticatedNavbar.vue";
import UnderConstruction from "@/components/UnderConstruction.vue";
import TheStart from "@/views/TheStart.vue";
import ChevronUpIcon from "@/shared/icons/ChevronUpIcon.vue";
import ChevronDownIcon from "@/shared/icons/ChevronDownIcon.vue";

defineOptions({
  name: "WelcomePage",
});

const pages = [TheStart, UnderConstruction];
const currentSlot = ref(1);
const totalSlots = computed((): number => {
  return pages.length;
});

function show(slot: number): boolean {
  return currentSlot.value === slot;
}
function next() {
  currentSlot.value = currentSlot.value + 1;
}
function prev() {
  currentSlot.value = currentSlot.value - 1;
}
</script>

<style lang="scss" scoped>
.welcome-page {
  @apply h-screen overflow-hidden;

  &-content {
    @apply bg-welcome bg-cover bg-center h-[calc(100%-50px)] flex justify-center items-center flex-col opacity-90;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
