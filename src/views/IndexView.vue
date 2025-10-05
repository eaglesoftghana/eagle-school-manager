<script setup>
import { BadgeCentIcon, Briefcase, CalendarClockIcon, ClipboardCheckIcon, LayoutGridIcon, MessageSquareMoreIcon, NotepadTextIcon, UserPenIcon, UsersIcon } from 'lucide-vue-next';
import Header from '@/components/Header.vue';

import Cover from '@/css/cover-eagleschoolmanager.png'
import FeatureCard from '@/components/FeatureCard.vue';
import PricingCard from '@/components/PricingCard.vue';


const features = [
  {
    icon: UserPenIcon,
    heading: 'student management',
    text: "A centralized hub for every student's journey, managing comprehensive student data, including personal records, medical information, and academic history."
  },
  {
    icon: LayoutGridIcon,
    heading: 'classrooms management',
    text: "Organize your learning environment with precision. Efficiently create, allocate, and manage classrooms, assign subjects, and distribute teachers for smooth operations."
  },
  {
    icon: ClipboardCheckIcon,
    heading: 'attendance tracking',
    text: "Monitor student presence in real-time. Allows teachers to quickly and accurately record attendance, with automatic alerts sent to parents for unexplained absences."
  },
  {
    icon: NotepadTextIcon,
    heading: 'grading & report card generation',
    text: "Simplify assessment and reporting. Easily enter marks, calculate grades, and instantly generate professional, standardized report cards and academic transcripts."
  },
  {
    icon: CalendarClockIcon,
    heading: 'timetable management',
    text: "Build conflict-free schedules in minutes. Design and publish complex school, class, and teacher timetables, ensuring optimal resource and time allocation."
  },
  {
    icon: Briefcase,
    heading: 'staff management',
    text: "Streamline HR tasks for both teaching and non-teaching personnel. Manage staff profiles, qualifications, leave requests, and internal communication efficiently."
  },
  {
    icon: UsersIcon,
    heading: 'guardian/parent app',
    text: "Bridge the gap between school and home. Gives parents secure, real-time access to their child's attendance, progress, school calendar, and direct communication."
  },
  {
    icon: MessageSquareMoreIcon,
    heading: 'SMS & email broadcasting',
    text: "Ensure critical information reaches the right people instantly. Send bulk or personalized alerts, event reminders, and announcements via SMS and email."
  },
  {
    icon: BadgeCentIcon,
    heading: 'finance management',
    text: "Automate school fee collection. Generate invoices, track payment statuses, send automated reminders, and produce accurate financial reports."
  }
];

const pricingList = [
  {
    planName: 'basic plan',
    description: "Perfect for efficient management of core administrative tasks and student records on a budget.",
    price: 572,
    features: [{
      name: "up to 260 students",
      value: 260,
      addOn: false,
    },
    {
      name: "up to 25 staff members",
      value: 260,
      addOn: false,
    },
    {
      name: "custom SMS sender ID",
      value: true,
      addOn: false,
    },
    {
      name: "custom Email",
      value: true,
      addOn: false,
    },
    {
      name: "free 200 SMS credits",
      value: true,
      addOn: false,
    }],
    link: 'basic'
  },
  {
    planName: 'standard plan',
    description: "Complete System for growing mid-sized schools. Unlock the full power of all modules with increased data capacity and support.",
    price: 975,
    features: [{
      name: "up to 390 students",
      value: 390,
      addOn: false,
    },
    {
      name: "up to 35 staff members",
      value: true,
      addOn: true,
    },
    {
      name: "custom SMS sender ID",
      value: true,
      addOn: false,
    },
    {
      name: "custom Email",
      value: true,
      addOn: false,
    },
    {
      name: "free 350 SMS credits",
      value: true,
      addOn: false,
    }, {
      name: "Online support",
      value: true,
      addOn: true,
    }
    ],
    link: "standard"
  },
  {
    planName: 'professional plan',
    description: "Get the complete suite, built to handle a high volume of student and guardian activity with ease.",
    price: 1755,
    features: [{
      name: "upto 585 students",
      value: true,
      addOn: false,
    },
    {
      name: "up to 45 staff members",
      value: true,
      addOn: true,
    },
    {
      name: "custom SMS sender ID",
      value: true,
      addOn: false,
    },
    {
      name: "custom Email",
      value: true,
      addOn: false,
    },
    {
      name: "free 600 SMS credits",
      value: true,
      addOn: false,
    },
    {
      name: "Priority Online support",
      value: true,
      addOn: true,
    },
    ],
    link: "professional"
  },
  {
    planName: 'premium plan',
    description: "Maximum Capacity: Enjoy the full system with custom integrations and top-tier technical support.",
    price: 2625,
    features: [{
      name: "up to 750 students",
      value: true,
      addOn: true,
    },
    {
      name: "up to 60 Staff Members",
      value: true,
      addOn: true,
    },
    {
      name: "custom SMS sender ID",
      value: true,
      addOn: false,
    },
    {
      name: "custom Email",
      value: true,
      addOn: false,
    },
    {
      name: "free 1,000 SMS credits",
      value: true,
      addOn: false,
    },
    {
      name: "In-person support",
      value: true,
      addOn: true,
    },
    {
      name: "Students Limit Increment",
      value: false,
      addOn: true,
    },
    ],
    link: "premium"
  }
];
</script>

<template>

  <Header />

  <div class="flex justify-center items-center gap-y-4 mt-20 px-6 min-[768px]:px-3" id="home">
    <div
      class="py-2 px-4 rounded-3xl border-2 border-primary-light font-semibold capitalize text-primary-light bg-body">
      built for modern schools
    </div>
  </div>
  <div class="mt-8 px-6 min-[768px]:px-3">
    <h4 class="text-center capitalize font-black text-2xl min-[768px]:text-4xl pt-3">
      simplify school administration.
    </h4>
    <h4 class="text-center capitalize font-black text-2xl min-[768px]:text-4xl pt-3">
      amplify productivity.
    </h4>
    <div class="mt-12 max-w-[540px] mx-auto text-justify">
      Automate attendance, fees, and reports, Connect parents, teachers, and admin instantly via announcements,
      private messages, and notifications, Track fees, generate invoices, and reconcile payments effortlessly,
      including integrated Mobile Money, Access real-time insights on student performance, attendance trends, and
      financial health for informed decisions - All in one smart school management system.
    </div>
  </div>
  <div class="flex justify-center items-center gap-4 mt-8 px-6 min-[768px]:px-3">
    <a href="#pricing"
      class="capitalize text-white border-gray-600 dark:outline dark:outline-gray-500 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  bg-gradient-to-r from-primary-light to-gray-900 shadow-md">
      get started
    </a>
    <a href="#" class="capitalize outline bg-body shadow-md dark:outline-gray-400 px-4 py-2 rounded-md dark:text-white">
      watch demo
    </a>
  </div>
  <div class="flex items-center justify-center px-6 min-[768px]:px-3 mt-8">
    <img :src="Cover" alt="" @drag.prevent="return" @contextmenu.prevent="return" @dblclick.prevent="return" />
  </div>
  <div class="mt-25 px-6 min-[768px]:px-3" id="features">
    <h4 class="font-semibold text-center text-2xl capitalize">
      core features
    </h4>
    <h4 class="text-center font-black">
      All-in-One School Management System
    </h4>
    <div class="mt-10">
      <div class="grid grid-cols-1 gap-6 min-[768px]:gap-12 min-[768px]:grid-cols-3 min-[540px]:grid-cols-2">
        <FeatureCard v-for="feature in features" :heading="feature.heading" :icon="feature.icon" :text="feature.text" />
      </div>
    </div>
  </div>
  <div class="mt-25 px-6 min-[768px]:px-3" id="pricing">
    <h4 class="font-semibold text-center text-2xl capitalize">
      pricing
    </h4>
    <h4 class="text-center font-black">
      Affordable Pricing for Every Modern School
    </h4>
    <div class="mt-10">
      <div class="grid grid-cols-1 gap-6 min-[768px]:gap-12 min-[768px]:grid-cols- min-[540px]:grid-cols-2">
        <PricingCard v-for="list in pricingList" :plan-name="list.planName" :price="list.price"
          :features="list.features" :description="list.description" :link="list.link" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
