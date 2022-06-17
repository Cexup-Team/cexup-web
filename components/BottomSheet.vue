<script setup lang="ts">
import { Ref } from "vue"

    const props = defineProps({
        openModal: {
            type: [Boolean]
        },
        changeOpen: {
            type: [Boolean]
        },
        list : {
          type : Map
        },
        select : {
          type: String
        },
        choose: {
            type: Array
        },
        searchIcon : {
            type: Array
        }
    })
    
    const s = reactive({
      item : null
    })


    const emitbuttonsheet = defineEmits(['update:changeOpen', 'update:changeSelect'])
    let selected: Ref<String> = ref('')
    let loading: Ref<Boolean> = ref(false)


    watch(
        () => props.openModal,
          (newopenModal, prevopenModal) => {
          const mapping = props.list
          s.item = mapping.get(props.select)
          setSheetHeight('auto')
          setIsSheetShow(newopenModal)
          loading.value = true
        }
    )


    const selectOption = (e) => {
        selected.value = e
        emitbuttonsheet('update:changeSelect', `${e}||${props.select}`)
        setOverlay()
    }

    let sheetHeight
    const setSheetHeight = (value) => {
        const $ = document.querySelector.bind(document)
        const sheetContents = $(".content")
        const draggableArea = $(".draggable-area")
        
        sheetHeight = value === 'auto' ? 'auto' : Math.max(0, Math.min(100, value))
        sheetContents.style.height = value === 'auto' ? sheetHeight : `${sheetHeight}vh`

        sheetContents.style.maxHeight = '70vh'
        if(sheetContents === 100) {
            sheetContents.classList.add("fullscreen")
        }else{
            sheetContents.classList.remove("fullscreen")
        }
    }

    const setIsSheetShow = (value) => {

        // console.log(!value)
        const $ = document.querySelector.bind(document)
        const sheet = $("#sheet")
        sheet.setAttribute("aria-hidden", String(!value))
    }

    const setOverlay = () => {
      setIsSheetShow(false)
      emitbuttonsheet('update:changeOpen', false)
    }

    onMounted(
      () => {

        setTimeout(() => {
          const $ = document.querySelector.bind(document)
          const sheet = $("#sheet")
          const sheetContents = sheet.querySelector(".content")
          const draggableArea = sheet.querySelector(".draggable-area")
          sheet.querySelector(".overlay").addEventListener("click",setOverlay)
          
          s.item = props
        }, 1000); 

      }
    )

</script>
<template>
    <div id="sheet" class="flex flex-col items-center justify-end" aria-hidden="true">
        <div class="overlay"></div>
        <div class="content flex flex-col" v-if="props.select !== 'date'">
            <header class="controls">
                <div class="draggable-area">
                    <div class="draggable-thumb"></div>
                </div>
            </header>
            <main class="body fill flex flex-col w-full overflow-y-scroll" v-if="loading === true">
              <h3 class="text-sm font-semibold font-poppins leading-5 w-full mb-6">{{ props.select.charAt(0).toUpperCase() + props.select.slice(1) }}</h3>
              <div class="relative h-16 max-h-16 min-h-max mb-5" v-if="props.searchIcon.indexOf(props.select) > -1">
                  <input class="search_input outline-none border border-gray-150 w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0 h-full" placeholder="Search" type="text">
                  <img src="../assets/images/search_icon.svg" class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
              </div>
                <ul class="w-full h-full overflow-y-scroll">
                    <li class="w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4" @click="selectOption(text)" v-for="(text, index) in s.item" :key="index">
                        <p :class="'text-base leading-6 font-poppins '+(props.choose[props.select] === text ? 'text-primary-color' : 'text-gray-350')">{{text}}</p>
                        <img v-if="props.choose[props.select] === text" src="../assets/images/check_with_bg.svg" class="m-1" alt="" />
                        
                    </li>
                </ul>
            </main>
        </div>
        <div class="content flex flex-col" v-if="props.select === 'date'">
            <header class="controls">
                <div class="draggable-area">
                    <div class="draggable-thumb"></div>
                </div>
            </header>
            <main class="body fill flex flex-col w-full overflow-y-scroll">
              <h3 class="text-sm font-semibold font-poppins leading-5 w-full mb-6">Date</h3>
               <ul class="w-full h-full overflow-y-scroll bg-gray-400 slide-warpper">
                    <li class="w-full pb-4 flex justify-between items-center">
                        <p :class="'text-base leading-6 font-poppins'">1</p>
                    </li>
                    <li class="w-full pb-4 flex justify-between items-center">
                        <p :class="'text-base leading-6 font-poppins'">2</p>
                    </li>
                    <li class="w-full pb-4 flex justify-between items-center">
                        <p :class="'text-base leading-6 font-poppins'">3</p>
                    </li>
                    
                </ul>
            </main>
        </div>
    </div>
</template>


<style>
     #sheet {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 40;
        visibility: visible;
        transition: opacity 0.5s, visibility 0.5s;
    }

    #sheet[aria-hidden="true"] {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }

    #sheet .overlay{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: #000;
        opacity: 0.7;
        
    }

    #sheet .content {
        background: #fff;
        height: 50vh;
        min-height: 10vh;
        width: 100%;
        overflow-y: hidden;
        max-height: 100vh;
        border-radius: 1rem 1rem 0 0;
        box-sizing: border-box;
        transform: translateY(0);
        transition: transform 0.5s, border-radius 0.5s;
        padding: 1rem;
        padding-top: 3rem;
    }

    #sheet[aria-hidden="true"] .content {
        transform: translateY(100%);
    }

    #sheet .draggable-area {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 2.1rem;
        margin: auto;
        padding: 1rem;
        cursor: grab;
       
    }

    #sheet .draggable-thumb {
        width: inherit;
        height: 0.25rem;
        background: #dcdcdc;
        border-radius: 0.125rem;
    }

    #sheet .content:not(.not-selectable) {
        transition: transform 0.5s, border-radius 0.5s, height 0.5s;
    }

    .search_input {
        border-radius: 10px;
    }
    

   
</style>