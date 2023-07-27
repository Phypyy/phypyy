<template>
    <div class="top-tab-wrapper" :class="{ 'show': showTopTab }">
      <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    props: {
      scrollProgress: {
        type: Number,
        required: true,
      },
      showTopTab: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .top-tab-wrapper {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translateY(-100%);
    opacity: 0;
    display: flex;
    justify-content: center;
  }
  
  .top-tab-wrapper.show {
    transform: translateY(0);
    opacity: 1;
  }
  
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 4px;
    background-color: rgba(30, 41, 59, 0.6);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
  </style>
  