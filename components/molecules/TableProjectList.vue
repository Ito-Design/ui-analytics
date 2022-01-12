<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-colorBase300">
      <tr>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          :class="addClassSort('name')"
        >
          プロジェクト名<span
            class="inline-flex flex-col ml-2 cursor-pointer"
            @click="sortBy('name')"
          >
            <font-awesome-icon
              icon="fa-solid fa-caret-up"
              size="lg"
              :class="addClassAsc('name')"
            /><font-awesome-icon
              icon="fa-solid fa-caret-down"
              class="-mt-2"
              size="lg"
              :class="addClassDesc('name')"
            />
          </span>
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          :class="addClassSort('pv')"
        >
          PV<span
            class="inline-flex flex-col ml-2 cursor-pointer"
            @click="sortBy('pv')"
          >
            <font-awesome-icon
              icon="fa-solid fa-caret-up"
              size="lg"
              :class="addClassAsc('pv')"
            /><font-awesome-icon
              icon="fa-solid fa-caret-down"
              class="-mt-2"
              size="lg"
              :class="addClassDesc('pv')"
            />
          </span>
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          :class="addClassSort('visit')"
        >
          訪問数<span
            class="inline-flex flex-col ml-2 cursor-pointer"
            @click="sortBy('visit')"
          >
            <font-awesome-icon
              icon="fa-solid fa-caret-up"
              size="lg"
              :class="addClassAsc('visit')"
            /><font-awesome-icon
              icon="fa-solid fa-caret-down"
              class="-mt-2"
              size="lg"
              :class="addClassDesc('visit')"
            />
          </span>
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          :class="addClassSort('tracking')"
        >
          トラッキング情報<span
            class="inline-flex flex-col ml-2 cursor-pointer"
            @click="sortBy('tracking')"
          >
            <font-awesome-icon
              icon="fa-solid fa-caret-up"
              size="lg"
              :class="addClassAsc('tracking')"
            /><font-awesome-icon
              icon="fa-solid fa-caret-down"
              class="-mt-2"
              size="lg"
              :class="addClassDesc('tracking')"
            />
          </span>
        </th>
        <th scope="col" class="relative px-6 py-3">
          <span class="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr
        v-for="item in sort_items"
        :key="item.index"
        class="even:bg-colorBase200 hover:bg-colorMain100"
      >
        <td class="px-6 py-4 whitespace-nowrap" :class="addClassSort('name')">
          <div class="flex items-center">
            <div class="text-sm font-medium">
              <AtomsAnchor :to="'/projects/' + item.id + '/dashboard'">{{
                item.name
              }}</AtomsAnchor>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap" :class="addClassSort('pv')">
          <div class="text-sm">{{ item.pv }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap" :class="addClassSort('visit')">
          <div class="text-sm">{{ item.visit }}</div>
        </td>
        <td
          class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
          :class="addClassSort('tracking')"
        >
          <span v-if="item.tracking === 1"
            ><font-awesome-icon
              icon="fa-solid fa-circle-check"
              class="mr-1 text-colorMain300"
            />正常にトラッキング中</span
          >
          <span v-else
            ><font-awesome-icon
              icon="fa-solid fa-circle-minus"
              class="mr-1 text-colorBase400"
            />トラッキング：オフ</span
          >
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#"
            ><font-awesome-icon
              icon="fa-solid fa-code"
              class="text-colorMain400 mr-3"
              size="lg"
          /></a>
          <nuxt-link :to="`/projects/${item.id}/setting`"
            ><font-awesome-icon
              icon="fa-solid fa-gear"
              class="text-colorMain400"
              size="lg"
          /></nuxt-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      sort_key: '',
      sort_asc: true,
    }
  },
  computed: {
    sort_items() {
      const sortItems = this.items
      if (this.sort_key !== '') {
        let set = 1
        this.sort_asc ? (set = 1) : (set = -1)
        sortItems.sort((a, b) => {
          if (a[this.sort_key] < b[this.sort_key]) return -1 * set
          if (a[this.sort_key] > b[this.sort_key]) return 1 * set
          return 0
        })
        return sortItems
      } else {
        return sortItems
      }
    },
  },
  mounted() {
    this.$axios
      .$get('/api/project/')
      .then((response) => (this.items = response.data))
      .catch((error) => console.log(error))
  },
  methods: {
    sortBy(key) {
      this.sort_key === key
        ? (this.sort_asc = !this.sort_asc)
        : (this.sort_asc = true)
      this.sort_key = key
    },
    addClassDesc(key) {
      return {
        'text-colorMain300': this.sort_key === key && this.sort_asc,
      }
    },
    addClassAsc(key) {
      return {
        'text-colorMain300': this.sort_key === key && !this.sort_asc,
      }
    },
    addClassSort(key) {
      return {
        'bg-colorMain100': this.sort_key === key,
      }
    },
  },
}
</script>
