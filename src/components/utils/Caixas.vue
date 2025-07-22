<template>

    <div class="cxs">
        <CaixaBranca id="cx1">
            <template #QuadSrc><img src="../../assets/Equipe.svg" alt="Equipe" /></template>
            <template #QuadTit>Equipe Especializada</template>
            <template #QuadTxt>Depois de apresentar nossos programas e destinos, você poderá escolher aquele que
                sempre
                sonhou. Além de obter suporte com serviços como: reserva de curso, hospedagem, traslados, seguro
                saúde e
                orientações para obtenção de visto.</template>
        </CaixaBranca>

        <CaixaBranca>
            <template #QuadSrc><img src="../../assets/Seguranca.svg" alt="Segurança" /></template>
            <template #QuadTit>Segurança e Qualidade</template>
            <template #QuadTxt>Trabalhamos para te proporcionar uma experiência de qualidade, confiança e
                transparência.
                Com profissionais que entendam de intercâmbio, disponibilizamos atendimento personalizado e
                exclusivo
                para você.</template>
        </CaixaBranca>

        <CaixaBranca id="imersao">
            <template #QuadSrc><img src="../../assets/Cultura1.svg" alt="Cultura" /></template>
            <template #QuadTit>Imersão Cultural</template>
            <template #QuadTxt>Nossos programas permitem a acomodação em casas de família ou em uma residência
                estudantil, oferecendo uma maior autonomia, responsabilidade e flexibilidade para sua
                jornada.</template>
        </CaixaBranca>
    </div>
</template>

<script setup>
import CaixaBranca from './CaixaBranca.vue'

</script>

<style lang="scss" scoped>
.cxs {
    // padding: 0 100px 100px 100px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 300px;
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

#Selo-globo,
#Selo-globo2 {
    display: none;
}

@media(max-width: 768px) {
    .cxs {
        flex-direction: column;
    }

    #imersao {
        background-color: rgba(123, 174, 131);
    }
}
</style>