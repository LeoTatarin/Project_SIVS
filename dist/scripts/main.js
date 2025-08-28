// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7dMPt":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3cYfC":[function(require,module,exports,__globalThis) {
// -------------------------------
// COMUNICAÇÃO
// -------------------------------
// Pegando os elementos do HTML
const textarea = document.getElementById("mensage"); // Campo de texto da mensagem
const btnAdd = document.getElementById("btnAdd"); // Botão "Adicionar comunicação"
const listaMensagens = document.getElementById("mensagens"); // Área onde as mensagens serão exibidas
// Evento que é disparado sempre que o usuário digita no textarea
textarea.addEventListener("input", function() {
    // Se o campo estiver vazio (ou só com espaços), desabilita o botão
    btnAdd.disabled = textarea.value.trim() === "";
});
// Evento que é disparado quando o usuário clica no botão
btnAdd.addEventListener("click", function() {
    // Pega o texto digitado, removendo espaços extras no começo e fim
    const texto = textarea.value.trim();
    // Só adiciona a mensagem se o campo não estiver vazio
    if (texto !== "") {
        // Cria um novo elemento <div> para a nova mensagem
        const novaMensagem = document.createElement("div");
        // Adiciona as classes Bootstrap que deixam o estilo igual ao exemplo
        novaMensagem.classList.add("container", "border", "rounded", "m-0", "mb-2");
        // Define o conteúdo HTML da nova mensagem
        novaMensagem.innerHTML = `
            <b>--nome de usuario--</b>
            <p class="mb-0 w-100">${texto}</p>
        `;
        // Adiciona a nova mensagem no final da lista
        listaMensagens.appendChild(novaMensagem);
        // Limpa o campo de texto para o usuário digitar outra mensagem
        textarea.value = "";
        // Desabilita o botão novamente até que o usuário digite algo novo
        btnAdd.disabled = true;
    }
});
// -------------------------------
// SOLICITAÇÃO DE PEÇAS (novo trecho)
// -------------------------------
// pega os elementos
const btnAdicionar = document.getElementById("btn-adicionar");
const formPeca = document.getElementById("form-peca");
const tabela = document.getElementById("tabela-pecas");
// quando clicar no botão, mostra o formulário
if (btnAdicionar) btnAdicionar.addEventListener("click", ()=>{
    formPeca.style.display = "block"; // exibe o form
    btnAdicionar.style.display = "none"; // esconde o botão
});
// quando enviar o formulário
if (formPeca) formPeca.addEventListener("submit", (event)=>{
    event.preventDefault(); // evita recarregar a página
    // pega os valores digitados
    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const partnumber = document.getElementById("partnumber").value;
    // cria uma nova linha <tr>
    const novaLinha = document.createElement("tr");
    // insere as células <td>
    novaLinha.innerHTML = `
            <td style="padding:8px;">${nome}</td>
            <td style="padding:8px;">${quantidade}</td>
            <td style="padding:8px;">${partnumber}</td>
        `;
    // adiciona a linha na tabela
    tabela.appendChild(novaLinha);
    // limpa o formulário
    formPeca.reset();
    // esconde o formulário e mostra o botão de novo
    formPeca.style.display = "none";
    btnAdicionar.style.display = "block";
});
// -------------------------------
// UPLOAD DE ARQUIVOS
// -------------------------------
const btnArquivo = document.getElementById("btn-arquivo");
const formArquivo = document.getElementById("form-arquivo");
const tabelaArquivos = document.getElementById("tabela-arquivos");
// mostrar formulário
btnArquivo.addEventListener("click", ()=>{
    formArquivo.style.display = "block";
    btnArquivo.style.display = "none";
});
// ao enviar o formulário
formArquivo.addEventListener("submit", (event)=>{
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const descricao = document.getElementById("descricaoArquivo").value.trim();
    if (fileInput.files.length > 0 && descricao) {
        const arquivo = fileInput.files[0]; // pega o arquivo enviado
        const nomeArquivo = arquivo.name;
        // cria uma URL temporária para permitir download
        const urlDownload = URL.createObjectURL(arquivo);
        // cria a nova linha da tabela
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
            <td colspan="5" style="padding:8px;">${nomeArquivo}</td>
            <td colspan="10" style="padding:8px;">${descricao}</td>
            <td colspan="1" style="padding:8px;">
            <a href="${urlDownload}" download="${nomeArquivo}" style="padding:8px;">
            \u{2B07}\u{FE0F}
            </a>
            </td>
        `;
        // adiciona na tabela
        tabelaArquivos.appendChild(novaLinha);
        // limpa e esconde formulário
        formArquivo.reset();
        formArquivo.style.display = "none";
        btnArquivo.style.display = "block";
    }
});
// -------------------------------
// ASSINATURA CLIENTE COM VALIDAÇÃO, MODAL E DESABILITAÇÃO
// -------------------------------
// elementos do DOM
const btnAssCliente = document.getElementById("btn-ass-cliente");
const btnAssCliente2 = document.getElementById("btn-ass-cliente2");
const formCliente = document.getElementById("form-cliente");
const btnSalvarCliente = document.getElementById("btn-salvar-cliente");
const btnLimparCliente = document.getElementById("btn-limpar-cliente");
const imgCliente = document.getElementById("img-cliente");
const canvas = document.getElementById("canvas-cliente");
const ctx = canvas.getContext("2d");
// configurar traço do canvas
ctx.lineWidth = 2;
ctx.lineCap = 'round';
ctx.strokeStyle = '#000';
let desenhando = false;
let assinaturaPendente = null; // guarda dados temporários
// garantir que modal comece escondido ao carregar a página
window.addEventListener("load", ()=>{
    const modal = document.getElementById("modal-confirmacao");
    if (modal) modal.style.display = "none";
    assinaturaPendente = null;
});
// mostrar formulário ao clicar no botão
btnAssCliente.addEventListener("click", ()=>{
    formCliente.style.display = "block";
    btnAssCliente.style.display = "none";
});
// iniciar desenho
canvas.addEventListener("mousedown", iniciar);
canvas.addEventListener("touchstart", iniciar);
function iniciar(e) {
    desenhando = true;
    ctx.beginPath();
    ctx.moveTo(getX(e), getY(e));
    e.preventDefault();
}
// desenhar
canvas.addEventListener("mousemove", desenhar);
canvas.addEventListener("touchmove", desenhar);
function desenhar(e) {
    if (!desenhando) return;
    ctx.lineTo(getX(e), getY(e));
    ctx.stroke();
    e.preventDefault();
}
// parar desenho
canvas.addEventListener("mouseup", parar);
canvas.addEventListener("mouseleave", parar);
canvas.addEventListener("touchend", parar);
function parar() {
    desenhando = false;
}
// pegar coordenadas do mouse ou touch
function getX(e) {
    if (e.touches) return e.touches[0].clientX - canvas.getBoundingClientRect().left;
    return e.clientX - canvas.getBoundingClientRect().left;
}
function getY(e) {
    if (e.touches) return e.touches[0].clientY - canvas.getBoundingClientRect().top;
    return e.clientY - canvas.getBoundingClientRect().top;
}
// limpar canvas
btnLimparCliente.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("nomeCliente").value = "";
});
// IDs dos campos obrigatórios
const camposObrigatorios = [
    {
        id: "problema",
        label: "Problema"
    },
    {
        id: "realizado",
        label: "Servi\xe7o Realizado"
    },
    {
        id: "sos_causa",
        label: "Causa SOS"
    },
    {
        id: "sos_obs",
        label: "Observa\xe7\xf5es SOS"
    },
    {
        id: "obs_entrada",
        label: "Observa\xe7\xf5es de Entrada"
    },
    {
        id: "hora_entrada",
        label: "Hora de Entrada"
    },
    {
        id: "hora_saida",
        label: "Hora de Sa\xedda"
    },
    {
        id: "tempo_viagem",
        label: "Tempo de Viagem"
    },
    {
        id: "kms_rodados",
        label: "KMs Rodados"
    }
];
// modal
const modal = document.getElementById("modal-confirmacao");
const modalTexto = document.getElementById("modal-texto");
const modalCancelar = document.getElementById("modal-cancelar");
const modalConfirmar = document.getElementById("modal-confirmar");
function abrirModal(camposVazios) {
    let texto = "Deseja confirmar assinatura?";
    if (camposVazios.length > 0) texto += "<br>Os seguintes campos n\xe3o foram preenchidos:<br><ul>" + camposVazios.map((c)=>`<li>${c}</li>`).join('') + "</ul>";
    modalTexto.innerHTML = texto;
    modal.style.display = "flex";
}
function fecharModal() {
    modal.style.display = "none";
    assinaturaPendente = null;
}
modalCancelar.addEventListener("click", fecharModal);
modalConfirmar.addEventListener("click", ()=>{
    if (assinaturaPendente) salvarAssinatura(assinaturaPendente.nome, assinaturaPendente.dataURL);
    fecharModal();
});
// clique no botão salvar assinatura
btnSalvarCliente.addEventListener("click", ()=>{
    const nome = document.getElementById("nomeCliente").value.trim();
    if (!nome) {
        alert("Digite o nome do respons\xe1vel!");
        return;
    }
    const camposVazios = camposObrigatorios.filter((c)=>!document.getElementById(c.id).value.trim()).map((c)=>c.label);
    const dataURL = canvas.toDataURL();
    assinaturaPendente = {
        nome,
        dataURL
    };
    abrirModal(camposVazios); // abre modal, confirma ou cancela
});
// função que realmente salva assinatura
function salvarAssinatura(nome, dataURL) {
    imgCliente.src = dataURL;
    imgCliente.alt = "Assinatura de " + nome;
    imgCliente.style.display = "block";
    let info = document.getElementById("info-ass-cliente");
    if (!info) {
        info = document.createElement("div");
        info.id = "info-ass-cliente";
        info.style.marginTop = "5px";
        imgCliente.parentElement.appendChild(info);
    }
    const agora = new Date();
    const dataHoraFormatada = agora.toLocaleString();
    info.textContent = `Assinatura de ${nome} salva em ${dataHoraFormatada}`;
    // esconder formulário e desabilitar botões de assinatura
    formCliente.style.display = "none";
    btnAssCliente.disabled = true;
    btnAssCliente2.disabled = true;
    btnAssCliente.style.display = "none";
    btnAssCliente2.style.display = "none";
    // DESABILITAR CAMPOS VERIFICADOS, mantendo os valores
    camposObrigatorios.forEach((campo)=>{
        const el = document.getElementById(campo.id);
        if (el) el.disabled = true;
    });
    // DESABILITAR BOTÃO DE SALVAR OS
    const btnSalvarOS = document.getElementById("salvar_os");
    if (btnSalvarOS) btnSalvarOS.disabled = true;
}
// -------------------------------
// ASSINATURA TECNICO
// -------------------------------
const btnAssTecnico = document.getElementById("btn-ass-tecnico");
const btnAssTecnico2 = document.getElementById("btn-ass-tecnico2");
const imgTecnico = document.getElementById("img-tecnico");
btnAssTecnico.addEventListener("click", ()=>{
    // exibe a assinatura do técnico
    imgTecnico.style.display = "block";
    // cria ou atualiza o texto com data/hora
    let infoTec = document.getElementById("info-ass-tecnico");
    if (!infoTec) {
        infoTec = document.createElement("div");
        infoTec.id = "info-ass-tecnico";
        infoTec.style.marginTop = "5px";
        imgTecnico.parentElement.appendChild(infoTec);
    }
    const agora = new Date();
    const dataHoraFormatada = agora.toLocaleString(); // ex: 27/08/2025 09:30:15
    infoTec.textContent = `Assinatura do t\xe9cnico registrada em ${dataHoraFormatada}`;
    // opcional: desabilita o botão para não clicar novamente
    btnAssTecnico.style.display = "none";
    btnAssTecnico2.style.display = "none";
});

},{}]},["7dMPt","3cYfC"], "3cYfC", "parcelRequire7af2", {})

//# sourceMappingURL=main.js.map
