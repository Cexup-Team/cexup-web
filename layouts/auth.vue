<template>
  <!-- <main class="
    flex 
    flex-col 
    bg-gray-100
    ">
        <div class="max-w-lg mx-auto h-screen items-center bg-white overflow-scroll pl-4 pr-4">
            <div class="w-screen">
                <slot></slot>
            </div>            
        </div>
    </main> -->

    <div class=" bg-gray-100 h-screen">
        <div class="h-full w-full overflow-hidden">

            <div class="top-0 bottom-0 left-0 -right-2 max-w-lg mx-auto bg-white h-screen overflow-y-scroll relative">
                <slot></slot>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {

}
</script>

<style>
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>