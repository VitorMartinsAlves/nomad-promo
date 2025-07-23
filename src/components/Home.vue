<template>
    <div class="container-fluid w-full main bg-blue">
        <div class="container">
            <Nav />
            <div class='center-main'>
                <div class="titulo">
                    <h2>Xp e Aliança juntas para você aprender
                        <span style="color: #0084D5;"> inglês do jeito certo
                            e 100% online!</span>
                    </h2>
                    <p>
                        Colaboradores da Xp e familiares agora contam com condições exclusivas para aprender inglês
                        online e personalizado.
                    </p>
                    <p style="margin-top: 20px;">
                        <strong>
                            Na Aliança você tem flexibilidade, qualidade e resultados comprovados.
                        </strong>
                    </p>
                    <a href="#titulo-pos">
                        <button style="width: 130%;">Quero saber mais</button>
                    </a>
                </div>
                <img class="first-img" src="../assets/nomad-image-01.svg" alt="">
            </div>

        </div>
    </div>
    <div style="background-color: #4557C7;" class="container-fluid w-full main">
        <div id="stop-plate-position" class="stop-plate">
            <img style="width: 950px; margin: 6%;" src="../assets/card.png" alt="">
        </div>
        <div class="container">
            <h2 style="color: white;" class="text-center">Por que escolher a Aliança?</h2>
        </div>
        <div class="container">
            <div style="padding-top: 50px;" class="cards-container">
                <div class="card">
                    <div class="card-flex">
                        <!-- <img src="../assets/imersao.svg" alt="Imersão"> -->
                        <h3>Aulas 100% Personalizadas</h3>
                    </div>
                    <p>Cada aluno recebe um
                        plano de estudo feito sob medida,
                        alinhado às suas metas
                        profissionais e necessidades específicas.</p>
                </div>
                <div class="card">
                    <div class="card-flex">
                        <!-- <img src="../assets/flexibilidade.svg" alt="Flexibilidade"> -->
                        <h3>Professores Qualificados</h3>
                    </div>
                    <p>Todos os nossos professores
                        têm vasta experiência em ensino
                        e fluência em inglês corporativo.</p>
                </div>
                <div class="card">
                    <div class="card-flex">
                        <!-- <img src="../assets/personalizado.svg" alt="Personalizado"> -->
                        <h3>Flexibilidades de Horários</h3>
                    </div>
                    <p>As aulas podem ser agendadas conforme a conveniência do aluno,
                        sem comprometer sua rotina de trabalho.</p>
                </div>
                <div class="card">
                    <div class="card-flex">
                        <!-- <img src="../assets/conexao.svg" alt="Conexão"> -->
                        <h3>Foco em Habilidades Práticas</h3>
                    </div>
                    <p>Ensinamos o que realmente
                        importa para o dia a dia
                        corporativo, como comunicação
                        em reuniões, apresentações e negociações em inglês.</p>
                </div>
            </div>
        </div>

        <div class="faq-section">

            <div style="display: flex; flex-direction: column; align-items: center;" class="container">
                <img style="width: 65%;" class="faq-card" src="../assets/card-faq.svg" alt="">
                <div class='center-main'>
                    <div class="titulo">
                        <h2>Mais de <span style="color: #0084D5;">300 mil alunos</span>
                            já alcançaram a fluência
                            com a Aliança <span style="color: #0084D5;">e agora chegou sua vez!</span>
                        </h2>
                        <p>
                            Mais de 300 mil alunos já confiaram em nosso método para aprender inglês. Aumente sua
                            produtividade, melhore a comunicação e ganhe confiança ao
                            se comunicar em inglês.

                        </p>
                    </div>
                    <img src="../assets/nomad-man.png" alt="">
                </div>
                <img id="depoimentos" style="user-select: none;width: 100%; margin-top: 60px;"
                    src="../assets/depoimento.svg" alt="">
            </div>
            <div id="faq-pos" class="container faq-space">
                <h2 style="color: #0084D5;">Perguntas frequentes</h2>
                <div class="faq-item" v-for="(faq, i) in faqs">
                    <button class="faq-question">Quais os 04 diferenciais da Aliança? <span>▾</span></button>
                    <div class="faq-answer">
                        <p><strong>01 –</strong> Fugimos do tradicional: O mundo mudou, as plataformas mudaram e o jeito
                            de aprender também. Aqui na Aliança você tem 4 aulas semanais, com horários flexíveis e com
                            a comodidade de aprender em qualquer lugar.</p>
                        <p><strong>02 –</strong> Personalizamos o ensino: aliado ao nosso método, o ensino personalizado
                            é o melhor caminho para resolver, no seu tempo, as suas maiores dificuldades em <i>reading,
                                writing, listening e speaking</i> (leitura, escrita, escuta e pronúncia).</p>
                        <p><strong>03 –</strong> Ajustamos nossos horários: uma agenda apertada não é problema para quem
                            estuda na Aliança. Aqui, a gente ajusta e flexibiliza o horário conforme a sua
                            possibilidade.</p>
                        <p><strong>04 –</strong> Entregamos o melhor para você: por meio de aulas ao vivo, priorizamos
                            dinamismo e eficiência, com professores 100% dedicados ao seu aprendizado e às suas dúvidas.
                            Afinal, são 7 mil alunos ativos que estão dando grandes passos em suas carreiras.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Como funcionam as aulas? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>São 4 aulas semanais, particulares, com horários totalmente flexíveis, conforme a
                            disponibilidade do aluno.</p>
                        <p>A metodologia da Aliança proporciona rápido aprendizado do idioma, pois conta com professores
                            altamente capacitados e material didático personalizado.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Existe idade para começar a estudar na Aliança? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>A Aliança é para todos, porém, a nossa idade mínima é de 5 anos.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Tenho a garantia de que aprenderei o idioma? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>Sim! As aulas particulares com um professor fixo são exatamente para focar no seu
                            desenvolvimento de forma assertiva e rápida.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Posso fazer de qualquer lugar? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>Sim. As aulas são 100% online.</p>
                        <p>Para acessá-las, basta estar conectado(a) à internet, por um smartphone, tablet ou
                            computador.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Quantas aulas posso fazer por semana? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>O programa da Aliança prevê 4 aulas semanais. Mas dependendo da necessidade do aluno poderão
                            ser acrescentadas aulas adicionais no plano.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Terei professor particular? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>Sim. As aulas são particulares e totalmente dedicadas a você. Desta forma, favorecendo a
                            dinâmica entre aluno e professor e o processo de aprendizado.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Como funciona o método de pagamento? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>O pagamento ocorre mensalmente e pode ser feito por meio do seu cartão de crédito, boleto
                            bancário ou pix.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Qual é a duração do curso? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>Não há uma duração delimitada. O tempo de curso pode variar bastante de acordo com as
                            necessidades, limitações, objetivo esperado (como uma viagem, intercâmbio ou trabalho) e
                            também com a frequência. Mas isso será abordado pelo professor e ajustado aos propósitos do
                            aluno.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">O curso da Aliança é um curso complementar (para quem faz inglês na
                        escola)? <span>▾</span></button>
                    <div class="faq-answer">
                        <p>Não. O curso oferecido pela Aliança é um curso completo e pensado para quem já tem ou não
                            contato com o idioma.</p>
                        <p>Assim, o módulo proposto será ajustado através de uma análise do perfil de cada aluno.</p>
                    </div>
                </div>
                <!-- <div style="display: flex;flex-direction: column; text-align: center;align-items: center;"
                    class="whatsapp-section">
                    <h3 style="color: #FF368F;" class="text-pink">Precisa de ajuda?</h3>
                    <p>Clique agora no botão e fale com um dos nossos especialistas!</p>
                    <a href="#">
                        <img style="margin-top: 20px;" src="../assets/btn-whatsapp.svg" alt="WhatsApp Logo">
                    </a>
                </div> -->
            </div>
        </div>
    </div>
    <div class="container-fluid w-full main">
        <div class="container">
            <div class='center-main'>
                <div id="titulo-pos" class="titulo">
                    <h2>Quer <span style="color: #0084D5;">transformar sua
                            carreira na Xp</span> com o inglês?
                    </h2>
                    <p>
                        Entre em contato com nosso time e descubra como podemos
                        criar um plano de aprendizado exclusivo para você.
                    </p>
                    <p style="margin-top: 20px;">
                        <strong>
                            <span style="color: #0084D5;"> Garanta a fluência que você precisa para alcançar resultados
                                globais!</span>
                        </strong>
                    </p>

                    <form id="form-pos" class="border-h text-white-h" @submit.prevent="submitLead">
                        <div class="form-content" style="display: flex;flex-direction: column;">
                            <input v-model="formData.name" type="text" placeholder="Nome" required>
                            <input v-model="formData.email" type="email" placeholder="E-mail" required>
                            <input v-model="formData.whatsapp" type="tel" placeholder="+55 Whatsapp" required>
                            <p v-if="successMessage" style="color: #00FF00; margin-top: 10px;">Contato enviado com
                                sucesso!
                            </p>

                            <button type="submit" :disabled="isLoading">
                                <span v-if="isLoading" class="loader"></span>
                                <span v-else>Quero saber mais</span>
                            </button>
                        </div>
                    </form>

                    <!-- <a href="#">
                        <button style="width: 130%;">Quero saber mais</button>
                    </a> -->
                </div>
                <img class="secont-img" style="" src="../assets/nomad-woman.png" alt="">
            </div>
            <a href="#titulo-pos">
                <img id="kids-pos" style="width: 100%; padding-top: 90px;" src="../assets/last-card.svg" alt="">
            </a>
        </div>
        <img id="Selo-globo2" src="../assets/Selo-globo.svg" alt="Selo-globo2">
        <div style="background-color: #4557C7; color: white;" class="container-fluid w-full bg-rodape">
            <div id="rodape">
                <div class="container">
                    <Rodape id="rod" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Circulo from './Circulo.vue'
import Caixas from './utils/Caixas.vue'
import NossosProg2 from './NossosProg2.vue'
import Rodape from './Rodape.vue'
import Arrume from './Arrume.vue'
import Porque from './Porque.vue'
import OQuee from './OQuee.vue'
import Escolha from './Escolha.vue'
import NossosProg from './NossosProg.vue'
import MeuObjetivo from './MeuObjetivo.vue'
import Header from './Header.vue'
import Nav from './Nav.vue'
import axios from 'axios'

import homemEstudante from '@/assets/Homem-Estudante.png'
import mulherEstudante from '@/assets/Mulher-Estudante.png'
import homemBusiness from '@/assets/Homem-Business.png'
import mulherBusiness from '@/assets/Mulher-Business.png'
import homemEstudante1 from '@/assets/Homem-Estudante1.png'
import family from '@/assets/Family.png'

import { defineComponent, ref } from "vue";

export default {
    components: {
        Circulo, Caixas, NossosProg2, Rodape, Arrume, Porque, OQuee, Escolha, NossosProg, MeuObjetivo, Header, Nav,
    },
    data() {
        const _images = [
            { id: 1, url: homemEstudante, texto: "Programa de Férias para Alunos entre 13 a 17 anos", src: "/programa-de-ferias" },
            { id: 2, url: mulherEstudante, texto: "Programa Work and Study", src: "/work-study" },
            { id: 3, url: homemBusiness, texto: "Programa Business English", src: "/business-english" },
            { id: 4, url: mulherBusiness, texto: "Programa English for Executives", src: "/english-for-executives" },
            { id: 5, url: homemEstudante1, texto: "Programa High School", src: "/high-school" },
            { id: 6, url: family, texto: "Family Program", src: "/family-program" },
        ]
        return {
            images: _images,
            countries: [],
            formData: {
                name: '',
                email: '',
                whatsapp: '',
                whatsappCountryCode: '+55' // Default to Brazil
            },
            successMessage: false,
            isLoading: false
        }
    },
    methods: {
        async fetchCountries() {
            try {
                const response = await axios.get('https://api-paises.pages.dev/paises.json')
                this.countries = response.data
            } catch (error) {
                console.error('Erro ao buscar DDIs:', error)
            }
        },
        async submitLead() {
            try {
                this.isLoading = true
                let phoneNumber = this.formData.whatsapp.replace(/\D/g, '');
                const countryCode = this.formData.whatsappCountryCode.replace(/\D/g, '');
                if (phoneNumber.startsWith(countryCode)) {
                    phoneNumber = phoneNumber.slice(countryCode.length);
                }
                const response = await axios.post('https://martinsdash.discloud.app/api/hide-api', {
                    // const response = await axios.post('http://0.0.0.0:8080/api/hide-api', {
                    name: this.formData.name,
                    email: this.formData.email,
                    primaryPhoneNumber: phoneNumber,
                    primaryPhoneCountryCode: this.formData.whatsappCountryCode,
                    source: 'website_form'
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                this.formData = { name: '', email: '', whatsapp: '', whatsappCountryCode: '+55' }
                this.successMessage = true
                setTimeout(() => {
                    this.successMessage = false
                }, 3000)
            } catch (error) {
                console.error('Erro ao criar lead:', error.response?.data || error.message)
                alert('Erro ao criar lead. Verifique os dados e tente novamente.')
            } finally {
                this.isLoading = false
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const buttons = document.querySelectorAll('.faq-question')
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    buttons.forEach(b => {
                        if (b !== btn) {
                            b.classList.remove('open')
                            b.nextElementSibling?.classList.remove('open')
                        }
                    })
                    btn.classList.toggle('open')
                    btn.nextElementSibling?.classList.toggle('open')
                })
            })
        })
        this.fetchCountries()
    },
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3 {
    color: black;
}

button {
    font-size: 20px;
    font-weight: 500;
    background-color: #5D6DDA;
    padding: 20px;
    margin-top: 23px;
    // text-align: center;
    border-radius: 25px;
    border: none;
    color: white;
    cursor: pointer;
    position: relative;
}

form button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #ffffff;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
    display: inline-block;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.stop-plate h2 {
    font-weight: 400;
    color: white;
    padding-top: 100px;
}

form p {
    margin-top: 40px;
}

form h3 {
    width: 60%;
}

.card-flex {
    width: unset;
    display: unset;
    justify-content: space-between;
    flex-direction: row-reverse;
}

.center-main {
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.titulo {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: baseline;
    text-align: left;

}

.t-size {
    // width: 1120%;
}

.titulo h2 {
    font-weight: 600;
    font-size: 50px;
    margin-top: 20px;
}

.titulo p {
    // width: 60%;
    margin-top: 10px;
    font-size: 20px;
}

.first-img {
    width: 65%;
    height: 65%;
}

.secont-img {
    margin-top: 100px;
    width: 55%;
    height: 55%;
}

.faq-section .titulo h2 {
    font-size: 60px;
    color: white;
    text-align: left;

}


.faq-card {
    position: relative;
    top: -130px;
    margin-bottom: -180px;
}

.faq-section .titulo {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
}

.faq-section img {
    width: 45%;
}

iframe {
    margin-top: 40px;
    width: 100%;
    height: 699px;
}

.faq-section {
    background-color: #001821;
    color: #fff;
    padding: 60px 20px;
    font-family: sans-serif;
    margin-top: unset;
}

.faq-section h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
}

.faq-item {
    border-bottom: 1px solid #444;
}

.faq-question {
    background: none;
    color: #fff;
    border: none;
    width: 100%;
    text-align: left;
    padding: 10px 0;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.faq-space {
    width: 50%;
}

.faq-space h2 {
    margin: 100px;
    font-size: 60px;
}

.faq-question span.icon {
    transition: transform 0.2s ease;
}

.faq-question.open span.icon {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    color: #ccc;
    transition: max-height 0.3s ease;
    line-height: 1.6;
}

.faq-answer.open {
    max-height: 1000px;
    padding-bottom: 20px;
}

.sub-text {
    display: none;
}

.whatsapp-section {
    text-align: center;
    margin-top: 60px;
}

.whatsapp-section p {
    margin: 8px 0;
}

.card:hover img {
    filter: brightness(0) invert(1);
}

.card img {
    width: 60px;
}

.cards-container {
    display: flex;
    gap: 24px;
    margin-bottom: 180px;
}

.card h3 {
    margin-top: 15px;
    color: #4557C7;
    font-size: 25px;
    font-weight: 600;
}

// .card:hover h3 {
//     color: white;
//     transition: 0.2s;
// }

.card p {
    margin-top: 15px;
    color: rgb(0, 0, 0);
}

.card {
    border: solid 0.5px rgba(255, 255, 255, 0.185);
    padding: 20px;
    border-radius: 36px;
    background-color: #ffffff;
    width: 280px;
    text-align: center;
}

// .card:hover {
//     background-color: #00A2E1;
//     transition: 0.2s;
// }

.stop-plate {
    background-color: #FDFCF5;
    margin-top: -40px;
    top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/arco-aster.svg");
    background-size: cover;
    background-position: 0% -65%;
    background-repeat: no-repeat;
    // height: 770px;
}

form input,
form select {
    background-color: rgba(0, 0, 0, 0);

    color: rgb(0, 0, 0);
    border: 0;
    border-radius: 26px;
    padding: 30px;
    height: 74px;
    margin-top: 10px;
}

form input::placeholder {
    color: black;
    font-weight: 500;
}

form input {
    border: solid 1px black;
    // width: 40%;
}


.text-white-h {
    color: white;
}

.border-h {
    // border-radius: 36px
}

form {
    width: 70%;
    // background-color: #11111dce;

}

.bg-blue {
    // top: -40px;
    background-color: #FDFCF5;
    // background-image: url("../assets/arco.svg");
    background-repeat: no-repeat;
    background-size: contain;
}

#mochila {
    position: absolute;
    top: 3700px;
    left: 115px;
    z-index: 5;
}

.circle-row {
    z-index: 5;
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 100px;
    top: 1650px;
    max-width: 1264px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}

.boxes1 {
    position: absolute;
    z-index: 5;
    margin-top: 0;
    top: 4890px
}

.w-full {
    width: 100%;
    margin: 0;
    padding: 0 !important;
}

.pre-nossos {
    position: relative;
    margin-top: -270px;
    height: 270px;
}

.bg-nprog {
    z-index: -5;
    position: relative;
    background-color: #00223C;
    margin-top: -250px;
    height: 1600px;
}

.bg-escolha {
    background-color: #DCDEDC;
    position: relative;
}

.bg-oq {
    position: relative;
    z-index: 50;
}

.bg-pq {
    margin-top: -100px;
    background-color: #F5BA25;
    position: relative;
    height: 645px;
    z-index: -5;
    overflow-y: hidden;
}

.wrap-arrume {
    position: relative;
    overflow: hidden;
    background: url("../assets/Imagem1.png") no-repeat top left;
    background-color: rgba(0, 34, 60, 0.9);
}

.arr {
    padding: 180px 0 100px 0;
}

.bg-rodape {
    background-color: #fff;
}

#nossosProg {
    padding: 350px 0;
}

#nossosProg2 {
    display: none;
}

#Selo-Travel1 {
    display: none;
}

#Selo-globo2 {
    display: none;
}

#celular-mulher-aviao {
    display: none;
}

#hold-form-contet {
    padding-top: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

@media(max-width: 768px) {

    .faq-section h2 {
        color: #FF368F;
    }

    .card {
        width: 100%;
        margin-bottom: 20px;
    }

    .cards-container {
        gap: unset;
        flex-direction: column;
        justify-content: center;
    }

    .sub-text {
        color: white;
        display: block;
        text-align: center;
        margin-top: 60px;
        width: 100%;
    }



    .stop-plate h2 {
        font-size: 34px;

        width: 100%;
        text-align: center;
        margin-top: -40px;
    }

    .stop-plate {
        background-image: unset;
        margin-top: 0px;
    }

    .stop-plate {
        display: none;
    }

    form {
        margin-top: 0;
    }

    form h3 {
        font-size: 34px;
        width: 100%;
    }

    form p {
        margin-top: 0px;
    }

    form button {
        font-size: 17px;
        font-weight: 500;
    }

    form input,
    form select {
        border-radius: 100px;
        height: 0px;

    }

    iframe {
        margin-top: 20px;
        height: 218px;
    }

    .card-flex {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
    }

    .card-flex h3 {
        font-size: 26px;
    }

    .center-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        // text-align: center;
    }


    .faq-section {
        margin-top: -290px;
        padding-top:600px;
        background-color: #001821;
    }

    .faq-space {
        width: unset;
    }

    .titulo {
        margin-top: -20px;
        width: 100%;
        text-align: center;
        align-items: baseline;
    }

    .titulo p {
        width: 100%;
        font-size: 1rem;
    }

    .titulo img {
        // width: 200px;
    }

    #hold-form-contet {
        margin-top: -40px;
    }

    .titulo h2 {
        // margin-top: -30px;
        width: 100%;
        font-size: 34px;
    }

    .faq-section .titulo h2 {
        font-size: 34px;
    }

    h2 {
        font-size: 34px;

    }

    .titulo button {
        display: none;
    }

    .border-h {
        border-radius: 16px;
    }

    .bg-blue {
        // background-image: url("../assets/bg-mobile.png");
        background-color: #FDFCF5;
    }

    h1 {
        text-align: left;
    }

    #image-form {
        display: none;
    }

    form {
        width: 100%;
    }
}

.whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: transform 0.2s;
}

.whatsapp-button:hover {
    transform: scale(1.1);
}

.whatsapp-button img {
    width: 68px;
}
</style>