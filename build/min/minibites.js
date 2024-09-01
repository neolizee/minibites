"use strict";const t=e=>e<=1?e:e*t(e-1);class e{constructor(t,e=null){this.value=t,this.next=e}}exports.CreateLinkedList=class{constructor(){this.head=null}add(t){const r=new e(t);if(this.head){let t=this.head;for(;t.next;)t=t.next;t.next=r}else this.head=r}print(){let t=this.head;for(;t;)console.log(t.value),t=t.next}delete(t){if(this.head&&this.head.value===t)this.head=this.head.next;else{let e=this.head;for(;e&&e.next;){if(e.next.value===t)return void(e.next=e.next.next);e=e.next}}}find(t){let e=this.head;for(;e;){if(e.value===t)return e;e=e.next}return null}},exports.Node=e,exports.useBinarySearch=(t,e)=>{let r=0,n=t.length-1;for(;r<=n;){const a=Math.floor((r+n)/2);if(e===t[a])return a;e>t[a]?r=a+1:n=a-1}return-1},exports.useFactorial=t,exports.useHEXToRGB=t=>{const e=parseInt(t.substring(1),16);return{r:e>>16&255,g:e>>8&255,b:255&e}},exports.useHasClass=(t,e)=>{if(!t||!e)return!1;return e=" "+e+" ",(" "+t.className+" ").replace(/[\r\n\t\f]+/g," ").indexOf(e)>-1},exports.useHashingMap=(t,e)=>t&&e?new Map(t.map((t=>[t[e],t]))):new Map,exports.useNumberFormat=(t,e=0)=>null!=t?new Intl.NumberFormat("ru-RU",{maximumFractionDigits:e,style:"currency",currency:"RUB"}).format(null!=t?t:0):"",exports.useRGBAToHEX=(t,e,r,n)=>"#".concat(t.toString(16).padStart(2,"0")).concat(e.toString(16).padStart(2,"0")).concat(r.toString(16).padStart(2,"0")).concat(Math.round(255*n).toString(16).padStart(2,"0")),exports.useRGBToHEX=(t,e,r)=>"#".concat(t.toString(16).padStart(2,"0")).concat(e.toString(16).padStart(2,"0")).concat(r.toString(16).padStart(2,"0")),exports.useUUID=()=>crypto.randomUUID();
