<template>
    <div id="nossos-prog">
        <h1 class="text-center">Nossos Programas:</h1>
        <Carousel :items-to-show="1.7" :wrap-around="true" :images="images" />
    </div>

</template>

<script>
import homemEstudante from '@/assets/Homem-Estudante.png'
import mulherEstudante from '@/assets/Mulher-Estudante.png'
import homemBusiness from '@/assets/Homem-Business.png'
import mulherBusiness from '@/assets/Mulher-Business.png'
import homemEstudante1 from '@/assets/Homem-Estudante1.png'
import family from '@/assets/Family.png'


import { defineComponent, ref } from "vue";
import Carousel from './utils/Carousel.vue'

export default defineComponent({
    components: {
        Carousel,
    },
    data: () => ({

    }),
    setup() {
        const _images = [
            { id: 1, url: homemEstudante, texto: "Programa de Férias para Alunos entre 13 a 17 anos", src: "/programa-de-ferias" },
            { id: 2, url: mulherEstudante, texto: "Programa Work and Study", src: "/work-study" },
            { id: 3, url: homemBusiness, texto: "Programa Business English", src: "/business-english" },
            { id: 4, url: mulherBusiness, texto: "Programa English for Executives", src: "/english-for-executives" },
            { id: 5, url: homemEstudante1, texto: "Programa High School", src: "/high-school" },
            { id: 6, url: family, texto: "Family Program", src: "/family-program" },
        ];
        const images = ref(_images);    
        return { images };
    },
});
</script>

<style lang="scss" scoped>

#carousel {
    z-index: 10;
}

#nossos-prog {
    padding: 50px 0;
    // background-color: #00223C;
}

h1 {
    color: #F5BA25;
    font-size: 28px;
    margin-bottom: 40px;
}

.circle-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 100px;
    margin-top: 80px;
}
</style>