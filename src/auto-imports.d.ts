/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const ElMessage: typeof import('element-plus/es')['ElMessage']
  const ElMessageBox: typeof import('element-plus/es')['ElMessageBox']
  const apiChangeManualUserStatus: typeof import('./services/modules/users/manual')['apiChangeManualUserStatus']
  const apiChangeSimType: typeof import('./services/modules/users/manual')['apiChangeSimType']
  const apiCheckPayment: typeof import('./services/modules/users/manual')['apiCheckPayment']
  const apiGetManualUserLogs: typeof import('./services/modules/users/manual')['apiGetManualUserLogs']
  const apiGetUserLogs: (typeof import('./services/modules/users/manual'))['apiGetUserLogs']
  const apiLogin: typeof import('./services/modules/login')['apiLogin']
  const apiManualUser: typeof import('./services/modules/users/manual')['apiManualUser']
  const apiManualUserWorkflowStatus: typeof import('./services/modules/users/manual')['apiManualUserWorkflowStatus']
  const apiManualUsersList: typeof import('./services/modules/users/manual')['apiManualUsersList']
  const apiNotificationLanguage: typeof import('./services/modules/notifactions/index')['apiNotificationLanguage']
  const apiStartManualUserReg: typeof import('./services/modules/users/manual')['apiStartManualUserReg']
  const apiUpdateUser: typeof import('./services/modules/users/manual')['apiUpdateUser']
  const apiUserImg: typeof import('./services/modules/users/manual')['apiUserImg']
  const bannerCategoryList: typeof import('./core/consts/lists')['bannerCategoryList']
  const baseURL: typeof import('./core/config/axios')['baseURL']
  const changeESimTypeList: typeof import('./core/consts/lists')['changeESimTypeList']
  const changePSimTypeList: typeof import('./core/consts/lists')['changePSimTypeList']
  const changeSimType: typeof import('./core/enums/changeSimType')['default']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const customRef: typeof import('vue')['customRef']
  const defaultCurrentUser: typeof import('./core/consts/users')['defaultCurrentUser']
  const defaultUserLogs: typeof import('./core/consts/users')['defaultUserLogs']
  const defaultUserMyIDLogs: typeof import('./core/consts/users')['defaultUserMyIDLogs']
  const defaultUserUpdate: typeof import('./core/consts/users')['defaultUserUpdate']
  const defaultUsersDocument: typeof import('./core/consts/users')['defaultUsersDocument']
  const defaultUsersList: typeof import('./core/consts/users')['defaultUsersList']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const docList: typeof import('./core/consts/users')['docList']
  const effectScope: typeof import('vue')['effectScope']
  const filterList: typeof import('./core/consts/lists')['filterList']
  const genderList: typeof import('./core/consts/users')['genderList']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const http: typeof import('./core/config/axios')['http']
  const httpDelete: typeof import('./services/index')['httpDelete']
  const httpGet: typeof import('./services/index')['httpGet']
  const httpPatch: typeof import('./services/index')['httpPatch']
  const httpPost: typeof import('./services/index')['httpPost']
  const httpPut: typeof import('./services/index')['httpPut']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const langList: typeof import('./core/consts/lists')['langList']
  const markRaw: typeof import('vue')['markRaw']
  const menu: typeof import('./core/consts/menu')['menu']
  const myIdStatusList: typeof import('./core/consts/users')['myIdStatusList']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const payloadList: typeof import('./core/consts/lists')['payloadList']
  const payloadType: typeof import('./core/enums/payloadType')['default']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const registerType: typeof import('./core/enums/registerType')['default']
  const registerTypeList: typeof import('./core/consts/users')['registerTypeList']
  const registerWorkflowStatus: typeof import('./core/enums/registerWorkflowStatus')['default']
  const rejectErrorList: typeof import('./core/consts/users')['rejectErrorList']
  const rejectErrorTypes: typeof import('./core/enums/rejectErrorTypes')['default']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const simType: typeof import('./core/enums/simType')['default']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCounterStore: (typeof import('./stores/counter'))['useCounterStore']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useLink: typeof import('vue-router')['useLink']
  const useLoginStore: typeof import('./stores/modules/login')['useLoginStore']
  const useLoginStoreWithOut: typeof import('./stores/modules/login')['useLoginStoreWithOut']
  const useManualUsersStore: typeof import('./stores/modules/users/manual')['useManualUsersStore']
  const useManualUsersStoreWithOut: typeof import('./stores/modules/users/manual')['useManualUsersStoreWithOut']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const userStatusList: typeof import('./core/consts/users')['userStatusList']
  const userStatusType: typeof import('./core/enums/userStatusType')['default']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, VNode, WritableComputedRef } from 'vue'
  import('vue')
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly apiLogin: UnwrapRef<typeof import('./services/modules/login')['apiLogin']>
    readonly baseURL: UnwrapRef<typeof import('./core/config/axios')['baseURL']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly http: UnwrapRef<typeof import('./core/config/axios')['http']>
    readonly httpDelete: UnwrapRef<typeof import('./services/index')['httpDelete']>
    readonly httpGet: UnwrapRef<typeof import('./services/index')['httpGet']>
    readonly httpPatch: UnwrapRef<typeof import('./services/index')['httpPatch']>
    readonly httpPost: UnwrapRef<typeof import('./services/index')['httpPost']>
    readonly httpPut: UnwrapRef<typeof import('./services/index')['httpPut']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly menu: UnwrapRef<typeof import('./core/consts/menu')['menu']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useLoginStore: UnwrapRef<typeof import('./stores/modules/login')['useLoginStore']>
    readonly useLoginStoreWithOut: UnwrapRef<typeof import('./stores/modules/login')['useLoginStoreWithOut']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly apiLogin: UnwrapRef<typeof import('./services/modules/login')['apiLogin']>
    readonly baseURL: UnwrapRef<typeof import('./core/config/axios')['baseURL']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly http: UnwrapRef<typeof import('./core/config/axios')['http']>
    readonly httpDelete: UnwrapRef<typeof import('./services/index')['httpDelete']>
    readonly httpGet: UnwrapRef<typeof import('./services/index')['httpGet']>
    readonly httpPatch: UnwrapRef<typeof import('./services/index')['httpPatch']>
    readonly httpPost: UnwrapRef<typeof import('./services/index')['httpPost']>
    readonly httpPut: UnwrapRef<typeof import('./services/index')['httpPut']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly menu: UnwrapRef<typeof import('./core/consts/menu')['menu']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useLoginStore: UnwrapRef<typeof import('./stores/modules/login')['useLoginStore']>
    readonly useLoginStoreWithOut: UnwrapRef<typeof import('./stores/modules/login')['useLoginStoreWithOut']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
