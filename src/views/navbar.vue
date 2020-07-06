<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main style="height: 380px">
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
      </el-main>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
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
                textarea: ''
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
