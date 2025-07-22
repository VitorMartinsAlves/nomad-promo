<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">
        <div class="bg-laranja w-full"></div>
        <div class="container">

            <img class="vector1" src="../../assets/vector-pages1.svg" alt="vector1">
            <img class="vector2" src="../../assets/vector-pages2.svg" alt="vector2">

            <Nav />

            <div class="titulo">
                <h2 class="text-center">Melhorar o Currículo</h2>
            </div>
            <div class="pages-img">
                <img src="../../assets/curriculo.png" alt="Melhorar o Currículo">
            </div>
            <section class="section">
                <p>
                    Se você está de olho naquela promoção, buscando uma carreira internacional ou simplesmente querendo
                    dar aquele “up” no currículo, a Aliança Experience é o seu passaporte para o sucesso profissional.
                    Vamos falar sério, é hora de transformar o seu currículo de comum para extraordinário no exterior!
                </p>

                <h3>Por que aprimorar o currículo é essencial?</h3>

                <p><b>Competitividade no Mercado:</b> Em um mundo onde a concorrência é acirrada, ter um currículo
                    afiado e
                    recheado de experiências internacionais faz toda a diferença na hora de brilhar.<br><br>

                    <b>Desenvolvimento de Habilidades:</b> Cursos práticos, workshops exclusivos e imersões culturais
                    não
                    apenas enfeitam o currículo, mas também desenvolvem habilidades essenciais para o sucesso
                    profissional.<br><br>

                    <b>Networking Global:</b> Conectar-se com profissionais de todo o mundo amplia sua rede de contatos,
                    abrindo portas para oportunidades que você nem imaginava que existiam.
                </p>

                <h3>Vantagens de escolher a Aliança Experience para turbinar o currículo:</h3>

                <p>Nossos programas oferecem destinos e cursos que aprimoram as habilidades de comunicação verbal e
                    escrita, negociações internacionais, apresentações executivas, gerenciamento de equipes
                    multiculturais e liderança eficaz.<br><br>

                    Seja você um profissional na área de negócios, tecnologia ou idiomas, temos o programa certo para
                    você.</p>

                <h3>Escolha o Programa Ideal para você:</h3>
                <div class="botoes">
                    <Button @click="goTo('/family-program')" class="bt-footer">Family Program</Button>
                    <Button @click="goTo('/programa-de-ferias')" class="bt-footer">Programa de Férias</Button>
                </div>
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

<script>
import Nav from '../Nav.vue'
import Button from '../utils/Button.vue'
import Rodape from '../Rodape.vue'
import Arrume from '../Arrume.vue'


export default {
    data() {

    },
    components: {
        Button, Rodape, Arrume, Nav
    },
    methods: {
        goTo(path) {
            this.$router.push({ path: path })
        }
    }

}
</script>
<style lang="scss" scoped>
.bt-footer {
    width: auto;
    font-weight: bold;
    width: 210px;
    margin: 20px 20px 20px 0;
}
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

    .botoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>