<template>
    <nav>
        <v-app-bar fixed app color="primary">
            <v-toolbar-items class="title-icon-padding">
                <v-btn icon class="white--text d-sm-none" @click="toggleMiniVariant">
                    <v-icon v-if="!miniVariant">keyboard_backspace</v-icon>
                    <v-icon v-if="miniVariant">keyboard_tab</v-icon>
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Azortis</span>
                <span> Dashboard</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer fixed app color="secondary" :mini-variant="miniVariant" v-bind:mobile-break-point="breakPoint">
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/men/81.jpg" alt=""/>
                </v-list-item-avatar>
                <v-list-item-content class="navigation-drawer-title-padding">
                    <v-list-item-title>
                        <span class="white--text headline">YourPalJake</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        <v-btn x-small text class="pa-0" @click="$router.push('/account')">
                            <v-icon small class="white--text">perm_identity</v-icon>
                            <span class="white--text caption font-weight-light text-padding">View Profile</span>
                        </v-btn>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider/>
            <v-list dense nav>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text subtitle-1">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <v-divider/>
                <v-row justify="center" class="ma-2">
                    <v-btn text class="white--text">
                        <v-icon>exit_to_app</v-icon>
                        <span v-if="!miniVariant" class="text-padding">Log out</span>
                    </v-btn>
                </v-row>
                <div class="d-none d-sm-block">
                    <v-row justify="center" class="ma-2">
                        <v-btn text class="white--text" @click="toggleMiniVariant">
                            <v-icon v-if="!miniVariant">keyboard_backspace</v-icon>
                            <v-icon v-if="miniVariant">keyboard_tab</v-icon>
                            <span v-if="!miniVariant" class="text-padding">Collapse</span>
                        </v-btn>
                    </v-row>
                </div>
            </template>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                miniVariant: true,
                breakPoint: '600',
                links: [
                    { icon: 'dashboard', text: 'Dashboard', route: '/'}
                ]
            }
        },
        methods: {
            toggleMiniVariant () {
                this.miniVariant = !this.miniVariant;

                if(this.miniVariant){
                    this.breakPoint = 600;
                }else{
                    this.breakPoint = 0;
                }
            }
        }
    }

</script>

<style scoped>
    .text-padding{
        padding-left: 5px;
    }
    .title-icon-padding{
        padding-right: 10px;
    }
    .navigation-drawer-title-padding{
        padding-bottom: 6px;
    }
</style>