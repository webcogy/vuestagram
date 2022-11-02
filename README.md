# vuestagram

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

# vuestagram

1. axios를 이용한 GET 요청법 + POST 사용법

- vue는 html을 어떻게 추가할지 신경쓸 필요가 없다 => data를 추가시키면 실시간반영이 되기 때문에, 데이터만 추가시키면 알아서 화면에 html이 생성됨.

```
// GET 요청법
<button @click="more">더보기</button>
export default {
  name: "App",
  components: { Container },
  data() {
    return {
      postData: postData,
    };
  },
  methods: {
    more() {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
          // console.log(result.data);
          this.postData.push(result.data);
        });
    },
  },
};

// POST 사용법
axios.post('url', {name:'kim'}).then().catch(err => {
    console.log(err)
}
```

2. 탭 만들기

```
<div v-if="step == 0">내용0</div>
<div v-if="step == 1">내용1</div>
<div v-if="step == 2">내용2</div>
<button @click="activeTab(0)">버튼0</button>
<button @click="activeTab(1)">버튼1</button>
<button @click="activeTab(2)">버튼2</button>

export default {
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    activeTab(idx) {
      this.step = idx;
    },
  }
}
```
