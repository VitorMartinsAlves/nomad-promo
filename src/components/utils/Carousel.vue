<template>
    <Carousel>
        <template #slides="{ slidesCount }">
            <Slide v-for="(image) in images" :key="image.id">

                <div class="circulo">
                    <div class="photo">
                        <img :src="image.url" />
                    </div>
                    <p class="text-white text-center my-3 h-100">
                        <b>{{ image.texto }}</b>
                    </p>
                    <Button @click="goTo(image.src)" class="sl-button">Saiba mais</Button>
                </div>

            </Slide>
        </template>

        <template #addons>
            <Pagination class="pag" />
        </template>
    </Carousel>
</template>

<script>
import Button from './Button.vue'
import { defineComponent, registerRuntimeCompiler, toRefs } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Basic",
    props: {
        images: Array,
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation, Button
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
.pag {
    padding-top: 20px;
}

.circulo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 200px;
    height: 100%;

    .sl-button {
        width: 140px;
    }
}

p {
    max-width: 180px;
    line-height: 1.2;
    font-size: 14px;
}

img {
    width: 200px;
}
</style>
