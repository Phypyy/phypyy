<template>
<main class="blog">
    <ProgressBar :scrollProgress="scrollProgress" :showTopTab="showTopTab" />
    <BlogTitle :imgSrc="Cover_Figma" title="Comy" platform="Figma" duration="May 2023 (1 day)" />
    <div class="blog_divider"></div>
    <div class="blog_content">
        <p class="subtitle">PROBLEM</p>
        <p>
            Due to issues experienced by the team when using comments in Figma files, such as the performance impact of having numerous comments or slow file loading times when enabling the comment function, communication sometimes gets disrupted.
        </p>
        <br />
        <p>
            This plugin was created to address this problem. Initially, it was a simple text input plugin. However, frames were added to surround the comments to enhance visibility, and colors were applied. Auto layout was also used to facilitate easy editing and aesthetics. As the plugin was used for a while, it became necessary to refer back to the original design or create new ones, leading to the creation of components. However, challenges arose when using the plugin in another project, as it required copying the original components or creating new ones from scratch. Thus, this project began.
        </p>
    </div>
    <div class="blog_divider"></div>
    <div class="blog_content">
        <p class="subtitle">FUNCTION</p>
        <img src="../../images/comy_function.png" style="width: 100%; max-width: 2560px; height: auto;" />
        <p>
            Comy is a plugin that primarily focuses on three main functions: commenting, color selection, and font size selection.
        </p>
        <br />
        <p>
            1. <strong>Commenting:</strong> With Comy, users can easily add comments directly within the Figma file. These comments are placed adjacent to the selected frame, allowing team members to view and reference them without the need to individually open each comment. This enhances communication and collaboration within the team.
        </p>
        <br />
        <p>
            2. <strong>Color Selection:</strong> The plugin provides a convenient color selection feature. Users can assign different colors to their comments, enabling them to categorize and differentiate comment types or themes. This visual distinction helps in quickly identifying and understanding the context of each comment.
        </p>
        <br />
        <p>
            3. <strong>Font Size Selection:</strong> Comy allows users to choose the font size for their comments. This feature empowers users to emphasize important points or adjust the comment's readability based on their preferences. It enhances the overall visibility and impact of the comments.
        </p>
    </div>
    <div class="bottom-tab-wrapper" :class="{ 'show': showBottomTab }">
        <BottomTab buttonLink="https://www.figma.com/community/plugin/1240209186379125613" v-if="showBottomTab" />
    </div>
    <ButtonBack />

</main>
</template>

<script>
import BlogTitle from '../components/BlogTitle.vue';
import BottomTab from '../components/BottomTab.vue';
import ButtonBack from '../components/ButtonBack.vue';
import Cover_Figma from '/images/Cover_Figma.png';
import ProgressBar from '../components/ProgressBar.vue';

export default {
  name: 'Comy',
  components: {
    BlogTitle,
    BottomTab,
    ButtonBack,
    ProgressBar,
  },
  data() {
    return {
      Cover_Figma: Cover_Figma,
      showBottomTab: false,
      showTopTab: false,
      scrollProgress: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = documentHeight * 0.4;

      this.showBottomTab = scrollPosition > scrollThreshold;

      const maxScroll = documentHeight - windowHeight;
      this.scrollProgress = (scrollPosition / maxScroll) * 100;

      const topTabThreshold = windowHeight * 0.2;
      this.showTopTab = scrollPosition > topTabThreshold;
    },
  },
};
</script>

<style>

.top-tab-wrapper {
  position: fixed;
  top: 56;
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

.bottom-tab-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: translateY(100%);
  opacity: 0;
  display: flex;
  justify-content: center;
}

.bottom-tab-wrapper.show {
  transform: translateY(0);
  opacity: 1;
}
</style>
