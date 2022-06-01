<template>
  <div>{{ blog.title }}</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Blogs',
  data() {
    return {
      routeParam: this.$route.params.slug,
      lading: false,
      blog: []
    }
  },
  computed: {
    ...mapGetters('dataItems', {
      getBlogBySlug: 'getBlogBySlug',
    }),
  },
  methods: {
    ...mapActions({
      fetchData: 'dataItems/fetchData',
    }),
  },
  created() {
    this.loading = true
    this.fetchData().then(() =>
      this.blog = this.getBlogBySlug(this.routeParam),
      this.loading = false
    )
  },
}
</script>
