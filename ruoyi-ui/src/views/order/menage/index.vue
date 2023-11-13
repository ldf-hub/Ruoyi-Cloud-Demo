<template>
    <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleQuery"
          v-hasPermi="['system:dict:remove']"
        >测试库存不足</el-button>
      </el-col>
</template>

<script>
import { testController } from "@/api/order/menage";
export default{
    name: "index",
    data:{  

        queryParams: {
            userId: 1,
            productId: 2,
            amount: 3,
        }
    },
    methods: {
        
        /** 搜索按钮操作 */
        handleQuery() {
            var that = this;
            console.log(123)
            testController(that.queryParams);
            TextDecoderStream()
        },
    }
}                                                                                                           
</script>

<style scoped>

</style>