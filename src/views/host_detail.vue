<template>
  <div>
      <el-main>
          <div class="row">
            <div class="col-md-2 col-odd">所属部门:</div>
            <div class="col-md-2">.col-md-2</div>
            <div class="col-md-2 col-odd">所属业务:</div>
            <div class="col-md-2">.col-md-2</div>
            <div class="col-md-2 col-odd">当前状态</div>
            <div class="col-md-2">.col-md-2</div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">主机名字:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">内网IP:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">内网网段:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">上架时间:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">公网IP:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">外网网段:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">维护人员:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">备份维护人员:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">响应级别:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">城市名称:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">机房运营商:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">存放机房:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">存放机房管理单元:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">存放机架ID:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">分级级别:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">设备型号:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">固资编号:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">是否固资:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">外网运营商:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">网络设备ID:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">硬件说明:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">Raid结构:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">操作系统:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">操作系统版本:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">逻辑区域:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">重要级别:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">相关域名:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">备注:</div>
            <div class="col-md-10"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">area:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">client_version:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">dbrole:</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">laid:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">server_name:</div>
            <div class="col-md-2"></div>
            <div class="col-md-2 col-odd">server_seq</div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-odd">接入iFix:</div>
            <div class="col-md-2"></div>
            <div class="col-md-8" style="border-left: 0.5px solid #7f8fa4"></div>
          </div>
        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-1"><el-button plain>修改</el-button></div>
          <div class="col-md-1"><el-button plain>关闭</el-button></div>
        </div>
      </el-main>
  </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    depart: '互动娱乐事业部',
                    business: '穿越火线',
                    current_status: '--->运营中',
                    hostname: '10x10x10x10xx',
                    inner_ip: '127.0.0.1',
                    inner_segment: '127.0.0.1/24',
                    publish_date: '2020.7.6',
                    outter_ip: '127.0.0.1',
                    outter_segment: '127.0.0.1/24',
                    maintainer: 'linhong',
                    backuper: 'winklin',
                    resp_level: 'L4',
                    city_name: '广东',
                    operator: '电信',
                    locate: '广东深圳',
                    locate_detail: '科学C',
                    rack_id: '16116',
                    grade_level: 'L2',
                    unit_type: 'HUAWEI XH310',
                    assets_number: 'TYSVsdfsdfs',
                    assets_flag: '是',
                    outter_operator: '电信',
                    equipt_id: '1234,4567,8975',
                    hardware_detail: '主机配置为: 32134',
                    raid_structure: 'NORAID',
                    os: 'XServer 344',
                    os_version: '6.1',
                    logic_area: '通用区1',
                    important_level: '主要',
                    relate_domain: '----',
                    note: '2020.7.6',
                    aera: '江西一区',
                    client_version: '1234',
                    dbrol: 'dba',
                    laid: '56',
                    server_name: '团队简介',
                    server_seq: '1234',
                    iFix: '否'
                },]

            }
        }
    }
</script>

<style scoped>
  .col-md-2 {
    height: 30px;
    font-size: 17px;
    font-weight: bold;
    border:0.5px solid #7f8fa4;
  }
  .col-odd {
    text-align: right;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>
