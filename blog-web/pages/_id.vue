<template>
  <v-container grid-list-xs class="main">
    <div>
      <PPT v-bind:ppts="ppt" />
    </div>
    <v-row>
      <v-col cols="12" xl="8" lg="8" md="8">
        <div>
          <br />
          <!-- <h2 class="font-weight-bold pb-4">文章列表</h2> -->
          <v-row>
            <v-col>
              <ArticleList v-bind:fields="fields" />

              <div class="text-center">
                <v-pagination v-model="page" :length="lastPage"></v-pagination>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col>
        <div cols="12" md="1" lg="1" xl="1">
          <br />

          <Recently v-bind:recently="recently" />
          <Top-50 />
          <p class="text-h6 pb-4">标签</p>
          <Tag v-bind:tags="tag" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PPT from "../components/article/PPT";
import Tag from "../components/article/Tag";
import Recently from "../components/Comment/Recently";
import Top50 from "../components/Top50";
import ArticleList from "../components/article/ArticleList";
import Paging from "../components/article/Paging";
export default {
  components: {
    PPT,
    Tag,
    Recently,
    Top50,
    ArticleList,
    Paging
  },
  async asyncData({ $axios, params }) {
    let id = params.id;
    const fieldsData = await $axios.$get("fields", {
      params: {
        query: {
          limit: 8,
          page: id,
          sort: "-_id",
          populate:"tag classification"
        }
      }
    });
    // /users?query={"where":{"username":"user1","age":{"$gt":18}},"sort":"-_id","limit":10,"page":2,"populate":"friends"}
    // const fieldsData = await $axios.$get(`fields/all/${id}`);
    // const titleData = await $axios.$get(`/fields/title/${id}`);
    const recentlyData = await $axios.$get("comments/recently");
    const classificationData = await $axios.$get("classification");

    const tagData = await $axios.$get("tag", {
      params: {
        query: {
          limit: 777,
          sort: "-contentsNum"
        }
      }
    });
    const pptData = await $axios.$get("ppt", {
      params: {
        query: {
          sort: "rank"
        }
      }
    });
    // localStorage.setItem

    // localStorage.setItem("classifications", JSON.stringify(this.classificationData));
    return {
      fields: fieldsData.data,
      // titleData: titleData,
      classification: classificationData.data,
      ppt: pptData.data,
      recently: recentlyData,
      tag: tagData.data,
      total: parseInt(fieldsData.total),
      lastPage: parseInt(fieldsData.lastPage),
      page: parseInt(fieldsData.page)
    };
  },
  mounted() {
    localStorage.setItem(
      "classifications",
      JSON.stringify(this.classification)
    );
  },

  watch: {
    page: {
      handler(val) {

        this.$router.push(`${this.page}`);

      },
      // deep: true
    }
  }
};
</script>
<style></style>
