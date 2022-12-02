<template>
    <div class="welcome-page">
        <UnauthenticatedNavbar />
        <div class="welcome-page-content">
            <UnderConstruction />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UnauthenticatedNavbar from "@/components/UnauthenticatedNavbar.vue";
import UnderConstruction from "@/components/UnderConstruction.vue";


export default defineComponent({
    name: "WelcomePage",
    components: {
        UnauthenticatedNavbar,
        UnderConstruction,
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