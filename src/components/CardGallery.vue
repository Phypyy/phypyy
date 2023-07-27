<template>
    <div class="card-gal">
      <router-link v-for="project in projects" :key="project.id" :to="'/projects/'+project.name" class="card">
        <img :src="project.imageUrl" alt="" />
      </router-link>
    </div>
  </template>
  <script>
  export default {
    name: "CardGrallery",
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
    methods: {
      goToProject(id) {
        // ใช้ $router.push เพื่อนำผู้ใช้ไปยังเส้นทาง /projects/:id โดยใช้พารามิเตอร์ id
        this.$router.push({ path: `/projects/${id}` });
      },
    },
  };
  </script> 
  <style scoped>
  .card-gal {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .card {
    width: 48%;
    margin-bottom: 4%;
    box-sizing: border-box;
    border-radius: 8px;
    
    background-color: transparent;
  }
  
  .card img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .card img:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 840px) {
    .card-gal {
      flex-direction: column;
    }
  
    .card {
      width: 100%;
      margin-bottom: 32px; /* เพิ่มบรรทัดนี้ */
    }
  }
  </style>