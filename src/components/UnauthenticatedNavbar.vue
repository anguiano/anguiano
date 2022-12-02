<template>
    <div class="unauthenticated-navbar">
        <p class="unauthenticated-navbar-title">
            GENCODE
        </p>
        <MenuIcon class="unauthenticated-navbar-menu-icon" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuIcon from '@/shared/icons/MenuIcon.vue';

export default defineComponent({
    name: "UnauthenticatedNavbar",
    components: {
        MenuIcon,
    },
});
</script>

<style lang="scss" scoped>
.unauthenticated-navbar {
    @apply flex h-[50px] bg-black items-center px-4 justify-between;

    &-title {
        @apply font-normal text-lg text-white tracking-widest leading-none;
    }

    &-menu-icon {
        @apply fill-white w-[20px] block sm:hidden;
    }
}

</style>