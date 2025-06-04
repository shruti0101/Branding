// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../styles/OurProcess.css";

// gsap.registerPlugin(ScrollTrigger);

// const DATA = [
//   {
//     title: "Understand & Strategize",
//     content: (
//       <p className="mb-2 fs-5 text-secondary">
//        Our expert team crafts a personalized strategy tailored to your specific needs and objectives, ensuring that your marketing approach aligns perfectly with your business goals.
//        ensuring that your marketing approach aligns perfectly with your business goals.


//       </p>
//     ),
//   },
//   {
//     title: "Create & Develop",
//     content: (
//       <p className="mb-2 fs-5 text-secondary">
//     We bring your strategy to life with innovative and effective solutions, including content creation, design, and development, ensuring impactful results for your brand’s growth.
//     ensuring that your marketing approach aligns perfectly with your business goals.
//       </p>
//     ),
//   },
//   {
//     title: "Launch & Execute",
//     content: (
//       <p className="mb-2 fs-5 text-secondary">
//       We expertly launch your campaign, ensuring seamless execution across all channels and platforms, delivering a cohesive brand experience and maximizing engagement for optimal impact.
//       ensuring that your marketing approach aligns perfectly with your business goals.
//       </p>
//     ),
//   },
//   {
//     title: "Optimize & Report",
//     content: (
//       <p className="mb-2 fs-5 text-secondary">
//      We continuously monitor and analyze your campaign's performance, making data-driven adjustments to optimize results, ensuring consistent improvements and delivering measurable success.
//      ensuring that your marketing approach aligns perfectly with your business goals.
//       </p>
//     ),
//   },
// ];

// export default function TimelineAceternity() {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const [totalHeight, setTotalHeight] = useState(0);

//   useEffect(() => {
//     if (contentRef.current) {
//       setTotalHeight(contentRef.current.getBoundingClientRect().height);
//     }

//     const trigger = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top+=100",
//       end: `bottom bottom-=100`,
//       scrub: true,
//       onUpdate: (self) => {
//         const fillHeight = totalHeight * self.progress;
//         gsap.set(".line-fill", { height: fillHeight });
//       },
//     });

//     return () => {
//       trigger.kill();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [totalHeight]);

//   return (
//     <div className="timeline-outer-wrapper bg-light py-3 px-1" ref={containerRef}>
//       <div className="container">
//         <h2 className="mb-2  fs-1 fw-bold text-primary">Our Process</h2>
//         <p className="mb-2 text-muted">
//           A 2-year path of building, experimenting, and evolving Aceternity.
//         </p>

//         <div className="timeline-wrapper position-relative">
//           <div className="timeline-line">
//             <div className="line-bg" />
//             <div className="line-fill" />
//           </div>

//           <div className="timeline-content" ref={contentRef}>
//             {DATA.map((item, idx) => (
//               <div
//                 className="timeline-step d-flex flex-column flex-md-row align-items-start mb-3 position-relative ps-5 "
//                 key={idx}
//               >
//                 <div className="step-header d-flex flex-row align-items-center mb-3 mb-md-0 flex-shrink-0">
//                   <div className="dot-container me-3">
//                     <div className="dot-inner" />
//                   </div>
//                   <h4 className="step-title text-nowrap">{item.title}</h4>
//                 </div>
//                 <div className="step-body ms-md-4 p-3 bg-white shadow-sm rounded">
//                   {item.content}
//                 </div>
//               </div>
//             ))}
//             <div style={{ height: "150px" }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
