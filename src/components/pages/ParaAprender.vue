<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">
        <div class="bg-laranja w-full"></div>
        <div class="container">

            <img class="vector1" src="../../assets/vector-pages1a.svg" alt="vector1">
            <img class="vector2" src="../../assets/vector-pages2.svg" alt="vector2">

            <!-- NAV -->
            <nav class="navbar navbar-expand-lg rounded-pill position-relative">

                <div class="container-fluid">
                    <div class="navbar-nav d-flex justify-content-between align-items-center w-100">
                        <router-link to="/">
                            <img id="logo" src="../../assets/Alianca_Experience.svg" alt="logo Aliança">
                        </router-link>
                        <a class="nav-link">
                            <router-link to="/#np">
                            Programas
                            </router-link>
                        </a>

                        <a class="nav-link" href="/#destinos">
                            <!--<router-link to="/aprender-um-novo-idioma">-->
                            Destinos
                            <!--</router-link>-->
                        </a>

                        <a class="nav-link">
                            <router-link to="/aprender-um-novo-idioma">
                                Aprender Idiomas
                            </router-link>
                        </a>

                        <a class="nav-link">
                            <router-link to="/high-school">
                                High School
                            </router-link>
                        </a>
                        <a class="nav-link" href="#">
                            <router-link to="/work-study">
                                Trabalhar no Exterior
                            </router-link>
                        </a>
                        <a href="#a1">
                            <Button>Começar agora</Button>
                        </a>
                    </div>
                </div>
            </nav>
            <!-- /NAV -->

            <div class="titulo">
                <h2 class="text-center">Para Aprender Um Idioma</h2>
            </div>
            <div class="pages-img">
                <img src="../../assets/para-aprender.png" alt="Para Aprender Um Idioma">
            </div>
            <section class="section">
                <p>
                    Dominar um novo idioma vai além de adquirir habilidades comunicativas! É abrir as portas para um
                    universo de oportunidades, crescimento pessoal e compreensão cultural. Quer saber mais sobre como
                    aprender um idioma no exterior e qual o melhor programa para você? A gente te ajuda!
                </p>
                <h3>Por que o Intercâmbio é a melhor forma de aprender um idioma?</h3>
                <p>A imersão é a chave para desbloquear o potencial máximo do aprendizado de um idioma. Ao escolher
                    o intercâmbio, os alunos se encontram envolvidos diariamente na língua-alvo, aprimorando suas
                    habilidades de maneira natural e autêntica. A Aliança Experience oferece um ambiente propício para
                    essa imersão, proporcionando não apenas aulas de alta qualidade, mas também a vivência cultural
                    necessária para consolidar o conhecimento adquirido.
                </p>
                <h3>Quais os benefícios de aprender um idioma?</h3>
                <p>Abertura de Oportunidades Profissionais: O domínio de um segundo idioma amplia as perspectivas de
                    carreira, possibilitando a entrada em mercados internacionais e destacando-se em ambientes
                    globais.<br><br>

                    Desenvolvimento Cognitivo: Estudos mostram que aprender um novo idioma estimula o cérebro,
                    melhorando a capacidade de concentração, resolução de problemas e multitarefa.<br><br>

                    Enriquecimento Cultural: Aprofundar-se em uma nova língua é também mergulhar em uma nova cultura.
                    Isso promove a empatia, a compreensão e a apreciação da diversidade.
                </p>

                <h3>Quais os Idiomas Posso Aprender com a Aliança Experience?</h3>
                <p>Na Aliança Experience, oferecemos uma variedade de opções de idiomas para atender às diversas
                    necessidades dos alunos. Os principais idiomas incluem:

                    <b>Francês e Inglês:</b> Essenciais no cenário internacional, o francês e o inglês abrem portas para
                    oportunidades acadêmicas e profissionais em diversos países.

                    <b>Espanhol:</b> Com mais de 460 milhões de falantes nativos, o espanhol é uma língua vibrante e
                    amplamente falada em todo o mundo, proporcionando vantagens significativas no mercado
                    de trabalho.
                </p>

                <h3>Por que Fazer Intercâmbio na Aliança Experience?</h3>
                <p>Programas de Imersão Cultural: Nossos programas vão além das salas de aula. Oferecemos
                    experiências culturais que enriquecem o aprendizado, desde atividades locais até excursões
                    emocionantes.<br><br>

                    Suporte Integral: Na Aliança Experience, compreendemos as complexidades do intercâmbio.
                    Oferecemos suporte abrangente, desde a acomodação até orientação cultural, garantindo
                    uma experiência suave e memorável.
                </p>

                <h3>Escolha o Programa Ideal para você:</h3>

                <div class="botoes">
                    <Button @click="goTo('/programa-de-ferias')" class="bt-footer">Programa de Férias</Button>
                    <Button @click="goTo('/high-school')" class="bt-footer">High School</Button>
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
import Button from '../utils/Button.vue'
import Rodape from '../Rodape.vue'
import Arrume from '../Arrume.vue'

export default {
    data() {

    },
    components: {
        Button, Rodape, Arrume
    },
    methods: {
        goTo(path) {
            this.$router.push({ path: path })
        }
    }

}

</script>

<style lang="scss" scoped>
a,
a:visited {
    color: #FFB000;
    text-decoration: none;
}

a:hover {
    color: #fff;
}
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
    background-color: #00223C;
    height: 700px;
}

.titulo h2 {
    margin: 160px 0 70px 0;
    color: #F5BA25;
}

.pages-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    padding-right: 200px;
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
    margin-left: -760px;
}

.navig {
    background-color: #19374e !important;
}

nav {
    margin-top: 35px;
    height: 80px;
    background-color: #19374e;

    .nav-link {
        font-size: 18px;
    }

    a {
        color: #FFB000;
    }

    a:hover {
        color: #fff;
    }
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

    .btWrap {
        width: 170px;
    }

    #logo {
        max-width: 140px;
    }

    .navbar-nav {
        flex-direction: row;
    }

    nav {
        margin-top: 35px;

        .nav-link {
            display: none;
        }
    }

    #logo-alianca {
        margin-right: 0;
        width: 130px;
    }

    .pages-img {
        padding-right: 20px;
    }

    .botoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>