<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

  const series = [70]
        const chartOptions =  {
            chart: {
              height: 140,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '55%',
                   margin: 5,
                },
                dataLabels: {
                  name: {
                    show: true,
                    color : '#000000',
                    fontSize: '12px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'normal',
                  },
                  value: {
                    show: false,
                  },
                
                }
              },
            },
            labels: ['Normal'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: ['#77DAFA', '#00C1FF'],
                    type: "horizontal",
                    opacityFrom: 0.7,
                    opacityTo: 0.7,
                    stops: [0, 100],
                    colorStops: []
                }
            }
          }
</script>

<template>
  <div class="health-status mx-5 z-10 mt-6">
        <div class="bg-white w-full px-3 pt-2 pb-6 rounded-lg">
            <div class="flex flex-col">
                <div class="w-full flex">
                    <div class="w-2/6 flex justify-center items-center">
                        <VueApexCharts type="radialBar" class="" height="140" :options="chartOptions" :series="[series]"></VueApexCharts>
                    </div>
                    <div class="w-2/6 flex justify-center items-center">
                        <div class="flex flex-col justify-center items-center">
                            <div class="blood flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Blood Preasure</h4>
                                <p class="text-primary-color font-poppins font-medium text-base">124/86 mhg</p>
                            </div>
                        </div>
                    </div>


                    <div class="w-2/6 flex justify-center items-center">
                        <div class="flex flex-col justify-center items-center bgred">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">SpO2</h4>
                                <p class="text-primary-color font-poppins font-medium text-base">98%</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="w-full flex">
                    <div class="w-2/6">
                            <div class="flex flex-col justify-center items-center">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Heart Rate</h4>
                                <p class="text-primary-color font-poppins font-medium text-base">86 bpm</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/6">
                            <div class="flex flex-col justify-center items-center">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Temparature</h4>
                                <p class="text-primary-color font-poppins font-medium text-base">35.6 C</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/6">
                            <div class="flex flex-col justify-center items-center">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Respiration</h4>
                                <p class="text-primary-color font-poppins font-medium text-base">98%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>