<template>
  <div id="app">
    <date-range-picker
      ref="picker"
      v-model="dateRange"
      :opens="opens"
      :locale-data="{
        direction: 'ltr',
        format: 'mm-dd-yyyy',
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        weekLabel: 'W',
        customRangeLabel: 'Custom Range',
        daysOfWeek: ['月', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthNames: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        firstDay: 0,
      }"
      @update="updateValues"
      @select="updateValues"
    >
      <template #input="picker">
        <div style="min-width: 350px">
          {{ picker.startDate | date }} - {{ picker.endDate | date }}
        </div>
      </template>
      <template #ranges="ranges">
        <div class="ranges">
          <ul>
            <li
              v-for="(range, name) in ranges.ranges"
              :key="name"
              @click="ranges.clickRange(range)"
            >
              <b>{{ name }}</b>
            </li>
          </ul>
        </div>
      </template>
      <!--    footer slot-->
      <div slot="footer" slot-scope="data" class="slot">
        <div>
          <b class="text-black">Calendar footer</b>
          <input
            id="startDate"
            v-model="dateRange.startDate"
            type="text"
            class="form-control"
          />
          <input
            id="endDate"
            v-model="dateRange.endDate"
            type="text"
            class="form-control"
          />
          <div></div>
        </div>
        <div style="margin-left: auto">
          <a
            v-if="!data.in_selection"
            class="btn btn-primary btn-sm"
            @click="data.clickApply"
            >Choose current</a
          >
        </div>
      </div>
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import dateUtil from '../../plugins/date_util/native'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: 'App',
  components: {
    DateRangePicker,
  },
  filters: {
    date(date) {
      return new Intl.DateTimeFormat('en-US').format(date)
    },
  },
  props: {
    opens: {
      type: String,
      default: 'left',
    },
  },
  data() {
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 6)

    return {
      dateRange: {
        startDate,
        endDate,
      },
      name: [1, 2, 3, 4, 5],
    }
  },
  mounted() {
    this.dateRange.startDate = dateUtil.format(this.startDate, 'yyyy/mm/dd')
    this.dateRange.endDate = dateUtil.format(this.endDate, 'yyyy/mm/dd')
  },
  methods: {
    updateValues(values) {
      this.dateRange.startDate = dateUtil.format(values.startDate, 'yyyy/mm/dd')
      this.dateRange.endDate = dateUtil.format(values.endDate, 'yyyy/mm/dd')
    },
  },
}
</script>
