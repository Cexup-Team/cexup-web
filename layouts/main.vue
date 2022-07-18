<script setup lang="ts">



</script>
<template>
    <div class="bg-gray-100 h-screen relative">

        <div class="h-full w-full overflow-hidden">
            <div class="layout-wrapper top-0 bottom-0 left-0 -right-2 max-w-lg mx-auto bg-white h-screen overflow-y-scroll relative no-scrollbar">
                <slot></slot>
            </div>
        </div>
    </div>
        
</template>


<style>

    .navigation {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

    }
  
    .navigation .active {
        
    }


      .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    @media only screen and (min-width: 700px) {
        .navigation {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
            bottom: 0;
            left: 50%;
            margin-top: -100px; 
            margin-left: -255px;
            width: 510px;

        }
    }




</style>