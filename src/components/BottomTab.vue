<template>
  <div class="bottom-tab">
    <a class="try-button" :href="buttonLink" target="_blank" rel="noopener noreferrer">Try it out!</a>
  </div>
</template>

<script>
  export default {
    props: {
      buttonLink: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .bottom-tab {
    padding: 20px;
    background-color: rgb(254, 255, 252, 0.7);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    justify-content: center;
    animation: slide-up 0.5s ease-in-out;
    /* เพิ่มเอฟเฟกต์การเคลื่อนไหว */
    width: 100%;
  }

  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  .try-button {
    padding: 8px 16px;
    background-color: var(--pyy-button-secondary);
    color: var(--pyy-text-on-color);
    border: none;
    border-radius: 8px;
    font-size: var(--pyy-font-size-1);
    line-height: var(--pyy-line-heights-1);
    font-weight: var(--pyy-font-weights-roboto-mono-2);
    cursor: pointer;
  }

  .try-button:hover {
    background-color: var(--pyy-button-secondary-hover);
  }
</style>
