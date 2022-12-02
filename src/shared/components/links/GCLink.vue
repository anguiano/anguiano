<template>
    <RouterLink :to="to" class="gclink">
        <slot />
    </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { RouterLink } from "vue-router";
import type { RouteLocationRaw } from "vue-router";

export default defineComponent({
    name: "GCLink",
    props: {
        to: {
            type: Object as PropType<RouteLocationRaw>,
            required: true,
        },
    }
});
</script>

<style lang="scss" scoped>
.gclink {
    @apply uppercase rounded-sm bg-transparent text-white text-xs border-[1px] py-3 px-5
    hover:bg-white hover:text-black
    ;    
}
</style>
