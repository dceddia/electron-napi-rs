// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

// Import the Rust library and expose it globally as `rustLib`
// in the renderer (also accessible as `window.rustLib`)
const rustLib = require('hi-rust')
const { contextBridge } = require('electron')
contextBridge.exposeInMainWorld('rustLib', rustLib)

