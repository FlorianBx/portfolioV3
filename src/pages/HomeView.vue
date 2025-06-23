<script setup lang="ts">
import Contributions from "@/components/Contributions.vue"
</script>

<template>
  <section class="flex gap-32">
    <h1 class="text-8xl font-bold text-white">D<br />E<br />V</h1>
    <div class="max-w-4xl mt-12">
      <div class="grid grid-cols-2 gap-8">
        <div class="text-white font-sans text-lg leading-relaxed max-w-xl">
          <p>
            Hi I'm <span class="text-xl font-bold">Florian</span> <br /><br />
            I'm a specialized
            <strong class="font-semibold text-white text-xl">Frontend Developer</strong>
            working mostly with
            <span class="text-emerald-400 font-semibold text-4xl">VUE.JS</span
            >.<br /><br />
            I spend my time exploring
            <span class="text-sky-400 text-xl font-bold">OPEN SOURCE</span>
            🌱, building fun stuff, and always learning something new.<br /><br />
            I also like experimenting with ideas — building tools and libraries
            across different languages, just to see where they lead.
            <br /><br />
            If you want to chat, come say hi at a <br />
            <span class="text-white text-2xl font-bold">Vuejs Paris</span>
            meetup or
            <a
              href="https://cal.com/fbeaumont/30min"
              target="_blank"
              class="text-teal-100 text-xl font-medium underline underline-offset-8"
              >book a call</a
            >.
          </p>
        </div>
        <img
          class="transform rotate-6 grayscale scale-x-[-1] hover:rotate-0 duration-150 cursor-pointer rounded"
          src="/public/assets/images/1696890004250.avif"
          width="530"
          height="300"
          alt=""
        />
      </div>
    <Contributions class="mt-24" />
    </div>
  </section>
</template>
