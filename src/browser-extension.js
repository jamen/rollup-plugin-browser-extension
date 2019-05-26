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
const ext = typeof browser !== 'undefined' ? browser : typeof chrome !== 'undefined' ? chrome : {}

export default ext

// Shared APIs
export const bookmarks = ext.bookmarks
export const alarms = ext.alarms
export const browserAction = ext.browserAction
export const browsingData = ext.browsingData
export const commands = ext.commands
export const cookies = ext.cookies
export const devtools = ext.devtools
export const downloads = ext.downloads
export const events = ext.events
export const extension = ext.extension
export const extensionTypes = ext.extensionTypes
export const history = ext.history
export const i18n = ext.i18n
export const identity = ext.identity
export const idle = ext.idle
export const management = ext.management
export const notifications = ext.notifications
export const omnibox = ext.omnibox
export const pageAction = ext.pageAction
export const permissions = ext.permissions
export const printerProvider = ext.printerProvider
export const privacy = ext.privacy
export const proxy = ext.proxy
export const runtime = ext.runtime
export const sessions = ext.sessions
export const storage = ext.storage
export const tabs = ext.tabs
export const types = ext.types
export const webNavigation = ext.webNavigation
export const webRequest = ext.webRequest
export const windows = ext.windows
export const processes = ext.processes
export const signedInDevices = ext.signedInDevices

// Chrome APIs
export const accessibilityFeatures = ext.accessibilityFeatures
export const automation = ext.automation
// NOTE: debugger is reserved, use browser.debugger instead
// export const debugger = ext.debugger
export const contentSettings = ext.contentSettings
export const contextMenus = ext.contextMenus
export const certificateProvider = ext.certificateProvider
export const declarativeContent = ext.declarativeContent
export const declarativeNetRequest = ext.declarativeNetRequest
export const desktopCapture = ext.desktopCapture
export const documentScan = ext.documentScan
export const enterprise = ext.enterprise
export const experimental = ext.experimental
export const fileBrowserHandler = ext.fileBrowserHandler
export const fileSystemProvider = ext.fileSystemProvider
export const fontSettings = ext.fontSettings
export const gcm = ext.gcm
export const input = ext.input
export const instanceID = ext.instanceID
export const networking = ext.networking
export const pageCapture = ext.pageCapture
export const platformKeys = ext.platformKeys
export const power = ext.power
export const system = ext.system
export const tabCapture = ext.tabCapture
export const tts = ext.tts
export const ttsEngine = ext.ttsEngine
export const vpnProvider = ext.vpnProvider
export const wallpaper = ext.wallpaper

// Firefox APIs
export const browserSettings = ext.browserSettings
export const clipboard = ext.clipboard
export const contentScripts = ext.contentScripts
export const contextualIdentities = ext.contextualIdentities
export const dns = ext.dns
export const find = ext.find
export const menus = ext.menus
export const pkcs11 = ext.pkcs11
export const search = ext.search
export const sidebarAction = ext.sidebarAction
export const theme = ext.theme
export const topSites = ext.topSites`

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