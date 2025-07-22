<template>
    <div class="container-fluid w-full main bg-blue">
        <div class="container">
            <Nav />
            <div class='center-main'>
                <div class="titulo">
                    <h2 style="color: white; padding-top: 60px;">Você já perdeu oportunidades <span
                            style="color: #FF368F;">por não falar inglês?</span></h2>
                    <p style="color: white;margin-top: 40px; font-size: 20px;">
                        Aprenda inglês de verdade com aulas particulares e foco em conversação.
                    </p>
                </div>
            </div>
            <iframe class="border-h" src="https://www.youtube.com/embed/PIjglFwMm0k?autoplay=1&mute=1"></iframe>
            <div id="hold-form-contet">
                <img id="image-form" style="width: 578px;height: 686px;" src="../assets/girl-laptop.png" alt="">
                <form id="form-pos" class="border-h text-white-h" @submit.prevent="submitLead">
                    <div class="form-content" style="display: flex;flex-direction: column;">
                        <h3 style="color: white;">Agende uma aula experimental <span style="color: #00A2E1;">100% <br>
                                gratuita.</span></h3>
                        <p>Garanta até 30% de desconto.</p>
                        <input v-model="formData.name" type="text" placeholder="Nome" required>
                        <input v-model="formData.email" type="email" placeholder="E-mail" required>
                        <div style="display: flex; justify-content: space-between;">
                            <select style="width: 20%;" v-model="formData.whatsappCountryCode" id="countryCode"
                                required>
                                <option value="" disabled>DDI</option>
                                <option v-for="country in countries" :key="country.cca2" :value="country.ddi">
                                    +{{ country.ddi }}
                                </option>
                            </select>
                            <input style="width: 78%;" v-model="formData.whatsapp" type="tel" placeholder="Whatsapp (ex: 11999999999)"
                                required>
                        </div>
                        <button type="submit">Quero minha aula experimental</button>
                    </div>
                </form>
            </div>
        </div>
        <div id="stop-plate-position" class="stop-plate">
            <div class="container">
                <h2 class="text-center">Chega de curso enrolado.<br>Aqui o resultado é real!</h2>
                <p class="sub-text"><span style="color: #FF368F;">Chega de tentar aprender inglês e não ter
                        resultado.</span> Aqui você aprende o que você quer e precisa agora. Seja para ganhar mais no
                    mercado de trabalho, para fazer uma viagem ou até uma prova, <span style="color: #00A2E1;">a Aliança
                        é o lugar certo.</span></p>
            </div>
            <div class="container">
                <div style="padding-top: 50px;" class="cards-container">
                    <div class="card">
                        <div class="card-flex">
                            <img src="../assets/imersao.svg" alt="Imersão">
                            <h3>Imersão</h3>
                        </div>
                        <p>Já ouviu falar que você só aprende inglês morando fora, sabia que de certa forma não é
                            mentira? Aqui na Aliança você tem aulas praticamente todo dia o que simula essa imersão no
                            inglês.</p>
                    </div>
                    <div class="card">
                        <div class="card-flex">
                            <img src="../assets/flexibilidade.svg" alt="Flexibilidade">
                            <h3>Flexibilidade</h3>
                        </div>
                        <p>Você está no comando, você escolhe o horário e decide a carga horária, a gente te ajuda a ter
                            a melhor experiência.</p>
                    </div>
                    <div class="card">
                        <div class="card-flex">
                            <img src="../assets/personalizado.svg" alt="Personalizado">
                            <h3>Personalizado</h3>
                        </div>
                        <p>Aqui você aprende o que você precisa, chega de curso decoreba, a Aliança personaliza a
                            experiência para você. Temos todos os planos de estudos para você sair falando.</p>
                    </div>
                    <div class="card">
                        <div class="card-flex">
                            <img src="../assets/conexao.svg" alt="Conexão">
                            <h3>Conexão</h3>
                        </div>
                        <p>Você já ficou horas assistindo um vídeo sobre inglês pra não lembrar nada depois? Aqui você
                            vai ter um professor particular pra tirar TODAS as suas dúvidas e deixar a experiência
                            diferenciada.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="faq-pos" class="faq-section">
            <div class="container faq-space">
                <h2>Ainda têm dúvidas?</h2>
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
                <div style="display: flex;flex-direction: column; text-align: center;align-items: center;"
                    class="whatsapp-section">
                    <h3 style="color: #FF368F;" class="text-pink">Precisa de ajuda?</h3>
                    <p>Clique agora no botão e fale com um dos nossos especialistas!</p>
                    <a href="#">
                        <img style="margin-top: 20px;" src="../assets/btn-whatsapp.svg" alt="WhatsApp Logo">
                    </a>
                </div>
            </div>
        </div>
        <img id="Selo-globo2" src="../assets/Selo-globo.svg" alt="Selo-globo2">
        <div class="container-fluid w-full bg-rodape">
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
            }
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
                const phoneNumber = this.formData.whatsapp.replace(/\D/g, '')
                const response = await axios.post('https://martinsdash.discloud.app/api/hide-api', {
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
            } catch (error) {
                console.error('Erro ao criar lead:', error.response?.data || error.message)
                alert('Erro ao criar lead. Verifique os dados e tente novamente.')
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
form button {
    font-size: 24px;
    font-weight: 500;
    background-color: #00A2E1;
    padding: 20px;
    margin-top: 23px;
    text-align: center;
    border-radius: 45px;
    border: none;
    color: white;
    cursor: pointer;
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

form button {
    font-size: 24px;
    font-weight: 500;
    background-color: #00A2E1;
    padding: 20px;
    margin-top: 23px;
    text-align: center;
    border-radius: 45px;
    border: none;
    color: white;
    cursor: pointer;
}

.card-flex {
    width: unset;
    display: unset;
    justify-content: space-between;
    flex-direction: row-reverse;
}

.center-main {
    width: 100%;
    display: flex;
    justify-content: center;
}

.titulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60%;
}

.titulo p {
    width: 60%;
}

iframe {
    margin-top: 40px;
    width: 100%;
    height: 699px;
}

.faq-section {
    background-color: #000;
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
    border-top: 1px solid #444;
}

.faq-question {
    background: none;
    color: #fff;
    border: none;
    width: 100%;
    text-align: left;
    padding: 20px 0;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.faq-space {
    width: 50%;
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
}

.card h3 {
    margin-top: 15px;
    color: #FF368F;
    font-size: 30px;
    font-weight: 400;
}

.card:hover h3 {
    color: white;
    transition: 0.2s;
}

.card p {
    margin-top: 15px;
    color: white;
}

.card {
    border: solid 0.5px rgba(255, 255, 255, 0.185);
    padding: 20px;
    border-radius: 36px;
    background-color: #11111D;
    width: 280px;
}

.card:hover {
    background-color: #00A2E1;
    transition: 0.2s;
}

.stop-plate {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/bg-middle.png");
    background-size: cover;
    height: 770px;
}

form input,
form select {
    background-color: black;
    color: white;
    border: 0;
    border-radius: 16px;
    padding: 30px;
    height: 74px;
    margin-top: 10px;
}

.form-content {
    margin: 40px;
}

.text-white-h {
    color: white;
}

.border-h {
    border-radius: 36px
}

form {
    width: 50%;
    background-color: #11111dce;
    border: solid 0.5px rgba(255, 255, 255, 0.185);
}

.bg-blue {
    top: -40px;
    background-color: #0D1019;
    background-image: url("../assets/bg-helder.png");
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

.main {}

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
        font-size: 24px;
        width: 100%;
        text-align: center;
        margin-top: -40px;
    }

    .stop-plate {
        background-image: unset;
        margin-top: 0px;
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
        justify-content: left;
    }

    .faq-section {
        margin-top: 590px;
        background-color: #000112;
    }

    .faq-space {
        width: unset;
    }

    .titulo {
        margin-top: -20px;
        width: 100%;
        text-align: left;
        align-items: baseline;
    }

    .titulo p {
        width: 90%;
    }

    #hold-form-contet {
        margin-top: -40px;
    }

    .titulo h2 {
        margin-top: -30px;
        text-align: left;
        width: 70%;
        font-size: 34px;
    }

    .border-h {
        border-radius: 16px;
    }

    .bg-blue {
        background-image: url("../assets/bg-mobile.png");
        background-color: #000112;
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