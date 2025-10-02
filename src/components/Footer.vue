<script setup>
import { MailIcon, PhoneCallIcon } from 'lucide-vue-next';

</script>

<template>
  <footer class="bg-body pt-16 pb-8 mt-20 border-t border-gray-300 dark:border-gray-800 sticky top-full mx-auto">
    <div class="max-w-[992px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">

        <div class="col-span-2 md:col-span-1">
          <h4 class="text-lg capitalize font-bold text-primary mb-4">
            eagle school manager
          </h4>
          <p class="text-sm">
            The all-in-one enhanced school management system designed for modern schools, simplifying administration
            and enhancing communication.
          </p>
        </div>

        <div class="col-span-2 min-[548px]:col-span-1">
          <h5 class="text-sm font-semibold tracking-wider uppercase mb-4">
            Company
          </h5>
          <ul class="space-y-1">
            <li><a href="//eaglesoftghana.com/about"
                class="text-base  hover:text-indigo-600 transition duration-150">About
                Eaglesoft Ghana</a></li>
            <li>
              <a href="#" class="text-base  hover:text-indigo-600 transition duration-150">Our Other
                Projects</a>
            </li>
            <li>
              <router-link :to="{ name: 'privacy-policy' }" active-class="text-indigo-600"
                class="text-base  hover:text-indigo-600 transition duration-150">Privacy
                Policy</router-link>
            </li>
            <li>
              <router-link active-class="text-indigo-600" :to="{ name: 'terms-of-service' }"
                class="text-base  hover:text-indigo-600 transition duration-150">
                Terms of
                Service
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col-span-2 min-[548px]:col-span-1">
          <h5 class="text-sm font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </h5>
          <div class="flex items-center gap-2 mb-4">
            <div class="">
              <MailIcon class="text-base" :size="20" />
            </div>
            <a href="mailto:info@eagleschoolmanager.com" class="hover:text-indigo-600 wrap-anywhere"
              style="line-height: 1;">info@eagleschoolmanager.com</a>
          </div>

          <div class="text-sm flex items-center gap-2 mb-4">
            <div class="">
              <PhoneCallIcon class="text-base" :size="20" />
            </div>
            <div class="flex flex-col gap-2">
              <a href="tel:+233549289243" class="hover:text-indigo-600">+233 549289243</a>
              <a href="tel:+233504411952" class="hover:text-indigo-600">+233 504411952</a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8">
        <p class="text-base text-primary dark:text-gray-400 text-center">
          &copy; 2025 - {{ new Date().getFullYear() }} EAGLE SCHOOL MANAGER.
          All rights reserved.
          By <em>Eaglesoft Ghana.</em>
        </p>
      </div>

    </div>
  </footer>
</template>

<style scoped></style>