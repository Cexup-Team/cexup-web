<template>
    <main class="
    flex 
    flex-col 
    min-h-screen 
    items-center
    ">
        <div>Header</div>
        <div class=" 
        flex 
    flex-row
    max-w-lg
    h-full
    items-center 
    content-center">
            <router-view/>
        </div>
        
        <BottomNavigation/>
    </main>
</template>