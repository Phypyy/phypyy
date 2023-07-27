<template>
    <main class="blog">
        <ProgressBar :scrollProgress="scrollProgress" :showTopTab="showTopTab" />
        <BlogTitle :imgSrc="Cover_Unburn" title="Unburn" platform="Desktop application"
            duration="August 2022 (1 month)" />
        <div class="blog_divider"></div>
        <div class="blog_content">
            <p class="subtitle">PROBLEM</p>
            <p>The Unburn project aims to solve the problem of fuel combustion quality for power plants,
                increase electricity production efficiency,
                and reduce the risk of using insufficient or overburnt fuel,
                which may directly impact the quality of electricity production. </p><br />
            <p>The Unburn project detects the flow of fuel into the combustion chamber every 10 seconds,
                using snapshots to detect incomplete combustion of the fuel,
                categorized as Unburn or Overburn. The project alerts the supervisor if any abnormalities are detected
                during combustion,
                allowing for real-time monitoring and adjustment of the process during each shift. </p>
        </div>
        <div class="blog_divider"></div>
        <div class="blog_content"><img src="../../images/req_unburn.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <div>
                <p>Starting the project,
                    the main requirement for the application consists of four modules as follows: </p>
                <div class="list">
                    <p>1. Setup module: This module will perform the setup wizard before installing the application.
                        Users will need to select the power plant,
                        camera IP,
                        and set the frequency of image snapshots (default is every 10 seconds). </p>
                    <p>2. Streaming module: This module will display the captured images. </p>
                    <p>3. Unburn/Overburn Display module: This module will display the result of whether the image is
                        unburn or overburn. </p>
                    <p>4. Unburn/Overburn Update module: This module will update the cause of unburn and overburn. </p>
                </div>
                <p>Due to the limited development time,
                    the frontend and backend have not yet developed the Overburn and the Unburn/Overburn Update module
                    (Module 4). </p>
            </div>
        </div>
        <div class="blog_content">
            <p class="subtitle">WIREFRAME</p><img src="../../images/wireframe_unburn.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>The Unburn project detects the flow of fuel into the combustion chamber every 10 seconds,
                using snapshots to detect incomplete combustion of the fuel,
                categorized as Unburn or Overburn. The project alerts the supervisor if any abnormalities are detected
                during combustion,
                allowing for real-time monitoring and adjustment of the process during each shift. </p>
        </div>
        <div class="blog_content">
            <p class="subtitle">DESIGN SYSTEM</p><img src="../../images/DSUnburn_Foundation.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <div>
                <p>After the wireframe was approved,
                    I started developing the Design System,
                    starting with the Foundation,
                    which includes: </p>
                <div class="list">
                    <p>1. Colors: I took inspiration for color naming from IBM's Carbon Design System, which utilizes
                        design tokens. I implemented this approach to allow for scalability in the future. </p>
                    <p>2. Typography: I followed the typography styles provided by the Tailwind library for consistent
                        and efficient typography usage. </p>
                    <p>3. Icons: I incorporated a set of icons adhering to standard design guidelines to ensure visual
                        consistency throughout the system. </p>
                </div>
                <p>By establishing these foundational elements,
                    I aim to create a cohesive and scalable Design System that will streamline the design process and
                    maintain visual harmony across all components and screens. </p>
            </div>
        </div>
        <div class="blog_content"><img src="../../images/DSUnburn_Component.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>After completing the foundation section,
                I proceeded to design components for Buttons,
                Text Inputs,
                and Dropdowns to be used across various screens as per the wireframe specifications. Additionally,
                I expanded the component library to include reusable elements such as Switchers,
                Paginations,
                and Hints,
                based on anticipated design requirements. </p><br />
            <p>By incorporating these components into the design system,
                it ensures consistency and efficiency throughout the design process. Designers can easily utilize these
                pre-designed components when creating different screens,
                resulting in a cohesive user interface across the application. </p>
        </div>
        <div class="blog_content"><img src="../../images/DSUnburn_Spec.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>Furthermore,
                after completing the UI design,
                I have prepared component specifications to facilitate the handoff to developers. These specifications
                serve as a reference for testers to ensure the accuracy and correctness of each UI element. It also
                helps frontend developers in implementing the design as intended,
                ensuring that the final product aligns with the initial design vision. </p>
            <div class="highlight">
                <p>At this stage,
                    I have discovered a plugin called "<a
                        href="https://www.figma.com/community/plugin/1205622541257680763" target="_blank">Eightshapes
                        Specs</a>" by Nathan Curtis, which generates specifications automatically. This plugin
                    significantly speeds up the process compared to creating them manually. Currently,
                    I am utilizing this plugin for generating component specifications. </p>
            </div>
        </div>
        <div class="blog_divider"></div>
        <div class="blog_content">
            <p class="subtitle">UI</p>
            <p>The design approach I follow considers three main cases: start (or empty),
                normal,
                and error. Below is an example of the design for a software installation page </p><br />
            <p>By considering these three cases,
                the design ensures a comprehensive user experience,
                addressing normal scenarios,
                empty states,
                and potential errors during the use software process. </p>
        </div>
        <div class="blog_content"><img src="../../images/Unburn_setupWelcome.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>This is the initial page of the software installation. I use a commonly used phrase for software
                installation. </p>
        </div>
        <div class="blog_content"><img src="../../images/Unburn_setupcamera.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>When you click Next,
                you will encounter the configuration page where you will be required to fill in all the details.
                Otherwise,
                the Next button will remain disabled. </p>
        </div>
        <div class="blog_content"><img src="../../images/Unburn_setupcamera_error.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>The next page is the error display page,
                which shows an example of an error when incorrect values are entered. The dropdown and text input will
                display a red border and provide an error message explanation below. </p>
        </div>
        <div class="blog_content"><img src="../../images/Unburn_setupComplete.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>When everything is ready,
                you will be directed to this page. </p>
        </div>
        <div class="blog_divider"></div>
        <div class="blog_content"><img src="../../images/Unburn_main.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>This main page serves as the core of the program,
                displaying real-time images that are captured based on the set time intervals. On the right side of the
                screen,
                there will be a list of recorded histories. Initially,
                the right side will be empty,
                and there will be a notification prompting you to configure the settings to save the images to the cloud
                for later display on the backend website,
                which will be developed in Phase 2. </p><br />
            <p>In the case where images have been recorded,
                the list on the right side will not only display the image histories but also provide the option to view
                all histories by clicking the 'See all'button. This will take you to the Gallery page,
                where you can filter the images based on time intervals or their status,
                whether they are 'Unburn'or 'Overburn'. </p>
        </div>
        <div class="blog_content"><img src="../../images/Unburn_setting.png"
                style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>In the Settings section,
                there are four configurable options available: Camera (IP, snap frequency),
                Threshold,
                Database (cloud connection),
                and Bucket. </p>
        </div>
        <div class="blog_content"><img src="../../images/Unburn_log.png"
            style=" width: 100%; max-width: 2560px; height: auto;" />
            <p>In the Log section,
                when clicked,
                it will slide in from the right side,
                displaying the history of program changes. This includes modifications to settings or additions of
                databases for thermal analysis (excluding image snapshot history). It also provides the ability to
                filter the logs based on a specific time range. </p>
        </div>
        <div class="blog_divider"></div>
        <div class="blog_content">
            <p class="subtitle">RETROSPECTIVE</p>
            <div class="highlightRetro">
                <p>This project has been my first attempt at using design tokens for naming conventions and practicing
                    project handoff. Due to its small scale and urgent timeline,
                    there were no major issues. The main learning outcome was the creation of a design system,
                    which has greatly improved the organization and efficiency of future projects. </p>
            </div>
        </div>
        <ButtonBack />
    </main>
</template>
<script>
    import BlogTitle from '../components/BlogTitle.vue'
    import ButtonBack from '../components/ButtonBack.vue'
    import Cover_Unburn from '/images/Cover_Unburn.png'
    import ProgressBar from '../components/ProgressBar.vue';

    export default {

        name: 'Unburn',
        components: {
            BlogTitle,
            ButtonBack,
            ProgressBar,
        }

        ,
        data() {
            return {
                Cover_Unburn: Cover_Unburn,
                showTopTab: false,
                scrollProgress: 0,
            }
        }

        ,
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll();
        }

        ,
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        }

        ,
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
            }

            ,
        }

        ,
    }

    ;
</script>
<style>
    .blog {
        padding-bottom: 72px;
    }

    .blog_divider {
        border-top: 1px solid var(--pyy-border-primary);
        margin-left: 380px;
        margin-right: 380px;
        margin-top: 40px;
    }

    .blog_content {
        padding-left: 380px;
        padding-right: 380px;
        margin-top: 40px;
        /* margin-bottom: 48px; */
    }

    .blog_content .subtitle {
        color: var(--pyy-text-on-color-disabled);
        font-size: var(--pyy-font-size-2);
        line-height: var(--pyy-line-heights-1);
        font-weight: var(--pyy-font-weights-roboto-mono-2);
        margin-bottom: 8px;
        margin-top: 0;
    }

    .blog_content p {
        color: var(--pyy-text-primary);
        font-size: var(--pyy-font-size-4);
        line-height: var(--pyy-line-heights-3);
        font-weight: var(--pyy-font-weights-roboto-mono-1);
        margin: 0;
    }

    .blog_content img {
        margin-bottom: 40px;
    }


    .list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
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