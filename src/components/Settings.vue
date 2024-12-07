<template>
  <div class=" text-white py-10 px-6">
    <!-- Settings Header -->
    <div class="flex items-center justify-between cards py-4 rounded px-10 ">
            <h1 class="text-xl md:text-2xl font-bold text-red">Settings</h1>
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
      

  
    <div class="space-y-6 mt-10 cards p-10 text-[10px] md:text-[12px]">
      
      <h2 class="text-lg font-semibold">General</h2>

      
      <div class="grid grid-cols-2 gap-4 text-[10px] md:text-[12px]">
        <p>Account</p>
        <a href="#" class="text-red hover:underline">Edit data</a>

        <p>Billing</p>
        <div class="text-[8px] md:text-[12px]">
          <p>Pro Membership <span class=" text-blue-900">(active until Aug 2024)</span>
            <a href="#" class="text-red ml-2 hover:underline">Upgrade</a>
          </p>
          
          
        </div>

     

        <p>Notifications</p>
        
        <a href="#" class="text-red hover:underline">Update notification settings</a>
      </div>

      <div class="space-y-2">
        <a href="#" class="text-red-500 hover:underline">Privacy Policy</a> <br>
        <a href="#" class="text-red-500 hover:underline">Terms of Service</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>


