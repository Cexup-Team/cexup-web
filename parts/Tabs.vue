<script setup lang="ts">

    defineProps({
        bgBody : {
            type: String
        }
    })


    onMounted(() => {
        
        setTimeout(() => {
            let tabHeader = document.getElementsByClassName("tab-header")[0]
            let tabIndicator = document.getElementsByClassName("tab-indicator")[0]
            let tabBody = document.getElementsByClassName("tab-body")[0]

            const countItem = tabHeader.getElementsByTagName("div").length

            let root = document.querySelector(':root');

            root.style.setProperty('--countItem', countItem);

        
            let tabsPane = tabHeader.getElementsByTagName("div")
            console.log(tabsPane)
            for (let i = 0; i < tabsPane.length; i++) {
                tabsPane[i].addEventListener("click", function() {
                        tabHeader.getElementsByClassName("active")[0].classList.remove("active")
                        tabsPane[i].classList.add("active")
                        tabBody.getElementsByClassName("active")[0].classList.remove("active")
                        tabBody.getElementsByClassName("tab-body-item")[i].classList.add("active")
    
                        tabIndicator.style.left = `calc(calc(100%/${countItem}) * ${i}) `
                        
                })
            }
            
            
        }, 300);


        setTimeout(() => {
            let tabStatus = document.getElementsByClassName("tab-status")[0]
            let tabPaneStatus = document.getElementsByClassName("tab-status-item")

            for (let i = 0; i < tabPaneStatus.length; i++) {
                tabPaneStatus[i].addEventListener("click", function() {
                    tabStatus.getElementsByClassName("active_tab_filter")[0].classList.remove("active_tab_filter")
                    tabPaneStatus[i].classList.add("active_tab_filter")
                })
            }
        }, 300);

    })
</script>

<template>
    <div class="tabs absolute top-1/2 left-1/2 mt-12 w-full">
        <div class="tab-header">
            <slot name="tabHeader"></slot>
        </div>
        <div class="tab-indicator relative transition-all duration-300 bg-primary-color left-0 rounded-md h-0.5"></div>
        <slot name="tabFilter"></slot>
        <div :class="'tab-body relative h-full w-full overflow-y-scroll no-scrollbar '+(bgBody)">
            <slot name="tabBody"></slot>
            
        </div>
    </div>
</template>


<style>
    :root {
        --countItem: 10deg;
    }

    .tabs {
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background: white;
        overflow: hidden;
    }
    .tabs .tab-header {
        height: 50px;
        display: flex;
        align-items: center;
    }
    .tabs .tab-header > div {
        width: calc(100% / var(--countItem));
    }

    .tabs .tab-header > div > i {
        display: block;
        margin-bottom: 5px;
    }
    .tabs .tab-header > div.active {
        color: #008CA3;
    }
    .tabs .tab-indicator {
        width: calc(100%/var(--countItem));
    }

    .tabs .tab-body > div {
        position: absolute;
        top: -200%;
        opacity: 0;
        margin-top: 5px;
        transform: scale(0.9);
        transition: opacity 500ms ease-in-out 0ms, transform 500ms ease-in-out 0ms;

    }
    .tabs .tab-body > div.active {
        top: 0px;
        opacity: 1;
        transform: scale(1);
        margin-top: 0px;
    }

    .tab-status > div:not(.active_tab_filter) {
        color: #8A8A8E;
        border: 1px solid #8A8A8E;
        border-radius: 16px;
        
    }

    .tab-status > .active_tab_filter p {
        background-color: #008CA3;
        border-radius: 16px;
        color: white;
    }
</style>