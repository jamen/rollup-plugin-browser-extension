/**
 * The module below contains convenience exports that are not cross-browser. See MDN's compatibility table
 *
 * - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs
 *
 * The exports might need to be fixed. Please pull request or let me know. Sources for future reference are
 *
 * - https://developer.chrome.com/extensions/api_index
 * - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API
 * - https://github.com/mdn/browser-compat-data
 */

const browserModule = `
export const browser = window.browser ? window.browser : window.chrome || {}
export const {
    // Shared APIs
    alarms,
    bookmarks,
    browserAction,
    browsingData,
    commands,
    cookies,
    devtools,
    downloads,
    events,
    extension,
    extensionTypes,
    history,
    i18n,
    identity,
    idle,
    management,
    notifications,
    omnibox,
    pageAction,
    permissions,
    printerProvider,
    privacy,
    proxy,
    runtime,
    sessions,
    storage,
    tabs,
    types,
    webNavigation,
    webRequest,
    windows,
    processes,
    signedInDevices,

    // Chrome APIs
    accessibilityFeatures,
    automation,
    // NOTE: debugger is reserved, use browser.debugger instead
    // debugger,
    contentSettings,
    contextMenus,
    certificateProvider,
    declarativeContent,
    declarativeNetRequest,
    desktopCapture,
    documentScan,
    enterprise,
    experimental,
    fileBrowserHandler,
    fileSystemProvider,
    fontSettings,
    gcm,
    input,
    instanceID,
    networking,
    pageCapture,
    platformKeys,
    power,
    system,
    tabCapture,
    tts,
    ttsEngine,
    vpnProvider,
    wallpaper,

    // Firefox APIs
    browserSettings,
    clipboard,
    contentScripts,
    contextualIdentities,
    dns,
    find,
    menus,
    pkcs11,
    search,
    sidebarAction,
    theme,
    topSites
} = browser`

module.exports = function browserExtension () {
    return {
        name: 'browser-extension',
        resolveId (id) {
            return id === 'browser' ? { id: 'browser' } : null
        },
        load (id) {
            return id === 'browser' ? { code: browserModule, moduleSideEffects: false } : null
        }
    }
}