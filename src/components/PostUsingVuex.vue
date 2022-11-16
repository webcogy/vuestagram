<template>
  <div>
    <h1>Vuex Test with Composition API</h1>
    {{ counter }}<br />
    {{ $store.getters.getTwoPowerCounter }}
    <button @click="increase">increase</button>
    <br /><br /><br /><br />

    {{ tester }}<br />
    {{ $store.getters.testGetters }}
    <button @click="increaseTester">increaseTester</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const counter = computed(() => store.state.counter);
    const tester = computed(() => store.state.testvalue);

    const increase = () => store.commit("setCounter", ++counter.value);
    const increaseTester = () =>
      store.commit("setTestMutations", ++tester.value);

    const returnItems = {
      counter,
      tester,
      increase,
      increaseTester,
    };
    return returnItems;
  },
};
</script>

<style>
</style>