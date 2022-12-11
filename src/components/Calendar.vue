<template>
  <div>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="カレンダーを選択">
    </el-date-picker>
  </div>
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
