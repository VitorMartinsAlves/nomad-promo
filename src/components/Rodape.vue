<template>
    <div class="footer">

        <!-- <div id="svgs">
            <img id="Selo-Travel" src="../assets/Selo-Travel1.svg" alt="Selo-Travel">
            <img id="Selo-Carta" src="../assets/Selo-Carta.svg" alt="Selo-Carta">
        </div>


        <div id="svgs2">
            <img id="Selo-Carta2" src="../assets/Selo-Carta.svg" alt="Selo-Carta">
            <img id="Selo-Travel2" src="../assets/Selo-Travel1.svg" alt="Selo-Travel">
        </div> -->

        <!-- <img id="vetor5" src="../assets/vetor5.svg" alt="vetor5">
        <img id="vetor5a" src="../assets/vetor5a.svg" alt="vetor5"> -->

        <div class="row">

            <div class="col-md-7 coluna">
                <img id="logo2" src="../assets/Logotipo.svg" alt="Alianca logo">
                <p>Aprenda inglês de qualquer lugar e qualquer horário! Aulas 4 vezes por semana, com uma imersão desde
                    o primeiro dia no idioma. Tudo isso
                    online e com professor particular!</p>
                <div style="display: flex;">
                    <img id="logo" src="../assets/Logotipo.svg" alt="Alianca logo">
                    <img id="logo2" src="../assets/Hashtag.svg" alt="Alianca logo">
                </div>
                <!-- <img id="hashtag2" src="../assets/Hashtag.png" alt="Hashtag"> -->

            </div>

            <div id="media" class="col-md-5 coluna">

                <div class="col2">
                    <div id="in">
                        <a href="https://www.instagram.com/aliancaxp?igsh=b3owc2J4bTlpa2l1" target="_blank">
                            <img id="instagram" src="../assets/instagram.svg" alt="Instagram Logo">
                        </a>
                    </div>

                    <div id="ln">
                        <a href="https://www.linkedin.com/company/alian%C3%A7a-am%C3%A9rica-idiomas" target="_blank">
                            <img id="linkedin" src="../assets/linkedin.svg" alt="Linkedin Logo">
                        </a>
                    </div>

                    <div id="fb">
                        <a href="https://www.facebook.com/aliancaexp" target="_blank">
                            <img id="facebook" src="../assets/facebook.svg" alt="Facebook Logo">
                        </a>
                    </div>
                </div>

                <!-- <img id="hashtag" src="../assets/Hashtag.png" alt="Hashtag"> -->

            </div>

        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
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
    max-width: 200px;
    display: block;
}

#logo2 {
    display: none;
}

#hashtag {
    max-width: 200px;
    display: block;
}

#hashtag2 {
    display: none;
}

#vetor5 {
    position: absolute;
    left: -300px;
    top: 0;
}

#vetor5a {
    display: none;
}

#svgs {
    position: absolute;
    left: 38%;
    margin-top: 50px;
}

#svgs2 {
    display: none;
}

#Selo-Travel {
    margin-left: 120px;
    /* position: relative; */
    /* z-index: -5; */
}

#Selo-Carta {
    z-index: 5;
    margin-left: -360px;
}

.footer {
    background-color: #fff;
    padding: 100px 100px 200px 100px;
    position: relative;
}

p {
    font-size: 18px;
}

#hashtag {
    max-width: 170px;
    margin-top: 20px;
    object-fit: contain;
    float: left;
}

@media(max-width: 768px) {

    .footer {
        padding: 20px;
        height: 400px;
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
        width: 40%;
        margin-bottom: 10px;
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
        position: absolute;
        display: block;
        top: 170px;
        right: 30px;
    }

    #vetor5 {
        display: none;
    }

    #vetor5a {
        display: block;
        position: absolute;
        left: 190px;
        top: 250px;
        width: 130px;
        /* display: none; */
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
    }

    #media {
        padding-left: 15px;
    }

    .col2 {
        width: 150px;
        gap: 10px;
        align-items: center;
    }

    #fb img,
    #in img,
    #ln img {
        width: 30px;
    }
}
</style>
