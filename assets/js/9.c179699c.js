(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{400:function(t,e,s){t.exports=s.p+"assets/img/img.c2fe8d47.png"},423:function(t,e,s){"use strict";s.r(e);var r=s(56),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"elasticsearch写流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch写流程"}},[t._v("#")]),t._v(" Elasticsearch写流程")]),t._v(" "),r("p",[t._v("写入单个文档: Index请求")]),t._v(" "),r("p",[t._v("写入多个文档: Bulk请求")]),t._v(" "),r("p",[t._v("写入单个文档操作流程:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(400),alt:""}})]),t._v(" "),r("p",[t._v("1.客户端向node1发送写请求")]),t._v(" "),r("p",[t._v("2.根据文档id确定所属分片0,在通过内容路由表信息找到主分片在node3，请求转发到node3")]),t._v(" "),r("p",[t._v("3.node3上执行写操作。主分片写入成功，通知副分片，所有副分片写入成功，向协调节点报告成功，协调节点在报告给客户端写入成功。")]),t._v(" "),r("p",[t._v("写一致性策略默认是quorum:\nquorum  = int((primary+number_of_replicas)/2) +1")])])}),[],!1,null,null,null);e.default=n.exports}}]);