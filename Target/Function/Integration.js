var l=(e={})=>{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&e[t]===!0&&(e[t]=f[t]);const{Path:a,Cache:c,Logger:p,Exclude:m,Action:u,Rome:i}=s(f,e),r=new Set;if(typeof a<"u"&&(Array.isArray(a)||a instanceof Set))for(const t of a)r.add(t);return{name:"astro-rome",hooks:{"astro:build:done":async({dir:t})=>{r.size||r.add(t);const n=await(await import("@rometools/js-api")).Rome.create({distribution:(await import("@rometools/js-api")).Distribution.NODE}),d=s(u,{Wrote:async o=>{try{return n.formatContent(o.Buffer.toString(),{filePath:(await import("path")).resolve(o.Input)}).content}catch{return o.Buffer}}});typeof i=="object"&&n&&(i.$schema=void 0,n.applyConfiguration(i));for(const o of r)await(await(await(await new(await import("files-pipe")).default(c,p).In(o)).By("**/*.{js,mjs,cjs,ts}")).Not(m)).Pipe(d)}}}};const{default:f}=await import("../Variable/Option.js"),{default:s}=await import("typescript-esbuild/Target/Function/Merge.js");export{f as Default,s as Merge,l as default};
