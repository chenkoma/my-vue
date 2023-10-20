<template>
  <div id="app">
    <el-container>
      <el-header>
        <img class="mlogo" src="https://www.markerhub.com/dist/images/logo/markerhub-logo.png" alt="">
      </el-header>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="url" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
          </el-form-item>
          <el-form-item label="params" prop="params">
            <el-input type="text" v-model="ruleForm.params"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitorm('ruleForm')">Submit</el-button>
            <el-button @click="resetForm('rulForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'Tools',
  data () {
    return {
      ruleForm: {
        url: 'https://csp1-test.yuansuan.com/api/storage/domain',
        params: '{"company_id":"4UYBTVgzyiN"}'
      },
      rules: {
        url: [
          { require: true, message: '请输入请求url', trigger: 'blur' }
        ],
        params: [
          { require: true, message: '请输入请求参数', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .demo-ruleForm {
    max-width: 500px;
    margin: auto;
  }

</style>
