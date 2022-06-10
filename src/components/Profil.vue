<template>
  <div class="profil">
    <div class="name" v-html="profil.login" />
    <div class="createdAt" v-html="profil.created_at" />
    <div class="avatar" :style="{ backgroundImage: `url(${profil.avatar_url})` }"/>
    <ul class="depots">
      <li
        v-for="project in projects"
        :key="project.id"
        class="projet"
      >
        <a class="name" :href="project.html_url" v-html="project.name" />
        <div class="description" v-html="project.description" />
        <div class="created_at" v-html="project.created_at" />
        <div class="recentTicket">
          Dernier ticket:
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRepos, getIssues } from '../service/index'

export default {
  name: 'Profil',
  props: {
    profil: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    async getRepos(profilName) {
      this.projects = await getRepos(profilName)
      this.getLastIssue(profilName)
    },
    async getLastIssue(projectName) {
      console.log('test')
      const issue = await getIssues(projectName, 1)

      console.log(issue)
    }
  },
  created() {
    this.getRepos(this.profil.login)
  },
  watch: {
    profil() {
      this.getRepos(this.profil.login)
    }
  }
}
</script>

<style>
.avatar {
  background-size: cover;
  width: 50px;
  height: 50px;
}
</style>