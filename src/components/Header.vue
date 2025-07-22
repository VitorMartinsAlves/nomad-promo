<template>
    <header class="row p-md-5 position-relative">

        <div class="col-md-7 position-relative">

            <h1 id="descubra">Descubra um <span class="amarelo">mundo de possibilidades.</span></h1>

            <h1 id="descubra-celular">Descubra <br>um <span class="amarelo">mundo de possibilidades.</span></h1>

            <h5 class="pe-md-5">A Aliança Experience é apaixonada por aventuras, e estamos aqui para te ajudar a
                explorar
                o mundo, expandir seus horizontes, criar memórias inesquecíveis e aprender um novo idioma. <br>
                <div class="amarelo">Venha descobrir o mundo e construir um futuro brilhante.</div>
            </h5>
        </div>

        <div id="mulher-aviao" class="col-md-5"></div>

        <div id="img-mulher-aviao">
            <img style="width: 100%;" class="object-fit-cover" src="../assets/Mulher-e-Aviao1.png" alt="Mulher e Avião">
            <img id="vetor2" src="../assets/vetor2.svg" alt="">
        </div>

    </header>
</template>

<script>

</script>

<style lang="scss" scoped>
#descubra {
    display: block;
}

#descubra-celular {
    display: none;
}

header {
    margin-top: 80px;
}

.amarelo {
    color: #FFB000;
}

h1 {
    line-height: 1;
}

h5 {
    margin-top: 50px;
    line-height: 1.4;
    div{
        margin-top: 20px;
    }
}

#img-mulher-aviao {
    position: absolute;
    max-width: 800px;
    right: -140px;
    top: -50px;
    z-index: 5;
}

#celular-mulher-aviao {
    display: none;
}

#vetor2 {
    position: absolute;
    right: -100px;
    top: 320px;
    z-index: -5;
}

@media (max-width: 768px) {
    header {
        margin-top: 30px;
        padding: 20px 0 20px 20px;

        h1 {
            font-size: 38px;
            padding-right: 80px;
        }

        h5 {
            font-size: 15px;
            line-height: 1.2;
            margin-top: 25px;
            padding-right: 80px;
        }

        >div {
            padding-right: 0;
        }
    }

    #img-mulher-aviao {
        display: none;
    }

    #descubra {
        display: none;
    }

    #descubra-celular {
        display: block;
    }

}
</style>