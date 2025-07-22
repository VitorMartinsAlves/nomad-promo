<template>
    <div id="escolha">
        <div id="destinos"></div>
        <h1 class="text-center">Escolha o destino dos seus sonhos!</h1>
        <div class="row">
            <div class="col-md-6">

                <div id="accord" class="accordion-flush d-flex flex-column justify-content-between h-100">
                    <div class="acco">
                        <div class="accordion-header" @click="syncPhoto('collapse1')">
                            <button class="bd" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
                                aria-expanded="true" aria-controls="collapse1">
                                <h3>Estados Unidos</h3>
                            </button>
                        </div>
                        <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accord">
                            <div class="accordion-body">
                                <p>Os Estados Unidos é o destino mais escolhido e não é por acaso. Considerar um
                                    intercâmbio neste país é abrir as portas para uma experiência incrível. Dos
                                    destinos
                                    urbanos às maravilhas naturais, dos sotaques variados à rica diversidade
                                    cultural,
                                    os Estados Unidos oferecem tudo isso e muito mais. Explore um mundo de
                                    oportunidades
                                    e descubra os EUA!</p>
                            </div>
                        </div>
                    </div>
                    <div class="acco">
                        <div class="accordion-header" @click="syncPhoto('collapse2')">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                <h3>Canadá</h3>
                            </button>
                        </div>
                        <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accord">
                            <div class="accordion-body">
                                <p>Imagine a combinação perfeita de neve e praias, um país onde o inglês e o francês se
                                    misturam em um cenário de hospitalidade e paisagens deslumbrantes. Não perca a
                                    chance de explorar o Canadá em um intercâmbio que vai te surpreender em todos os
                                    sentidos!</p>
                            </div>
                        </div>
                    </div>

                    <div class="acco">
                        <div class="accordion-header" @click="syncPhoto('collapse3')">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                <h3>Inglaterra</h3>
                            </button>
                        </div>
                        <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accord">
                            <div class="accordion-body">
                                <p>Pense em um intercâmbio que te levará a um lugar de história rica, cultura
                                    efervescente e paisagens encantadoras. Com a combinação única de tradição e
                                    inovação, o Reino Unido é um destino que oferece um leque de experiências
                                    enriquecedoras. Viva o intercâmbio dos seus sonhos no Reino Unido!</p>
                            </div>
                        </div>
                    </div>

                    <div class="acco">
                        <div class="accordion-header" @click="syncPhoto('collapse5')">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                <h3>Irlanda</h3>
                            </button>
                        </div>
                        <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accord">
                            <div class="accordion-body">
                                <p>Se você está considerando um intercâmbio, não pode deixar de pensar na Irlanda. Com
                                    sua paisagem de tirar o fôlego, cultura vibrante e pessoas amigáveis, a Irlanda é o
                                    destino ideal para uma experiência enriquecedora no exterior. Descubra a magia da
                                    Ilha Esmeralda em seu intercâmbio na Irlanda!</p>
                            </div>
                        </div>
                    </div>

                    <div class="acco">
                        <div class="accordion-header" @click="syncPhoto('collapse6')">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                <h3>Emirados Árabes</h3>
                            </button>
                        </div>
                        <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#accord">
                            <div class="accordion-body">
                                <p>Fazer intercâmbio nos Emirados Árabes Unidos oferece uma combinação única de educação
                                    de qualidade e imersão cultural. Em cidades como Dubai e Abu Dhabi, você estudará em
                                    instituições renomadas enquanto explora uma região rica em história e inovação. Com
                                    um ambiente seguro e multicultural, é uma oportunidade para aprimorar seu inglês e
                                    viver uma experiência inesquecível.</p>
                            </div>
                        </div>
                    </div>

                    <div class="acco">
                        <div class="accordion-header" @click="syncPhoto('collapse7')">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                <h3>Austrália</h3>
                            </button>
                        </div>
                        <div id="collapse7" class="accordion-collapse collapse" data-bs-parent="#accord">
                            <div class="accordion-body">
                                <p>Ao fazer intercâmbio na Austrália, você tem acesso a estudos de alta qualidade e à
                                    oportunidade de explorar um dos destinos mais deslumbrantes do mundo. Em cidades
                                    como Sydney e Melbourne, é possível aprimorar o inglês enquanto se desfruta de um
                                    ambiente acolhedor e multicultural. Além da educação, o intercâmbio proporciona uma
                                    imersão em paisagens únicas e em uma cultura rica e diversa.</p>
                            </div>
                        </div>
                    </div>

                    <div class="acco">
                        <div class="accordion-header" @click="syncPhoto('collapse4')">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                <h3>Outros destinos pelo mundo</h3>
                            </button>
                        </div>
                        <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accord">
                            <div class="accordion-body">
                                <p>A Aliança te leva ao lugar dos seus sonhos. Fale com nossos consultores e comece a
                                    planejar seu intercâmbio hoje mesmo.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-md-6">
                <div id="img-eua" class="position-relative">
                    <img id="Selo-Travel" src="../assets/Selo-Travel.svg" alt="Selo Travel">
                    <img id="vetor3" src="../assets/vetor3.svg" alt="vetor 3">
                    <div class="img-wrap">
                        <img class="photo" :id=id :src=src :alt=alt>
                    </div>
                </div>
            </div>
        </div>


        <!-- O QUE É A ALIANÇA (mobile) -->

        <div class="card mb-3" id="oqueeh">
            <div class="row g-0">
                <div id="txt-oquee" class="col-md-6">
                    <div class="card-body">

                        <img id="mochila" src="../assets/mochila.svg" alt="mochila">

                        <h1>O que é a <span class="amarelo">Aliança Experience?</span></h1>
                        <p>Fazer intercâmbio parece complicado no início, mas calma, somos a ajuda que
                            você precisa para realizar esse sonho tranquilamente e sem dor de cabeça! </p>
                        <p>Oferecemos
                            oportunidades de intercâmbio para jovens e adultos, com diversas opções de programas como
                            High
                            School, programas para férias, programas para o desenvolvimento da carreira, no aprendizado
                            do
                            idioma e na experiência no exterior. </p>
                        <p class="amarelo">Nossos especialistas têm a missão de avaliar os seus
                            objetivos individuais e procurar a melhor solução para que você possa explorar novos
                            destinos e
                            mergulhar em culturas fascinantes.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img id="oq-img" src="../assets/walkway-airport2.png" class="img-fluid float-end"
                        alt="walkway-airport">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import imgEua from '@/assets/img-eua.png'
import imgCan from '@/assets/canada_.jpg'
import imgIng from '@/assets/inglaterra_.jpg'
import imgOut from '@/assets/outros_destinos.jpg'
import imgIrl from '@/assets/irlanda_.jpg'
import imgEmi from '@/assets/emirados.jpg'
import imgAus from '@/assets/australia.jpg'

export default {
    data() {
        return {
            id: "img-eua",
            src: imgEua,
            alt: "img eua",
        }
    },
    methods: {
        syncPhoto(id) {

            switch (id) {
                case "collapse1":
                    this.id = "img-eua";
                    this.src = imgEua;
                    this.alt = "img eua";
                    break;

                case "collapse2":
                    this.id = "img-can";
                    this.src = imgCan;
                    this.alt = "img canada";
                    break;

                case "collapse3":
                    this.id = "img-ing";
                    this.src = imgIng;
                    this.alt = "img Inglaterra";
                    break;

                case "collapse4":
                    this.id = "img-outros";
                    this.src = imgOut;
                    this.alt = "img Outros destinos";
                    break;

                case "collapse5":
                    this.id = "img-irlanda";
                    this.src = imgIrl;
                    this.alt = "img Irlanda";
                    break;

                case "collapse6":
                    this.id = "img-emirados";
                    this.src = imgEmi;
                    this.alt = "img Emirados";
                    break;

                case "collapse7":
                    this.id = "img-australia";
                    this.src = imgAus;
                    this.alt = "img Australia";
                    break;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
button:visited,
button:link {
    color: #00223C;
}

.card#oqueeh {
    border-radius: 16px;
    border: 0;
    background-color: #fff;
}

#txt-oquee .card-body {
    margin-top: 20px;

    p {
        font-weight: bold;
        font-size: 15px;
        line-height: 1.4;
    }
}

#oq-img {
    // height: 300px;
    width: 100%;
    object-fit: cover;
}

#mochila {
    position: absolute;
    top: 0px;
    right: 10px;
    // z-index: -5;
    width: 100px;
}

.amarelo {
    color: #FFB000;
}

#oqueeh {
    display: none;

    h1 {
        padding-left: 0;
        font-size: 28px;
    }
}

.img-wrap {
    height: 700px;
    width: 600px;
}

.photo {
    z-index: 5;
    border-radius: 30px;
    object-fit: cover;
    height: 100%;
    width: 100%;
}

#vetor3 {
    position: absolute;
    right: -220px;
    z-index: -5;
}

#Selo-Travel {
    position: absolute;
    top: -90px;
    right: -70px;
    width: 260px;
}

h1 {
    margin-bottom: 100px;
}

h3 {
    margin-bottom: 0;
    font-size: 30px;
    color: #00223C;
}

.acco {
    border-radius: 25px;
    border: 2px solid #00223C;
    padding: 15px 20px 0px 20px;
    width: 100%;
    text-align: left;
    padding-bottom: 15px;
}

.acco * {
    background-color: transparent;
}

button {
    border: 0px;
    padding: 0;
    // margin-bottom: 5px;
}

.eua h3 {
    margin-bottom: 10px;
}

#escolha {
    padding-top: 80px;
    padding-bottom: 100px;
    position: relative;
}

p {
    margin-top: 20px;
}

@media(max-width: 768px) {
    h1 {
        font-size: 32px;
        margin-bottom: 30px;
        padding: 0 30px;
        line-height: 1.1;
    }

    h3 {
        font-size: 20px;
    }

    #escolha {
        padding-top: 40px;
        // padding-bottom: 20px;
        // margin-bottom: 15px;
        height: 100%;
        padding-bottom: 20px;
    }

    .acco {
        padding: 10px 14px 8px 14px;
        border-width: 1px;
        border-radius: 16px;
        margin-bottom: 10px;
    }

    .bd {
        margin-bottom: 0;
    }

    #Selo-Travel {
        display: none;

    }

    .img-wrap {
        height: auto;
        width: 100%;
    }

    #oqueeh {
        display: block;
        margin-top: 15px;
    }

    .photo {
        border-radius: 16px;
        min-height: 440px;
        object-fit: cover;
    }
}
</style>
