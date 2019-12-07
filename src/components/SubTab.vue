<template>
    <nav class="sub-tab">
        <ul>
            <li>
                北京
            </li>
            <router-link active-class="active" tag="li" v-for="{label,to} of tabs" :key="to" :to="to">{{label}}</router-link>
            <li>搜索</li>
        </ul>
    </nav>
</template>
<script>
import tabs from "../assets/jsons/SubTabs"
export default {
    data:function(){
        return {
            tabs
        }
    }
}
</script>
<style lang="scss" scoped>
.sub-tab{
    ul{
        display: flex;
        line-height: 200%;
        vertical-align: middle;
        background:#fefefe;
        li{
            &:first-child,
            &:last-child{
                flex: 0;
                flex-basis: auto;
            }
            &.active{
                color: red;
            }
            flex: 1;
            min-width: 0px;
            text-align: center;
        }
    }
}
</style>