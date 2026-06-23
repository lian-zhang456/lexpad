import{j as e}from"./index-qg8lKcaM.js";import{f as y,F,w as S,e as j,E,o as P,N as h,O as z,$ as T}from"./FileNode-DVMmr4Hj.js";import{r as w}from"./iframe-CrgEqfue.js";import"./index-DUvJZ4at.js";import"./preload-helper-Dp1pzeXC.js";function v({payload:r}){const[i]=P();return w.useEffect(()=>{i.update(()=>{const l=h();l.clear();const p=z();p.append(T(r)),l.append(p)})},[i,r]),null}function t({payload:r}){return e.jsxs(y,{initialConfig:{namespace:"FileNodeStory",nodes:[F],onError:console.error,theme:{}},children:[e.jsx(S,{contentEditable:e.jsx(E,{style:{outline:"none",padding:"8px"}}),placeholder:null,ErrorBoundary:j}),e.jsx(v,{payload:r})]})}const b={title:"Lexpad/FileNode",tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>e.jsx(t,{payload:{fileName:"report.pdf",fileSize:204800,fileType:"application/pdf",url:"#"}})},o={render:()=>e.jsx(t,{payload:{fileName:"photo.png",fileSize:1048576,fileType:"image/png",url:"#"}})},n={render:()=>e.jsx(t,{payload:{fileName:"note.txt",fileSize:512,fileType:"text/plain",url:"#"}})};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <FileNodePreview payload={{
    fileName: 'report.pdf',
    fileSize: 204800,
    fileType: 'application/pdf',
    url: '#'
  }} />
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,f,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <FileNodePreview payload={{
    fileName: 'photo.png',
    fileSize: 1048576,
    fileType: 'image/png',
    url: '#'
  }} />
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var x,N,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <FileNodePreview payload={{
    fileName: 'note.txt',
    fileSize: 512,
    fileType: 'text/plain',
    url: '#'
  }} />
}`,...(g=(N=n.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};const B=["PDF","Image","SmallFile"];export{o as Image,a as PDF,n as SmallFile,B as __namedExportsOrder,b as default};
