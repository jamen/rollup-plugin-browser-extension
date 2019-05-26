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
export const browser = window.browser ? window.browser : window.chrome

// Shared APIs
export const alarms = browser.alarms
export const bookmarks = browser.bookmarks
export const browserAction = browser.browserAction
export const browsingData = browser.browsingData
export const commands = browser.commands
export const cookies = browser.cookies
export const devtools = browser.devtools
export const downloads = browser.downloads
export const events = browser.events
export const extension = browser.extension
export const extensionTypes = browser.extensionTypes
export const history = browser.history
export const i18n = browser.i18n
export const identity = browser.identity
export const idle = browser.idle
export const management = browser.management
export const notifications = browser.notifications
export const omnibox = browser.omnibox
export const pageAction = browser.pageAction
export const permissions = browser.permissions
export const printerProvider = browser.printerProvider
export const privacy = browser.privacy
export const proxy = browser.proxy
export const runtime = browser.runtime
export const sessions = browser.sessions
export const storage = browser.storage
export const tabs = browser.tabs
export const types = browser.types
export const webNavigation = browser.webNavigation
export const webRequest = browser.webRequest
export const windows = browser.windows
export const processes = browser.processes
export const signedInDevices = browser.signedInDevices

// Chrome APIs
export const accessibilityFeatures = browser.accessibilityFeatures
export const automation = browser.automation
// NOTE: debugger is reserved, use browser.debugger instead
// export const debugger = browser.debugger
export const contentSettings = browser.contentSettings
export const contextMenus = browser.contextMenus
export const certificateProvider = browser.certificateProvider
export const declarativeContent = browser.declarativeContent
export const declarativeNetRequest = browser.declarativeNetRequest
export const desktopCapture = browser.desktopCapture
export const documentScan = browser.documentScan
export const enterprise = browser.enterprise
export const experimental = browser.experimental
export const fileBrowserHandler = browser.fileBrowserHandler
export const fileSystemProvider = browser.fileSystemProvider
export const fontSettings = browser.fontSettings
export const gcm = browser.gcm
export const input = browser.input
export const instanceID = browser.instanceID
export const networking = browser.networking
export const pageCapture = browser.pageCapture
export const platformKeys = browser.platformKeys
export const power = browser.power
export const system = browser.system
export const tabCapture = browser.tabCapture
export const tts = browser.tts
export const ttsEngine = browser.ttsEngine
export const vpnProvider = browser.vpnProvider
export const wallpaper = browser.wallpaper

// Firefox APIs
export const browserSettings = browser.browserSettings
export const clipboard = browser.clipboard
export const contentScripts = browser.contentScripts
export const contextualIdentities = browser.contextualIdentities
export const dns = browser.dns
export const find = browser.find
export const menus = browser.menus
export const pkcs11 = browser.pkcs11
export const search = browser.search
export const sidebarAction = browser.sidebarAction
export const theme = browser.theme
export const topSites = browser.topSites`

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