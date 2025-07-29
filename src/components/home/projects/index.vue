<template>
	<Section
		id="projects"
		title="Projects"
		description="These are some of the personal projects I have worked on over the years."
	>
		<ul class="grid gap-4 grid-cols-1 sm:grid-cols-2">
			<li
				v-for="project in projects"
				:key="project.name"
				class="border border-border rounded-md flex flex-col overflow-hidden"
			>
				<!-- preview image -->
				<figure
					aria-hidden
					class="w-full overflow-hidden bg-primary h-96 bg-center bg-no-repeat bg-cover flex-shrink-0"
					:style="{
						backgroundImage: `url(/projects/${project.previewImage}.png)`,
					}"
				/>

				<!-- card body -->
				<div class="mt-4 px-4 h-full flex flex-col">
					<h3 class="capitalize mb-0">{{ project.previewImage }}</h3>
					<p
						v-for="par in project.paragraphs"
						:key="par"
						class="text-muted-foreground mb-1"
					>
						{{ par }}
					</p>

					<!-- tech chips -->
					<ul class="flex items-center justify-start flex-wrap mt-2 mb-4">
						<Tech v-for="tec in project.tech" :key="tec" :name="tec" />
					</ul>

					<!-- actions with bottom spacing -->
					<div class="mt-auto mb-4">
						<!-- Live -->
						<a
							:href="project.live"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center text-sm text-white hover:text-primary hover:underline"
						>
							Live
							<MoveUpRight class="w-3 h-3 ml-1" />
						</a>

						<!-- Source -->
						<a
							v-if="project.source"
							:href="project.source"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center text-sm text-white hover:text-primary hover:underline ml-4"
						>
							Source
						</a>
					</div>
				</div>
			</li>
		</ul>
	</Section>
</template>

<script setup lang="ts">
import Section from '@/components/home/section.vue';
import Tech from '@/components/home/tech.vue';
import { projects } from './data';
</script>

<style scoped>
/* optional local styles */
</style>
