import{c as S,d as L,e as M,f as y,g as C}from"./chunk-YWMAMAD6.js";import"./chunk-DEXZKXLL.js";import{Ma as e,Na as t,Oa as n,Va as o,W as s,Wa as g,ab as d,ea as l,fa as m,w,wa as h,xa as k}from"./chunk-DEKCMHLB.js";var c=class a{constructor(r){this.router=r}currentPage="";pageTitle="";ngOnInit(){this.router.events.pipe(w(r=>r instanceof S)).subscribe(()=>{this.updatePageInfo()}),this.updatePageInfo()}updatePageInfo(){let r=this.router.url.split("/").pop()||"Inicio";this.currentPage=r.charAt(0).toUpperCase()+r.slice(1),this.pageTitle=this.getPageTitle(r)}getPageTitle(r){return{dashboard:"Dashboard",tables:"Reportes",profile:"Directorio",admin:"Administraci\xF3n"}[r.toLowerCase()]||this.currentPage}static \u0275fac=function(i){return new(i||a)(k(M))};static \u0275cmp=s({type:a,selectors:[["app-header"]],standalone:!0,features:[d],decls:39,vars:2,consts:[[1,"flex","justify-between","items-center","p-4","bg-white","shadow-sm"],[1,"flex","flex-col"],["aria-label","breadcrumb"],[1,"flex","items-center","space-x-2","text-sm"],["href","#",1,"text-gray-500","hover:text-blue-600"],[1,"text-gray-300","mx-2"],[1,"text-gray-700"],[1,"text-2xl","font-bold","mt-1","text-gray-800"],[1,"flex","items-center","space-x-4"],[1,"p-2","rounded-full","hover:bg-gray-100","text-gray-600","hover:text-gray-800"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","none","stroke","currentColor",1,"h-6","w-6"],["id","ed7bf4ae13"],["d","M 542.328125 319.339844 L 687.859375 319.339844 L 687.859375 568.203125 L 542.328125 568.203125 Z M 542.328125 319.339844 ","clip-rule","nonzero"],["id","c73b923f23"],["d","M 757.183594 319.339844 L 897.671875 319.339844 L 897.671875 568 L 757.183594 568 Z M 757.183594 319.339844 ","clip-rule","nonzero"],["id","ffe0f1ea39"],["d","M 542.328125 598.476562 L 897.671875 598.476562 L 897.671875 642.316406 L 542.328125 642.316406 Z M 542.328125 598.476562 ","clip-rule","nonzero"],["clip-path","url(#ed7bf4ae13)"],["fill","#dd3e2d","d","M 542.328125 319.339844 L 687.859375 319.339844 L 687.859375 568.335938 L 542.328125 568.335938 Z M 542.328125 319.339844 ","fill-opacity","1","fill-rule","nonzero"],["clip-path","url(#c73b923f23)"],["fill","#dd3e2d","d","M 757.183594 319.339844 L 897.671875 319.339844 L 897.671875 567.933594 L 757.183594 567.933594 Z M 757.183594 319.339844 ","fill-opacity","1","fill-rule","nonzero"],["clip-path","url(#ffe0f1ea39)"],["fill","#dd3e2d","d","M 542.328125 598.476562 L 897.683594 598.476562 L 897.683594 642.316406 L 542.328125 642.316406 Z M 542.328125 598.476562 ","fill-opacity","1","fill-rule","nonzero"],["stroke-linecap","butt","transform","matrix(0.562032, 0, 0, 0.562032, 594.515832, 167.682067)","fill","none","stroke-linejoin","miter","d","M 73.498279 299.647844 L 73.498279 186.574605 C 73.498279 124.126817 124.123731 73.501365 186.571519 73.501365 L 259.965914 73.501365 C 322.413702 73.501365 373.039154 124.126817 373.039154 186.574605 L 373.039154 299.647844 ","stroke","#dd3e2d","stroke-width","147","stroke-opacity","1","stroke-miterlimit","4"]],template:function(i,p){i&1&&(e(0,"header",0)(1,"div",1)(2,"nav",2)(3,"ol",3)(4,"li")(5,"a",4),o(6,"Inicio"),t()(),e(7,"li")(8,"span",5),o(9,"/"),t()(),e(10,"li")(11,"span",6),o(12),t()()()(),e(13,"h1",7),o(14),t()(),e(15,"div",8)(16,"button",9),l(),e(17,"svg",10),n(18,"path",11),t()(),m(),e(19,"button",9),l(),e(20,"svg",10),n(21,"path",12)(22,"path",13),t()(),m(),e(23,"button",9),l(),e(24,"svg",14)(25,"defs")(26,"clipPath",15),n(27,"path",16),t(),e(28,"clipPath",17),n(29,"path",18),t(),e(30,"clipPath",19),n(31,"path",20),t()(),e(32,"g",21),n(33,"path",22),t(),e(34,"g",23),n(35,"path",24),t(),e(36,"g",25),n(37,"path",26),t(),n(38,"path",27),t()()()()),i&2&&(h(12),g(p.pageTitle),h(2),g(p.pageTitle))}})};var u=class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=s({type:a,selectors:[["app-sidebar"]],standalone:!0,features:[d],decls:35,vars:0,consts:[[1,"bg-black","fixed","inset-y-0","left-0","w-64","p-4","flex","flex-col","justify-between"],[1,"flex","items-center","mb-8"],[1,"w-10","h-10","rounded-full","bg-red-500","flex","items-center","justify-center","text-white","text-xl","font-bold","mr-3"],[1,"text-white","text-lg","font-semibold"],[1,"space-y-2"],["routerLink","/dashboard","routerLinkActive","bg-red-500",1,"flex","items-center","text-white","p-3","rounded-lg","hover:bg-red-500","transition-colors"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","mr-3"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],["routerLink","/tables","routerLinkActive","bg-red-500",1,"flex","items-center","text-white","p-3","rounded-lg","hover:bg-red-500","transition-colors"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"],["routerLink","/profile","routerLinkActive","bg-red-500",1,"flex","items-center","text-white","p-3","rounded-lg","hover:bg-red-500","transition-colors"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"],["routerLink","/admin","routerLinkActive","bg-red-500",1,"flex","items-center","text-white","p-3","rounded-lg","hover:bg-red-500","transition-colors"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"],["routerLink","/perfil",1,"flex","items-center","text-white","p-3","rounded-lg","hover:bg-red-500","transition-colors"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"]],template:function(i,p){i&1&&(e(0,"aside",0)(1,"div")(2,"div",1)(3,"div",2),o(4," M "),t(),e(5,"span",3),o(6,"Monica Guti\xE9rrez"),t()(),e(7,"nav")(8,"ul",4)(9,"li")(10,"a",5),l(),e(11,"svg",6),n(12,"path",7),t(),o(13," Inicio "),t()(),m(),e(14,"li")(15,"a",8),l(),e(16,"svg",6),n(17,"path",9),t(),o(18," Reportes "),t()(),m(),e(19,"li")(20,"a",10),l(),e(21,"svg",6),n(22,"path",11),t(),o(23," Directorio "),t()(),m(),e(24,"li")(25,"a",12),l(),e(26,"svg",6),n(27,"path",13)(28,"path",14),t(),o(29," Administraci\xF3n "),t()()()()(),m(),e(30,"div",4)(31,"a",15),l(),e(32,"svg",6),n(33,"path",16),t(),o(34," Perfil "),t()()())},dependencies:[y,C]})};var f=class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=s({type:a,selectors:[["app-footer"]],standalone:!0,features:[d],decls:5,vars:0,consts:[[1,"py-2"],[1,"flex","w-full","flex-wrap","items-center","justify-center","gap-6","px-2","md:justify-between"],[1,"block","antialiased","font-sans","text-sm","leading-normal","font-normal","text-inherit"],[1,"flex","items-center","gap-4"]],template:function(i,p){i&1&&(e(0,"footer",0)(1,"div",1)(2,"p",2),o(3," Transiciones Integrales ingenier\xEDa en Enlaces SA \xA9 2024"),t(),n(4,"ul",3),t()())}})};var b=class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=s({type:a,selectors:[["app-layout"]],standalone:!0,features:[d],decls:9,vars:0,consts:[[1,"min-h-screen","bg-gray-50/50"],[1,"p-4","xl:ml-80"],[1,"block","w-full","max-w-full","bg-transparent","text-white","shadow-none","rounded-xl","transition-all","px-0","py-1"],[1,"mt-12"],[1,"text-blue-gray-600"]],template:function(i,p){i&1&&(e(0,"div",0),n(1,"app-sidebar"),e(2,"div",1)(3,"nav",2),n(4,"app-header"),t(),e(5,"div",3),n(6,"router-outlet"),t(),e(7,"div",4),n(8,"app-footer"),t()()())},dependencies:[c,u,f,L]})};export{b as default};
