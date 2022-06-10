<template>
  <div id="app">
    <v-form @search="searchProfil($event)" />
    <v-profil :profil="profil" />
    <div v-if="error" class="error" v-html="error.message" />
  </div> 
</template>

<script>
import Form from './components/Form.vue'
import Profil from './components/Profil.vue'
import { getProfil } from './service/index'

export default {
  name: 'App',
  components: {
    'v-form': Form,
    'v-profil': Profil
  },
  data() {
    return {
      profil: {},
      error: null
    }
  },
  methods: {
    async searchProfil(profil) {
      const data = await getProfil(profil)

      if (typeof data === 'string') {
        this.error = JSON.parse(data)
        this.profil = {}
      } else {
        this.profil = data
      }
    }
  }
}
</script>
