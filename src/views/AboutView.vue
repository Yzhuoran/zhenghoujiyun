<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="zuo">
          <el-icon class="a">
            <User />
          </el-icon>
        </div>
        <div class="you">
          <p>30</p>
          <p>关注人数(个)</p>
        </div>
      </div>
      <div class="box1">
        <div class="zuo">
          <el-icon class="a1">
            <Postcard />
          </el-icon>
        </div>
        <div class="you">
          <p>120</p>
          <p>订单总数(笔)</p>
        </div>
      </div>
      <div class="box1">
        <div class="zuo">
          <el-icon class="a2">
            <Document />
          </el-icon>
        </div>
        <div class="you">
          <p>4183.80</p>
          <p>今日订单总金额(元)</p>
        </div>
      </div>
      <div class="box1">
        <div class="zuo">
          <el-icon class="a3">
            <Histogram />
          </el-icon>
        </div>
        <div class="you">
          <p>100</p>
          <p>本月销量(笔)</p>
        </div>
      </div>
    </div>
    <div class="jin">
      <div class="zuo">
        <div class="shang">
          <div class="box">
            <span>店铺及商品显示</span>
            <span style="color: aquamarine;">需要关注的店铺信息及处理事项</span>
          </div>
          <div class="box1">
            <div class="xia1">
              <h3>64</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>10</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>0</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>3</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>64</h3>
              <p>出售中</p>
            </div>
          </div>
        </div>
        <div class="xia">
          <div class="box">
            <span>店铺及商品显示</span>
            <span style="color: aquamarine;">需要关注的店铺信息及处理事项</span>
          </div>
          <div class="box1">
            <div class="xia1">
              <h3>0</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>10</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>0</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>33</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>34</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>34</h3>
              <p>出售中</p>
            </div>
            <div class="xia1">
              <h3>34</h3>
              <p>出售中</p>
            </div>
          </div>
        </div>
      </div>
      <div class="you">
        <div id="box">5555</div>
      </div>
    </div>
    <div class="xiao">
      <div class="zuo">
        <div class="shang">
          <span>销售情况统计</span>
          <span class="s1">按周期统计商家店铺的订单和订单金额</span>
        </div>
        <div class="xia">
          <div class="box1">
            <div class="zuo">
              昨日销量
            </div>
            <div class="you">
              <div class="shang1">
                订单金额（元）12
              </div>
              <div class="xia">
                订单量（件）12
              </div>
            </div>
          </div>
          <div class="box2">
            <div class="box1">
              <div class="zuo">
                昨日销量
              </div>
              <div class="you">
                <div class="shang1">
                  订单金额（元）12
                </div>
                <div class="xia">
                  订单量（件）12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="you">
        <div class="shang">
          <span></span>
          <span></span>
        </div>
        <div class="xia"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User, Document, Histogram, Postcard } from '@element-plus/icons-vue'
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  let box = document.getElementById('box')
  var myChart = echarts.init(box);
  // 绘制图表
  myChart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  });
})
</script>

<style lang="scss" scoped>
.box {
  // background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .box1 {
    background-color: #fff;
    width: 24%;
    display: flex;
    padding: 10px;

    .zuo {


      width: 20%;
    }

    .you {
      width: 80%;
    }
  }
}

.a {
  background-color: #007afe;
  color: white;
  font-size: 40px;
}

.a1 {
  background-color: #24a340;
  color: white;
  font-size: 40px;
}

.a2 {
  background-color: #db4554;
  color: white;
  font-size: 40px;
}

.a3 {
  background-color: #febf05;
  color: white;
  font-size: 40px;
}

.jin {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .zuo {
    width: 49%;

    .shang {
      .box {
        background-color: #fff;
        padding: 20px;
        border-bottom: 1px solid #ccc;
      }

      .box1 {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        padding: 5px 10px;

        .xia1 {
          padding: 10px 20px;
          text-align: center;
          background-color: #f7f7f7;
        }
      }
    }

    .xia {
      .box {
        background-color: #fff;
        padding: 20px;
        border-bottom: 1px solid #ccc;
      }

      .box1 {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        padding: 5px 10px;

        .xia1 {
          padding: 10px 10px;
          text-align: center;
          background-color: #f7f7f7;
        }
      }
    }
  }

  .you {
    width: 49%;
    height: 100%;
    background-color: #fff;

    #box {
      width: 500px;
      height: 285px;
    }
  }
}

.xiao {
  padding: 20px;
  background-color: #fff;
  width: 100%;
  margin-top: 10px;
  display: flex;

  .zuo {
    width: 49%;

    .shang {
      padding: 10px 10px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      border-bottom: 1px solid #ccc;

      .s1 {
        color: #9bc1c1;
      }
    }

    .xia {
      margin-top: 10px;
      margin-bottom: 10px;

      .box1 {
        width: 100%;
        display: flex;

        .zuo {
          width: 20%;
          background-color: #f8f8f8;
          text-align: center;
          padding-top: 15px;
          border: 1px solid #ccc;
        }

        .you {
          border: 1px solid #ccc;
          width: 70%;

          .shang1 {
            border: 1px solid #ccc;
            padding-left: 10px;
          }

          .xia {
            border: 1px solid #ccc;
            padding-left: 10px;
          }
        }
      }
    }
  }

  .you {
    width: 49%;
  }
}
</style>