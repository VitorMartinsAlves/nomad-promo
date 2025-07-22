<template>
    <div class="meu-objetivo position-relative">

        <img id="Selo-Aviao" src="../assets/Selo-Aviao.svg" alt="Selo-Aviao">

        <img id="vetor1" src="../assets/vetor1.svg" alt="">

        <h2 class="text-center">Meu Objetivo:</h2>
        <div class="cxs">
            <router-link to="/aprender-um-novo-idioma">
                <CaixaAmarela class="cx-am">
                    <template #QuadSrc><img src="../../src/assets/idioma.svg" alt="Idioma" /></template>
                    <template #QuadTit>Aprender <br>um novo idioma</template>
                </CaixaAmarela>
            </router-link>

            <router-link to="/work-study">
                <CaixaAmarela class="cx-am">
                    <template #QuadSrc><img src="../../src/assets/trabalho.svg" alt="Trabalho" /></template>
                    <template #QuadTit>Estudar e trabalhar no exterior</template>
                </CaixaAmarela>
            </router-link>

            <router-link to="/conhecer-uma-nova-cultura">
                <CaixaAmarela class="cx-am">
                    <template #QuadSrc><img src="../../src/assets/cultura.svg" alt="Cultura" /></template>
                    <template #QuadTit>Conhecer uma nova cultura</template>
                </CaixaAmarela>
            </router-link>

            <router-link to="/melhorar-o-curriculo">
                <CaixaAmarela class="cx-am">
                    <template #QuadSrc><img id="curric" src="../../src/assets/curriculo.svg"
                            alt="Currículo" /></template>
                    <template #QuadTit>Melhorar o currículo</template>
                </CaixaAmarela>
            </router-link>

        </div>
    </div>
</template>

<script setup>
import CaixaAmarela from './utils/CaixaAmarela.vue'

</script>

<style lang="scss" scoped>
a,
a:visited {
    color: #00223C;
    text-decoration: none;
}

a:hover {
    color: #00223C;
    background-color: #fff;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
    border-radius: 40px;
}

#vetor1 {
    position: absolute;
    top: -810px;
    left: -390px;
}

#Selo-Aviao {
    position: absolute;
    top: -90px;
    left: -65px;
}

.meu-objetivo {
    margin-top: 50px;
    background-color: #F5BA25;
    border-radius: 40px;

    h2 {
        padding: 40px 0;
    }
}

.cxs {
    padding: 0 100px 100px 100px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

@media(max-width: 768px) {

    #Selo-Aviao {
        width: 110px;
        top: 40px;
        left: -10px;
    }

    .meu-objetivo {
        margin-top: 0px;
        background-color: #F5BA25;
        border-radius: 0px;

        h2 {
            padding: 30px 0 20px 0;
            font-size: 30px;
        }
    }

    .cxs {
        flex-direction: column;
        width: 100%;
        padding: 40px;
        padding-top: 0px;

        a {
            border-radius: 15px;
            height: 110px;
            margin-block: 10px;
        }
    }

    .cx-am {
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        height: 110px;
        border-radius: 15px;
        margin-bottom: 20px;
        border: solid 1px #000 !important;

        * {
            font-size: 18px;
            text-align: left;
        }

        .icon {
            padding-right: 0px !important;
            width: 110px;

            img {
                width: 70px;
            }
        }
    }

    #vetor1 {
        display: none;
    }

    #curric {
        height: 65px;
    }
}
</style>