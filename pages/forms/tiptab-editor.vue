<template lang="pug">
div
  h1 Tibtab
  p For docs visit #[a(href="https://tiptap.scrumpy.io/" target="_blank") #[code Tibtab]]

  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic

        TipTab()
          // Add HTML to the scoped slot called `content`
          .TipTab-content(slot='content', slot-scope='props')
            p
              | this is a very basic example of tiptap.

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Markdown Shortcuts

        TipTab(:extensions="extensions")
          // Add HTML to the scoped slot called `content`
          .TipTab-content(slot='content', slot-scope='props')
            p
              | Start a new line and type
              code #
              |  followed by a
              code space
              |  and you will get an H1 headline.
            p
              | This feature is called
              strong  input rules
              |  . There are some of these shortcuts for the most basic nodes enabled by default. Try
              code #, ##, ###, …
              |  for headlines,
              code >
              |  for blockquotes,
              code - or +
              |  for bullet lists. And of course you can add your own input rules.


    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Menu Bar

        TipTab( :extensions="extensions")
          .TipTab-menubar(slot='menubar', slot-scope='{ nodes, marks }')
            div(v-if='nodes && marks')

              button.button.is-light(:class="{ 'is-active': marks.bold.active() }", @click='marks.bold.command')
                AppIcon(name='bold')
              button.button.is-light(:class="{ 'is-active': marks.italic.active() }", @click='marks.italic.command')
                AppIcon(name='italic')
              button.button.is-light(:class="{ 'is-active': marks.strike.active() }", @click='marks.strike.command')
                AppIcon(name='strikethrough-s')
              button.button.is-light(:class="{ 'is-active': marks.underline.active() }", @click='marks.underline.command')
                AppIcon(name='text-underlined')
              button.button.is-light(@click='marks.code.command', :class="{ 'is-active': marks.code.active() }\
              ")
                AppIcon(name='code')
              button.button.is-light(:class="{ 'is-active': nodes.paragraph.active() }", @click='nodes.paragraph.command')
                AppIcon(name='paragraph')
              button.button.is-light(:class="{ 'is-active': nodes.heading.active({ level: 1 }) }", @click='nodes.heading.command({ level: 1 })')
                | H1
              button.button.is-light(:class="{ 'is-active': nodes.heading.active({ level: 2 }) }", @click='nodes.heading.command({ level: 2 })')
                | H2
              button.button.is-light(:class="{ 'is-active': nodes.heading.active({ level: 3 }) }", @click='nodes.heading.command({ level: 3 })')
                | H3
              button.button.is-light(:class="{ 'is-active': nodes.bullet_list.active() }", @click='nodes.bullet_list.command')
                AppIcon(name='list-bulleted')
              button.button.is-light(:class="{ 'is-active': nodes.ordered_list.active() }", @click='nodes.ordered_list.command')
                AppIcon(name='list-numbered')
              button.button.is-light(:class="{ 'is-active': nodes.blockquote.active() }", @click='nodes.blockquote.command')
                AppIcon(name='quote')
              button.button.is-light(:class="{ 'is-active': nodes.code_block.active() }", @click='nodes.code_block.command')
                AppIcon(name='code')

          // Add HTML to the scoped slot called `content`
          .TipTab-content(slot='content', slot-scope='props')
            p Hi, I'm just a boring paragraph


    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Menu Bubble

        TipTab( :extensions="extensions")
          .TipTab-menuBubble(slot='menububble', slot-scope='{ marks, focus }')
            template(v-if='marks')
              .buttons.is-light
                button.button(:class="{ 'is-active': marks.bold.active() }", @click='marks.bold.command')
                  AppIcon(name="bold")
                button.button(:class="{ 'is-active': marks.italic.active() }", @click='marks.italic.command')
                  AppIcon(name='italic')
                button.button(:class="{ 'is-active': marks.code.active() }", @click='marks.code.command')
                  AppIcon(name='code')

          // Add HTML to the scoped slot called `content`
          .TipTab-content(slot='content', slot-scope='props')
            p Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Floating Menu

        TipTab( :extensions="extensions")
          .TipTab-floatingMenu(slot='floatingMenu', slot-scope='{ nodes }')
            template(v-if='nodes')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.heading.active({ level: 1 }) }", @click='nodes.heading.command({ level: 1 })')
                | H1
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.heading.active({ level: 2 }) }", @click='nodes.heading.command({ level: 2 })')
                | H2
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.heading.active({ level: 3 }) }", @click='nodes.heading.command({ level: 3 })')
                | H3
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.bullet_list.active() }", @click='nodes.bullet_list.command')
                AppIcon(name='list-bulleted')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.ordered_list.active() }", @click='nodes.ordered_list.command')
                AppIcon(name='list-numbered')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.blockquote.active() }", @click='nodes.blockquote.command')
                AppIcon(name='quote')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.code_block.active() }", @click='nodes.code_block.command')
                AppIcon(name='code')

          // Add HTML to the scoped slot called `content`
          .TipTab-content(slot='content', slot-scope='props')
            p This is an example of a medium-like editor. Enter a new line and some buttons will appear.


    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Full Example

        TipTab( :extensions="extensions")
          .TipTab-menubar(slot='menubar', slot-scope='{ nodes, marks }')
            div(v-if='nodes && marks')

              button.button.is-light(:class="{ 'is-active': marks.bold.active() }", @click='marks.bold.command')
                AppIcon(name='bold')
              button.button.is-light(:class="{ 'is-active': marks.italic.active() }", @click='marks.italic.command')
                AppIcon(name='italic')
              button.button.is-light(:class="{ 'is-active': marks.strike.active() }", @click='marks.strike.command')
                AppIcon(name='strikethrough-s')
              button.button.is-light(:class="{ 'is-active': marks.underline.active() }", @click='marks.underline.command')
                AppIcon(name='text-underlined')
              button.button.is-light(@click='marks.code.command', :class="{ 'is-active': marks.code.active() }\
              ")
                AppIcon(name='code')
              button.button.is-light(:class="{ 'is-active': nodes.paragraph.active() }", @click='nodes.paragraph.command')
                AppIcon(name='paragraph')
              button.button.is-light(:class="{ 'is-active': nodes.heading.active({ level: 1 }) }", @click='nodes.heading.command({ level: 1 })')
                | H1
              button.button.is-light(:class="{ 'is-active': nodes.heading.active({ level: 2 }) }", @click='nodes.heading.command({ level: 2 })')
                | H2
              button.button.is-light(:class="{ 'is-active': nodes.heading.active({ level: 3 }) }", @click='nodes.heading.command({ level: 3 })')
                | H3
              button.button.is-light(:class="{ 'is-active': nodes.bullet_list.active() }", @click='nodes.bullet_list.command')
                AppIcon(name='list-bulleted')
              button.button.is-light(:class="{ 'is-active': nodes.ordered_list.active() }", @click='nodes.ordered_list.command')
                AppIcon(name='list-numbered')
              button.button.is-light(:class="{ 'is-active': nodes.blockquote.active() }", @click='nodes.blockquote.command')
                AppIcon(name='quote')
              button.button.is-light(@click='showImagePrompt(nodes.image.command)')
                AppIcon(name='image')
              button.button.is-light(:class="{ 'is-active': nodes.code_block.active() }", @click='nodes.code_block.command')
                AppIcon(name='code')

          .TipTab-menuBubble(slot='menububble', slot-scope='{ marks, focus }')
            template(v-if='marks')
              .buttons.is-light
                button.button(:class="{ 'is-active': marks.bold.active() }", @click='marks.bold.command')
                  AppIcon(name="bold")
                button.button(:class="{ 'is-active': marks.italic.active() }", @click='marks.italic.command')
                  AppIcon(name='italic')
                button.button(:class="{ 'is-active': marks.code.active() }", @click='marks.code.command')
                  AppIcon(name='code')

          .TipTab-floatingMenu(slot='floatingMenu', slot-scope='{ nodes }')
            template(v-if='nodes')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.heading.active({ level: 1 }) }", @click='nodes.heading.command({ level: 1 })')
                | H1
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.heading.active({ level: 2 }) }", @click='nodes.heading.command({ level: 2 })')
                | H2
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.heading.active({ level: 3 }) }", @click='nodes.heading.command({ level: 3 })')
                | H3
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.bullet_list.active() }", @click='nodes.bullet_list.command')
                AppIcon(name='list-bulleted')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.ordered_list.active() }", @click='nodes.ordered_list.command')
                AppIcon(name='list-numbered')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.blockquote.active() }", @click='nodes.blockquote.command')
                AppIcon(name='quote')
              button.button.is-clean.u-mb-0(:class="{ 'is-active': nodes.code_block.active() }", @click='nodes.code_block.command')
                AppIcon(name='code')


          // Add HTML to the scoped slot called `content`
          .TipTab-content(slot='content', slot-scope='props')
            p Hi, I'm just a boring paragraph

</template>

<script>
import {
  // Nodes
  BlockquoteNode,
  CodeBlockNode,
  CodeBlockHighlightNode,
  HardBreakNode,
  HeadingNode,
  ImageNode,
  OrderedListNode,
  BulletListNode,
  ListItemNode,
  TodoItemNode,
  TodoListNode,

  // Marks
  BoldMark,
  CodeMark,
  ItalicMark,
  LinkMark,
  StrikeMark,
  UnderlineMark,

  // General Extensions
  HistoryExtension,
  PlaceholderExtension
} from 'tiptap-extensions'

export default {
  head() {
    return {
      title: 'Tibtab'
    }
  },
  data: () => ({
    extensions: [
      new BlockquoteNode(),
      new BulletListNode(),
      new CodeBlockNode(),
      new HardBreakNode(),
      new HeadingNode({ maxLevel: 3 }),
      new ImageNode(),
      new ListItemNode(),
      new OrderedListNode(),
      new TodoItemNode(),
      new TodoListNode(),
      new BoldMark(),
      new CodeMark(),
      new ItalicMark(),
      new LinkMark(),
      new StrikeMark(),
      new UnderlineMark(),
      new HistoryExtension(),
      new PlaceholderExtension()
    ]
  }),
  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    }
  }
}
</script>
