<template>
<main class="blog">
    <ProgressBar :scrollProgress="scrollProgress" :showTopTab="showTopTab" />
    <BlogTitle :imgSrc="Cover_Figma" title="PDF Viewer" platform="Figma template" duration="March 2023 (1 day)" />
    <div class="blog_divider"></div>
    <div class="blog_content">
        <p class="subtitle">PROBLEM</p>
        <p>
            The reason for creating this template is that when I searched within the community, I often found frames that were not using auto layout and icons that did not adhere to standard guidelines. As a result, I created this template.
        </p>
        <br />
        <p>
            The template utilizes auto layout and standardized icons. Additionally, I created components to facilitate easy editing. This was necessary because most files in the community, particularly PDF viewers, seemed to lack these elements. As a result, a significant amount of time was spent on modifying and improving them.
        </p>
    </div>
    <div class="blog_content">
        <p class="subtitle">COMPONENTS</p>
        <img src="../../images/PDFIcon_component.png" style="width: 100%; max-width: 2560px; height: auto;" />
        <img src="../../images/PDFspec.png" style="width: 100%; max-width: 2560px; height: auto;" />
    </div>
    <div class="bottom-tab-wrapper" :class="{ 'show': showBottomTab }">
        <BottomTab buttonLink="https://www.figma.com/community/file/1210842960095608284" v-if="showBottomTab" />
    </div>
    <ButtonBack />
</main>
</template>

<script>
import BlogTitle from '../components/BlogTitle.vue'
import BottomTab from '../components/BottomTab.vue';
import ButtonBack from '../components/ButtonBack.vue'
import Cover_Figma from '/images/Cover_Figma.png'
import ProgressBar from '../components/ProgressBar.vue';
export default {
    name: 'PDFviewer',
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

.bottom-tab-wrapper {
    position: fixed;
    bottom: 0;
    /* ขึ้นมาจากด้านล่าง */
    left: 0;
    width: 100%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    /* เพิ่มเอฟเฟกต์การเคลื่อนไหว */
    transform: translateY(100%);
    /* เริ่มต้นแสดงด้านล่าง */
    opacity: 0;
    /* เริ่มต้นแสดงที่โปร่งแสง */
    display: flex;
    justify-content: center;
}

.bottom-tab-wrapper.show {
    transform: translateY(0);
    /* ขึ้นมาแสดง */
    opacity: 1;
    /* ทำให้แสดงโปร่งแสง */
}
@media (max-width: 1200px) {
        .blog_divider {
            margin-left: 120px;
            margin-right: 120px;
        }

        .blog_content {
            padding-left: 120px;
            padding-right: 120px;
        }
    }

    @media (max-width: 800px) {
        .blog_divider {
            margin-left: 96px;
            margin-right: 96px;
        }

        .blog_content {
            padding-left: 96px;
            padding-right: 96px;
        }
    }

    @media (max-width: 740px) {

        .blog_content {
            padding-left: 32px;
            padding-right: 32px;
        }

        .blog_divider {
            margin-left: 32px;
            margin-right: 32px;
        }
    }

    @media screen and (max-width: 620px) {

        .blog_content p{
            font-size: var(--pyy-font-size-2);
            line-height: var(--pyy-line-heights-1);
        }
    }

    @media only screen and (max-width: 480px) {

        .blog_content {
            padding-right: 16px;
            padding-left: 16px;
        }

        .blog_divider {
            margin-right: 16px;
            margin-left: 16px;
        }

        .blog_content p {
            font-size: var(--pyy-font-size-1);
            line-height: var(--pyy-line-heights-0);
        }

        .blog_content .subtitle {
            font-size: var(--pyy-font-size-0);
            line-height: var(--pyy-line-heights-0);
        }

    }
</style>
