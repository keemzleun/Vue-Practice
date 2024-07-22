<template>
  <h1>영화 정보</h1>
  <div v-for="(movie, i) in data" :key="i">
    <!-- :속성명="데이터" -->
    <h3 class="bg-yellow" :style="textRed">{{ movie.title }}</h3>
    <p>개봉: {{ movie.year}}</p>
    <p>장르: {{movie.category}}</p>
    <button @:click="increaseLike(i)">좋아요</button> 
    <span>{{ movie.like }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    // 상태 변수(state value) : 화면에 자주 업데이트 되는 변수들을 정의함
    return {
      data: [
        {
          title: "노량",
          year: 2023,
          category: "액션, 드라마",
          textRed: "color: red",
          like: 0,
        },
        {
          title: "아쿠아맨",
          year: 2023,
          category: "액션, 판타지",
          like: 0,
        },
      ],  
    }
  },
  methods: {
    increaseLike(i) {
      this.data[i].like += 1;
    }
  }
}
</script>

<style>
.bg-yellow {
  background: gold;
  padding: 10px;
}
</style>
