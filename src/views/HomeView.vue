<template>
    <main class="h-100">
        <div class="row">
            <h1>Welcome to Taskify</h1>
            <button @click="signIn" class="btn btn-primary">SIGN IN</button>
        </div>
    </main>
</template>

<script setup >

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generateString = (length) => {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const signIn = () => {
    const clientId = 1;
    const redirectURi =  'http://localhost:5175/callback';
    const responseCode =  'code';
    const scope=''
    const state = generateString(40)
    location.href =  `http://localhost/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURi}&response_type=${responseCode}&scope=${scope}&state=${state}`;
}
</script>
