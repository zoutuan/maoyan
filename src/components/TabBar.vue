<template>
    <nav class="home-tab-bar">
        <ul>
            <router-link :to="to" tag="li" v-for="{to,label,icon} in tabs" :key="to" active-class="active">
                <span class="nav-icons" id="icon-movie">
                    <svg width="25" height="25" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <title>{{label}}</title>
                    <g fill="#696969" fill-rule="evenodd" v-html="icon">
                    </g>
                    </svg>
                    </span>
                    <span>{{label}}</span>
            </router-link>
        </ul>
    </nav>
</template>
<script>
import tabs from "../assets/jsons/footerTabs"
export default {
    data:function(){
        return {
            tabs
        }
    }
}
</script>
<style lang="scss" scoped>
.home-tab-bar{
    height: .48rem;
    ul{
        display: flex;
        li{
            flex: 1;
            flex-basis: auto;
            text-align: center;
            svg{
                g{
                    fill:#696969;
                }
            }
            &.active{
                color: red;
                svg{
                    g{
                        fill: red;
                    }
                }
            }
            span{
                display: block;
                font-size: .12rem;
                &:first-child{
                    width: auto;   
                }
            }
        }
    }
}
</style>