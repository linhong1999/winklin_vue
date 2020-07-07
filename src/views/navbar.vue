<template>
  <div>
    <el-container>
      <el-main style="height: 900px">
        <div class="row">
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp产品:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp所属set:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp业务模块:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-4">
            外部运营商:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp所在机房:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp当前状态:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-4">
            设备型号: <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp&nbsp主机名称: <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="col-xs-6 col-sm-4">
            固资编号: <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp&nbsp重要级别:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp响应级别:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp分级级别:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-4">
            维护人员: <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="col-xs-6 col-sm-4">
            备份维护人: <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="col-xs-6 col-sm-4">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspIP: <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">业务数据最后更新时间: 2020.7.6 14.22.20</div>
        </div>
        <el-divider></el-divider>
        <div class="row">
            <div class="col-md-2">
                <el-button icon="el-icon-search" circle title="查询"></el-button>
                <el-button icon="el-icon-refresh" circle title="刷新"></el-button>
            </div>
            <div class="col-md-10">
            </div>
        </div>
        <el-table
                :data="tableData"
                stripe="true"
                style="width: 100%">
          <el-table-column
                  prop="inner_ip"
                  label="内网ip"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="hostname"
                  label="主机名称">
          </el-table-column>
          <el-table-column
                  prop="module"
                  label="业务模块">
          </el-table-column>
          <el-table-column
                  prop="number"
                  label="固资编号">
          </el-table-column>
          <el-table-column
                  prop="belong_set"
                  label="所属set">
          </el-table-column>
          <el-table-column
                  prop="c_name"
                  label="大区中文名称">
          </el-table-column>
          <el-table-column
                  prop="maintainer"
                  label="维护人员">
          </el-table-column>
          <el-table-column
                  prop="backuper"
                  label="备份维护人">
          </el-table-column>
          <el-table-column
                  prop="produce"
                  label="产品">
          </el-table-column>
          <el-table-column
                  prop="machine_address"
                  label="所在机房">
          </el-table-column>
        </el-table>
        <div class="row">
          <div class="col-md-4">
              <el-pagination
                      layout="prev, pager, next"
                      :total="1000">
              </el-pagination>
          </div>
          <div class="col-md-8">
            1 - 10 of {{total}} items
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                input: '',
                textarea: '',
                total: 1234,
                tableData: [{
                    inner_ip: '255.255.255.123',
                    hostname: '王小虎',
                    module: '上海市普陀区金沙江路 1518 弄',
                    number: '123456789',
                    belong_set: '123',
                    c_name: '福建一区',
                    maintainer: 'linhong',
                    backuper: 'winklin',
                    produce: '穿越火线',
                    machine_address: '深圳南山'
                }, {
                    inner_ip: '255.255.255.123',
                    hostname: '王小虎',
                    module: '上海市普陀区金沙江路 1517 弄',
                    number: '123456789',
                    belong_set: '123',
                    c_name: '福建一区',
                    maintainer: 'linhong',
                    backuper: 'winklin',
                    produce: '穿越火线',
                    machine_address: '深圳南山'
                }, {
                    inner_ip: '255.255.255.123',
                    hostname: '王小虎',
                    module: '上海市普陀区金沙江路 1519 弄',
                    number: '123456789',
                    belong_set: '123',
                    c_name: '福建一区',
                    maintainer: 'linhong',
                    backuper: 'winklin',
                    produce: '穿越火线',
                    machine_address: '深圳南山'
                }, {
                    inner_ip: '255.255.255.123',
                    hostname: '王小虎',
                    module: '上海市普陀区金沙江路 1516 弄',
                    number: '123456789',
                    belong_set: '123',
                    c_name: '福建一区',
                    maintainer: 'linhong',
                    backuper: 'winklin',
                    produce: '穿越火线',
                    machine_address: '深圳南山'
                }]
            }
        }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-input {
    width: auto;
  }
  .el-textarea {
    width: auto;
  }
  .col-sm-4 {
    height: 50px;
  }
</style>
