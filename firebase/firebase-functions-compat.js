!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function(D,P){"use strict";try{!(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t,n=e(D);class a extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,r.prototype.create)}}class r{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var r,n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],s=s?(r=n,s.replace(o,(e,t)=>{var n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",s=`${this.serviceName}: ${s} (${i}).`;return new a(i,s,n)}}const o=/\{\$([^}]+)}/g;function c(e){return e&&e._delegate?e._delegate:e}class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const s="type.googleapis.com/google.protobuf.Int64Value",u="type.googleapis.com/google.protobuf.UInt64Value";function l(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function h(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case s:case u:var t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>h(e)):"function"==typeof e||"object"==typeof e?l(e,e=>h(e)):e}const p="functions",d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class f extends a{constructor(e,t,n){super(`${p}/${e}`,t||""),this.details=n,Object.setPrototypeOf(this,f.prototype)}}function g(e,t){let n=function(e){if(200<=e&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),r=n,i=void 0;try{var s=t&&t.error;if(s){const e=s.status;if("string"==typeof e){if(!d[e])return new f("internal","internal");n=d[e],r=e}var a=s.message;"string"==typeof a&&(r=a),i=s.details,void 0!==i&&(i=h(i))}}catch(e){}return"ok"===n?null:new f(n,r,i)}class m{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{var e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){var t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}const v="us-central1";class w{constructor(e,t,n,r,i=v){this.app=e,this.emulatorOrigin=null,this.contextProvider=new m(t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{var s=new URL(i);this.customDomain=s.origin+("/"===s.pathname?"":s.pathname),this.region=v}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){var t=this.app.options.projectId;return null===this.emulatorOrigin?null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`:`${this.emulatorOrigin}/${t}/${this.region}/${e}`}}function y(i,s,a){return e=>{return t=e,n=a||{},r=(e=i)._url(s),k(e,r,t,n);var t,n,r}}async function k(e,t,n,r){var i={data:n=function t(e){if(null==e)return null;if("number"==typeof(e=e instanceof Number?e.valueOf():e)&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>t(e));if("function"==typeof e||"object"==typeof e)return l(e,e=>t(e));throw new Error("Data cannot be encoded in JSON: "+e)}(n)};const s={};var a=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);a.authToken&&(s.Authorization="Bearer "+a.authToken),a.messagingToken&&(s["Firebase-Instance-ID-Token"]=a.messagingToken),null!==a.appCheckToken&&(s["X-Firebase-AppCheck"]=a.appCheckToken);const o=function(n){let r=null;return{promise:new Promise((e,t)=>{r=setTimeout(()=>{t(new f("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{r&&clearTimeout(r)}}}(r.timeout||7e4);a=await Promise.race([async function(e,t,n){n["Content-Type"]="application/json";let r;try{r=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let i=null;try{i=await r.json()}catch(e){}return{status:r.status,json:i}}(t,i,s),o.promise,e.cancelAllRequests]);if(o.cancel(),!a)throw new f("cancelled","Firebase Functions instance was deleted.");i=g(a.status,a.json);if(i)throw i;if(!a.json)throw new f("internal","Response is not valid JSON object.");let c=a.json.data;if(void 0===c&&(c=a.json.result),void 0===c)throw new f("internal","Response is missing data field.");return{data:h(c)}}const T="@firebase/functions",E="0.11.10";function b(e,t,n){c(e).emulatorOrigin=`http://${t}:${n}`}function I(e,t,n){return r=c(e),i=t,s=n,e=>k(r,i,e,s||{});var r,i,s}P._registerComponent(new i(p,(e,{instanceIdentifier:t})=>{var n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("messaging-internal"),s=e.getProvider("app-check-internal");return new w(n,r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),P.registerVersion(T,E,t),P.registerVersion(T,E,"esm2017");var N;class A{constructor(e,t){this.app=e,this._delegate=t,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,t){return y(c(this._delegate),e,t)}httpsCallableFromURL(e,t){return I(this._delegate,e,t)}useFunctionsEmulator(e){var t=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(null==t)throw new a("functions","No origin provided to useFunctionsEmulator()");if(null==t[2])throw new a("functions","Port missing in origin provided to useFunctionsEmulator()");return b(this._delegate,t[1],Number(t[2]))}useEmulator(e,t){return b(this._delegate,e,t)}}const C="us-central1",O=(e,{instanceIdentifier:t})=>{var n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("functions").getImmediate({identifier:null!=t?t:C});return new A(n,r)};N={Functions:A},n.default.INTERNAL.registerComponent(new i("functions-compat",O,"PUBLIC").setServiceProps(N).setMultipleInstances(!0)),n.default.registerVersion("@firebase/functions-compat","0.3.16")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-functions-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-functions-compat.js.map