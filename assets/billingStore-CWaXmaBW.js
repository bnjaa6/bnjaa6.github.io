import{e as l,r as s,$ as p}from"./index-DeMr3pGG.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],I=l("trending-up",S),r="vetcare_invoices",g=()=>{const[a,c]=s.useState(()=>{const e=localStorage.getItem(r);return e?JSON.parse(e):p});s.useEffect(()=>{localStorage.setItem(r,JSON.stringify(a))},[a]);const i=s.useCallback(e=>{const t=new Date().toISOString(),n={...e,id:Math.random().toString(36).substr(2,9),createdAt:t,updatedAt:t};return c(o=>[...o,n]),n},[]),d=s.useCallback((e,t)=>{c(n=>n.map(o=>o.id===e?{...o,...t,updatedAt:new Date().toISOString()}:o))},[]),u=s.useCallback(e=>{c(t=>t.filter(n=>n.id!==e))},[]);return{invoices:a,addInvoice:i,updateInvoice:d,deleteInvoice:u}};export{I as T,g as u};
