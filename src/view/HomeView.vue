<template>
<div class="layout">
    <main class="welcome">
        <h1>Hey there,<br />I'm Supanut Maiyos.</h1>
        <p>I am UX/UI Designer passionate about crafting user-friendly digital experiences. With a deep understanding of user behavior and design principles, I create designs that solve real problems and enhance users' lives. Let's work together to bring your vision to life!</p>
        <ul class="contract">
            <li><a href="https://www.linkedin.com/in/supanut-maiyos/" target="_blank">Linkedin</a></li>
            <li><a href="mailto:supanut.kus@gmail.com" target="_blank">Mail</a></li>
        </ul>

        <CardRow :projects="projects" />

    </main>
</div>
</template>

<script>
import CardRow from "../components/Card.vue";
import Unburn from "/images/Card_Unburn.png";
import HRIS from "/images/Card_HRIS.png";
import PDFviewer from '/images/Card_PDFviewer.png'
import Comy from '/images/Card_Comy.png'

export default {
    name: "Projects",
    components: {
        CardRow,
    },
    data() {
        return {
            projects: [{
                    id: 1,
                    name: "Unburn",
                    tag: "Desktop Application",
                    imageUrl: Unburn,
                },
                {
                    id: 2,
                    name: "HRIS",
                    tag: "Website",
                    imageUrl: HRIS,
                },
                {
                    id: 3,
                    name: "PDF viewer",
                    tag: "Figma Template",
                    imageUrl: PDFviewer,
                },
                {
                    id: 3,
                    name: "Comy",
                    tag: "Figma Plugin",
                    imageUrl: Comy,
                },
                // เพิ่มโปรเจคอื่น ๆ ต่อไป...
            ],
        };
    },
    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>

<style scoped>
ul li a {
    margin-right: 16px;
}
ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: flex;
    /* เปลี่ยนเป็น flexbox */
    align-items: center;
    /* จัดให้ตัวอักษรอยู่ตรงกลางของกล่อง */
    height: 48px;
}

.contract {
    margin-bottom: 72px;
}
</style>
