<template>
    <el-dialog v-model="dialogVisible" title="无人机巢选择" width="800px">
        <el-row v-for="(nest, index) in nests" :key="nest.id" :gutter="20" class="nest-row">
            <el-col :span="24">
                <el-card shadow="hover">
                    <template #header>
                        <div>
                            <el-checkbox v-model="nest.selected">
                                {{ nest.name }}
                            </el-checkbox>
                        </div>
                    </template>

                    <el-collapse v-if="nest.selected" class="nest-settings">
                        <el-collapse-item title="配置选项">
                            <el-form :model="nest" label-width="120px">
                                <!-- 航线选择 -->
                                <el-form-item label="航线">
                                    <el-select v-model="nest.routes" multiple placeholder="选择航线" style="width: 100%">
                                        <el-option v-for="route in availableRoutes" :key="route" :label="route"
                                            :value="route" />
                                    </el-select>
                                </el-form-item>

                                <!-- 返航高度 -->
                                <el-form-item label="返航高度 (米)">
                                    <el-input-number v-model="nest.returnHeight" :min="0" :step="10"
                                        placeholder="输入高度" />
                                </el-form-item>

                                <!-- 失控动作 -->
                                <el-form-item label="失控动作">
                                    <el-radio-group v-model="nest.failAction">
                                        <el-radio-button label="悬停" />
                                        <el-radio-button label="返航" />
                                        <el-radio-button label="降落" />
                                    </el-radio-group>
                                </el-form-item>
                            </el-form>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </el-col>
        </el-row>

        <template #footer>
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitNests">确认</el-button>
        </template>
    </el-dialog>
</template>

<script language="ts">
import { ref } from "vue";

export default {
    name: "DroneNestDialog",
    setup() {
        const dialogVisible = ref(true);

        // 无人机巢数据
        const nests = ref([
            {
                id: 1,
                name: "无人机巢 A",
                selected: false,
                routes: [],
                returnHeight: null,
                failAction: null,
            },
            {
                id: 2,
                name: "无人机巢 B",
                selected: false,
                routes: [],
                returnHeight: null,
                failAction: null,
            },
        ]);

        // 可用航线
        const availableRoutes = ref(["航线1", "航线2", "航线3", "航线4"]);

        // 提交函数
        const submitNests = () => {
            const selectedNests = nests.value.filter((nest) => nest.selected);
            console.log("提交的无人机巢配置：", selectedNests);
            dialogVisible.value = false;
        };

        return {
            dialogVisible,
            nests,
            availableRoutes,
            submitNests,
        };
    },
};
</script>

<style scoped>
.nest-row {
    margin-bottom: 20px;
}

.nest-settings {
    margin-top: 10px;
}
</style>