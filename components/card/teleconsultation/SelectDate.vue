<script setup lang="ts">
    import { ref } from "vue"
    
    defineProps({
        allDay : {
            type: Array
        }
    })


    const emit = defineEmits(['update:selectDate',])

    const now = new Date();
    const day =  now.getDate()


    function getNameDay(day) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[day].slice(0,3)
    }


    const cardSelect = ref(null);


    onMounted(() => {
        
        let tabStatus = document.getElementsByClassName("card-select-date")[0]
       
        const myPromise = new Promise((resolve, reject) => {
            let tabPaneStatus = document.getElementsByClassName("card-select-date-item")
            resolve(tabPaneStatus)
        });
   

        myPromise.then(res => {
            for (let i = 0; i < res.length; i++) {
                res[i].addEventListener("click", function(e) {
                    emit('update:selectDate', e.target.getAttribute("slc"))
                    tabStatus.getElementsByClassName("active")[0].classList.remove("active")
                    res[i].classList.add("active")
                })
            }
        })

    })


</script>
<template>
    <div ref="cardSelect" class="card-select-date flex justify-start mt-4 overflow-x-scroll no-scrollbar px-5">
        <div v-for="(item, index) in allDay" :key="index">
            <div :class="'card-select-date-item cursor-pointer transition-all duration-300 ease-in-out mr-5 rounded-xl '+(index===0 ? 'active' : '')" :slc="item.getDate()">
                <div class="flex flex-col items-center w-16 h-20 justify-center" :slc="item">
                    <h5 class="font-poppins text-lg font-semibold" :slc="item">{{item.getDate()}}</h5>
                    <span class="text-gray-350 font-poppins text-sm" :slc="item">{{getNameDay(item.getDay())}}</span>
                </div>
            </div>

        </div>                        
    </div>
                         

</template>


<style>

</style>