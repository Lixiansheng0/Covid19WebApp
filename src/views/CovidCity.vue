<template>
    <div>
        <h3>疫情防疫结果</h3>
        <div class="from">
            <h3>{{ info.from_info.city_name }}</h3>
            <p>{{ info.from_info.high_in_desc }}</p>
            <p>{{ info.from_info.low_in_desc }}</p>
            <p>{{ info.from_info.out_desc }}</p>
        </div>
        <div class="to">
            <h3>{{ info.to_info.city_name }}</h3>
            <p>{{ info.to_info.high_in_desc }}</p>
            <p>{{ info.to_info.low_in_desc }}</p>
            <p>{{ info.to_info.out_desc }}</p>
        </div>
    </div>
</template>

<script>

import api from "../api"

export default {
    data(){
        return{
            info:{
                from_info:{},
                to_info:{}
            }
        }
    },
    mounted(){
        console.log(this.citys);
        api.query({
            from:this.citys.from.value,
            to:this.citys.to.value,
            key:"171e165a7d991c5f6ecd5194c54778ef"
        }).then(res =>{
            if(res.status === 200){
                this.info = res.data.result
            }
        })
    },
    props:{
        citys:{
            type:Object,
            default:function(){
                return {}
            }
        }
    }
};
</script>

<style>
</style>