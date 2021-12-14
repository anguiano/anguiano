<template>
    <div>
        <h1> {{ title }} </h1>
    </div>
</template>
export default {
    name: 'Anguiano',

    setup() {
        const title = "Pako Anguiano";
        
        return {
            title
        };
    },
};