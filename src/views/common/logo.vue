<template>
    <div>
        <div class="netLogo">
            <i class="logoIcon icon-yunfuwuqi iconStyle"></i>
            <p class="logoGeekhub" @click="hello()">geekhub</p>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data: () => ({
        showConsole: false
    }),
    components: {},
    methods: {
        hello() {
            console.log(123);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../dep/iconfont/iconfont.css";
.netLogo {
    float: left;
    margin-top: 5px;
    margin-left: 15px;
    height: 30px;
    cursor: pointer;
    .logoIcon {
        font-family: "iconfont" !important;
        font-style: normal;
        font-size: 30px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .iconStyle {
        float: left;
    }
    p {
        float: left;
        line-height: 30px;
    }
    .logoGeekhub {
        padding-left: 5px;
    }
}
</style>