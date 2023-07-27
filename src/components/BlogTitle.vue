<template>
<img :src="imgSrc" style="width: 100%; max-width: 2560px; height: auto;">
<!-- ข้างล่างเป็นโค้ดเดิม -->
<div class="container">
    <h1>{{title}}</h1>
    <div class="title_content">
        <div class="platform">
            <p class="subtitle">PLATFORM</p>
            <p class="content">{{platform}}</p>
        </div>
        <div class="duration">
            <p class="subtitle">DURATION</p>
            <p class="content">{{duration}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BlogTitle',
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        platform: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
img{
    border-radius: 0px;
}
.container {
    margin: 0;
    padding-left: 380px;
    padding-right: 380px;
    margin-bottom: 48px;
}

h1 {
    margin-bottom: 24px;
    margin-top: 40px;
}

.subtitle {
    color: var(--pyy-text-on-color-disabled);
    font-size: var(--pyy-font-size-2);
    line-height: var(--pyy-line-heights-1);
    font-weight: var(--pyy-font-weights-roboto-mono-2);
    margin-bottom: 8px;
    margin-top: 0;
}

.content {
    color: var(--pyy-text-primary);
    font-size: var(--pyy-font-size-4);
    line-height: var(--pyy-line-heights-3);
    font-weight: var(--pyy-font-weights-roboto-mono-1);
    margin: 0;
}

.platform,
.duration {
    width: 308px;
}

.title_content {
    display: flex;
    /* กำหนดให้เรียงแนวนอน */
    align-items: center;
    /* กำหนดให้อยู่ตรงกลางแนวตั้ง */
}

.title_content>div {
    margin-right: 32px;
    /* กำหนดระยะห่างด้านขวาขององค์ประกอบ */
}

.title_content>div:last-child {
    margin-right: 0;
    /* กำหนดไม่ให้มีระยะห่างด้านขวาขององค์ประกอบสุดท้าย */
}
@media only screen and (max-width: 1200px) {
    .container {
        padding-right: 120px;
        padding-left: 120px;
    }
}
@media only screen and (max-width: 800px) {
    .container {
        padding-right: 96px;
        padding-left: 96px;
    }
}

@media only screen and (max-width: 740px) {
    .container {
        padding-right: 32px;
        padding-left: 32px;
    }
}

@media only screen and (max-width: 480px) {
    .container {
        padding-right: 16px;
        padding-left: 16px;
    }

    .title_content {
        display: inline;
        align-items: flex-start;
    }

    .platform {
        margin-bottom: 24px;
    }

    .subtitle {
        font-size: var(--pyy-font-size-0);
        line-height: var(--pyy-line-heights-0);
    }
    .content{
        font-size: var(--pyy-font-size-1);
        line-height: var(--pyy-line-heights-0);
    }
}
</style>
