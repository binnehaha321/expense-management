import{j as R,r as h,R as Q}from"./react-4213cd65.js";import{c as W}from"./react-dom-e0be7792.js";import{L as V,N as O,B as Z}from"./react-router-dom-b65c81b1.js";import{R as G,B as k,T as ee,F as m,I as C,m as H,M as te,S as $,D as ne,a as re,b as oe,c as ae,P as j,d as ie,L as U,e as se,f as ce,C as le,t as de}from"./antd-2f88915b.js";import{u as z,a as B,P as he}from"./react-redux-c57dc25c.js";import{a as ue}from"./axios-707ed124.js";import{c as J,a as me}from"./@reduxjs-d54424b5.js";import"./hoist-non-react-statics-d23de475.js";import{G as pe,J as ge,N as ye,O as fe}from"./@ant-design-8b48a83b.js";import{d as be,e as xe}from"./react-router-1f88ae2e.js";import"./classnames-96ac3354.js";import"./scheduler-04ce0582.js";import"./@remix-run-6e40cad8.js";import"./rc-util-f7587060.js";import"./react-is-3e8633c1.js";import"./@babel-49503037.js";import"./rc-resize-observer-1a753585.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-motion-e05478eb.js";import"./rc-picker-c5087866.js";import"./dayjs-1b96d9b2.js";import"./@rc-component-411c53a4.js";import"./rc-trigger-13516a3c.js";import"./rc-align-9c4e8afc.js";import"./dom-align-529d0cdc.js";import"./rc-menu-d6d2c29c.js";import"./rc-overflow-44a23a1f.js";import"./rc-select-d010c01b.js";import"./rc-virtual-list-42c0bff9.js";import"./rc-tree-3c0394cc.js";import"./@ctrl-fb5a5473.js";import"./rc-field-form-b99edb68.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-dialog-a06ec84e.js";import"./rc-input-number-7038ccc7.js";import"./rc-notification-360ea666.js";import"./rc-tooltip-e8f32aa7.js";import"./rc-table-add627e3.js";import"./rc-pagination-8ee09e99.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-43afd7cb.js";import"./rc-dropdown-7b2e7122.js";import"./copy-to-clipboard-113365a7.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-188c71df.js";import"./rc-input-20524c8f.js";import"./use-sync-external-store-70c20b7d.js";import"./immer-41fd5235.js";import"./redux-8391bb11.js";import"./redux-thunk-ef899f4c.js";import"./@emotion-c0b5c018.js";import"./stylis-24eb1ffd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Se=R.Fragment,e=R.jsx,y=R.jsxs,we=()=>e(G,{status:"warning",title:"Tính năng đang được hoàn thiện.",extra:e(V,{to:"/",children:e(k,{type:"primary",children:"Tạo bảng chi tiêu"},"console")})}),A=()=>e("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/spreadsheets/d/1K5n0X-Dlkwxr2vKYFue9T06KPeahrr-ruvcxNwzkudQ/edit?usp=sharing",children:"Truy cập spreadsheet"}),ke=()=>e("div",{style:{marginTop:"1rem",paddingInline:"1rem"},children:e(ee,{items:[{children:e(A,{})},{children:"Tạo một sheet mới."},{children:"Tạo dữ liệu tại bảng chi tiêu"},{children:"Upload chi tiêu lên sheet đã tạo"}]})}),Te=[{value:"Ăn uống",label:"Ăn uống"},{value:"Di chuyển",label:"Di chuyển"},{value:"Đám tiệc",label:"Đám tiệc"},{value:"Học phí",label:"Học phí"},{value:"Quần áo",label:"Quần áo"},{value:"Giải trí",label:"Giải trí"},{value:"Du lịch",label:"Du lịch"},{value:"Gia dụng",label:"Gia dụng"},{value:"Đầu tư",label:"Đầu tư"},{value:"Sức khỏe",label:"Sức khỏe"},{value:"Điện tử",label:"Điện tử"},{value:"Dịch vụ công",label:"Dịch vụ công"},{value:"Xe hơi",label:"Xe hơi"},{value:"Cá nhân",label:"Cá nhân"}],F=t=>`${t}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),P=t=>JSON.stringify(t),ve=t=>JSON.parse(t),De=(t,o)=>{const n=P(o);localStorage.setItem(t,n)},Ce=t=>{localStorage.removeItem(t)},Ie=t=>localStorage.getItem(t),Ne=t=>{const{onFinish:o,onFieldsChange:n,required:a=!1,requiredMsg:i,placeholder:r,name:p,label:u,button_title:x,icon:w,loading:l,form:g,requireKey:S}=t;return y(m,{form:g,layout:"vertical",onFinish:o,onFieldsChange:n,children:[e(m.Item,{rules:[{required:a,message:i}],name:p,label:u,children:e(C,{placeholder:r})}),S&&e(m.Item,{rules:[{required:a,message:"Vui lòng nhập mã truy cập"}],name:"access-key",label:"Mã truy cập",children:e(C.Password,{})}),x&&w&&e(k,{type:"primary",htmlType:"submit",icon:w,loading:l,children:x})]})},K=ue.create({baseURL:"https://v1.nocodeapi.com/khanh79/google_sheets/KNGKwSNAhucrqRxr",headers:{"Content-Type":"application/json"}}),Me=async(t,o)=>{var n;try{if(t&&o){const a=await K.post(`/addRows?tabId=${t}`,o);return(n=a==null?void 0:a.data)==null?void 0:n.data}return}catch(a){return await a}},Oe=async t=>{var o;try{if(t){const n=await K.get(`?tabId=${t}`);return(o=n==null?void 0:n.data)==null?void 0:o.data}return}catch(n){return await n}},Fe=async(t,o)=>{var n;try{if(t&&o){const a=await K.post(`?tabId=${t}`,o);return(n=a==null?void 0:a.data)==null?void 0:n.data}return}catch(a){return await a}},_e=["datetime","category","expense","cost","note"],Le=["Ngày","Danh mục","Mục chi","Thành tiền","Ghi chú"],Re={open:!1},Y=J({name:"modal",initialState:Re,reducers:{setModalOpen:(t,o)=>{t.open=o.payload}}}),{setModalOpen:L}=Y.actions,Pe=Y.reducer,Ke=t=>{const{onCancel:o}=t,[n,a]=H.useMessage(),{open:i}=z(c=>c.modal),[r]=m.useForm(),[p,u]=h.useState(!1),{json_data:x}=z(c=>c.expense),[w]=h.useState([_e,Le]),l=B(),[g,S]=h.useState(!1),[I,N]=h.useState(""),T=h.useCallback(c=>{var d,b,v,D;let f="";((d=c[0])==null?void 0:d.name[0])==="tabId"&&(f=(b=c[0])==null?void 0:b.value,S(f==="development"));const s=((v=c[0])==null?void 0:v.name[0])==="access-key"&&((D=c[0])==null?void 0:D.value);N(s)},[]);return y(Se,{children:[a,e(te,{open:i,title:"Tên sheet bạn muốn lưu vào",onCancel:o,confirmLoading:p,destroyOnClose:!0,onOk:()=>{if(g)if(I==="nha65")r.submit();else{n.error("Mã truy cập không hợp lệ!");return}r.submit()},okText:"Upload",children:e(Ne,{form:r,onFinish:async c=>{u(!0);const f=await Oe(c==null?void 0:c.tabId);(f==null?void 0:f.length)===0&&await Fe(c==null?void 0:c.tabId,P(w)),await Me(c==null?void 0:c.tabId,x),l(L(!1)),r.resetFields(),n.success("Đã upload thành công!"),u(!1),S(!1)},onFieldsChange:T,name:"tabId",loading:p,required:!0,requiredMsg:"Vui lòng nhập tên sheet!",placeholder:"Nhập tên sheet",requireKey:g,label:"Tên sheet"})})]})},qe={json_data:""},X=J({name:"expense",initialState:qe,reducers:{submit:(t,o)=>{t.json_data=o.payload},remove:t=>{t.json_data=""}}}),{submit:_,remove:Ee}=X.actions,$e=X.reducer,je=()=>{const t=new Date().getMonth(),o=new Date().getFullYear(),[n]=m.useForm(),[a,i]=h.useState(0),[r,p]=H.useMessage(),u=B(),[x,w]=h.useState(1),[l,g]=h.useState([]),S=[{title:"No.",dataIndex:"key",key:"key"},{title:"Ngày",dataIndex:"datetime",key:"datetime"},{title:"Danh mục",dataIndex:"category",key:"category"},{title:"Mục chi",dataIndex:"expense",key:"expense"},{title:"Thành tiền",dataIndex:"cost",key:"cost",render:s=>F(s)},{title:"Ghi chú",dataIndex:"note",key:"note"},{dataIndex:"add_expense",key:"add_expense",render:(s,d)=>l.length>=1?e(j,{title:"Chắc chắn xóa?",onConfirm:()=>I(d.key),children:e("a",{style:{color:"red"},children:"Xóa chi tiêu"})}):null}],I=s=>{const d=l.filter(b=>b.key!==s);g(d),u(_(JSON.stringify(d))),r.success("Đã xóa chi tiêu!")},N=s=>{const{$D:d,$M:b,$y:v}=s.datetime,D={...s,key:x,datetime:`${d}/${b+1}/${v}`},E=[...l,D];g(E),u(_(P(E))),w(x+1),n.resetFields()};h.useEffect(()=>{i((()=>l.reduce((d,b)=>d+b.cost,0))())},[l]);const T=()=>{l.length>0?(De("data",l),c()):M()},q=()=>{l.length>0?(Ce("data"),g([]),u(Ee()),f()):M()};h.useEffect(()=>{const s=Ie("data");if(s){const d=ve(s);g(d),u(_(s))}},[]),h.useEffect(()=>{let s;return l.length!==0&&(s=setTimeout(T,6e4)),()=>clearTimeout(s)},[l]);const M=()=>{r==null||r.warning("Chưa có dữ liệu!")},c=()=>{r==null||r.success("Đã lưu tạm thời!")},f=()=>{r==null||r.success("Đã xóa dữ liệu tạm thời!")};return y("div",{className:"container",children:[p,y("h3",{style:{color:"black"},children:["Tháng ",t,"/",o," (",e(A,{}),")"]}),y("h3",{style:{color:"orange"},children:["Tổng chi tiêu: ",F(a)]}),y(m,{form:n,layout:"vertical",style:{backgroundColor:"#FFF",padding:"1rem",marginBlock:"1rem",borderRadius:"10px"},onFinish:N,children:[y($,{align:"start",wrap:!0,children:[e(m.Item,{rules:[{required:!0,message:"Chọn ngày"}],label:"Ngày",name:"datetime",children:e(ne,{format:"DD/MM/YYYY",placeholder:"Chọn ngày",autoFocus:!0})}),e(m.Item,{rules:[{required:!0,message:"Chọn danh mục"}],label:"Danh mục",name:"category",children:e(re,{options:Te,style:{width:"150px"},showSearch:!0,placeholder:"Chọn danh mục"})}),e(m.Item,{rules:[{required:!0,message:"Nhập mục chi"}],label:"Mục chi",name:"expense",children:e(C,{placeholder:"Đá banh"})}),e(m.Item,{rules:[{required:!0,message:"Nhập giá tiền"}],label:"Thành tiền",name:"cost",children:e(oe,{formatter:s=>F(s),parser:s=>s.replace(/$\s?|(,*)/g,""),placeholder:"43,000",style:{width:"200px"}})}),e(m.Item,{label:"Ghi chú",name:"note",children:e(C.TextArea,{style:{width:"200px"},placeholder:"Địa điểm, dịp lễ,..."})})]}),e(k,{type:"primary",htmlType:"submit",style:{width:"150px",display:"block"},icon:e(pe,{}),children:"Thêm chi tiêu"})]}),e(ae,{scroll:{y:"400px"},columns:S,dataSource:l,pagination:{hideOnSinglePage:!0,pageSize:100},footer:()=>y($,{children:[e(k,{onClick:T,type:"dashed",danger:!0,icon:e(ge,{}),children:"Lưu tạm thời"}),e(j,{title:"Chắc chắn xóa?",description:"Hãy đảm bảo bạn đã lưu dữ liệu trên.",onConfirm:q,children:e(ie,{title:"Khuyến cáo: Hãy xóa định kỳ 30 ngày/ lần",placement:"right",children:e(k,{type:"primary",danger:!0,icon:e(ye,{}),children:"Xóa dữ liệu tạm thời"})})}),l.length!==0&&e(k,{onClick:()=>u(L(!0)),type:"primary",icon:e(fe,{}),children:"Upload lên Google sheet"})]})}),e(Ke,{onCancel:()=>u(L(!1))})]})},ze=[{path:"/tao-spreadsheet",element:we},{path:"/",element:je,index:!0},{path:"/huong-dan",element:ke}],Ge=()=>{const t=[{label:e(O,{to:"/tao-spreadsheet",children:"Tạo spreadsheet"}),key:"1"},{label:e(O,{to:"/",children:"Tạo bảng chi tiêu"}),key:"2"},{label:e(O,{to:"/huong-dan",children:"Hướng dẫn"}),key:"3"}];return e(U.Header,{style:{position:"sticky",top:0,zIndex:1,width:"100%"},children:e(se,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:t})})},He=({children:t})=>y(U,{children:[e(Ge,{}),t]}),Ue=()=>{const[t,o]=h.useState({width:void 0,height:void 0});return h.useEffect(()=>{const n=()=>{o({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),t},Be=()=>e(G,{title:"Không hỗ trợ trên thiết bị di động!",extra:e(ce.Text,{children:"Sử dụng máy tính bảng hoặc desktop để có trải nghiệm tốt nhất."})});function Je(){const{width:t}=Ue();return t&&t<768?e(Be,{}):e(be,{children:ze.map(n=>e(xe,{path:n.path,index:n.index,element:e(He,{children:e(n.element,{})})},n.path))})}const Ae=me({reducer:{expense:$e,modal:Pe}});W.createRoot(document.getElementById("root")).render(e(Q.StrictMode,{children:e(Z,{children:e(he,{store:Ae,children:e(le,{theme:{algorithm:de.compactAlgorithm,token:{colorPrimary:"#00b96b"}},children:e(Je,{})})})})}));
