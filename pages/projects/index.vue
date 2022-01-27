<template>
  <MoleculesLayoutMain>
    <div class="flex justify-between">
      <h1 class="text-4xl font-bold mb-3">プロジェクト一覧</h1>
      <MoleculesDatepicker></MoleculesDatepicker>
    </div>
    <AtomsBox class="min-h-[80vh]">
      <div class="flex justify-between mb-3">
        <AtomsButtonPrimaryAnchor to="/projects/register"
          ><template #icon>
            <font-awesome-icon icon="fa-solid fa-circle-plus" /></template
          >プロジェクトの新規追加</AtomsButtonPrimaryAnchor
        >
        <form class="flex" @submit.prevent="parentEvent">
          <input
            v-model="searchData.name"
            class="shadow appearance-none border rounded py-1 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="プロジェクト名で検索"
            @blur="parentEvent"
          />
          <button
            type="submit"
            class="py-1 px-4 bg-colorMain400 font-bold rounded-r text-white hover:bg-colorMain300"
          >
            検索
          </button>
        </form>
      </div>
      <MoleculesTableProjectList
        ref="projectList"
        :search-data="searchData"
      ></MoleculesTableProjectList>
    </AtomsBox>
  </MoleculesLayoutMain>
</template>

<script>
export default {
  data() {
    return {
      searchData: {
        name: '',
      },
    }
  },
  methods: {
    parentEvent() {
      this.$refs.projectList.searchProject()
    },
  },
}
</script>
