<template>
    <div id="app" :class="systemCls">
        <ul class="header">
            <li>
                <a href="javascript:void(0);" :class="$route.name === 'navbar' ? 'bk-text-button' : ''" @click.stop="goPage('navbar')">navbar</a>
            </li>
            <li>
                <a href="javascript:void(0);" :class="$route.name === 'detail' ? 'bk-text-button' : ''" @click.stop="goPage('detail')">host_detail</a>
            </li>
            <li>
                <a href="javascript:void(0);" :class="$route.name === 'topo' ? 'bk-text-button' : ''" @click.stop="goPage('topo')">拓扑</a>
            </li>
        </ul>
        <main class="main-content" v-bkloading="{ isLoading: mainContentLoading, opacity: 1 }">
            <el-header>Header</el-header>
            <router-view :key="routerKey" v-show="!mainContentLoading" />
        </main>
        <app-auth ref="bkAuth"></app-auth>
        <el-footer>Footer</el-footer>

    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    import { bus } from '@/common/bus'

    export default {
        name: 'app',
        data () {
            return {
                routerKey: +new Date(),
                systemCls: 'mac'
            }
        },
        computed: {
            ...mapGetters(['mainContentLoading'])
        },
        watch: {
        },
        created () {
            const platform = window.navigator.platform.toLowerCase()
            if (platform.indexOf('win') === 0) {
                this.systemCls = 'win'
            }
        },
        mounted () {
            const self = this
            bus.$on('show-login-modal', data => {
                self.$refs.bkAuth.showLoginModal(data)
            })
            bus.$on('close-login-modal', () => {
                self.$refs.bkAuth.hideLoginModal()
                setTimeout(() => {
                    window.location.reload()
                }, 0)
            })
        },
        methods: {
            /**
             * router 跳转
             *
             * @param {string} idx 页面指示
             */
            goPage (idx) {
                this.$router.push({
                    name: idx
                })
            }
        }
    }
</script>

<style lang="postcss">
    @import './css/reset.css';
    @import './css/app.css';

    #app {
        width: 1200px;
        height: 1400px;
        position: absolute;
        left: 36%;
        top: 10%;
        margin-left: -400px;
        font-size: 14px;
        color: #737987;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .header {
        margin-bottom: 20px;
        li {
            margin: 0 10px 0 0;
        }
    }
    .main-content {
        border: 1px solid #ddd;
        min-height: 600px;
        padding: 5px 15px 15px 15px;
    }
    h1,
    h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #737987;
    }
    .split {
        margin-bottom: 15px;
    }
</style>
