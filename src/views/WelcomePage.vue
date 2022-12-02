<template>
    <div class="welcome-page">
        <UnauthenticatedNavbar />
        <div class="welcome-page-content">
            <h1 class="text-white font-mono text-2xl uppercase font-light">
                Under construction
            </h1>
            <p class="text-white font-mono text-sm uppercase font-light">
                Guanajuato, Mexico.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UnauthenticatedNavbar from "@/components/UnauthenticatedNavbar.vue";

export default defineComponent({
    name: "WelcomePage",
    components: {
        UnauthenticatedNavbar,
    }
});
</script>

<style lang="scss" scoped>
.welcome-page {
    @apply h-full;

    &-content {
        @apply bg-welcome bg-cover bg-center h-full flex justify-center items-center flex-col;
    }
}
</style>