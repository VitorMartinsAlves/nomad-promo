<template>
    <div class="quadrados">
        <div class="icon">
            <slot name="QuadSrc"></slot>
        </div>
        <h4>
            <slot name="QuadTit"></slot>
        </h4>
        <p>
            <slot name="QuadTxt"></slot>
        </p>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.quadrados {
    width: 390px;
    height: 390px;
    border-radius: 52px;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    // justify-content: center;
    // align-items: center;
    background-color: #fff;
}

h4,
.icon {
    text-align: center;
    padding: 10px 20px;
}

p {
    font-size: 18px;
    text-align: center;
    padding: 0px 30px;
    line-height: 1.3;
}

@media(max-width: 768px) {
    .quadrados {
        width: 100%;
        border-radius: 12px;
        margin-bottom: 20px;
        padding: 18px 0;
    }
    h4{
        font-size: 24px;
    }
    p{
        font-size: 15px;
        font-weight: 500;
    }
}
</style>