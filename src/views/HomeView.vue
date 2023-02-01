<template>
  <div>
    <NavBar/>
    <!-- body -->
     <div class=" px-6 md:px-28">
      <div>
        <div class="flex items-center">
          <img src="@/assets/arrow.svg" alt="" />
          <p class="text-dark font-bold pl-3 text-base">Geri</p>
        </div>
        <p class="text-dark font-bold text-sm mt-7">Bölmə 1: Giriş</p>
        <p class="text-dark font-bold text-xl mt-2">1. Kursla tanışlıq</p>
      </div>
      <div class="flex mt-4 lg:mt-0 justify-end">
        <button
          class="bg-transparent text-grey font-semibold py-2 px-4 border border-lightgrey rounded flex items-center"
        > <img src="@/assets/graph.svg" alt="">
          <p class="ml-2 text-xs lg:text-base">{{hideOption ? '**************' : 'Dərs cədvəli və nəticələriniz'}}</p>
        </button>
        <button
          class="bg-transparent py-2 px-4 ml-3 border border-grey-100 bg-zinc-100 rounded"
          @click="hideOption = !hideOption"
        >
          <img src="@/assets/eye.svg" alt="" />
        </button>
      </div>
       <div class="grid grid-cols-2 mt-2 lg:mt-0">
        <div class="col-span-2 lg:col-span-1 w-full lg:w-11/12">
          <button
            class="text-xs lg:text-base bg-transparent w-full h-12 lg:h-16 rounded-md text-secondary font-bold py-3 lg:py-5 px-4 border border-accentgrey"
          >
            Dərsi bitirməyiniz üçün son tarix 12 aprel, 18:00
          </button>
          <div class="mt-5 w-full">
            <img src="@/assets/video.svg" alt="" />
          </div>
          <p class="text-dark font-medium text-base mt-8">
            Salam, hörmətli təlim iştirakçısı. Kursa tanışlıq videosuna
            baxmağınız xahiş olunur.
          </p>
          <div class="flex justify-start mt-10">
            <button
              class="bg-primary text-white font-bold py-2 px-8 rounded mr-3 flex items-center"
            >
            <img src="@/assets/bookmark.svg" alt="" class="mr-2">
              <span>Təlimə aid materiallar</span>
            </button>
            <button class="bg-dark text-white font-bold py-2 px-8 rounded  flex items-center">
              <img src="@/assets/check.svg" alt=""  class="mr-2">
              <span>Testlər</span>
            </button>
          </div>
          <p class="font-bold text-xl text-dark mt-8">
            Müştərini və layihəni başa düşmək üçün dizayner _______ mərhələsini
            başlamalıdır
          </p>
          <div class="mt-10">
            <option
              v-for="option in options"
              :key="option"
              class="mb-4 hover:cursor-pointer text-lg bg-transparent hover:bg-secondary w-full h-20 rounded-md text-dark hover:text-white font-normal flex items-center px-11 border border-accentgrey"
            >
              {{ option }}
            </option>
          </div>
          <div class="flex justify-between mt-10">
            <button
              class="bg-transparent text-grey font-semibold py-2 px-5 lg:px-8 border border-lightgrey rounded flex items-center"
            ><img src="@/assets/left.svg" alt="" class="mr-2">
              <span>
              Əvvəlki sual</span>
            </button>
            <button
              class="bg-primary text-white font-bold py-2 px-5 lg:px-8 rounded mr-3 flex items-center"
            ><span>
            Növbəti sual</span><img src="@/assets/right.svg" alt="" class="ml-2">
              
            </button>
          </div>
        </div>
        <div class="col-span-2 lg:col-span-1 flex justify-end mt-10 lg:mt-2">
<div class=" w-full lg:w-11/12 ">
          <div class="w-full mb-4" v-for=" (videoList, i ) in playList" :key="videoList">
            <div @click="openSelectedPanel(i)" :class="selectedPanel.includes( i) ? 'bg-secondary': 'bg-mediumgrey'" class=" w-full h-24  border px-3 flex justify-between items-center">
           <div class="flex font-bold items-center" style="font-size: 17px">
            <p :class="selectedPanel.includes( i) ? 'text-white': 'text-dark'" >
            Bölmə {{i + 1}}:&nbsp; </p> <p :class="selectedPanel.includes( i) ? 'text-white': 'text-secondary'">{{videoList.title}}</p>
           </div>
             
           <img :src="selectedPanel.includes( i) ? arrowUp : arrowDown" alt="">
          </div>
          <div class="w-full px-8 py-4 border hover:bg-mediumgrey hover:cursor-pointer" :class="selectedPanel.includes( i)   ? 'block' : 'hidden'"  v-for="video in videoList.videos" :key="video">
            <p class="font-bold text-base">{{video.name}}</p>
            <div class="flex items-center text-dark">
              <div class="w-28">
                <span class=" text-xs rounded-full  bg-pillgrey p-1">
                {{video.type}}
              </span>
              </div>
              
              <div class="flex items-center">
                <img src="@/assets/clock.svg" alt="" class="mr-2">
                <p class="text-base text-dark ">{{video.time}}</p>

              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-48"/>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'
export default defineComponent({
  components: {
    Footer,
    NavBar
  },
  setup() {
    const counter = ref(4);
    const options = ref([
      "a) Müəyyən etmə",
      "b) Dizayn vermə",
      "c) Dəyişmə",
      "d) Araşdırma",
    ]);
    const hideOption = ref(false)
    const openPanel = ref(false)
    const selectedPanel = ref([])
    const arrowDown = ref(require('@/assets/arrow-down.svg'))
    const arrowUp = ref(require('@/assets/arrow-up.svg'))
    const playList = ref([{
      title: ' Giriş',
      videos: [
      {name: '1. Kursla tanışlıq', type: 'Video dərs', time: '12 aprel, 18:00-dək'},
      {name: '2. Dizayn proqramları ilə tanışlıq', type: 'Canlı dərs', time: '12 aprel, 18:00-20:00'},
      {name: '3. Dizaynın əsasları üzrə aralıq imtahanı', type: 'Aralıq imtahan', time: '12 aprel, 20:00 - 13 aprel, 17:30'},
      {name: '4. Dizaynın əsasları üzrə oxu materialı', type: 'Oxu materialı', time: '13 aprel, 18:00-dək'},
      ]
    },
    {
      title: ' Dizaynın əsasları',
      videos: [
      {name: '1. Kursla tanışlıq', type: 'Video dərs', time: '12 aprel, 18:00-dək'},
      {name: '2. Dizayn proqramları ilə tanışlıq', type: 'Canlı dərs', time: '12 aprel, 18:00-20:00'},
      {name: '3. Dizaynın əsasları üzrə aralıq imtahanı', type: 'Aralıq imtahan', time: '12 aprel, 20:00 - 13 aprel, 17:30'},
      {name: '4. Dizaynın əsasları üzrə oxu materialı', type: 'Oxu materialı', time: '13 aprel, 18:00-dək'},
      ]
    },
    {
      title: ' Figmadan istifadə',
      videos: [
      {name: '1. Abobe Photoshop-da işləmə üzrə praktiki məşğələ', type: 'Video dərs', time: '12 aprel, 18:00-dək'},
      {name: '2. Abobe İllustrator-da işləmə üzrə praktiki məşğələ', type: 'Canlı dərs', time: '12 aprel, 18:00-20:00'},
      {name: '3. Figma-da səhifənin hazırlanması', type: 'Aralıq imtahan', time: '12 aprel, 20:00 - 13 aprel, 17:30'},
      {name: '4. Çapa materialların hazırlığı', type: 'Oxu materialı', time: '13 aprel, 18:00-dək'},
      ]
    },
    {
      title: ' Bravo marketdə 4 günlük təcrübə məşğələsi',
      videos: [
      {name: '1. Kursla tanışlıq', type: 'Video dərs', time: '12 aprel, 18:00-dək'},
      {name: '2. Dizayn proqramları ilə tanışlıq', type: 'Canlı dərs', time: '12 aprel, 18:00-20:00'},
      {name: '3. Dizaynın əsasları üzrə aralıq imtahanı', type: 'Aralıq imtahan', time: '12 aprel, 20:00 - 13 aprel, 17:30'},
      {name: '4. Dizaynın əsasları üzrə oxu materialı', type: 'Oxu materialı', time: '13 aprel, 18:00-dək'},
      ]
    },
    {
      title: ' İmtahan',
      videos: [
      {name: '1. Kursla tanışlıq', type: 'Video dərs', time: '12 aprel, 18:00-dək'},
      {name: '2. Dizayn proqramları ilə tanışlıq', type: 'Canlı dərs', time: '12 aprel, 18:00-20:00'},
      {name: '3. Dizaynın əsasları üzrə aralıq imtahanı', type: 'Aralıq imtahan', time: '12 aprel, 20:00 - 13 aprel, 17:30'},
      {name: '4. Dizaynın əsasları üzrə oxu materialı', type: 'Oxu materialı', time: '13 aprel, 18:00-dək'},
      ]
    }])
    const openSelectedPanel =  (index) => {
      // selectedPanel.value = index
      selectedPanel.value.push(index)
    }
    return {
      counter,
      options,
      openPanel,
      arrowUp,
      arrowDown,
      selectedPanel,
      openSelectedPanel,
      playList,
      hideOption
    };
  },
});
</script>

<style></style>
