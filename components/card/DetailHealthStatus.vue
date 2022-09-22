<script setup lang="ts">
     import VueApexCharts from "vue3-apexcharts";

    const props = defineProps({
        data: {
            type: Array
        },
        time : {
            type: Array
        },
        title: {
            type: String
        },
        min : {
            type: Number
        },
        max : {
            type: Number
        }
    })

    const series = [
        {
            name: props.title,
            data: props.data.reverse()
        }
    ]

    const chartOptions = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 4,
        },
        xaxis: {
            categories: props.time.reverse()
        },
        
        yaxis: {
            min: props.min,
            max: props.max,
            floating: false,
        },

        tooltip: {
            x: {
            format: 'dd/MM/yy HH:mm'
            },
        },
    }
</script>
<template>
  <div class="">
    <h1 class="font-poppins text-sm font-semibold px-4">{{title}} | <span class="text-primary-color">{{props.data[props.data.length -1]}}</span> </h1>
    <VueApexCharts type="area" class="" height="300" width="100%" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>


<style>

</style>