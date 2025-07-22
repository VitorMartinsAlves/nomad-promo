<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">
        <div class="bg-laranja w-full"></div>
        <div class="container">

            <img class="vector1" src="../../assets/vector-pages1.svg" alt="vector1">
            <img class="vector2" src="../../assets/vector-pages2.svg" alt="vector2">

            <Nav />

            <div class="titulo">
                <h2 class="text-center">Programa Business English</h2>
            </div>
            <div class="pages-img">
                <img src="../../assets/programa-business-english.png" alt="Programa Business English">
            </div>
            <section class="section">
                <p>
                    Aprimora as habilidades linguísticas e de comunicação para o ambiente de negócios.<br><br>

                    O programa de Business English oferece uma combinação de aulas teóricas e práticas focadas em
                    situações reais de negócios.<br><br>

                    Os participantes aprenderão vocabulário específico, expressões idiomáticas e estruturas gramaticais
                    relevantes para a comunicação empresarial. As aulas também podem abordar tópicos como a redação de
                    e-mails profissionais, técnicas de apresentação, habilidades de negociação e práticas de
                    networking.<br><br>

                    Os participantes do intercâmbio de Business English ainda poderão desenvolver confiança e fluência
                    na comunicação em inglês no contexto de negócios. Eles serão capazes de se expressar de forma mais
                    eficaz em reuniões, negociações e apresentações, além de adquirir uma compreensão mais profunda da
                    cultura empresarial internacional. O que oferecemos:
                </p>

                <h3>Intercâmbio Londres</h3>
                <p>Londres é uma metrópole global, repleta de história, cultura e oportunidades educacionais de primeira
                    classe. É lar de algumas das melhores instituições acadêmicas do mundo, onde você pode encontrar uma
                    ampla variedade de cursos e programas acadêmicos em diversas áreas de estudo.</p>

                <h3>Intercâmbio New York</h3>
                <p>New York é uma cidade pulsante, conhecida por ter arranha-céus imponentes, cultura diversificada e
                    oportunidades educacionais excepcionais. A cidade ainda é um centro global de negócios, artes, moda,
                    mídia e entretenimento, possibilitando a visita aos famosos pontos turísticos, como a Estátua da
                    Liberdade e o Central Park.</p>

                <h3>Intercâmbio San Diego</h3>
                <p>San Diego é conhecida por suas praias deslumbrantes, clima ameno e estilo de vida descontraído. Além
                    disso, o local abriga uma variedade de instituições acadêmicas de alta qualidade, que oferecem
                    variados tipos de programas educacionais. Você poderá escolher entre cursos de inglês, graduação e
                    pós-graduação em áreas como ciências, tecnologia, artes e negócios.</p>
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