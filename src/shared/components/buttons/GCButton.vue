<template>
    <button class="gcbutton">
        <slot />
    </button>
</template>

<script lang="ts">
import { setMaxIdleHTTPParsers } from 'http';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "GCButton",
});
</script>

<style lang="scss" scoped>
.gcbutton {
    @apply uppercase rounded-sm bg-transparent text-white text-xs border-[1px] py-3 px-5
    hover:bg-white hover:text-black
    ;

    
}
</style>
