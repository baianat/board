<template lang="pug">
div
  h1 Vue Flatpickr
  p For docs visit #[a(href="https://github.com/ankurk91/vue-flatpickr-component" target="_blank") #[code Vue Flatpickr]]
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full

        div
          p Date
          FlatPicker(
                    id="date-input"
                    v-model="form.date"
                    class="input"
                    placeholder="Select date"
                  )
        div
          p Time
          FlatPicker(
                    id="time-input"
                    v-model="form.time"
                    :config="configs.timePicker"
                    class="input"
                    placeholder="Time"
                  )
        div
          p Date & Time
          FlatPicker(
                    id="datetime-input"
                    v-model="form.datetime"
                    :config="configs.dateTimePicker"
                    class="input"
                    placeholder="Time"
                  )
        div
          p Wrap
          FlatPicker(
                    id="wrap-input"
                    v-model="form.wrap"
                    :config="configs.wrap"
                    class="input"
                    placeholder="Select date"
                  )
        .grid.is-6
          .column
            p Start date
            FlatPicker(
                      id="start-input"
                      v-model="form.start"
                      :config="configs.start"
                      class="input"
                      placeholder="Select date"
                      @on-change="onStartChange"
                    )
          .column
            p End date
            FlatPicker(
                      id="end-input"
                      v-model="form.end"
                      :config="configs.end"
                      class="input"
                      placeholder="Select date"
                      @on-change="onEndChange"
                    )

    .column.is-desktop-6
      AppCard.is-full
        div
          p Inline
          FlatPicker(
                    id="inline-input"
                    v-model="form.inline"
                    :config="configs.inline"
                    class="input"
                    placeholder="Select date"
                  )

        div
          p Range date
          FlatPicker(
                    id="range-input"
                    v-model="form.range"
                    :config="configs.range"
                    class="input"
                    placeholder="Select date"

                  )


</template>


<script>
export default {
  head() {
    return {
      title: 'Vue Flatpickr'
    }
  },
  data: () => ({
    form: {
      date: null,
      time: null,
      datetime: null,
      wrap: null,
      inline: +new Date(),
      start: null,
      end: null,
      range: null
    },

    configs: {
      basic: {},
      wrap: {
        wrap: true,
        altFormat: 'M	j, Y',
        altInput: true,
        dateFormat: 'Y-m-d',
        minDate: new Date()
      },
      timePicker: {
        wrap: true,
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
      dateTimePicker: {
        enableTime: true,
        dateFormat: 'd-m-Y H:i'
      },

      inline: {
        inline: true
      },
      allowInput: {
        allowInput: true,
        dateFormat: 'Y-m-d'
      },
      start: {
        minDate: new Date(),
        maxDate: null
      },
      end: {
        minDate: null
      },
      range: {
        mode: 'range',
        dateFormat: 'Y-m-d',
        defaultDate: ['2016-10-10', '2016-10-20']
      }
    }
  }),
  methods: {
    onStartChange(selectedDates, dateStr, instance) {
      this.$set(this.configs.end, 'minDate', dateStr)
    },
    onEndChange(selectedDates, dateStr, instance) {
      this.$set(this.configs.start, 'maxDate', dateStr)
    },
    onChange(selectedDates, dateStr, instance) {
      console.log('Date change hook was called', dateStr)
    }
  }
}
</script>
