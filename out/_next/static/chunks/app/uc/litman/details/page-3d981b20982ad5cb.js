(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[830],{1350:(e,t,s)=>{"use strict";s.d(t,{FN:()=>u,Wk:()=>f,A7:()=>b,Oj:()=>g,Q8:()=>p});var a=s(5155),l=s(2115),i=s(5005),r=s(3999),n=s(9708);let o=(0,s(2085).F)("inline-flex items-center justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-white text-orange-500 hover:bg-orange-100 shadow-md hover:shadow-lg",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-white hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary",rounded:"border-2 border-white text-[#007EA7] bg-white/10 hover:bg-white/20 rounded-full px-6 py-2 h-10"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,t)=>{let{className:s,variant:l,size:i,asChild:c=!1,...d}=e,m=c?n.DX:"button";return(0,a.jsx)(m,{className:(0,r.cn)(o({variant:l,size:i,className:s})),ref:t,...d})});c.displayName="Button";var d=s(2355),m=s(3052);let h=l.createContext(null);function x(){let e=l.useContext(h);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let u=l.forwardRef((e,t)=>{let{orientation:s="horizontal",opts:n,setApi:o,plugins:c,className:d,children:m,...x}=e,[u,f]=(0,i.A)({...n,axis:"horizontal"===s?"x":"y"},c),[b,p]=l.useState(!1),[g,w]=l.useState(!1),j=l.useCallback(e=>{e&&(p(e.canScrollPrev()),w(e.canScrollNext()))},[]),v=l.useCallback(()=>{null==f||f.scrollPrev()},[f]),y=l.useCallback(()=>{null==f||f.scrollNext()},[f]),N=l.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),v()):"ArrowRight"===e.key&&(e.preventDefault(),y())},[v,y]);return l.useEffect(()=>{f&&o&&o(f)},[f,o]),l.useEffect(()=>{if(f)return j(f),f.on("select",j),f.on("reInit",j),()=>{f.off("select",j),f.off("reInit",j)}},[f,j]),(0,a.jsx)(h.Provider,{value:{carouselRef:u,api:f,opts:n,orientation:s||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:v,scrollNext:y,canScrollPrev:b,canScrollNext:g},children:(0,a.jsx)("div",{ref:t,onKeyDownCapture:N,className:(0,r.cn)("relative",d),role:"region","aria-roledescription":"carousel",...x,children:m})})});u.displayName="Carousel";let f=l.forwardRef((e,t)=>{let{className:s,...l}=e,{carouselRef:i,orientation:n}=x();return(0,a.jsx)("div",{ref:i,className:"overflow-hidden",children:(0,a.jsx)("div",{ref:t,className:(0,r.cn)("flex","horizontal"===n?"-ml-4":"-mt-4 flex-col",s),...l})})});f.displayName="CarouselContent";let b=l.forwardRef((e,t)=>{let{className:s,...l}=e,{orientation:i}=x();return(0,a.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,r.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===i?"pl-4":"pt-4",s),...l})});b.displayName="CarouselItem";let p=l.forwardRef((e,t)=>{let{className:s,variant:l="outline",size:i="icon",...n}=e,{orientation:o,scrollPrev:m,canScrollPrev:h}=x();return(0,a.jsxs)(c,{ref:t,variant:l,size:i,className:(0,r.cn)("absolute h-8 w-8 rounded-full bg-[#007EA7] hover:bg-[#005f7f] text-white","horizontal"===o?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!h,onClick:m,...n,children:[(0,a.jsx)(d.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});p.displayName="CarouselPrevious";let g=l.forwardRef((e,t)=>{let{className:s,variant:l="outline",size:i="icon",...n}=e,{orientation:o,scrollNext:d,canScrollNext:h}=x();return(0,a.jsxs)(c,{ref:t,variant:l,size:i,className:(0,r.cn)("absolute h-8 w-8 rounded-full bg-[#007EA7] hover:bg-[#005f7f] text-white","horizontal"===o?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!h,onClick:d,...n,children:[(0,a.jsx)(m.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Next slide"})]})});g.displayName="CarouselNext"},3206:(e,t,s)=>{Promise.resolve().then(s.bind(s,4317))},3999:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var a=s(2596),l=s(9688);function i(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,l.QP)((0,a.$)(t))}},4317:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var a=s(5155),l=s(5942),i=s(6766),r=s(6874),n=s.n(r),o=s(7746),c=s(7550),d=s(1350),m=s(8126),h=s.n(m);function x(){return(0,a.jsxs)("main",{className:"min-h-screen bg-white pb-16",children:[(0,a.jsxs)(h(),{children:[(0,a.jsx)("link",{rel:"preload",href:"/images/littler/Logo_Littler.svg",as:"image",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"prefetch",href:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_nav_bar-BtcRyn93GUuYRsVcoJaExXRVf4LW1t.png",as:"image"})]}),(0,a.jsx)(l.default,{}),(0,a.jsx)("div",{className:"sticky top-16 mt-0 z-20 w-full bg-[#E6FFEA]/50 backdrop-blur-sm border-y border-[#007EA7]/10",children:(0,a.jsx)("div",{className:"max-w-6xl mx-auto px-4 py-3 flex items-center",children:(0,a.jsx)(n(),{href:"/uc/litman/process",className:"text-[#6BC04B] hover:text-[#2E870D] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1",children:(0,a.jsxs)("div",{className:"flex items-center bg-white/70 px-3 py-1.5 rounded-full shadow-sm",children:[(0,a.jsx)(c.A,{className:"w-4 h-4 mr-1"}),(0,a.jsx)("span",{children:"View the extended thought process."})]})})})}),(0,a.jsx)("div",{className:"max-w-6xl mx-auto px-4 py-12 mt-16",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8",children:[(0,a.jsx)("div",{className:"relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0",children:(0,a.jsx)(i.default,{src:"/images/littler/Logo_Littler.svg",alt:"Littler Logo",fill:!0,className:"object-contain",priority:!0})}),(0,a.jsx)("h1",{className:"font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left",children:"Streamlining Legal Case Management for Littler Mendelson"})]}),(0,a.jsx)("h3",{className:"font-space-grotesk text-lg sm:text-xl text-[#2C3D4D] mt-6 sm:mt-8 mb-8 sm:mb-12 text-center md:text-left",children:"As a Senior UX Designer, I led the redesign of Littler's case management platform to improve attorney efficiency and client satisfaction."})]})}),(0,a.jsxs)("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[(0,a.jsxs)("section",{className:"mb-12 sm:mb-16",children:[(0,a.jsx)("h2",{className:"font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8",children:"Background"}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"font-montserrat text-base sm:text-lg text-[#5f5f5f]/80",children:"Littler Mendelson developed Virtual Binder as part of its effort to modernize case management and streamline legal workflows. Initially an extension of CaseSmart, the platform was designed to centralize litigation data, improve collaboration, and enhance transparency in billable hours. The goal was to eliminate paper-based processes and create a structured, scalable system that attorneys could rely on throughout all phases of litigation."})}),(0,a.jsxs)("div",{className:"mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10",children:[(0,a.jsx)("h2",{className:"font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8",children:"The Challenge"}),(0,a.jsx)("p",{className:"font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6",children:"Attorneys needed a seamless way to manage cases digitally, with quick access to case details, documents, and communication tools. Traditional case management tools were fragmented, requiring multiple systems to track litigation progress, assign tasks, and communicate with legal teams. The challenge was to create an integrated platform that allowed attorneys to transition between case phases fluidly while maintaining hierarchy and organization."})]}),(0,a.jsxs)("div",{className:"mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10",children:[(0,a.jsx)("h2",{className:"font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8",children:"What I Did"}),(0,a.jsx)("h3",{className:"font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6",children:"UX Navigation & Case Organization"}),(0,a.jsxs)("ul",{className:"font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]",children:[(0,a.jsx)("li",{children:"Conducted stakeholder interviews and UX research to identify inefficiencies in legal workflows."}),(0,a.jsx)("li",{children:"Designed a non-linear navigation system allowing attorneys to move easily between case phases."}),(0,a.jsx)("li",{children:"Developed a tab-based navigation system with clear visual hierarchy, ensuring attorneys always knew their position within the litigation process."})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12",children:[(0,a.jsx)("div",{className:"relative w-full h-auto pt-6 sm:pt-8 mb-4 sm:mb-8 shadow-md",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_nav_bar-BtcRyn93GUuYRsVcoJaExXRVf4LW1t.png",alt:"Littler CaseSmart navigation interface showing improved case phase navigation with clear visual hierarchy and numbered indicators",width:600,height:300,className:"object-contain w-full h-auto",loading:"eager",sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,a.jsx)("div",{className:"relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md",children:(0,a.jsxs)(d.FN,{className:"w-full",children:[(0,a.jsxs)(d.Wk,{children:[(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_01.jpg-6rJLUbwHVgD390hfmB7EM7LcTAWgqZ.jpeg",alt:"Littler CaseSmart dashboard showing task list, document management, and budget tracking",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_02.jpg-dSx1GgobWTN3gKsnDgUJuVkTpStrOM.jpeg",alt:"Littler CaseSmart navigation system with phase indicators and menu structure",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})})]}),(0,a.jsx)(d.Q8,{className:"left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10"}),(0,a.jsx)(d.Oj,{className:"right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10"}),(0,a.jsx)("div",{className:"flex justify-center w-full gap-1 mt-2",children:[0,1].map(e=>(0,a.jsx)("button",{className:"w-2 h-2 rounded-full bg-gray-300 focus:bg-primary","aria-label":"Go to slide ".concat(e+1),onClick:()=>{}},e))})]})})]}),(0,a.jsx)("h3",{className:"font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6",children:"Integrated Messaging & Collaboration"}),(0,a.jsxs)("ul",{className:"font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]",children:[(0,a.jsx)("li",{children:"Designed a dedicated messaging center inspired by real-time collaboration tools, reducing reliance on fragmented email chains."}),(0,a.jsx)("li",{children:"Implemented role-based permissions allowing attorneys to track communication history and manage team access securely."}),(0,a.jsx)("li",{children:"Created an easy to use integration between task management, document sharing, and legal team messaging, enabling contextual collaboration within case phases."})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12",children:[(0,a.jsx)("div",{className:"relative w-full h-auto pt-6 sm:pt-8 mb-4 sm:mb-8 shadow-md",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_message_Center-Vsy6FNY2mu964bQLR5VykACpxCAlNk.png",alt:"Littler CaseSmart Message Center interface with numbered annotations explaining key features like user identification, team collaboration, and phase-based organization",width:600,height:300,className:"object-contain w-full h-auto",sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,a.jsx)("div",{className:"relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md",children:(0,a.jsxs)(d.FN,{className:"w-full",children:[(0,a.jsxs)(d.Wk,{children:[(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_03.jpg-MQrWRLdGInHUwmpPKBQG9CJyZKgjz3.jpeg",alt:"Message Center showing team conversation thread and document sharing",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_04.jpg-UFtzKIvE2OTVwAh0HTgJzZvmnIMl7h.jpeg",alt:"Message actions menu showing email and task creation options",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_05.jpg-2Ubv3a6qrhVXSA2snxTHOrfS2T7s4Q.jpeg",alt:"Message thread view with team discussion and document attachments",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_08.jpg-f98aQd8pQfySBJCGG5baI6cvvLsbph.jpeg",alt:"Case inbox view showing organized communications and updates",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_09.jpg-PwfUHPlDdezpp3AEbWMpR9FMJsNFRB.jpeg",alt:"Email composition interface for case-related communications",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_12.jpg-JC4s7DkMcLt32OEDRuF9psQscuY6q4.jpeg",alt:"Task scheduling interface with calendar date picker",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_13.jpg-piNK2HjxezyepRjw330EmHCFLHs9Fq.jpeg",alt:"Task creation interface with phase selection dropdown",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})})]}),(0,a.jsx)(d.Q8,{className:"left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10"}),(0,a.jsx)(d.Oj,{className:"right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10"}),(0,a.jsx)("div",{className:"flex justify-center w-full gap-1 mt-2",children:[0,1,2,3,4,5,6].map(e=>(0,a.jsx)("button",{className:"w-2 h-2 rounded-full bg-gray-300 focus:bg-primary","aria-label":"Go to slide ".concat(e+1),onClick:()=>{}},e))})]})})]}),(0,a.jsx)("h3",{className:"font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6",children:"Mobile Application Development"}),(0,a.jsxs)("ul",{className:"font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]",children:[(0,a.jsx)("li",{children:"Led the UX design for Virtual Binder's mobile expansion, ensuring feature parity with the desktop experience."}),(0,a.jsx)("li",{children:"Optimized billable hour tracking and case access for smaller screens while maintaining consistency with the desktop UI."}),(0,a.jsx)("li",{children:"Designed touch-friendly interactions that adapted workflows for mobile efficiency, allowing attorneys to manage cases remotely."})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12",children:[(0,a.jsx)("div",{className:"relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_wireframe-pYlVtxu8KiXEIenune6ej90NRtOb5T.png",alt:"Mobile app wireframe showing task management workflow with annotations explaining key features like task list view, task creation, and detailed task view",width:600,height:300,className:"object-contain w-full h-auto",sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,a.jsx)("div",{className:"relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md",children:(0,a.jsxs)(d.FN,{className:"w-full",children:[(0,a.jsxs)(d.Wk,{children:[(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_Mobile_Task_01-mapk7biIjqNeAaxYIh1GSmq4AAY1LK.png",alt:"Mobile app task management workflow showing task list, creation form, and task details views",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})}),(0,a.jsx)(d.A7,{children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)(i.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_Mobile_Case_02-CtInz7tbikXRyqRvjqumiLFl9NcmC6.png",alt:"Mobile app case management workflow showing client list, case selection, and team chat interfaces",width:600,height:300,className:"object-contain w-full h-auto rounded-md",sizes:"(max-width: 768px) 100vw, 50vw"})})})]}),(0,a.jsx)(d.Q8,{className:"left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10"}),(0,a.jsx)(d.Oj,{className:"right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10"}),(0,a.jsx)("div",{className:"flex justify-center w-full gap-1 mt-2",children:[0,1].map(e=>(0,a.jsx)("button",{className:"w-2 h-2 rounded-full bg-gray-300 focus:bg-primary","aria-label":"Go to slide ".concat(e+1),onClick:()=>{}},e))})]})})]})]})]}),(0,a.jsxs)("section",{className:"mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10",children:[(0,a.jsx)("h2",{className:"font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left",children:"Role"}),(0,a.jsx)("p",{className:"font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left",children:"Senior UX Designer, User Workflow Strategy, Interaction Design, UI design, and Usability Testing"})]}),(0,a.jsx)("div",{className:"mt-12 sm:mt-16 flex flex-col items-center pb-8 sm:pb-12",children:(0,a.jsx)(n(),{href:"/contact",className:"rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007EA7] px-6 sm:px-8 py-2 sm:py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5",children:"Let's Chat"})})]}),(0,a.jsx)(o.A,{})]})}},7746:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var a=s(5155);function l(){return(0,a.jsx)("footer",{className:"py-8 px-4 mt-4 text-center",children:(0,a.jsxs)("p",{className:"font-montserrat text-[0.65rem] text-[#5f5f5f]/80",children:["Made with the help of my AI friends. VAM Design. All rights reserved ",new Date().getFullYear(),"."]})})}},8126:(e,t)=>{"use strict";function s(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},e=>{var t=t=>e(e.s=t);e.O(0,[432,63,637,823,561,441,684,358],()=>t(3206)),_N_E=e.O()}]);