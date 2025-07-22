<template>
    <div class="container-fluid w-full position-relative pages p-0" id="tkyou">


        <div class="bg-azul w-full"></div>

        <img class="vector1" src="../../assets/vector1tku.svg" alt="vector1">
        <img class="vector2" src="../../assets/vector2tku.svg" alt="vector2">


        <div class="pages-img">
            <img src="../../assets/Aviao.png" alt="Avião">
        </div>
        
        <div class="position-relative">
            <img id="Selo-Carta1" src="../../assets/Selo-Travel.svg" alt="Selo-Carta1">
        </div>

        <div class="titulo d-flex justify-content-center align-items-center flex-column">
            <div id="svgs">
                <img id="Selo-Travel" src="../../assets/Selo-Travel1.svg" alt="Selo-Travel">
                <img id="Selo-Carta" src="../../assets/Selo-Carta.svg" alt="Selo-Carta">
            </div>


            <h2 class="text-center">Thank you!</h2>
            <p id="subtitle">Em breve você poderá realizar o intercâmbio dos seus sonhos!</p>
            <router-link to="/">
                <button class="btn btn-primary rounded-pill" type="submit">
                    Início
                </button>
            </router-link>
        </div>

        <div class="footer position-relative">

            <img id="selo" src="../../assets/Selo-globo.svg" alt="selo">

            <div class="row">

                <div class="w-100 coluna">

                    <img id="logo2" src="../../assets/Alianca-logo.png" alt="Alianca logo">

                    <img id="logo" src="../../assets/Alianca-logo.png" alt="Alianca logo">

                    <img id="hashtag" class="mt-5" src="../../assets/Hashtag.png" alt="Hashtag">

                    <img id="hashtag2" src="../../assets/Hashtag.png" alt="Hashtag">

                    <div id="svgs2">
                        <img id="Selo-Carta2" src="../../assets/Selo-Carta.svg" alt="Selo-Carta">
                        <img id="Selo-Travel2" src="../../assets/Selo-Travel1.svg" alt="Selo-Travel">
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(path) {
            this.$router.push({ path: path })
        }
    }
}
</script>

<style lang="scss">
#tkyou {
    height: 100%;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    overflow: hidden;

    button {
        font-size: 18px;
        z-index: 100;
        width: 150px;
        padding: 10px 24px;
        margin-bottom: 40px;
    }

    button:hover {
        background-color: #FFB000;
        color: #00223C;
        border: 1px solid #FFB000;
    }

    #subtitle {
        font-size: 18px;
        color: #fff;
        text-align: center;
        width: 400px;
        margin-bottom: 40px;
    }

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

    .bg-rodape {
        background-color: #fff;
    }

    .bg-azul {
        position: absolute;
        top: 0;
        z-index: -5;
        background-color: #00223C;
        height: 100%;
    }

    .titulo h2 {
        margin: 40px 0 20px 0;
        color: #F5BA25;
    }

    .pages-img {
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;

        img {
            width: 400px;
        }
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

    .vector1 {
        position: absolute;
        margin-top: 0px;
        margin-left: 50px;
    }

    .vector2 {
        position: absolute;
        margin-top: -60px;
        margin-left: 1300px;
        z-index: 5;
    }

    .coluna {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    a {
        color: #00223C;

        :hover {
            color: #00223C;
        }
    }

    #fb img {
        height: 33px;
    }

    #in img,
    #ln img {
        height: 40px;
    }

    #media {
        padding-left: 250px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .col2 {
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
        width: 100%;
        padding-right: 20px;
    }

    #logo {
        width: 320px;
        display: block;
        margin: auto;
    }

    #logo2 {
        display: none;
    }

    #hashtag {
        width: 200px;
        display: block;
        margin: auto;
    }

    #hashtag2 {
        display: none;
    }

    #selo {
        position: absolute;
        margin-left: 1350px;
        margin-top: -150px;
        height: 230px;
    }

    #vetor5 {
        position: absolute;
        left: 0px;
        top: 0;
    }

    #svgs {
        position: absolute;
        margin-top: 340px;
        margin-left: -840px;
        z-index: 5;
    }

    #svgs2 {
        display: none;
    }

    #Selo-Travel {
        margin-left: 120px;
        height: 220px;
    }

    #Selo-Carta {
        z-index: 5;
        margin-left: -305px;
        margin-top: 60px;
        width: 180px;
    }

    #Selo-Carta1 {
        position: absolute;
        z-index: -5;
        margin-left: 715px;
        margin-top: -155px;
        width: 135px;
    }

    .footer {
        background-color: #fff;
        padding: 50px 100px;
        height: 100%;
    }

    p {
        font-size: 18px;
    }

    #hashtag {
        max-width: 170px;
        margin-top: 0px;
        object-fit: contain;
        float: left;
    }
}

@media(max-width: 768px) {

    #tkyou {

        .vector1,
        .vector2 {
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
            margin: 20px 0;
        }

        .pages-img {
            width: 100%;

            img {
                width: 200px;

            }
        }

        .bg-azul {
            height: 800px;
        }

        p,
        ul li {
            font-size: 16px;
            padding: 0 15px;
        }

        .pages-img {
            margin-bottom: 30px;
        }

        #logo {
            max-width: 140px;
        }

        .navbar-nav {
            flex-direction: row;
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

        .footer {
            padding: 20px;
            height: 400px;
            background-color: #fff;
            display: flex;
            // justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #selo {
            display: none;
        }

        p {
            font-size: 15px;
            font-weight: 500;
        }

        #logo {
            display: none;
        }

        #logo2 {
            display: block;
            width: 60%;
            margin: 10px 0;
        }

        #hashtag {
            display: none;
        }

        #hashtag2 {
            display: block;
            width: 40%;
            margin: 30px 0;
        }

        #svgs {
            display: none;
        }

        #svgs2 {
            position: relative;
            display: block;
            margin-left: 50%;
        }

        #Selo-Travel2 {
            position: absolute;
            right: 0px;
            width: 100px;
        }

        #Selo-Carta2 {
            position: absolute;
            z-index: 5;
            right: 70px;
            top: 40px;
            width: 100px;
        }

        .coluna {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #media {
            padding-left: 15px;
        }

        .col2 {
            gap: 10px;
            align-items: center;
        }

        #fb img,
        #in img,
        #ln img {
            width: 30px;
        }
    }
}
</style>