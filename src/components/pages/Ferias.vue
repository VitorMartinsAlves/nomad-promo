<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">
        <div class="bg-laranja w-full"></div>
        <div class="container">

            <img class="vector1" src="../../assets/vector-pages1.svg" alt="vector1">
            <img class="vector2" src="../../assets/vector-pages2.svg" alt="vector2">

            <Nav />

            <div class="titulo">
                <h2 class="text-center">Programa de Férias</h2>
            </div>
            <div class="pages-img">
                <img src="../../assets/programa-de-ferias.png" alt="Programa de Férias">
            </div>
            <section class="section">
                <p>
                    Os programas de férias são projetados para estudantes e profissionais que desejam aproveitar um
                    período de tempo específico, como férias escolares ou uma pausa no trabalho, para vivenciar uma
                    experiência
                    enriquecedora em outro país.<br><br>

                    Esses programas oferecem uma combinação de atividades culturais, educacionais e recreativas,
                    permitindo que os destaques dos programas de férias podem incluir:
                </p>
                <ul>
                    <li>
                        <b>Aulas de idiomas: </b>Os participantes têm a oportunidade de aprimorar suas habilidades
                        linguísticas
                        através
                        de
                        aulas ministradas por professores qualificados e interagir com falantes nativos.
                    </li>
                    <li>
                        <b>Atividades culturais: </b>Os programas de férias podem incluir visitas a locais históricos,
                        museus,
                        monumentos,
                        passeios turísticos e eventos culturais, oferecendo aos participantes uma imersão completa na
                        cultura
                        local.
                    </li>
                    <li>
                        <b>Interação com moradores locais: </b>Os participantes têm a chance de interagir com moradores
                        locais,
                        o
                        que
                        proporciona uma compreensão mais profunda da cultura, dos costumes e do modo de vida do país
                        anfitrião.
                    </li>
                    <li>
                        <b>Excursões e viagens: </b>Os programas podem incluir excursões e viagens a destinos próximos,
                        permitindo
                        que
                        os
                        participantes explorem regiões diferentes do país.
                    </li>
                </ul>

                <p>Os programas de férias são ideais para quem busca uma experiência mais curta, intensa e imersiva em
                    um novo
                    ambiente cultural. O que oferecemos:</p>

                <h3>Intercâmbio nos EUA</h3>
                <p>Os Estados Unidos são um destino altamente procurado por estudantes que desejam fazer intercâmbio. O
                    país
                    oferece uma ampla gama de oportunidades educacionais, uma cultura diversificada e uma experiência de
                    vida
                    emocionante, incluindo possibilidades de viagens para destinos como Nova York, Los Angeles ou San
                    Francisco,
                    por
                    exemplo, muito famosos por seus pontos turísticos.</p>

                <h3>Intercâmbio no Canadá</h3>
                <p>As instituições educacionais canadenses são reconhecidas mundialmente, e o país oferece uma qualidade
                    de vida
                    elevada, com uma mistura única de cultura, história e modernidade. Além disso, o Canadá é conhecido
                    pela
                    receptividade aos estudantes internacionais e pelas oportunidades de trabalho durante e após os
                    estudos,
                    sendo
                    também um país rico em paisagens naturais.</p>

                <h3>Intercâmbio na Inglaterra</h3>
                <p>A Inglaterra é um destino popular para intercâmbio, oferecendo uma rica história, cultura e
                    instituições
                    acadêmicas renomadas. Com cidades icônicas como Londres, Oxford e Cambridge, os estudantes têm
                    acesso a uma
                    educação de alta qualidade, com uma ampla variedade de programas acadêmicos e cursos. Além disso, a
                    Inglaterra
                    oferece uma excelente infraestrutura de transporte, permitindo que os intercambistas explorem
                    facilmente o
                    país
                    e conheçam suas belas paisagens.</p>
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