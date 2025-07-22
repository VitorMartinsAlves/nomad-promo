<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div id="txt-oquee" class="col-md-6">
                <div class="card-body">

                    <img id="vetor4" src="../assets/vetor4.svg" alt="vetor4">

                    <h1>O que é a <span class="amarelo">Aliança Experience?</span></h1>
                    <p class="card-text">Fazer intercâmbio parece complicado no início, mas calma, somos a ajuda que
                        você precisa para realizar esse sonho tranquilamente e sem dor de cabeça! </p>
                    <p>Oferecemos
                        oportunidades de intercâmbio para jovens e adultos, com diversas opções de programas como High
                        School, programas para férias, programas para o desenvolvimento da carreira, no aprendizado do
                        idioma e na experiência no exterior. </p>
                    <p class="amarelo">Nossos especialistas têm a missão de avaliar os seus
                        objetivos individuais e procurar a melhor solução para que você possa explorar novos destinos e
                        mergulhar em culturas fascinantes.</p>
                </div>
            </div>
            <div class="col-md-6">
                <img src="../assets/walkway-airport1.png" class="img-fluid float-end" alt="walkway-airport">
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#vetor4{
    position: absolute;
    top: 0;
    left: -270px;
    max-width: 320px;
    z-index: -5;
}

#txt-oquee {
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    border-radius: 50px;
    background-color: #fff;
    border: 0px;
}

img {
    border-radius: 0 50px 50px 0;
}

.amarelo {
    color: #FFB000;
}

p {
    font-size: 22px;
    font-weight: 500;
    font-style: medium;
    line-height: 1.3;
    margin-top: 40px;

}
@media(max-width: 768px){
    h1{
        font-size: 24px;
    }
}
</style>
