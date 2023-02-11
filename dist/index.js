import { Distribution as m, Rome as p } from "@rometools/js-api";
import { files as d } from "files-pipeline";
import f from "files-pipeline/dist/lib/deepmerge.js";
import { resolve as s } from "path";
import l from "./lib/get-config.js";
import o from "./options/index.js";
var j=(e={})=>{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&e[t]===!0&&(e[t]=o[t]);e=f(o,e);const r=new Set;if(typeof e.path<"u"&&(e.path instanceof Array||e.path instanceof Set))for(const t of e.path)r.add(t);return{name:"astro-rome",hooks:{"astro:build:done":async({dir:t})=>{if(r.size||r.add(t),!e.rome)return;const i=await p.create({distribution:m.NODE});(typeof e.rome>"u"||e.rome===null)&&(e.rome=JSON.parse(await l("rome.json"))),e.rome&&e.rome!==!0&&i.applyConfiguration(e.rome);for(const n of r)await(await(await(await new d(e.logger).in(n)).by("**/*.{js,mjs,cjs,ts}")).not(e.exclude)).pipeline(f(o.pipeline,{wrote:async a=>i.formatContent(a.buffer.toString(),{filePath:s(a.inputPath)}).content}))}}}};export { j as default };

