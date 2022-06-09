<template>
  <Transition name="fade">
    <div v-if="loading">
      <Loading />
    </div>
  </Transition>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Loading from './components/Loading.vue'
export default {
  name: 'App',
  components: {
    Loading
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    ...mapActions({
      fetchData: 'dataItems/fetchData',
    })
  },
  created() {
    this.loading = true
    this.fetchData().then(() => this.loading = false)
  },
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

.fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
