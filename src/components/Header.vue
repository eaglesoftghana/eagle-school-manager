<script setup>
import { AlignRightIcon } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

const links = ref(['features', 'pricing', 'request-a-demo']);

const activeSection = ref(null);


const handleScroll = () => {
  // Define an offset for when a section is considered "active"
  const offset = 120;

  // Find the currently visible section
  const visibleSection = links.value.find(link => {
    const element = document.getElementById(link);
    if (!element) return false;

    // Get the element's position relative to the viewport
    const rect = element.getBoundingClientRect();

    // Check if the top of the element is within the active zone
    // The active zone is from 0 to 'offset' pixels from the top of the viewport
    return rect.top <= offset && rect.bottom > offset;
  });

  // If a section is found, update the activeSection ref and the URL hash
  if (visibleSection) {
    activeSection.value = visibleSection;

    // Use history.replaceState to update the URL without adding a new history entry
    // This is important to avoid cluttering the browser's back/forward history
    if (window.location.hash !== `#${visibleSection}`) {
      history.replaceState(null, '', `#${visibleSection}`);
    }
  }
};


/**
 * 
 * @param {string} id the id of the target section/elememt
 */
const scrollToSection = (id) => {

  const element = document.getElementById(id);

  // console.log(id, element);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 120, // Subtracting header height
      behavior: 'smooth'
    });
    // Update URL hash without causing a jump
    history.pushState(null, '', `#${id}`);
  }
  // else {
  //   window.scrollTo({
  //     top: 0, // Subtracting header height
  //     behavior: 'smooth'
  //   });
  // }
  // else if (href) {
  //   window.open(href, '_blank')
  // }
  // toggleMenu();
};

onMounted(() => {
  // Use a template ref for the header element
  // activeSection.value = 'home'
  document.addEventListener('scroll', handleScroll);
  document.addEventListener('click', hideMenu);

  return () => {
    document.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', hideMenu);
  }
});


const isMenuShown = ref(false);

const toggleMenu = () => {
  isMenuShown.value = !isMenuShown.value;
}

/**
 * 
 * @param {TouchEvent | MouseEvent | PointerEvent} event 
 */
function hideMenu(event) {

  if (!event.target?.classList.contains('nav-toggler')) {
    isMenuShown.value = false;
  }
}

</script>

<template>
  <header
    class="min-h-[50px] flex items-center justify-between w-full p-2 bg-primary text-white rounded-md my-4 sticky top-0 max-[992px]:my-0 max-[992px]:rounded-none! mx-auto z-40">
    <div class="brand">
      <a to="/" class="uppercase font-semibold" @click.prevent="scrollToSection('home')">
        eagle school manager
      </a>
    </div>
    <div class="max-[768px]:hidden">
      <ul class="flex gap-3 items-center capitalize">
        <li v-for="link in links">
          <a @click.prevent="scrollToSection(link)" :href="`#${link}`">
            {{ link.replace(/-/g, ' ') }}
          </a>
        </li>
        <li>
          <div class="flex items-center gap-3">
            <a href="//app.eagleschoolmanager.com/login" title="Login to eagle school manager"
              class="outline outline-white p-2 rounded-md">
              log in
            </a>
            <a href="#pricing" class="bg-white p-2 rounded-md text-primary">
              get started
            </a>
          </div>
        </li>
      </ul>
    </div>

    <Transition name="menu" mode="out-in">
      <div v-if="isMenuShown" class="menu-layer fixed top-[54px] right-0 z-50">
        <ul class="menu flex flex-col gap-3 items-start capitalize p-4 mx-2 bg-primary rounded-md shadow-2xl z-50">
          <li v-for="link in links">
            <a @click.prevent="scrollToSection(link)" :href="`#${link}`">
              {{ link.replace(/-/g, ' ') }}
            </a>
          </li>
          <li>
            <div class="flex flex-col items-start gap-3 w-full">
              <a href="//app.eagleschoolmanager.com/login" title="Login to eagle school manager"
                class="outline outline-white py-2 px-8.5 rounded-md">
                log in
              </a>
              <a href="#pricing" class="bg-white py-2 px-4 w-full rounded-md text-primary">
                get started
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Transition>
    <div class="min-[768px]:hidden">
      <button @click="toggleMenu" class="nav-toggler">
        <AlignRightIcon class="pointer-events-none" />
      </button>
    </div>
  </header>

</template>

<style>
.menu-layer {
  transition: opacity 0.3s ease;
}

.menu {
  transition: all 0.3s ease;
}

.menu-enter-from {
  opacity: 0;
}

.menu-leave-to {
  opacity: 0;
}

.menu-enter-from .menu,
.menu-leave-to .menu {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>