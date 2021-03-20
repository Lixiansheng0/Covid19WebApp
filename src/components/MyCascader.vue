<template>
    <div>
        <van-field
            v-model="fieldValue"
            is-link
            readonly
            :label="label"
            placeholder="请选择所在地区"
            @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
            <van-cascader
                v-model="cascaderValue"
                title="请选择所在地区"
                :options="options"
                @close="show = false"
                @finish="onFinish"
            />
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            fieldValue: "",
            cascaderValue: "",
        };
    },
    props:{
        label:{
            type:String,
            default:'地区'
        },
        options:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    methods: {
        // 全部选项选择完毕后，会触发 finish 事件
        onFinish({ selectedOptions }) {
            this.show = false;
            this.fieldValue = selectedOptions
                .map(option => {
                    this.$emit('onCitys',option)
                    return option.text;
                })
                .join("/");
        }
    }
};
</script>

<style>
</style>