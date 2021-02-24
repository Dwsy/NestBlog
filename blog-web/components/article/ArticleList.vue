<template>
  <v-card class="mx-auto mb-6 article-item" :shaped="article.up == 1">
    <v-container>
      <v-img
        class="white--text .item-thumb-small"
        max-height="200"
        max-width="auto"
        min-width="200"
        aspect-ratio
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        flex
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>

    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
    <v-container>
      <v-img
        class="white--text align-end"
        width="800px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title>
        <nuxt-link :to="`/article/${article._id}`" class="title_a">
          <span v-if="article.up == 1" class="body-2">[置顶]</span>
          模拟数据标题
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle>2021年2月24日16:36:57 模拟数据</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>模拟数据摘要</div>
      </v-card-text>

      <v-card-actions class="d-flex align-center justify-space-between">
        <v-btn text color="error" nuxt :to="`/article/`">开始阅读</v-btn>
        <div>
          <v-btn text>
            <v-icon left>mdi-eye</v-icon>
            9999
          </v-btn>
          <v-btn text>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon left>mdi-message</v-icon>
            777
          </v-btn>
        </div>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
// import mixin from '@/utils/mixin';
export default {
  //   mixins: [mixin],
  components: {},
  props: {
    article: {
      type: Object,
      default() {
        return {
          _id: null,
          coverURL: null,
          createdAt: 0,
          summary: "",
          browseCount: 0,
          loveCount: 0,
          commentCount: 0
        };
      }
    }
  },
  computed: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.article-item .title_a {
  color: inherit;
  text-decoration: none;
}

// div {
//   display: block;
// }
</style>
