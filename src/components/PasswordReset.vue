<template>
    <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card>
                    <v-toolbar color="primary">
                        <v-row align="center" justify="center">
                            <v-toolbar-title class="text-uppercase white--text">
                                <span>Password reset form</span>
                            </v-toolbar-title>
                        </v-row>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-if="reset_key === 'new'">
                            <v-text-field label="Email" name="email" prepend-icon="mail" type="email"/>
                        </v-form>
                        <v-form v-if="reset_key !== 'new'">
                            <v-text-field label="New password" name="password" prepend-icon="lock" type="password"/>
                            <v-text-field label="Repeat new password" name="password-repeat" prepend-icon="lock" type="password"/>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text @click="$router.push('/login')">
                            <span>Login page</span>
                        </v-btn>
                        <v-spacer/>
                        <v-btn dark color="primary" @click="submitRequest">
                            <span>Submit</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "PasswordReset",
        data() {
            return {
                reset_key: this.$route.params.token,
                dialog: false
            }
        },
        methods: {
            submitRequest() {
                if(this.reset_key === 'new'){
                    console.log("Submitted new password reset request!");
                }else{
                    console.log("Reset password!")
                }
            }
        },
    }
</script>

<style scoped>

</style>