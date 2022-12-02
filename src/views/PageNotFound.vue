<template>
    <div class="page-not-found">
        <h1 class="page-not-found-title">
            Error 404
        </h1>
        <p class="page-not-found-subtitle">
            THE REQUESTED URL WAS NOT FOUND ON THIS SERVER.
        </p>
        <p class="page-not-found-subtitle">
            THAT IS ALL WE KNOW.
        </p>
        <GCLink class="mt-8" :to="{name:'WelcomePage'}">
            Back to home page
        </GCLink>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GCLink from "@/shared/components/links/GCLink.vue";

export default defineComponent({
    name: "PageNotFound",
    components: {
        GCLink,
    }
});
</script>

<style lang="scss" scoped>
.page-not-found {
    @apply bg-error-400 h-full flex flex-col items-center justify-center text-white;

    &-title {
        @apply uppercase m-8 text-6xl text-center p-2;
    }

    &-subtitle {
        @apply uppercase font-thin text-center p-2;
    }
}
</style>