import { createStore } from "vuex";


const testGetters = (state) => {
    return state.testvalue * 2;
}
const setTestMutations = (state, value) => {
    state.testvalue = value;
}

// state, getters, mutations, actions, modules
export default createStore({
    state : {
        counter : 2,
        testvalue:0,
    },
    getters : {
        getTwoPowerCounter(state){
            return state.counter ** 2;
        },
        testGetters
    },
    mutations : {
        setCounter(state, value){
            state.counter = value;
        },
        setTestMutations
    },
});