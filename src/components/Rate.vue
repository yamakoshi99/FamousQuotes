<template>
<div>
  <el-rate
    v-model="value"
    :texts="['迷言', 'ちょい名言', '名言', 'ナイス名言', '命言!']"
    show-text>
  </el-rate>
</div>

</template>

<script>
export default {
  data () {
    return {
      value: null
    }
  }
}
</script>
