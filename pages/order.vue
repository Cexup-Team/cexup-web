<script setup lang="ts">
    import BottomNav from '~~/parts/BottomNav.vue';

    onMounted(() => {
        
        setTimeout(() => {
            let tabHeader = document.getElementsByClassName("tab-header")[0]
            let tabIndicator = document.getElementsByClassName("tab-indicator")[0]
            let tabBody = document.getElementsByClassName("tab-body")[0]
        
            let tabsPane = tabHeader.getElementsByTagName("div")
            for (let i = 0; i < tabsPane.length; i++) {
                tabsPane[i].addEventListener("click", function() {
                        tabHeader.getElementsByClassName("active")[0].classList.remove("active")
                        tabsPane[i].classList.add("active")
                        tabBody.getElementsByClassName("active")[0].classList.remove("active")
                        tabBody.getElementsByClassName("tab-body-item")[i].classList.add("active")
    
                        tabIndicator.style.left = `calc(calc(100%/3) * ${i}) `
                        
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
<div>
    <nuxt-layout name="main">
        <div class="order-wrapper h-full relative w-full">
             <BottomNav active="/order" />
            <div class="flex justify-between mt-7 mx-6 items-center">
                <img src="../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                <h1 class="font-poppins text-xl font-semibold">Order</h1>
                <div>

                </div>
            </div>

            <div class="tabs absolute top-1/2 left-1/2 mt-12 w-full">
                <div class="tab-header">
                    <div class="active font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                        All
                    </div>
                    <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                        Call Doctor
                    </div>
                    <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                        Meet Doctor
                    </div>
                </div>
                <div class="tab-indicator relative transition-all duration-300 bg-primary-color left-0 rounded-md h-0.5"></div>
                <div class="pt-4 pb-4 bg-blue-50 overflow-x-scroll no-scrollbar">
                    <div class="tab-status flex items-center w-full min-w-max mx-3">
                        <div class="tab-status-item mr-3 active_tab_filter">
                            <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">All</p>
                        </div>
                        <div class="tab-status-item mr-3">
                            <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Waiting Payment</p>
                        </div>
                        <div class="tab-status-item mr-3">
                            <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Order Progress</p>
                        </div>
                        <div class="tab-status-item mr-3">
                            <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Waiting Meeting </p>
                        </div>

                        <div class="tab-status-item mr-3">
                            <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Waiting Meeting </p>
                        </div>

                        <div class="tab-status-item">
                            <p class="px-4 py-2 font-poppins font-medium text-sm">Waiting Meeting </p>
                        </div>
                    </div>

                </div>
                <div class="tab-body relative h-full w-full bg-blue-50 overflow-y-scroll no-scrollbar">
                    <div class="tab-body-item active w-full pb-44">
                        <CardOrder />
                        <CardOrder />
                        <CardOrder />
                        <CardOrder />
                        <CardOrder />
                    </div>
                    <div class="tab-body-item">
                        <h2>Call Doctor</h2>
        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem tempore corrupti eius rerum dolore, natus id, consequuntur magni deleniti alias et delectus porro corporis optio nisi aliquid! Ad, natus?</p>
                    </div>
                    <div class="tab-body-item">
                        <h2> Meet Doctor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem tempore corrupti eius rerum dolore, natus id, consequuntur magni deleniti alias et delectus porro corporis optio nisi aliquid! Ad, natus?</p>
                    </div>
                </div>
            </div>
        </div>
    </nuxt-layout>
    
</div>
</template>


<style>
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
        width: calc(100% / 3);
    }

    .tabs .tab-header > div > i {
        display: block;
        margin-bottom: 5px;
    }
    .tabs .tab-header > div.active {
        color: #008CA3;
    }
    .tabs .tab-indicator {
        width: calc(100%/3);
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

    .card-order-header {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 12px 12px 0px 0px;
    }
    .card-order-body {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 0px 0px 12px 12px;
    }
    
</style>