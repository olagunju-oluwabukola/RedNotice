
      
      <template>
        <div class=" md:block bg-gradient-to-r from-[#160101] to-[#151212] text-white  w-full p-4">
         
          <div class="flex items-center justify-between header md:py-4 rounded px-4 md:px-10">
         
            <button class="relative">
              <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-red"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 7.165 8 8.984 8 11v3.159c0 .538-.214 1.055-.595 1.436L6 17h5m4 0a3 3 0 01-6 0m6 0H9"
                />
              </svg>
            </button>
          </div>
      
          
          <div class="grid grid-cols-1 md:grid-cols-4 md:gap-4 my-4 md:my-9 rounded header">

            <div class="p-4  rounded">
              
              <div class="bg-white rounded h-5 mb-2">
                <div
                  class="bg-red h-5"
                  :style="{ width: '72%' }"
                ></div>
              </div>
              <h2 class="text-[10px] md:text-[12px] font-semibold md:mt-10 text-gray-300">TOTAL THREAT</h2>
              <p class="md:text-xl font-bold text-red">72,540</p>
            </div>
      
        
            <div class="p-4 border border-gray-600 rounded">
              
              <div class="bg-white rounded h-5 mb-2">
                <div
                  class="bg-blue-500 h-5"
                  :style="{ width: '99%' }"
                ></div>
              </div>
              <h2 class="text-[12px] text-gray-300 font-semibold md:mt-10">SUCCESS RATE</h2>
              <p class="md:text-xl font-bold text-blue-500">99%</p>
            </div>
      
            
            <div class="p-4 border border-gray-600 rounded">
             
              <div class="bg-white rounded h-5 mb-2">
                <div
                  class="bg-orange-500 h-5"
                  :style="{ width: '75%' }"
                ></div>
              </div>
              <h2 class="text-[12px] text-gray-300  font-semibold md:mt-10">DATA PROTECTED</h2>
              <p class="md:text-xl font-bold text-orange-500">51,126</p>
            </div>
      
            <!-- Failed Protection -->
            <div class="p-4 border border-gray-600 rounded">
              
              <div class="bg-white rounded h-5 mb-2">
                <div
                  class="bg-green-500 h-5"
                  :style="{ width: '1%' }"
                ></div>
              </div>
              <h2 class="text-[12px] text-gray-300 font-semibold md:mt-10">FAILED PROTECTION</h2>
              <p class="md:text-xl font-bold text-green-500">2</p>
            </div>
          </div>
          <div>
            <ApiCards />
            
          </div>
       
        </div>
       
      </template>
      
      <script>
      import ApiCards from "../components/ApiCards.vue";
      export default {
        components: {
    ApiCards,
  },
        setup() {
          return {};
        },
      };
      </script>
    
      
<style scoped>
.header{
    border: 1px rgb(61, 58, 58) solid;
}
</style>