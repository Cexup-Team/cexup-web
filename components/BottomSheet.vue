<script setup lang="ts">
import { Ref } from "vue"
import DateTimePicker, { DatePicker, TimePicker } from 'vue-drumroll-datetime-picker'
import 'vue-drumroll-datetime-picker/dist/style.css'

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
        },
        type: {
            type: String
        },
        title: {
            type: String
        }
    })
    
    const s = reactive({
      item : null,
      now : '12/06/2022'
    })


    const emitbuttonsheet = defineEmits(['update:changeOpen', 'update:changeSelect'])
    let selected: Ref<String> = ref('')
    let loading: Ref<Boolean> = ref(false)


    watch(
        () => props.openModal,
          (newopenModal, prevopenModal) => {
          const mapping = props.list
          s.item = mapping?.get(props.select)
          setSheetHeight('auto')
          setIsSheetShow(newopenModal)
          loading.value = true



            setTimeout(() => {
                const slideDateWrapper = document.getElementsByClassName("slide-date-item")
            
            slideDateWrapper[0]?.addEventListener("mousedown", onDragStart)
            slideDateWrapper[0]?.addEventListener("touchstart", onDragStart)
            slideDateWrapper[0]?.addEventListener("mousemove", onDragMove)
            slideDateWrapper[0]?.addEventListener("touchmove", onDragMove)
            }, 500);
                
          
        
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

    const touchPosition = (event) =>
        event.touches ? event.touches[0] : event
    
     let dragPosition;

    //  const setSheetHeight = (value) => {
    //     sheetHeight = Math.max(0, Math.min(100, value))
    //     sheetContents.style.height = `${sheetHeight}vh`
    //     if (sheetHeight === 100) {
    //         sheetContents.classList.add("fullscreen")
    //     } else {
    //         sheetContents.classList.remove("fullscreen")
    //     }
    // }
    const onDragStart = (event) => {
        dragPosition = touchPosition(event).pageY
        // console.log(dragPosition)
    }

    const onDragMove = (event) => {
        var offsetHeight = document.getElementsByClassName('slide-date-item')[0].offsetHeight;
        if (dragPosition === undefined) return
        const y = touchPosition(event).pageY
        const deltaY = dragPosition - y
        // const deltaHeight = deltaY / offsetHeight * 100
        // console.log(deltaHeight)
        // setSheetHeight(sheetHeight + deltaHeight)
        // dragPosition = y
        // console.log(offsetHeight)
        sheetHeight = Math.max(0, Math.min(100, ))
        

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
        <div class="content flex flex-col" v-if="props.select !== 'date' && props.type !== 'blank'">
            <header class="controls">
                <div class="draggable-area">
                    <div class="draggable-thumb"></div>
                </div>
            </header>
            <main class="body fill flex flex-col w-full overflow-y-scroll no-scrollbar" v-if="loading === true">
              <h3 class="text-sm font-semibold font-poppins leading-5 w-full mb-6">{{ props.select.charAt(0).toUpperCase() + props.select.slice(1) }}</h3>
              <div class="relative h-16 max-h-16 min-h-max mb-5" v-if="props.searchIcon.indexOf(props.select) > -1">
                  <input class="search_input outline-none border border-gray-150 w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0 h-full" placeholder="Search" type="text">
                  <img src="../assets/images/search_icon.svg" class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
              </div>
                <ul class="w-full h-full overflow-y-scroll no-scrollbar">
                    <li class="w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4" @click="selectOption(text)" v-for="(text, index) in s.item" :key="index">
                        <p :class="'text-base leading-6 font-poppins '+(props.choose[props.select] === text ? 'text-primary-color' : 'text-gray-350')">{{text}}</p>
                        <img v-if="props.choose[props.select] === text" src="../assets/images/check_with_bg.svg" class="m-1" alt="" />
                        
                    </li>
                </ul>
            </main>
        </div>
        <!-- <div class="content flex flex-col" v-if="props.select === 'date'">
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
        </div> -->

        <div class="content flex flex-col" v-if="props.type === 'blank'">
            <header class="controls">
                <div class="draggable-area">
                    <div class="draggable-thumb"></div>
                </div>
            </header>
            <main class="body fill flex flex-col w-full overflow-y-scroll no-scrollbar">
              <h3 class="text-sm font-semibold font-poppins leading-5 w-full mb-3">{{props.title}}</h3>
               <div class="w-full h-full overflow-y-scroll">
                   <slot name="bottomSheet"></slot>
                    
                </div>
            </main>
        </div>

        <div class="content flex flex-col" v-if="props.select === 'date'">
            <header class="controls">
                <div class="draggable-area">
                    <div class="draggable-thumb"></div>
                </div>
            </header>
            <main class="body fill flex flex-col w-full overflow-y-scroll">
              <h3 class="text-sm font-semibold font-poppins leading-5 w-full mb-3">Choose Birth Date</h3>
               <div class="w-full h-full overflow-y-scroll slide-date-wrapper p-5">
                    <!-- <ul class="flex justify-center items-center w-full h-auto">
                       <li class="slide-date-item flex flex-col items-center w-full">
                            <span class="border-b-4 border-primary-color p-4 text-base font-poppins font-medium">21</span>
                            <span class="border-b-4 border-primary-color p-4 text-base font-poppins font-medium">22</span>
                            <span class="text-base font-medium font-poppins p-4">23</span>
                       </li>
                       <li class="flex slide-date-item flex-col items-center w-full">
                            <span class="border-b-4 border-primary-color p-4 text-base font-poppins font-medium">Jul</span>
                            <span class="border-b-4 border-primary-color p-4 text-base font-poppins font-medium">Aug</span>
                            <span class="text-base font-medium font-poppins p-4">Sep</span>
                       </li>
                       <li class="flex slide-date-item flex-col items-center w-full">
                            <span class="border-b-4 border-primary-color p-4 text-base font-poppins font-medium">2001</span>
                            <span class="border-b-4 border-primary-color p-4 text-base font-poppins font-medium">2002</span>
                            <span class="text-base font-medium font-poppins p-4">2003</span>
                       </li>
                       
                       
                    </ul> -->

                    
                </div>
            </main>
        </div>

        <!-- <div class="content flex flex-col" v-if="props.select === 'date'"></div> -->
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
        transform: translateX(-50%);
       
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

    .slide-date-wrapper .slide-date-item > span:nth-child(1) {
        color: #8A8A8E;
    }

    .slide-date-wrapper .slide-date-item > span:nth-child(3) {
        color: #8A8A8E;
    }

    @media only screen and (min-width: 520px) {
         #sheet {
            top: 0;
            left: 50%; 
            margin-left: -255px;
            width: 510px;   

        }
    }
    
    

   
</style>