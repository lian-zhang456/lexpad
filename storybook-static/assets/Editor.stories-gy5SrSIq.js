const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Editor-D1wmYvk2.js","./index-qg8lKcaM.js","./iframe-CrgEqfue.js","./preload-helper-Dp1pzeXC.js","./index-DUvJZ4at.js","./FileNode-DVMmr4Hj.js"])))=>i.map(i=>d[i]);
import{_}from"./preload-helper-Dp1pzeXC.js";import{j as e}from"./index-qg8lKcaM.js";import{r as C}from"./iframe-CrgEqfue.js";import{E as w}from"./Editor-D1wmYvk2.js";import"./index-DUvJZ4at.js";import"./FileNode-DVMmr4Hj.js";const P={title:"Lexpad/Editor",component:w,tags:["autodocs"],parameters:{layout:"padded"}},r={},t={args:{placeholder:"請開始輸入內容..."}},a={render:()=>{const[d,S]=C.useState("");function b(j,k){k.read(()=>{_(async()=>{const{$toMarkdown:s}=await import("./Editor-D1wmYvk2.js").then(E=>E.i);return{$toMarkdown:s}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(({$toMarkdown:s})=>{S(s())})})}return e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsx("div",{style:{flex:1,border:"1px solid #d0d7de",borderRadius:"6px"},children:e.jsx(w,{onChange:b,placeholder:"Type here to see Markdown output..."})}),e.jsx("pre",{style:{flex:1,background:"#f6f8fa",padding:"8px",borderRadius:"6px",fontSize:"13px",whiteSpace:"pre-wrap",margin:0},children:d||"(empty)"})]})}},o={args:{className:"lexpad-editor",contentEditableClassName:"lexpad-content",placeholder:"Styled editor..."},decorators:[d=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .lexpad-editor { border: 2px solid #0969da; border-radius: 8px; }
          .lexpad-content { min-height: 200px !important; padding: 12px !important; font-size: 15px; }
        `}),e.jsx(d,{})]})]};var n,p,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: '請開始輸入內容...'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,u,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [markdown, setMarkdown] = useState('');
    function handleChange(_state: EditorState, editor: LexicalEditor) {
      editor.read(() => {
        import('../markdown').then(({
          $toMarkdown
        }) => {
          setMarkdown($toMarkdown());
        });
      });
    }
    return <div style={{
      display: 'flex',
      gap: '24px'
    }}>\r
        <div style={{
        flex: 1,
        border: '1px solid #d0d7de',
        borderRadius: '6px'
      }}>\r
          <Editor onChange={handleChange} placeholder="Type here to see Markdown output..." />\r
        </div>\r
        <pre style={{
        flex: 1,
        background: '#f6f8fa',
        padding: '8px',
        borderRadius: '6px',
        fontSize: '13px',
        whiteSpace: 'pre-wrap',
        margin: 0
      }}>\r
          {markdown || '(empty)'}\r
        </pre>\r
      </div>;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    className: 'lexpad-editor',
    contentEditableClassName: 'lexpad-content',
    placeholder: 'Styled editor...'
  },
  decorators: [Story => <>\r
        <style>{\`
          .lexpad-editor { border: 2px solid #0969da; border-radius: 8px; }
          .lexpad-content { min-height: 200px !important; padding: 12px !important; font-size: 15px; }
        \`}</style>\r
        <Story />\r
      </>]
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const W=["Default","CustomPlaceholder","WithOnChange","WithStyling"];export{t as CustomPlaceholder,r as Default,a as WithOnChange,o as WithStyling,W as __namedExportsOrder,P as default};
