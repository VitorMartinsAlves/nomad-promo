<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">
        <div class="bg-laranja w-full"></div>
        <div class="container">

            <img class="vector1" src="../../assets/vector-pages1.svg" alt="vector1">
            <img class="vector2" src="../../assets/vector-pages2.svg" alt="vector2">

            <Nav />

            <div class="titulo">
                <h2 class="text-center">Conhecer Uma Nova Cultura</h2>
            </div>
            <div class="pages-img">
                <img src="../../assets/cultura.png" alt="Conhecer Uma Nova Cultura">
            </div>
            <section class="section">
                <p>
                    Bora falar sério, a vida fica muito mais interessante quando a gente decide se jogar de cabeça em
                    uma nova cultura, né? Conhecer novos lugares, comidas e fazer amigos, não tem nada melhor. Na
                    Aliança Experience, a gente não só te dá a chance de conhecer, mas também de viver e abraçar essas
                    experiências culturais únicas.
                </p>

                <h3>Por que conhecer uma nova cultura?</h3>
                <p>Conhecer uma nova cultura é uma experiência que todos deveriam ter uma vez na vida. Explorar novos
                    lugares,pontos turísticos, fazer amigos, conhecer tradições e a gastronomia local é algo que muda a
                    vida para sempre.<br><br>

                    E na Aliança Experience você tem a oportunidade de explorar o mundo sozinho, com os amigos ou com
                    toda a família.</p>

                <img class="vector3" src="../../assets/vector-pages3.svg" alt="vector3">
            </section>
        </div>

    </div>

    <div class="container-fluid w-full wrap-arrume">
        <div class="arrume">
            <div class="container">
                <Arrume class="arr" />
            </div>
        </div>
    </div>

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
    position: absolute;
    top: 0;
    z-index: -5;
    background-color: #F5BA25;
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