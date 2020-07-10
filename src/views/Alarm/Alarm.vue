<template>
  <div class="alarm">
    <BorderBox>
      <div class="table">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>报警日志</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <div class="text item">
            <el-table
              :data="tableData"
              height="600"
              style="width: 100%"
              :header-cell-style="{background:'#308ebd',color:'#fff',border:'none',textAlign:'center'}"
              :cell-style="{background:'#FBB43A',color:'#fff',borderColor:'#fff',textAlign:'center'}"
            >
              >
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="设备id" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </BorderBox>
  </div>
</template>

<script>
import BorderBox from "../../components/BorderBox";
export default {
  name: "alarm",
  components: {
    BorderBox
  },
  data() {
    return {
      tableData: [
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        },
        {
          date: "2020-05-02",
          name: "dtu001",
          address: "福建省福州市龙岩市龙净环保排头园"
        }
      ]
    };
  }
};
</script>
  
<style lang="less">
.alarm {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.table {
  width: 100%;
  max-height: 100%;
  overflow: scroll;
  border-radius: 10px;
  margin: 0;
}
.el-card {
  width: 100%;
  height: 100%;
  background: #3aa485; //linear-gradient(135deg, rgb(43, 109, 231), rgba(58, 164, 133));
  border: none;
  outline: none;
  margin: 0;
  border-radius: 5px;
  font-size: 24px;
  color: #fff;
  padding: 0;
  .el-card__header {
    border: none;
  }
  .el-card__body {
    padding: 0px;
  }
}
.el-table__body {
  background: "#308ebd";
  color: "#fff";
}
</style>