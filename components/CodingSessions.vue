<template>
  <div class="container mx-auto p-6">
    <h1 class="header mb-8">Tutoring Notes</h1>

    <div class="flex justify-between items-center mb-6">
      <input v-model="searchQuery" @input="search" type="text" placeholder="Search students..." class="search-input" />
      <select v-model="selectedWeek" @change="filterWeek" class="week-select">
        <option value="">All Weeks</option>
        <option v-for="week in weeks" :key="week" :value="week">Week {{ week }}</option>
      </select>
    </div>

    <div class="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <table class="mytable">
        <thead class="thead">
          <tr>
            <th class="tcell w-12 py-3 px-4">
              <input type="checkbox" @click="selectAll" class="checkbox" />
            </th>
            <th class="tcell py-3 px-4 cursor-pointer" @click="sort('name')">Student Name</th>
            <th class="tcell py-3 px-4 cursor-pointer" @click="sort('language')">Language Learning</th>
            <th class="tcell py-3 px-4 cursor-pointer" @click="sort('experience')">Experience (weeks)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.id" @click="selectStudent(student.id)" class="table-row">
            <td class="tcell py-3 px-4">
              <input type="checkbox" v-model="selectedIds" :value="student.id" class="checkbox" />
            </td>
            <td class="tcell py-3 px-4 text-gray-900 dark:text-gray-200">{{ student.name }}</td>
            <td class="tcell py-3 px-4 text-gray-900 dark:text-gray-200">{{ student.language }}</td>
            <td class="tcell py-3 px-4 text-gray-900 dark:text-gray-200">{{ student.experience }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <transition name="fade">
      <div v-if="selectedStudent" class="progress-notes mt-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Student Progress Notes</h2>
        <p class="text-gray-700 dark:text-gray-300"><strong>Name:</strong> {{ selectedStudent.name }}</p>
        <p class="text-gray-700 dark:text-gray-300"><strong>Language Learning:</strong> {{ selectedStudent.language }}</p>
        <p class="text-gray-700 dark:text-gray-300"><strong>Experience:</strong> {{ selectedStudent.experience }} weeks</p>
        <div class="mt-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">General Notes</h3>
          <p class="text-gray-700 dark:text-gray-300">{{ selectedStudent.notes }}</p>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Per Session Notes</h3>
          <ul>
            <li v-for="note in selectedStudent.sessionNotes" :key="note.week" class="mb-2">
              <strong>Week {{ note.week }}:</strong> {{ note.notes }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const students = ref([
  {
    id: 1,
    name: 'August White',
    language: 'JavaScript (Web Dev)',
    experience: 100,
    notes: `August has a strong foundation in python and is learning JavaScript for web development.
    he is a quick learner and has a good understanding of the basics of JavaScript.`,
    sessionNotes: [
      { week: 1, notes: 'Mastered Intermediate Python' },
      { week: 2, notes: 'Strong foundation in developing games in PyGame' },
      { week: 3, notes: 'Proficient in basic JavaScript syntax' }    
    ]
  },
  {
    id: 2,
    name: 'Ryan Duffy',
    language: 'JavaScript (Web Dev)',
    experience: 100,
    notes: 'Jane is excelling in data structures and algorithms.',
    sessionNotes: [
      { week: 1, notes: 'Covered lists and dictionaries.' },
      { week: 2, notes: 'Started on algorithms with sorting and searching.' }
    ]
  },
  {
    id: 3,
    name: 'Kane Fernandez',
    language: 'JavaScript (Web Dev)',
    experience: 12,
    notes: 'Michael is proficient in OOP concepts and multithreading.',
    sessionNotes: [
      { week: 1, notes: 'Reviewed OOP principles.' },
      { week: 2, notes: 'Implemented multithreading examples.' }
    ]
  },
  
]);

const searchQuery = ref('');
const selectedWeek = ref('');
const selectedIds = ref([]);
const sortKey = ref('');
const sortAsc = ref(true);

const weeks = computed(() => [...new Set(students.value.flatMap(student => student.sessionNotes.map(note => note.week)))]);

const filteredStudents = computed(() => {
  let filtered = students.value;
  if (searchQuery.value) {
    filtered = filtered.filter(student =>
      student.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  if (selectedWeek.value) {
    filtered = filtered.filter(student =>
      student.sessionNotes.some(note => note.week == selectedWeek.value)
    );
  }
  if (sortKey.value) {
    filtered = filtered.sort((a, b) => {
      if (sortAsc.value) {
        return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
      } else {
        return a[sortKey.value] < b[sortKey.value] ? 1 : -1;
      }
    });
  }
  return filtered;
});

const selectedStudent = computed(() => students.value.find(student => selectedIds.value.includes(student.id)));

const selectStudent = (id) => {
  if (selectedIds.value.includes(id)) {
    selectedIds.value = selectedIds.value.filter(selectedId => selectedId !== id);
  } else {
    selectedIds.value.push(id);
  }
};

const search = () => {
  filteredStudents.value = students.value.filter(student =>
    student.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

const filterWeek = () => {
  filteredStudents.value = students.value.filter(student =>
    student.sessionNotes.some(note => note.week == selectedWeek.value)
  );
};

const sort = (key) => {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortKey.value = key;
    sortAsc.value = true;
  }
};

const selectAll = () => {
  if (selectedIds.value.length === students.value.length) {
    selectedIds.value = [];
  } else {
    selectedIds.value = students.value.map(student => student.id);
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.header {
  @apply text-4xl font-bold text-gray-900 dark:text-gray-100;
}

.search-input {
  @apply p-3 border rounded-lg shadow-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300;
}

.week-select {
  @apply p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300;
}

.mytable {
  @apply bg-white dark:bg-gray-800 rounded-lg w-full;
}

.thead {
  @apply bg-gray-50 dark:bg-gray-700 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider;
}

.tcell {
  @apply py-3 px-4 text-left text-sm font-medium text-gray-800 dark:text-gray-300;
}

.table-row {
  @apply bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer;
}

.checkbox {
  @apply h-4 w-4 text-blue-600 transition duration-150 ease-in-out;
}

.progress-notes {
  @apply mt-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
