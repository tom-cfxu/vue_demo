<template>
  <div class="alarm">
    <BorderBox style="margin-top:40px; height:85%">
      <el-card class="box-card" style="height:100%">
        <div slot="header" class="clearfix">
          <span>实时数据</span>
        </div>
        <div class="text item" style="height:100%">
          <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            max-height="590"
            style="width: 100%"
            highlight-current-row
            @row-click="tableCurrentChange"
            :header-cell-style="{background:'#308ebd',color:'#fff',border:'none',textAlign:'center'}"
            :cell-style="{background:'#fff',color:'#000',borderColor:'#ddd',textAlign:'center'}"
            :default-sort="{prop: 'id', order: 'ascending'}"
          >
            >
            <el-table-column prop="id" sortable label="序号"></el-table-column>
            <el-table-column
              prop="equipId"
              label="设备id"
              sortable
              column-key="equipId"
              :filters="[{text: '000300062007230003', value: '000300062007230003'},{text: '000300062007230004', value: '000300062007230004'}]"
              :filter-method="filterHandler"
            ></el-table-column>
            <el-table-column prop="uuid" sortable label="uuid"></el-table-column>
            <el-table-column prop="region" sortable label="区域"></el-table-column>
            <el-table-column prop="address" sortable label="地址"></el-table-column>
            <el-table-column prop="desc" sortable label="描述"></el-table-column>
            <el-table-column prop="value" sortable label="当前值"></el-table-column>
          </el-table>
        </div>
      </el-card>
    </BorderBox>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40,50,100,150]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import BorderBox from "../../components/BorderBox";
export default {
  name: "alarm",
  components: {
    BorderBox,
  },
  data() {
    return {
      tableData: [],
      pageData: [],
      currentPage: 1,
      pagesize: 150,
      total: 0,
      timer: null,
    };
  },
  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    handleSizeChange(pagesize) {
      this.currentPage = 1;
      this.pagesize = pagesize;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    tableCurrentChange(e) {
      if (e != null) {
        // console.log(e);
        const desc = e.desc;
        // const{desc,id,address,region,value}=e;
        this.$alert(`<p>${desc}</p>`, "详细趋势图", {
          dangerouslyUseHTMLString: true,
        });
      }
    },
    getTableData() {
      this.$axios
        .post("/api/v1.0/getAllRDB", `token=${localStorage.getItem("token")}`)
        .then((res) => {
          // console.log(res.data);
          if (res.data.code === "10005") {
            const rows = res.data.data.rows;
            if (rows.length > 0) {
              let i = 1;
              this.tableData = rows
                .filter((a) => a.equipId != "FZZF16-2007210001")
                .sort((a, b) => a.equipId - b.equipId)
                .map((data) => {
                  return {
                    id: i++,
                    equipId: data.equipId,
                    uuid: data.uuid,
                    region: data.region,
                    address: data.address,
                    desc: data.desc,
                    value: data.value,
                  };
                });
              this.total = this.tableData.length;
            }
          } else {
            this.tableData = [];
            this.$router.push({ path: "/" });
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            this.$message({
              message: `登录过期!`,
              type: "info",
              center: true,
            });
          }
        });
    },
  },
  created() {
    this.getTableData();
    this.timer = setInterval(this.getTableData, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
  
<style lang="less">
.alarm {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box-card {
  width: 100%;
  height: 100%;
  // background-color: #d8e1fb;
}
.el-card {
  border: none;
  // outline: none;
  margin: 0;
  // border-radius: 5px;
  font-size: 24px;
  color: #fff;
  padding: 0;
  // background-color: #d8e1fb;
  .el-card__header {
    border: none;
    background: #3aa485; //linear-gradient(135deg, rgb(43, 109, 231), rgba(58, 164, 133));
  }
  .el-card__body {
    padding: 0px;
  }
}

.pagination {
  margin-top: 30px;
  span {
    color: #fff;
  }
}

.cell.highlight {
  color: #ff7189 !important;
}
tr.el-table__row {
  cursor: pointer;
  &.current-row {
    td {
      background-color: #9ceed583 !important;
    }
  }
}
</style>