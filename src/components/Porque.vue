<template>
    <div id="porque">
        <img id="Mulher-com-Mala" src="../assets/Mulher-com-Mala.png" alt="Mulher-com-Mala">
        <img id="Selo-globo" src="../assets/Selo-globo.svg" alt="Selo-globo">
        <h2 class="text-center p-md-5 text-white">Por que escolher a Aliança Experience?</h2>
    </div>
    <Caixas id="caixas" />
</template>

<script setup>
import Caixas from './utils/Caixas.vue'


</script>

<style lang="scss" scoped>

@media(min-width: 768px){
    #caixas{
        display: none;
    }
}

#Selo-globo {
    position: absolute;
    top: 225px;
    margin-left: -200px;
}

#Mulher-com-Mala {
    position: absolute;
    top: 97px;
    margin-left: 1115px;
}

#cx1 {
    z-index: 5;
}

#imersao {
    z-index: 5;
    background-color: rgba(123, 174, 131, 0.8);

    * {
        color: #fff;
    }
}

#porque {
    padding: 30px 0;
    position: relative;

    h2 {
        margin-top: 100px;
    }
}

@media(max-width: 768px) {
    #porque {
        // height: 1000px;
        h2 {
            padding: 0 10px;
            font-size: 28px;
            margin-top: 20px;
        }
    }

    #Selo-globo {
        display: none;
        position: absolute;
        top: 70px;
        margin-left: -10px;
        width: 150px;
        z-index: 5;
    }
}
</style>