<template>
  <el-date-picker
    v-model="date"
    type="date"
    placeholder="カレンダーを選択">
  </el-date-picker>
</template>

<script>
export default {
  data () {
    return {
      date: ''
    }
  }
}
</script>
