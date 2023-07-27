<template>
<div class="ButtonFooter">
    <button class="button-back" @mouseenter="isHover = true" @mouseleave="isHover = false" @click="goBack">
        <svg class="button-back__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
            <path :fill="isHover ? 'white' : 'var(--pyy-button-primary)'" d="M3.636 11.785c-.187.187-.292.441-.292.707 0 .265.105.519.292.707l5.657 5.657c.187.187.441.292.707.292s.519-.105.707-.292c.187-.187.292-.441.292-.707 0-.266-.105-.52-.292-.707l-3.95-3.95h13.243c.265 0 .52-.105.707-.292.187-.187.292-.441.292-.707 0-.266-.105-.52-.292-.707-.187-.187-.441-.292-.707-.292H5.707l3.95-3.95c.187-.187.292-.441.292-.707 0-.266-.105-.52-.292-.707-.187-.187-.441-.292-.707-.292s-.52.105-.707.292l-5.657 5.657z" />
        </svg>
        <span class="button-back__text">Back</span>
    </button>
</div>
</template>

  
  
<script>
export default {
    data() {
        return {
            isHover: false,
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
    },
};
</script>
  
  
<style scoped>
.ButtonFooter {
    padding-left: 380px;
    padding-right: 380px;
    margin-top: 48px;
    margin-bottom: 48px;
}

.button-back {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius: 8px;
}

.button-back__icon {
    width: 16px;
    height: 16px;
}

.button-back__text {
    font-size: var(--pyy-font-size-1);
    line-height: var(--pyy-line-heights-1);
    font-weight: var(--pyy-font-weights-roboto-mono-2);
    color: var(--pyy-button-primary);
}

.button-back:hover {
  background-color: var(--pyy-button-primary-hover);
  color: var(--pyy-text-on-color);
}

.button-back:hover .button-back__text {
  color: var(--pyy-text-on-color);
}
@media only screen and (max-width: 1200px) {
    .ButtonFooter {
        padding-left: 120px;
    padding-right: 120px;
    }
}

@media only screen and (max-width: 800px) {
    .ButtonFooter {
        padding-left: 96px;
    padding-right:96px;
    }
}

@media only screen and (max-width: 740px) {
    .ButtonFooter {
        padding-right: 32px;
        padding-left: 32px;
    }
}
@media only screen and (max-width: 480px) {
    .ButtonFooter {
        padding-right: 16px;
        padding-left: 16px;
    }
}
</style>
