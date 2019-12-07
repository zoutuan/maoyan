<template>
    <div class="wrapper" ref="bscroll">
        <div class="content">
            <movie-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-item>
        </div>
    </div>
</template>
<script>
//此时就相当于改变movies数据，所以不用引进静态数据
// import movies from "../assets/jsons/movies"

import MovieItem from "../components/MovieItem";
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import MouseWheel from '@better-scroll/mouse-wheel';
import {getInitMovies,getMoreMovies} from '../api/index';
BScroll.use(MouseWheel)
BScroll.use(Pullup)
export default {
    components:{
        MovieItem
    },
    data:function(){
        return {
            //先将movies定义为一个空数组
            movies:[],
            movieIds:[]
        }
    },
    created(){
        this.bScroll = null
    },
    mounted(){
        this.bScroll = new BScroll(this.$refs['bscroll'],{
                scrollY: true,
                pullUpLoad: true,
                //支持鼠标滚轮滑动
                  mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300
                 }
            })
            this.bScroll.on('pullingUp',()=>{
                console.log("上拉");
                const sliceMovieIds = this.movieIds.slice(0,2);
                getMoreMovies(sliceMovieIds).then((data)=>{
                    const { coming } = data;
                    this.movies = this.movies.concat(coming)
                    //每次上拉结束之后使用，这样就可以多次上拉
                    this.bScroll.finishPullUp()
                    this.bScroll.refresh()
                })
                
            })
        //mounted一般用来操作DOM事件，在上面
        getInitMovies().then((data)=>{
            //为movieList起别名movies
            const {movieList:movies,movieIds} = data;
            //此时就相当于改变movies数据,请求完数据之后不是立刻就改变，需要调用nextTick
            this.movies = movies;
            this.movieIds = movieIds;
            //最近一次改动数据，触发了渲染并且在渲染完成之后，调用nextTick
            this.$nextTick(()=>{
                this.bScroll.refresh();
        });
        });      
    } 
}
</script>
<style lang="scss" scoped>
.wrapper{
    height: 100%;
    overflow: auto;
    .content{
        height: auto;
    }
}
</style>