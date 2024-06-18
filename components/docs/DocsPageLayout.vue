<script setup lang="ts">
const { page } = useContent()
const { config, tree } = useDocus()
const route = useRoute()

const fallbackValue = (value: string, fallback = true) => {
    if (typeof page.value?.[value] !== 'undefined') { return page.value[value] }
    return fallback
}

const hasBody = computed(() => !page.value || page.value?.body?.children?.length > 0)
const hasToc = computed(() => page.value?.toc !== false && page.value?.body?.toc?.links?.length >= 2)

const hasAside = computed(() => page.value?.aside !== false && (tree.value?.length > 1 || tree.value?.[0]?.children?.length))
const bottom = computed(() => fallbackValue('bottom', true))
const isOpen = ref(false)

/*
** This below is a workaround until Nuxt has a proper support for layouts and Suspense
*/
const asideNav = ref<any>(null)

const getParentPath = () => route.path.split('/').slice(0, 2).join('/')
const asideScroll = useState('asideScroll', () => {
    return {
        parentPath: getParentPath(),
        scrollTop: asideNav.value?.scrollTop || 0
    }
})

function watchScrollHeight() {
    if (!asideNav.value) { return }
    if (asideNav.value.scrollHeight === 0) {
        setTimeout(watchScrollHeight, 0)
    }
    asideNav.value.scrollTop = asideScroll.value.scrollTop
}

onMounted(() => {
    if (asideScroll.value.parentPath !== getParentPath()) {
        asideScroll.value.parentPath = getParentPath()
        asideScroll.value.scrollTop = 0
    } else {
        watchScrollHeight()
    }
})

onBeforeUnmount(() => {
    if (!asideNav.value) { return }
    asideScroll.value.scrollTop = asideNav.value.scrollTop
})

const testPage = ref({
    _dir: 'content',
    _file: 'example.md'
});

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <Container :fluid="config?.main?.fluid" :padded="config?.main?.padded" class="" :class="{
        'lg:grid lg:gap-8': config?.main?.fluid,
        'lg:grid-cols-[minmax(300px,300px)_minmax(320px,1fr)]': hasAside,
        'lg:grid-cols-[minmax(320px,1fr)_minmax(250px,250px)]': hasToc && !hasAside,
        'lg:grid-cols-[minmax(300px,300px)_minmax(320px,1fr)_minmax(270px,250px)]': hasAside && hasToc
    }">
        <!-- Sidebar -->
        <aside v-if="hasAside" ref="asideNav" class="hidden lg:block toc sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
            <DocsAside />
        </aside>

     
        <!-- Main Content Area -->
        <main class="flex-1 p-8">
            <article class="max-w-none mt-8">
                <slot v-if="hasBody" />
                <Alert v-else type="info" class="border-l-4 border-blue-500 bg-blue-50 dark:bg-[#1A202C] p-4 rounded-md shadow-lg">
                    <div class="flex items-start space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p class="font-semibold text-blue-700 dark:text-blue-300">Page Under Construction</p>
                            <p class="text-gray-700 dark:text-gray-300 mt-1">It looks like this page doesn't have any content yet. Start creating your content in <ProseCodeInline>content/{{ page._file }}</ProseCodeInline> to bring this page to life.</p>
                            <div class="mt-4">
                                <button class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline" @click="openModal">Learn How to Create Content</button>
                            </div>
                        </div>
                    </div>
                </Alert>
                <div v-if="hasBody && page && bottom" class="mt-8">
                    <DocsPageBottom />
                    <DocsPrevNext />
                </div>
            </article>

            <!-- Modal -->
            <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-[#1A202C] bg-opacity-60 backdrop-blur-sm z-50">
                <div class="bg-white dark:bg-[#2D3748] p-8 rounded-lg shadow-2xl max-w-lg mx-auto transform transition-all duration-300 ease-in-out scale-105">
                    <div class="flex justify-between items-center mb-4 border-b pb-2 border-gray-200 dark:border-gray-300">
                        <h2 class="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Create Content Guide</h2>
                        <button @click="closeModal" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">Follow these steps to create content for this page:</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Navigate to the <ProseCodeInline>/{{ testPage._dir }}</ProseCodeInline> and create a markdown file.</li>
                        <li>Start writing your markdown content.</li>
                        <li>Save the file and refresh the page to see your changes.</li>
                        <li>Your project structure should look like <ProseCodeInline>/{{ testPage._dir }}/{{ testPage._file }}</ProseCodeInline></li>
                    </ul>
                    <div class="mt-6 flex justify-end">
                        <button @click="closeModal" class="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105">Close</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- TOC -->
        <div v-if="hasToc" class="toc sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
                <div class="docs-toc-wrapper mt-4" :class="[isOpen && 'block']">
                    <DocsToc @move="isOpen = false" />
                </div>
        </div>
    </Container>
</template>