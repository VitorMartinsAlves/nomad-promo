<template>
    <div class="quadrados">
        <div class="icon">
            <slot name="QuadSrc"></slot>
        </div>
        <h6>
            <slot name="QuadTit"></slot>
        </h6>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.quadrados {
    width: 240px;
    height: 240px;
    border-radius: 40px;
    border: 3px solid #00223C !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h6{
    text-align: center;
    padding: 10px 20px;
}
.icon{
    text-align: center;
    padding: 10px 20px;
}
@media(max-width:768px){
    h6 {
            text-align: left;
            padding: 20px 20px 10px 10px;
        }
}
</style>