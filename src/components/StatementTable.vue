<template>
  <el-table
    :data="tableData"
    height="250"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="登録日"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="ニックネーム"
      width="180">
    </el-table-column>
    <el-table-column
      prop="statement"
      label="みんなの名言">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        statement: '百聞は一見にしかず'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        statement: '馬の耳に念仏'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        statement: '千里の道も車で移動したい'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        statement: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        statement: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        statement: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        statement: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
</script>
