<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">
        <div class="bg-laranja w-full"></div>
        <div class="container">

            <img class="vector1" src="../../assets/vector-pages1.svg" alt="vector1">
            <img class="vector2" src="../../assets/vector-pages2.svg" alt="vector2">

            <Nav />

            <div class="titulo">
                <h2 class="text-center">Family Program</h2>
            </div>
            <div class="pages-img">
                <img src="../../assets/family-program.png" alt="Family Program">
            </div>
            <section class="section">
                <p>
                    O <b>“Family Program”</b> é o programa que proporciona experiências únicas, aprendizado no inglês e
                    imersão
                    cultural canadense para todos os membros da família. As aulas de inglês são adaptadas ao nível de
                    proficiência de cada membro. E para estimular amizades internacionais, compreensão intercultural e
                    fortalecimento dos laços familiares, o programa conta com atividades culturais, visitas a pontos
                    turísticos e eventos sociais.<br><br>

                    A duração pode variar de algumas semanas a vários meses, de acordo com a disponibilidade e
                    preferências da família.<br><br>

                    As opções de acomodação são em famílias anfitriãs locais ou apartamentos/apart-hotéis.<br><br>

                    Ao final da experiência, todos os membros da família terão avanço nas habilidades no idioma,
                    desenvolvimento de amizades internacionais, aumento da autoestima e vivência da cultura do país,
                    além de memórias inesquecíveis.
                </p>
                <h3>Resultados do Programa</h3>
                <p>Com este programa, o filho ou filha irá…</p>
                <ul>
                    <li>
                        Aumentar as habilidades no idioma inglês e ganhar fluência e confiança no uso diário do inglês;
                    </li>
                    <li>
                        Fazer novos amigos internacionais e desenvolver consciência intercultural;
                    </li>
                    <li>
                        Aumentar a autoestima, independência e senso de responsabilidade;
                    </li>
                    <li>
                        Vivenciar a cultura norte-americana em primeira mão;
                    </li>
                    <li>
                        Ter uma experiência internacional incrível.
                    </li>
                </ul>
                <p>Com este programa, os pais irão…</p>
                <ul>
                    <li>
                        Aumentar as habilidades no idioma inglês, de acordo com o seu nível individual;
                    </li>
                    <li>
                        Desfrutar de atividades independentes nas belas áreas de Vancouver e Whistler, na Colúmbia
                        Britânica;
                    </li>
                    <li>
                        Estar imerso na cultura canadense;
                    </li>
                    <li>
                        Vivenciar um valioso tempo em família junto com seu filho.
                    </li>
                </ul>

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