<template>
    <main class="h-100">
        <div class="row">
            <h1>Processing...</h1>
        </div>
    </main>
</template>

<script>
import axios from "axios";

export default {
    name: "Callback",
    async mounted() {
        try {
            await this.$store.dispatch('setToken', this.$route.query.code)
            this.$router.push({'path': '/tasks'})
        } catch (e) {

        }
    }
}
</script>