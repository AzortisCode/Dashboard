<template>
    <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card>
                    <v-toolbar color="primary">
                        <v-row align="center" justify="center">
                            <v-toolbar-title class="text-uppercase white--text">
                                <span>Registration Form</span>
                            </v-toolbar-title>
                        </v-row>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Invitation key" name="Invitation key" prepend-icon="vpn_key" type="text"/>
                            <v-text-field label="Username" name="username" prepend-icon="person" type="text"/>
                            <v-text-field label="Email" name="email" prepend-icon="mail" type="email"/>
                            <v-text-field label="Password" name="password" prepend-icon="lock" type="password"/>
                            <v-text-field label="Repeat password" name="password-repeat" prepend-icon="lock" type="password"/>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text @click="$router.push('/login')">
                            <span>Existing user</span>
                        </v-btn>
                        <v-spacer/>
                        <v-btn dark color="primary">
                            <span>Register</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>