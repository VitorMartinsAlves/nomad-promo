<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">
        <div class="bg-laranja w-full"></div>
        <div class="container">
            <Nav />
            <div class="titulo">
                <h2 style="color: white;" class="text-center">Você já perdeu <br>
                    oportunidades <span style="color: #FF368F;">por não<br>
                        falar inglês?</span></h2>
                <p class="text-center" style="color: white; font-size: 20px;">
                    Aprenda inglês de verdade com aulas particulares
                    <br> e foco em conversação.
                </p>
            </div>

            <iframe style="border-radius: 36px;width: 100%;height: 660px;"
                src="https://www.youtube.com/embed/VGfnGiW4o9w">
            </iframe>
        </div>

    </div>
    <!-- <div class="container-fluid w-full wrap-arrume">
        <div class="arrume">
            <div class="container">
                <Arrume class="arr" />
            </div>
        </div>
    </div> -->

    <div class="container-fluid w-full bg-rodape">
        <div id="rodape">
            <div class="container">
                <Rodape id="rod" />
            </div>
        </div>
    </div>

</template>

<script setup>
import Rodape from '../Rodape.vue'
import Arrume from '../Arrume.vue'
import Nav from '../Nav.vue'
import AgendaConsultoria from '../AgendaConsultoria.vue';

</script>

<style lang="scss" scoped>
.w-full {
    width: 100%;
    margin: 0;
    padding: 0 !important;
}

.wrap-arrume {
    position: relative;
    overflow: hidden;
    background: url("../../assets/Imagem1.png") no-repeat top left;
    background-color: rgba(0, 34, 60, 0.9);

    div {
        margin-top: 0;
        margin-bottom: 30px;
    }
}

.arr {
    padding: 100px 0 100px 0;
}

.bg-rodape {
    background-color: #fff;
}

.bg-laranja {
    background-image: url("../../assets/bg-helder.png");
    position: absolute;
    top: 0;
    z-index: -5;
    background-color: #0D1019;
    height: 700px;
}

.titulo h2 {
    margin: 160px 0 70px 0;
}

.pages-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
}

ul li,
p {
    font-size: 26px;
}

ul li {
    margin: 20px 0;
}

h3 {
    color: #F5BA25;
    margin: 28px 0;
}

.section {
    margin-bottom: 100px;
}

.vector1 {
    position: absolute;
    margin-top: -80px;
    margin-left: -140px;
}

.vector2 {
    position: absolute;
    margin-top: 550px;
    margin-left: 1050px;
    z-index: -5;

}

.vector3 {
    position: absolute;
    bottom: 350px;
    margin-left: -300px;
}

@media(max-width: 768px) {
    .arr {
        padding-top: 50px;
    }

    .vector1,
    .vector2,
    .vector3 {
        display: none;
    }

    h2 {
        font-size: 38px;
        padding: 0 30px;
    }

    h3 {
        padding: 0 15px;
    }

    .titulo h2 {
        margin: 50px 0;
    }

    .pages-img {
        width: 100%;

        img {
            width: 100%;

        }
    }

    .bg-laranja {
        height: 400px;
    }

    p,
    ul li {
        font-size: 16px;
        padding: 0 15px;
    }

    .pages-img {
        margin-bottom: 30px;
    }

    .section {
        margin-bottom: 40px;
    }
}
</style>