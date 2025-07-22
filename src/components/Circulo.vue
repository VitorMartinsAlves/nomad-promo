<template>
    <div class="circulo" v-for="(image) in images" :key="image.id">
        <div class="photo">
            <img :src="image.url" />
        </div>
        <p class="text-white text-center my-3 h-100">
            <b>{{ image.texto }}</b>
        </p>
        <Button @click="goTo(image.src)" class="sl-button">Saiba mais</Button>
    </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import Button from './utils/Button.vue'

export default defineComponent({
    // name: "Basic",
    props: {
        images: Array,
    },
    components: {
        Button
    },
    methods: {
        goTo(path) {
            this.$router.push({ path: path })
        }
    },
    setup(props) {
        const { images } = toRefs(props);

        return { images };
    },
});
</script>

<style lang="scss" scoped>
.circulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 270px;
}

p {
    max-width: 200px;
}
</style>