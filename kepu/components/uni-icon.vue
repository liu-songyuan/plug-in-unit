<template>
    <view class="uni-icon" :class="['uni-icon-'+type]" :style="{color:color,'font-size':  fontSize}" @click="onClick()"></view>
</template>

<script>
    export default {
        props: {
            /**
             * 图标类型
             */
            type: String,
            /**
             * 图标颜色
             */
            color: String,
            /**
             * 图标大小
             */
            size: Number,
			pxSize: Number
        },
        computed: {
            fontSize() {
                return this.pxSize?`${this.pxSize}px`:`${this.size}vh`
            }
        },
        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    }
</script>

<style>
    @import "./icon.css";
</style>
