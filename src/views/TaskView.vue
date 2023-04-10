<template>
    <div class="container">
        <button class="btn btn-primary" @click="logout">Signout</button>
            <table class="table table-responsive">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <th scope="row">{{index}}</th>
                    <td>{{task.name}}</td>
                    <td>{{task.description}}</td>
                    <td>{{task.priority_score}}</td>
                </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
import axiosUtils from "@/utils/axiosUtils";
import Cookies from "js-cookie";
export default {
    name: "TaskView",
    data() {
        return {
            tasks: null
        }
    },
    async mounted() {
        const token = Cookies.get('AUTH_TOKEN');
        if (!token) {
            this.$router.push({path: '/'})
        } else {
            try {
                const result = await axiosUtils.get('/tasks')
                this.tasks = result.data.data
            } catch (e) {
                console.log(e.response.data)
            }
        }
    },
    methods: {
        logout() {
            this.$router.push({path: '/'})
            this.$store.dispatch('removeToken')
        }
    }
}
</script>

<style scoped>

</style>