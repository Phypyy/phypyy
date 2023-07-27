<template>
  <div class="project">
    <h1>{{ project.name }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Project",
  computed: {
    project() {
      const projectId = this.$route.params.projectId;
      return this.$store.state.projects.find(
        (project) => project.id === projectId
      );
    },
  },
};
</script>

<style>
/* Add styles for project page */
</style>
