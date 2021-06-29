<template>
  <HomeSection class="py-20 light:bg-gray-50 dark:bg-secondary-darkest">
    <template #section-content>
      <SectionContent class="col-span-12 items-center">
        <div class="mb-2">
          <span class="text-tertiary font-bold text-lg">KLKLESKLSKL2S2LK</span>
        </div>

        <template #title>
          <SectionTitle class="text-center">
            <span class="text-primary italic">Easy </span>to learn. <span class="text-primary italic">Easy</span> to master
          </SectionTitle>
        </template>

        <template #paragraph>
          <p class="text-center font-normal text-body-base md:text-body-lg 2xl:text-body-xl">
            <Markdown use="description" unwrap="p" />
          </p>
        </template>

        <template #content>
          <CodeBlockAnimation class="w-full text-gray-50" />
        </template>

        <template #button>
          <div class="w-full self-start">
            <SectionButton
              to="/docs/get-started/installation"
              aria-label="Learn everything"
              size="md"
              class="bg-primary text-gray-800 font-semibold hover:bg-green-300 focus:bg-green-300"
            >
              Learn everything
            </SectionButton>
          </div>
        </template>
      </SectionContent>
    </template>
  </HomeSection>
</template>
