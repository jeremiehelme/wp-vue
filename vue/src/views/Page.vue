<template>
  <div class="page template sidebar-template">
    <div class="sidebar">
      <div class="page-content">
        <h3>{{ this.page?.title?.rendered }}</h3>
        <router-link to="/main" class="btn btn-primary">retour</router-link>
      </div>
    </div>
    <div class="content" v-html="contentRendered">
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import NProgress from 'nprogress'
//import DefaultValues from '@/constants/index.js'

export default {
  name: 'Page',
  components: {
  },
  props: {
    id: {
      type: [Number, String],
      default: -1,
    },
  },
  data() {
    return {
      page: {
        type: Object,
        default() {
          return {}
        },
      },
      contentRendered: null
    }
  },
  mounted() {
    NProgress.start()
    this['pages/getPage'](this.id)
      .then((response) => {
        console.log(response)
        this.page = response
        this.contentRendered = this.page?.content?.rendered
        NProgress.done()
      })
      .catch((error) => {
        console.log('error: ', error)
        NProgress.done()
      })
  },
  methods: {
    ...mapActions(['pages/getPage']),
  },
}
</script>
