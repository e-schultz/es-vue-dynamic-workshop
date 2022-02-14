<script setup>
import { ref } from "vue";
const showStatic = ref("true");
// import PostHeader from "./PostHeader.vue";
// import Box from "./Box.vue";
const data = {
  content: {
    component: "PageSection",
    body: [
      {
        component: "PostHeader",
        props: {
          title: "Headless CMS",
          subtitle:
            "Content editors may add or remove sections in a headless CMS. We get the <strong>JSON</strong>, information representing the content, not the rendered content.",
        },
      },
      {
        component: "MessageSection",
        props: {
          isPrimary: true,
        },
        body: [
          {
            component: "MessageBody",
            slots:
              "We are not building pages, but assembling data into pages. When all we have is a JSON strucuture - how do we render that easily?",
          },
        ],
      },
      {
        component: "ContentSection",
        body: [
          {
            component: "p",
            slots: "Paragraph One",
          },
          {
            component: "p",
            slots: "Paragraph Two",
          },
          {
            component: "p",
            slots: "Paragraph Three",
          },
          {
            component: "p",
            slots: "Hello Vue Nation",
          },
        ],
      },
      {
        component: "Box",
        body: [
          {
            component: "Columns",
            body: [
              {
                component: "TitleSection",
                props: {
                  title: "Teaser 1",
                  subtitle:
                    "Read more about this",
                },
              },
              {
                component: "TestCard1",
              },
              {
                component: "TestCard2",
              },
            ],
          },
        ],
      },
      {
        component: "NotificationLink",
        slots: "This is a notification",
      },
    ], // end of main body
  }, // end of content
}; // end of obj

/*
Looking at the page below, there is a rough content structure to it
- a page with 1 or more children

- page
    - page header
        - title
        - sub title
    - message
        mesagge body
    - content
        - paragraph
        - paragraph
    - teaser section
        - columns
            - column 1
                - block with title and subtitle
            - column 2
                - card with text only
            - column 3
                - card
                    - card content
                    - card footer

*/
</script>
<template>
  <Box>
    <input
      type="radio"
      v-model="showStatic"
      :value="true"
    />Show Static
    <input
      type="radio"
      v-model="showStatic"
      :value="false"
    />Show Dynamic
  </Box>
  <article class="is-medium" v-if="showStatic">
    <div class="block">
      <h1 class="title">Headless CMS</h1>
      <h2 class="subtitle">
        Content editors may add or remove sections
        in a headless CMS. We get the
        <strong>JSON</strong>, information
        representing the content, not the rendered
        content.
      </h2>
    </div>

    <section class="message is-primary">
      <div class="message-body">
        We are not building pages, but assembling
        data into pages. When all we have is a
        JSON strucuture - how do we render that
        easily?
      </div>
    </section>

    <div class="content">
      <p>Paragraph One</p>
      <p>Paragraph Two</p>
    </div>

    <section class="box">
      <div class="columns">
        <div class="column">
          <h1 class="title">Teaser 1</h1>
          <h2 class="subtitle">
            Read More about this
          </h2>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="content">
                Lorem ipsum leo risus, porta ac
                consectetur ac, vestibulum at
                eros. Donec id elit non mi porta
                gravida at eget metus. Cum sociis
                natoque penatibus et magnis dis
                parturient montes, nascetur
                ridiculus mus. Cras mattis
                consectetur purus sit amet
                fermentum.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                "Expirements in using Notion for a
                Workshop"
              </p>
              <p class="subtitle">
                @evan_just_evan
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View on
                  <a
                    href="https://twitter.com/evan_just_evan/status/1492916016560623619"
                    >Twitter</a
                  >
                </span>
              </p>
              <p class="card-footer-item">
                <span>
                  Share on
                  <a href="#">Facebook</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
    <div class="notification is-link">
      Bottom Notification
    </div>
  </article>
  <template v-if="!showStatic">
    <component
      :is="data.content.component"
      :blocks="data.content.body"
    />
    <!--<template v-for="block in data.content.body">
      <component :is="block.component" v-bind="block.props" />
    </template>-->
  </template>
</template>
