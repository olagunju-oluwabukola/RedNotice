<template>
  <div class="min-h-screen  text-white py-10 px-6">
  
    <div class="flex items-center justify-between card py-4 rounded mb-10 px-10">
            <h1 class="text-xl md:text-2xl font-bold text-red">Help</h1>
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

    <div class="max-w-4xl mx-auto space-y-10 cards p-8">
      
      <section>
        
        <div class="space-y-4">
          
          <div>
            
            <p class="white">
              Reach out to our support team through the contact form or email us at
              <a href="mailto:support@website.com" class="text-red-500 hover:underline">support@website.com</a>.
            </p>
          </div>
          <div>
            
          </div>
        </div>
      </section>

      
      <section class="text-center">
        <p class="text-2xl font-semibold mb-6 text-red">OR</p>
       
        
          
          <div class="flex justify-center space-x-6">
          
          <!-- Facebook -->
          <a
            href="https://facebook.com"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center  bg-red rounded-full"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6 text-white"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.499v-9.294H9.747V11.01h3.076V8.42c0-3.046 1.835-4.709 4.588-4.709 1.329 0 2.706.236 2.706.236v2.978h-1.525c-1.505 0-1.972.934-1.972 1.89v2.195h3.338l-.533 3.695h-2.805V24h5.499c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z"
              />
            </svg>
          </a>

          <!-- Twitter -->
          <a
            href="https://twitter.com"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-red rounded-full"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6 text-white"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 4.557a9.827 9.827 0 01-2.828.775A4.916 4.916 0 0023.337 3.4a9.864 9.864 0 01-3.127 1.195A4.92 4.92 0 0016.616 3c-2.73 0-4.941 2.21-4.941 4.941 0 .387.043.763.127 1.125A13.975 13.975 0 011.675 3.15a4.908 4.908 0 00-.666 2.482c0 1.71.871 3.216 2.188 4.099A4.906 4.906 0 01.964 9.07v.06c0 2.386 1.694 4.377 3.946 4.831a4.935 4.935 0 01-2.224.084c.625 1.953 2.444 3.374 4.6 3.414A9.867 9.867 0 010 20.292a13.91 13.91 0 007.548 2.212c9.057 0 14.009-7.504 14.009-14.009 0-.213-.005-.426-.014-.637A10.005 10.005 0 0024 4.557z"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-red  rounded-full"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6 text-white"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.3.975.975 1.238 2.242 1.3 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.3 3.608-.975.975-2.242 1.238-3.608 1.3-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.3-.975-.975-1.238-2.242-1.3-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.3-3.608.975-.975 2.242-1.238 3.608-1.3 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.053.072 5.8.13 4.79.368 4.006 1.152c-.784.784-1.022 1.794-1.08 3.047-.059 1.279-.072 1.703-.072 4.027s.013 2.748.072 4.027c.058 1.253.296 2.263 1.08 3.047.784.784 1.794 1.022 3.047 1.08 1.279.059 1.703.072 4.027.072s2.748-.013 4.027-.072c1.253-.058 2.263-.296 3.047-1.08.784-.784 1.022-1.794 1.08-3.047.059-1.279.072-1.703.072-4.027s-.013-2.748-.072-4.027c-.058-1.253-.296-2.263-1.08-3.047-.784-.784-1.794-1.022-3.047-1.08C15.252.013 14.828 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z"
              />
            </svg>
          </a>
        
        </div>
       
      </section>
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

<style>
/* Optional: Add custom styles */
</style>
