<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__logo">
      <router-link to="/">PHYPYY</router-link>
    </div>
    <div class="navbar__links">
      <router-link class="navbar__link" to="/work">WORK</router-link>
      <a class="navbar__link" href="../../file/Supanut_Resume.pdf" download>RESUME</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const threshold = 50;

      if (scrollTop > threshold) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
};
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 72px;
  background-color: rgba(251, 250, 245, 1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px); 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

.navbar--scrolled {
  background-color: rgba(251, 250, 245, 0.7);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px); 
}

.navbar__logo {
  font-size: var(--pyy-font-size-1);
}

.navbar__logo a {
  color: var(--pyy-text-primary);
}

.navbar__logo a:hover {
  color: var(--pyy-link-primary);
}

.navbar__link {
  margin-left: 24px;
  color: var(--pyy-text-primary);
  transition: all 0.2s ease-in-out;
}

.navbar__link:hover {
  color: var(--pyy-link-primary);
}

@media only screen and (max-width: 740px) {
  .navbar {
    padding-right: 32px;
    padding-left: 32px;
  }
}

@media only screen and (max-width: 480px) {
  .navbar {
    padding-right: 16px;
    padding-left: 16px;
  }
}

</style>

