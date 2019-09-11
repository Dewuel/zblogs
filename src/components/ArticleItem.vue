<template>
  <div class="article-main">
    <h2 class="title" @click="$emit('toDetail', id)">{{title}}</h2>
    <div class="info">
      <span class="author"><i class="el-icon-user"></i>{{author}}</span>
      <span class="pubtime"><i class="el-icon-date"></i>{{pubtime}}</span>
      <span class="tag"><i class="el-icon-edit"></i>{{tag}}</span>
      <span class="view-count"><i class="el-icon-view"></i>{{viewCount}}</span>
    </div>
    <p class="desc">{{desc}}</p>
    <div class="more">
      <el-link type="primary" @click="$emit('toDetail', id)">查看更多</el-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleItem",
  props: {
    title: String,
    author: String,
    desc: String,
    viewCount: Number,
    pubtime: String,
    tag: String,
    id: Number
  }
};
</script>
<style lang="less" scoped>
.article-main {
  width: 120vh;
  height: 20vh;
  background-color: #fff;
  border-radius: 6px;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 15px 0;
  .title {
    font-size: 18px;
    color: #0a95f1;
    &:hover{
      cursor: pointer;
    }
  }
  .info {
    .author {
      color: #626464;
      margin-right: 20px;
    }
    .pubtime {
      color: #626464;
      margin-right: 20px;
    }
    .tag {
      color: #626464;
      margin-right: 20px;
    }
    .view-count {
      color: #626464;
      margin-right: 20px;
    }
    & i{
      margin-right: 8px;
    }
  }
  .desc {
    line-height: 25px;
    color: #000000;
    width: 100%;
  }
  .more {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>