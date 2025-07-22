<template>

    <div class="container-fluid w-full position-relative pages" id="ferias">

        <div class="bg-laranja w-full"></div>
        <div class="container">

            <img class="vector1" src="../../assets/vector-pages1.svg" alt="vector1">
            <img class="vector2" src="../../assets/vector-pages2.svg" alt="vector2">

            <Nav />

            <div class="titulo">
                <h2 class="text-center">Programa Work & Study</h2>
            </div>
            <div class="pages-img">
                <img src="../../assets/programa-work-study.png" alt="Programa Work & Study">
            </div>
            <section class="texto">
                <p>
                    Os programas de estudo e trabalho oferecem aos estudantes e profissionais a oportunidade de
                    aprimorar seus conhecimentos acadêmicos e adquirir experiência de trabalho remunerada em um ambiente
                    internacional.<br><br>

                    Esses programas combinam cursos acadêmicos com uma colocação profissional, permitindo que os
                    participantes apliquem seus conhecimentos teóricos em um ambiente de trabalho real.<br><br>

                    Alguns aspectos importantes dos programas de estudo e trabalho podem incluir:
                </p>
                <ul>
                    <li>
                        <b>Cursos acadêmicos: </b>Os participantes têm acesso a uma ampla gama de cursos acadêmicos em
                        diferentes áreas, dependendo de sua área de interesse e qualificações.
                    </li>
                    <li>
                        <b>Colocação profissional:</b> Após a conclusão dos cursos, os participantes são colocados em
                        empresas
                        ou organizações locais para ganhar experiência prática em seu campo de estudo.
                    </li>

                    <li>
                        <b>Remuneração:</b> Em muitos casos, os participantes recebem uma remuneração pelo trabalho
                        realizado
                        durante a colocação profissional, o que pode ajudar a custear parte dos custos do intercâmbio.
                    </li>

                    <li>
                        <b>Desenvolvimento profissional: </b>Os programas de estudo e trabalho permitem que os
                        participantes
                        adquiram habilidades profissionais, desenvolvam redes de contatos internacionais e tenham uma
                        visão mais ampla do mercado de trabalho global.
                    </li>

                </ul>

                <p>Os programas de estudo e trabalho são ideais para aqueles que desejam combinar aprimoramento
                    acadêmico com experiência prática de trabalho em um ambiente internacional.</p>

                <h3>Duração mínima</h3>
                <p>A duração mínima para participar de um programa de Work & Study pode variar de acordo com o país e a
                    instituição de ensino. No entanto, geralmente a duração mínima é de três a seis meses. Essa duração
                    é necessária para permitir que os participantes tenham tempo suficiente para se adaptarem ao novo
                    ambiente, se matricularem em cursos acadêmicos e estabelecerem-se no trabalho remunerado.
                    <br><br>
                    É importante observar que alguns países podem ter requisitos específicos de visto ou permissão de
                    trabalho para participar de programas de Work & Study. Esses requisitos podem incluir a necessidade
                    de uma oferta de trabalho confirmada, comprovação de habilidades linguísticas e financeiras, entre
                    outros.
                    <br><br>
                    É recomendável entrar em contato com a instituição de ensino ou agência de intercâmbio para obter
                    informações atualizadas sobre os requisitos específicos do país de interesse. O que oferecemos:
                </p>

                <h3>Intercâmbio Dubai</h3>
                <p>Em Dubai, você encontrará uma mistura fascinante de culturas, arquitetura moderna e tradições
                    históricas. <br><br>Além disso, ao fazer um intercâmbio em Dubai, você terá acesso a instituições
                    acadêmicas
                    de renome, com programas de alta qualidade em diversas áreas de estudo. A cidade também é um centro
                    de inovação e oportunidades de negócios, proporcionando um ambiente estimulante para aqueles que
                    desejam expandir seus horizontes profissionais.</p>

                <h3>Intercâmbio Irlanda</h3>
                <p>A Irlanda é conhecida por sua herança celta, castelos magníficos e paisagens naturais de tirar o
                    fôlego. Ao fazer um intercâmbio no país, você terá a chance de mergulhar na rica cultura irlandesa,
                    desfrutando de festivais tradicionais, música folclórica e uma vida noturna animada, tendo
                    possibilidades estratégicas para conectar-se com outros locais da Europa.
                </p>

                <h3>Intercâmbio Canadá</h3>
                <p>As instituições educacionais canadenses são reconhecidas mundialmente, e o país oferece uma qualidade
                    de vida elevada, com uma mistura única de cultura, história e modernidade. Além disso, o Canadá é
                    conhecido pela receptividade aos estudantes internacionais e pelas oportunidades de trabalho durante
                    e após os estudos, sendo também um país rico em paisagens naturais.
                </p>

                <h3>Intercâmbio Austrália</h3>
                <p>A Austrália oferece uma ampla variedade de cursos e programas acadêmicos para estudantes
                    internacionais. Seja você interessado em cursos de inglês, graduação ou pós-graduação, você
                    encontrará opções para atender às suas necessidades educacionais e profissionais. Além disso, a
                    Austrália é conhecida por sua natureza exótica e vida ao ar livre, com praias de águas claras,
                    recifes de coral impressionantes, florestas tropicais e parques nacionais deslumbrantes.
                </p>

                <h3>Intercâmbio Nova Zelândia</h3>
                <p>A Nova Zelândia é famosa por suas paisagens deslumbrantes, que variam de praias incríveis a florestas
                    exuberantes e montanhas. Se você é um amante da natureza e adora atividades ao ar livre, este é o
                    lugar perfeito para você. Além de sua beleza natural, a Nova Zelândia é reconhecida mundialmente por
                    suas instituições acadêmicas de alta qualidade e universidades com ampla gama de programas
                    acadêmicos, incluindo áreas com foco especial em ciências, tecnologia, artes e agricultura.
                </p>
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
    padding-top: 50px;
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

.texto {
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