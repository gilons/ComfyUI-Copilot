function getImportPath(filename) {
            return `./${filename}`;
        }
            const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["copilot_web/workflowChat-DdXG5X50.js","copilot_web/input.js","copilot_web/vendor-markdown-Mq66gLHN.js","copilot_web/vendor-react-6F4zURhM.js","copilot_web/message-components-DJgOOc48.js","copilot_web/assets/input-hvEm_GTM.css","copilot_web/fonts.css"].map(path => {
                        const apiBase = window.comfyAPI?.api?.api?.api_base;
                        if (apiBase) {
                            // 有 API base 时，使用完整路径
                            return `${apiBase.substring(1)}/${path}`;
                        } else {        
                            // 没有 API base 时，使用相对路径
                            return `./${path}`;
                        }
                    }))))=>i.map(i=>d[i]);
import{_ as a}from"./input.js";import{j as t}from"./vendor-markdown-Mq66gLHN.js";import{r,R as i}from"./vendor-react-6F4zURhM.js";import{C as n}from"./message-components-DJgOOc48.js";/* empty css     */const o={EXPLAIN_NODE:"copilot:explain-node"},d=i.lazy(()=>a(()=>import(getImportPath("workflowChat-DdXG5X50.js")).then(e=>e.w),__vite__mapDeps([0,1,2,3,4,5,6])).then(e=>({default:e.default})));function p(){const[e,s]=r.useState(!1);return r.useEffect(()=>{const l=()=>{s(!0)};return window.addEventListener(o.EXPLAIN_NODE,l),()=>window.removeEventListener(o.EXPLAIN_NODE,l)},[]),t.jsx(n,{children:t.jsx("div",{className:"h-full w-full flex flex-col",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{className:"h-full w-full flex items-center justify-center",children:"Loading..."}),children:t.jsx(d,{visible:!0,triggerUsage:e,onUsageTriggered:()=>s(!1)})})})})}export{p as default};
