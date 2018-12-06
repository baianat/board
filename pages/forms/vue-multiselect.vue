<template lang="pug">
div
  h1 Vue-multiselect
  p For docs visit #[a(href="https://vue-multiselect.js.org/#" target="_blank") #[code Vue-multiselect]]
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Single
        form.form
          .field
            label.field-label Basic
            Multiselect(
              v-model="single",
              :options="options",
              placeholder="Pick a value"
            )
          .field
            label.field-label Search
            Multiselect(
              v-model="search",
              :options="options",
              placeholder="Pick a value"
            )
          .field
            label.field-label Search
            Multiselect(
              v-model="search",
              :options="options",
              placeholder="Pick a value"
            )
          .field
            label.field-label Object
            Multiselect(
              v-model="object",
              :options="object_options",
              track-by="name",
              label="name",
              placeholder="Select one",
              :allow-empty="false"
            )
          .field
            label.field-label Disabled
            Multiselect(
              v-model="disabled",
              :options="options",
              placeholder="Pick a value",
              disabled=true
            )
          .field
            label.field-label Custom option template
            Multiselect(
              v-model="custom",
              :options="options3",
              placeholder="Fav No Man’s Sky path",
              label="title",
              track-by="title",
              :option-height="104",
              :custom-label="customLabel",
              :show-labels="false",
            )
              template(slot="singleLabel", slot-scope="props")
                img.option__image(:src="props.option.img", alt="No Man’s Sky")
                span.option__desc
                  span.option__title {{ props.option.title }}
              template(slot="option", slot-scope="props")
                img.option__image(:src="props.option.img", alt="No Man’s Sky")
                .option__desc
                  h6.option__title {{ props.option.title }}
                  span.option__small {{ props.option.desc }}

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Multiple
        p Multiple
        Multiselect(
          v-model="multiple",
          :options="object_options",
          :multiple="true",
          :clear-on-select="false",
          :close-on-select="false",
          track-by="name",
          label="name",
          placeholder="Select one",
          :allow-empty="false",
        )
        p Limit
        Multiselect(
          v-model="limit",
          :options="object_options",
          :multiple="true",
          :max=2,
          :clear-on-select="false",
          :close-on-select="false",
          track-by="name",
          label="name",
          placeholder="Select one",
          :allow-empty="false",
        )
        p Tagging
        Multiselect(
          v-model="tag",
          :options="object_options",
          :multiple="true",
          :taggable="true",
          @tag="addTag",
          :clear-on-select="false",
          :close-on-select="false",
          track-by="name",
          label="name",
          placeholder="Type new tag",
        )

</template>


<script>
export default {
  head() {
    return {
      title: 'Vue-multiselect'
    }
  },
  data: () => ({
    single: '',
    disabled: '',
    search: '',
    object: null,
    multiple: null,
    limit: null,
    tag: [],
    custom: {
      title: 'Explorer',
      desc: 'Discovering new species!',
      img: 'https://picsum.photos/200/150/?image=4'
    },

    options: [
      'Select option',
      'options',
      'selected',
      'mulitple',
      'label',
      'searchable',
      'clearOnSelect',
      'hideSelected',
      'maxHeight',
      'allowEmpty',
      'showLabels',
      'onChange',
      'touched'
    ],
    object_options: [
      { name: 'Vue.js', language: 'JavaScript' },
      { name: 'Rails', language: 'Ruby' },
      { name: 'Sinatra', language: 'Ruby' },
      { name: 'Laravel', language: 'PHP', $isDisabled: true },
      { name: 'Phoenix', language: 'Elixir' }
    ],
    options3: [
      {
        title: 'Space Pirate',
        desc: 'More space battles!',
        img: 'https://picsum.photos/200/150/?image=1'
      },
      {
        title: 'Merchant',
        desc: 'PROFIT!',
        img: 'https://picsum.photos/200/150/?image=2'
      },
      {
        title: 'Explorer',
        desc: 'Discovering new species!',
        img: 'https://picsum.photos/200/150/?image=4'
      },
      {
        title: 'Miner',
        desc: 'We need to go deeper!',
        img: 'https://picsum.photos/200/150/?image=6'
      }
    ]
  }),
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        language: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.object_options.push(tag)
      this.tag.push(tag)
    },
    customLabel({ title, desc }) {
      return `${title} – ${desc}`
    }
  }
}
</script>
