<template>
    <div class="arrume">
        <div id="a1"></div>
        <h2 id="title">Arrume sua mala!</h2>
        <div class="row position-relative">
            <div id="arrume-wrap" class="col-md-7 col-sm-12">
                <p class="text-white pe-md-5 mb-3">Preencha os seus dados abaixo e em breve iremos entrar em contato
                    para
                    tirar suas dúvidas e te explicar como você pode vivenciar essa experiência. <br><br>Tire todas as
                    suas dúvidas
                    com nossos consultores especializados.</p>

                <form class="form" id="form1" @submit.prevent="prepareData">

                    <input type="hidden" name="Hora" :value="hora">
                    <input type="hidden" name="Data" :value="dia">
                    <div id="form-wrap">
                        <div class="mb-3">
                            <input type="name" class="form-control" id="name" name="Nome" placeholder="Nome"
                                v-model="postData.name" required>
                        </div>

                        <div class="mb-3">
                            <input type="email" class="form-control" id="email" name="E-mail" placeholder="E-mail"
                                v-model="postData.email" required>
                        </div>

                        <div class="mb-3" id="phone">
                            <vue-tel-input mode="international" :inputOptions="options" v-model="postData.phone"
                                required></vue-tel-input>

                            <input type="hidden" name="WhatsApp" :value="postData.phone">

                        </div>

                        <div class="mb-3">
                            <select class="form-select" id="destino" aria-label="Destinos" name="Destino"
                                v-model="postData.destino">
                                <option value="" selected disabled>Destino</option>
                                <option value="Estados Unidos">Estados Unidos</option>
                                <option value="Canadá">Canadá</option>
                                <option value="Inglaterra">Inglaterra</option>
                                <option value="Irlanda">Irlanda</option>
                                <option value="Emirados Árabes">Emirados Árabes</option>
                                <option value="Austrália">Austrália</option>
                                <option value="Outros destinos">Outros destinos pelo mundo</option>
                            </select>
                            <!--
                            <input type="text" class="form-control" id="destino" placeholder="Destino" name="Destino"
                                v-model="postData.destino">
                                -->
                        </div>

                        <div class="position-relative" id="bt-wrap">
                            <button class="btn btn-primary rounded-pill py-3 px-4 border-0" type="submit" id="bt"
                                ref="loadingContainer">
                                <span id="bt-label">Começar agora</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <div id="malas-wrap" class="col-md-5 col-sm-12">
                <div id="malas">
                    <img class="object-fit-cover" src="../assets/malas.png" alt="malas">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const hoje = new Date

export default {
    setup() {
        return {
            options: {
                placeholder: "+55 Whatsapp",
                showSearchBox: true,
                showDialCode: true,
                validCharactersOnly: true,
                name: "phoneNumber",
                required: true,
            },
        }
    },
    components: {
        toast
    },
    data() {
        return {
            postData: { name: '', email: '', phone: '', destino: '' },
            email: "",
            name: "",
            destino: "",
            fullPage: false,
            dia: "",
            hora: "",
            dia: hoje.toLocaleDateString(),
            hora: hoje.toLocaleTimeString()
        }
    },
    methods: {
        prepareData() {
            let loader = this.$loading.show({
                loader: 'dots',
                backgroundColor: "transparent",
                color: "#fff",
                container: this.fullPage ? null : this.$refs.loadingContainer,

            })

            const bt = document.getElementById('bt')
            bt.style.backgroundColor = '#FFB000'
            bt.style.color = 'transparent'
            bt.style.border = 'transparent'

            const hoje = new Date

            const form = document.getElementById('form1')

            const data = new FormData(form)
            //this.$router.push({ path: '/thanku' })
            
            const action = "https://script.google.com/macros/s/AKfycbyCp9W3dkvFguL59qerGTZO0RRrdUgIuBHN5QtP3eNrWQm6XA95_9YYS585394zM8ck/exec"

            fetch(action, {
                method: 'POST',
                body: data,
            })
                .then(() => {
                    loader.hide()
                    this.$router.push({ path: '/thankyou' })
                })
                .catch(error => {
                    this.errorMessage = error.message
                    console.error("There was an error!", error)
                    loader.hide()
                    this.notify()
                })

        },
        notify() {
            toast.error("Desculpe, tente novamente mais tarde.", {
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_CENTER,
                theme: 'colored',
                pauseOnHover: true,

            })
            
        },
        
    },
}
</script>


<style lang="scss" scoped>
#phone div {
    background-color: #fff;
}

.form-select,
::placeholder {
    font-size: 18px;
    color: #000 !important;
}

#bt {
    width: 320px;
    display: flex;
    flex: 1;
    border: 0px;
}

#bt-label {
    width: 100%;
    text-align: center;
}

#bt-wrap {
    width: 320px;
    :hover {
            background-color: #FFB000;
            color: #00223C;
        }
}

.vue-tel-input {
    border-radius: 20px;
}

#destino,
input,
input:focus {
    max-width: 320px;
    border-radius: 20px;
    padding: 15px 20px;
    // background: transparent;
    color: #000 !important;
}

.arrume {
    position: relative;
}

#malas {
    position: absolute;
    max-width: 800px;
    right: -60px;
    top: -50px;

    img {
        width: 100%;
    }
}

img {
    max-width: 800px;
}

h2#title {
    color: #FFB000;
    font-size: 62px;
    margin-bottom: 30px;
    text-align: left;
}

p {
    font-size: 28px;
    line-height: 1.3;
}

@media(max-width: 768px) {
    h2#title {
        font-size: 32px;
        text-align: center;
    }

    .cxs {
        display: none;
    }

    p {
        font-size: 15px;
        padding: 0 15px;
        text-align: center;
    }

    #malas {
        position: absolute;
        max-width: 80%;
        right: 35px;
        top: 550px;
    }

    #form-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 50px;

        div,
        input {
            width: 100%;
            max-width: 100%;
        }
    }

    #malas-wrap {
        height: 270px;
    }

    #bt {
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 0;
    }
}
</style>
