import t from "files-pipe/Target/Library/Merge.js";
import o from "files-pipe/Target/Option/Index.js";
var s=t(o,{Pipe:{Failed:async e=>`Error: Cannot format file ${e.Input}!`,Accomplished:async e=>`Formatted ${e.Input} in ${e.Output}.`,Fulfilled:async e=>e.Files>0?`Successfully formatted a total of ${e.Files} JS and TS ${e.Files===1?"file":"files"}.`:!1}});export { s as default };

