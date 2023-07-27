<template>
  <main class="gallery">
      <div class="category">
          <ul>
            <li class="divider"></li>
            <li :class="{ active: selectedTag === null }" @click="selectedTag = null">All</li>
            <li :class="{ active: selectedTag === 'Website' }" @click="selectedTag = 'Website'">Website</li>
            <li :class="{ active: selectedTag === 'Application' }" @click="selectedTag = 'Application'">Application</li>
            <li :class="{ active: selectedTag === 'Figma' }" @click="selectedTag = 'Figma'">Figma</li>
            <li :class="{ active: selectedTag === '3D' }" @click="selectedTag = '3D'">3D</li>
            <li class="divider"></li>
          </ul>
      </div>
      <div class="work">
          <CardGallery :projects="filteredProjects" />
      </div>
  </main>
  </template>
  
  <script>
  import CardGallery from "../components/CardGallery.vue";
  import Unburn from "/images/Card_Unburn.png";
  import HRIS from "/images/Card_HRIS.png";
  import PDFviewer from '/images/Card_PDFviewer.png'
  import Comy from '/images/Card_Comy.png'
  export default {
      name: 'WorkView',
      components: {
          CardGallery,
      },
      data() {
          return {
              projects: [{
                      id: 1,
                      name: "Unburn",
                      tag: "Application",
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
                      tag: "Figma",
                      imageUrl: PDFviewer,
                  },
                  {
                      id: 3,
                      name: "Comy",
                      tag: "Figma",
                      imageUrl: Comy,
                  },
                  // เพิ่มโปรเจคอื่น ๆ ต่อไป...
              ],
              selectedTag: null,
          };
      },
      computed: {
          filteredProjects() {
              if (this.selectedTag) {
                  return this.projects.filter(project => project.tag === this.selectedTag);
              } else {
                  return this.projects;
              }
          }
      },
      mounted() {
          window.scrollTo(0, 0);
      }
  };
  </script>

<style scoped>
.gallery {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px 72px 72px;
    gap: 72px;
}

.divider {
    border-top: 1px solid var(--pyy-border-primary);
    cursor: none;
}

.category {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: 120px;
    position: sticky; 
    top: 80px; 
}
.category li {

    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: var(--pyy-font-size-2);
    line-height: var(--pyy-line-heights-1);
    font-weight: var(--pyy-font-weights-roboto-mono-1);
    color: var(--pyy-button-primary);
    cursor: pointer;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

}
.category li:hover{
  color: var(--pyy-button-secondary-hover);
}
.category li.active {
  color: var(--pyy-link-primary);
  font-weight: var(--pyy-font-weights-roboto-mono-2);
}

@media only screen and (max-width: 740px) {


    .gallery {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 24px 32px;
        gap: 72px;
    }
}

@media only screen and (max-width: 560px) {
  .gallery{
    padding-top: 96px;
  }
    .category {
        width: 100%;
        justify-content: flex-start;
        position: fixed;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 16px;
        top: 56px;
        left: 0;
        z-index: 1;
        background-color: rgba(251, 250, 245, 0.7);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
    }

    .category li {
        display: inline;
        margin-right: 16px;
        font-weight: var(--pyy-font-weights-roboto-mono-1);
    }

    .divider {
        display: none;
        visibility: hidden;
    }

}

@media only screen and (max-width: 480px) {
    .gallery {
        flex-direction: column;
        padding-right: 16px;
        padding-left: 16px;
    }

    .category {
        padding-left: 0;
    }
}
</style>
