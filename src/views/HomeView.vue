<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <h2>UNI-ADMIN</h2>
          <div class="box">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
              <el-menu-item index="/about">首页</el-menu-item>
              <el-menu-item index="/aa">商品</el-menu-item>
              <el-menu-item index="4">订单</el-menu-item>
              <el-menu-item index="4">会员</el-menu-item>
              <el-menu-item index="4">设置</el-menu-item>
              <el-sub-menu index="2">
                <template #title>admin</template>
                <el-menu-item @click="tc">退出</el-menu-item>
                <el-menu-item>修改</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>

        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>后台首页</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon>
                  <document />
                </el-icon>
                <span>相册管理</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main> <router-view></router-view> </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const activeIndex = ref(1)
import { useRouter } from 'vue-router';
const router = useRouter()

const tc = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
<style lang="scss" scoped> .el-header {
   line-height: 60px;
   display: flex;
   justify-content: space-between;
   background-color: #545c63;

   .box {
     width: 600px;
   }

   .el-menu {
     background-color: #545c63;
   }

   .el-menu-item {
     color: white;

   }
 }

 .el-main {
   background-color: #f8f8f8;
 }

 .el-aside {
   height: 100vh;
 }
</style>