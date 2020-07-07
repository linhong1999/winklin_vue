/**
 * @file app store
 * @author winklin <winklin@tencent.com>
 */

import http from '@/api'
import queryString from 'query-string'

export default {
    namespaced: true,
    state: {
    },
    mutations: {
        sync_btn(){},
        query_btn(){},
    },
    actions: {
        ip_detail(){},
        get_ip_list(){},
    },
    getter: {
        query_form(){},
        topo_tree(){},
    }
}
