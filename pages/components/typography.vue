<template lang="pug">
div
  h1 Typography
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Heading
        .grid.has-space
          .column.is-widescreen-6
            h1 h1. Heading 1
            h2 h2. Heading 2
            h3 h3. Heading 3
            h4 h4. Heading 4
            h5 h5. Heading 5
            h6 h6. Heading 6
          .column.is-widescreen-6
            h1.u-color-primary h1. Heading 1
            h2.u-color-secondary h2. Heading 2
            h3.u-color-success h3. Heading 3
            h4.u-color-info h4. Heading 4
            h5.u-color-warning h5. Heading 5
            h6.u-color-danger h6. Heading 6

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Text
        h4 Basic text
        p Example text
        p.u-font-bold Example bold text
        p.u-font-bolder Example bolder text
        p.u-font-uppercase Example uppercase text
        h4 State colors
        p.u-color-primary Primary state text
        p.u-color-secondary Secondary state text
        p.u-color-success Success state text
        p.u-color-info Info state text
        p.u-color-warning Warning state text
        p.u-color-danger Danger state text

  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title General

        p
          | You can use the mark tag to
          mark highlight
          |  text.
        p
          del This line of text is meant to be treated as deleted text.
        p
          s This line of text is meant to be treated as no longer accurate.
        p
          ins This line of text is meant to be treated as an addition to the document.
        p
          u This line of text will render as underlined
        p
          small This line of text is meant to be treated as fine print.
        p
          strong This line rendered as bold text.
        p
          em This line rendered as italicized text.

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Blockquotes

        blockquote
          p
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          footer
            | Someone famous in
            cite(title='Source Title') Source Title
        blockquote
          p
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          footer
            | Someone famous in
            cite(title='Source Title') Source Title


</template>

<script>
export default {
  head() {
    return {
      title: 'Typography'
    }
  }
}
</script>
