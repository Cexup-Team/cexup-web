<script setup lang="ts">
    import { useRouter, useRoute } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useArticleStore } from '~~/stores/article-store';
    import { aesDecrypt } from "~~/utils/crypto";


    const article = useArticleStore()
    const $toast = useToast()
    const router = useRouter()
    const route = useRoute()
    const session = useSession() 


    onMounted(async () => {
        const slug = route.params.slug
        await article.getDetailArticle(slug)
    })
</script>
<template>
    <div>
        <nuxt-layout name="article">
            <div v-if="!article.state.isLoading && article.state.isStatus === 'success'">
                <div class="w-full h-44">
                    <img :src="article.state.isData.thumb_original" class="w-full h-full object-cover" alt="">
                </div>
                <div class="px-4 mt-7">
                    <h2 class="text-primary-color text-xl font-semibold font-poppins">{{article.state.isData.title}}</h2>
                    <div class="font-poppins font-medium text-sm mt-4" v-html="article.state.isData.content"></div>
                    <h4 class="text-gray-350 font-poppins font-medium mt-4 w-full text-right">{{article.state.isData.created_at}}</h4>
                </div>
                <div class="pt-10"></div>
            </div>
        </nuxt-layout>
    </div>
</template>

<style>

</style>