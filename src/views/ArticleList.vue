<template>
  <div class="article-list">
    <article-item
      v-for="item in article"
      :title="item.title"
      :author="item.author"
      :desc="item.desc"
      :viewCount="item.viewCount"
      :pubtime="item.pubtime"
      :tag="item.tag"
      :id="item.id"
      :key="item.id"
      @toDetail="toDetail"
    />
  </div>
</template>
<script>
import ArticleItem from "@/components/ArticleItem.vue";
export default {
  name: "ArticleList",
  components: {
    ArticleItem
  },
  data() {
    return {
      article: [
        {
          id: 133,
          title: "Next 深度解析（一）",
          author: "jox",
          desc:
            "Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）",
          viewCount: 11,
          tag: "技术",
          pubtime: "2019-09-8"
        },
        {
          id: 135,
          title: "Next 深度解析（二）",
          author: "jox",
          desc:
            "Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）",
          viewCount: 11,
          tag: "技术",
          pubtime: "2019-09-8"
        },
        {
          id: 137,
          title: "Next 深度解析（三）",
          author: "jox",
          desc:
            "Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）",
          viewCount: 11,
          tag: "技术",
          pubtime: "2019-09-8"
        },
        {
          id: 139,
          title: "Next 深度解析（四）",
          author: "jox",
          desc:
            "Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）",
          viewCount: 11,
          tag: "技术",
          pubtime: "2019-09-8"
        },
        {
          id: 141,
          title: "Next 深度解析（五）",
          author: "jox",
          desc:
            "Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）",
          viewCount: 11,
          tag: "技术",
          pubtime: "2019-09-8"
        },
        {
          id: 143,
          title: "Next 深度解析（六）",
          author: "jox",
          desc:
            "Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）",
          viewCount: 11,
          tag: "技术",
          pubtime: "2019-09-8"
        },
        {
          id: 145,
          title: "Next 深度解析（七）",
          author: "jox",
          desc:
            "Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）",
          viewCount: 11,
          tag: "技术",
          pubtime: "2019-09-8"
        },
      ]
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: "details",
        params: {
          id: id
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>

</style>