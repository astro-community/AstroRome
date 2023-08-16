import { Rome as c, Distribution as p } from "@rometools/js-api";
import { Files as m } from "files-pipe";
import s from "files-pipe/Target/Library/Merge.js";
import { resolve as u } from "path";
import d from "./Library/GetConfig.js";
import n from "./Option/Index.js";
var j=(e={})=>{for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&e[o]===!0&&(e[o]=n[o]);const t=s(n,e),r=new Set;if(typeof t.Path<"u"&&(t.Path instanceof Array||t.Path instanceof Set))for(const o of t.Path)r.add(o);return{name:"astro-rome",hooks:{"astro:build:done":async({dir:o})=>{try{r.size||r.add(o);const i=await c.create({distribution:p.NODE});(typeof t.Rome>"u"||t.Rome===null)&&(t.Rome=JSON.parse(await d("rome.json"))),t.Rome&&t.Rome!==!0&&(t.Rome.$schema=void 0,i.applyConfiguration(t.Rome));for(const f of r)await(await(await(await new m(t.Logger).In(f)).By("**/*.{js,mjs,cjs,ts}")).Not(t.Exclude)).Pipe(s(n.Pipe,{Wrote:async a=>{try{return i.formatContent(a.Buffer.toString(),{filePath:u(a.Input)}).content}catch{return a.Buffer}}}))}catch(i){console.log(i)}}}}};export { j as default };

