<template>
  <div class="card-row">
    <router-link v-for="project in projects" :key="project.id" :to="'/projects/'+project.name" class="card">
      <img :src="project.imageUrl" alt="" />
      <div class="card-content">
        <h4>{{ project.name }}</h4>
        <p>{{ project.tag }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: "Card",
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
    methods: {
      goToProject(id) {
        // ใช้ $router.push เพื่อนำผู้ใช้ไปยังเส้นทาง /projects/:id โดยใช้พารามิเตอร์ id
        this.$router.push({
          path: `/projects/${id}`
        });
      },
    },
  };
</script>
<style scoped>
  .card-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width: 48%;
    margin-bottom: 4%;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: rgba(251, 250, 245, 0);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-content h4 {
    margin: 0;
  }

  .card p {
    font-weight: var(--pyy-font-weights-roboto-mono-1);
    margin: 0;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card img:hover {
    border-radius: 8px;
  }

  @media screen and (max-width: 740px) {
    .card-row {
      flex-direction: column;
    }

    .card {
      width: 100%;
      margin-bottom: 32px;
      /* เพิ่มบรรทัดนี้ */
    }
  }
</style>