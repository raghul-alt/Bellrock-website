import { useEffect, useRef, useState } from "react";

const a = (f: string) => `/assets/${f}`;
const img = {
  arrowContact: a("96638.svg"), mailIcon: a("1b240.svg"), arrowFooter: a("3cbbc.svg"), arrowCta: a("18322.svg"),
  photo7: a("a5db2.png"), photo6: a("e88fe.png"), hero5: a("56f71.png"), hero8: a("063a8.png"), lighthouse: a("f85a5.png"),
  heritage1: a("53660.png"), heritage2: a("233e8.png"), bandMask: a("f5707.png"), band: a("6bb7a.png"),
  card1Mask: a("693b8.svg"), card1a: a("a26ec.png"), card1b: a("d49a0.png"),
  card2a: a("2b1cb.png"), card2b: a("85d66.png"), card3a: a("b4137.png"), card3b: a("e9186.png"),
  truck: a("bed65.png"), delivery: a("ec664.png"), commitA: a("37123.png"), commitB: a("855d2.png"),
  footerShip: a("54de6.png"), union: a("footer-union.webp"),
  miniBellrock: a("f5276.svg"), miniB: a("fdeda.svg"), miniMaritime: a("343d9.svg"), laurelL: a("2dc85.svg"), laurelR: a("11d52.svg"),
  bandShape: a("9343d.svg"), bandLighthouse: a("6f4f6.svg"), group43: a("40b16.svg"), arrowDown: a("e062a.svg"),
  rect9: a("00277.svg"), boat: a("bf83e.svg"), rect5: a("503d5.svg"), info: a("df2b4.svg"), rect10: a("51d05.svg"), handshake: a("1d498.svg"),
  line: a("3fb99.svg"), userFocus: a("bd9c5.svg"), lightbulb: a("6f9ba.svg"), boat1: a("3c732.svg"), handshake1: a("79531.svg"), info1: a("f9bdd.svg"), arrowDown1: a("21d1c.svg"),
  approachVideo: a("approach.mp4"), vesselVideo: a("vessel-it.mp4"), bridge: a("bridge.jpg"), anchorChain: a("anchor-chain.jpg"),
  bigBellrock: a("33b64.svg"), bigB: a("e8d83.svg"),
  ock: a("75db5.svg"), ock1: a("1d9c3.svg"), subtract: a("36427.svg"), ell: a("93aa0.svg"), b: a("3d692.svg"), maritime: a("a1467.svg"), list: a("4afd0.svg"),
};

const NAV = [
  { label: "Home", id: "home" },
  { label: "Who We Are", id: "who-we-are" },
  { label: "What We Do", id: "what-we-do" },
  { label: "Why BellRock", id: "why-bellrock" },
  { label: "Our Approach", id: "our-approach" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const EMAIL = "management@bellrockmaritime.de";
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const eyebrow = "font-['Geist:Medium'] font-medium text-[#d8a441] text-[14px] tracking-[1.4px] uppercase";
const h2 = "font-['Geist:SemiBold'] font-semibold leading-[1.1] text-[#12344d] text-[36px] md:text-[48px] lg:text-[56px] tracking-[-1.4px]";
const body = "font-['Geist:Medium'] font-medium leading-[1.5] text-[#5e7385] text-[16px]";

function Logo({ navy }: { navy: boolean }) {
  const c = `absolute block max-w-none ${navy ? "logo-navy" : ""}`;
  return (
    <span className="relative block h-[100px] w-[227px]" aria-hidden>
      <img src={img.b} className={c} style={{ left: 0, bottom: 36.67, width: 27.9, height: 40.9 }} alt="" />
      <img src={img.ell} className={c} style={{ left: 30.7, top: 27.1, width: 76, height: 36.2 }} alt="" />
      <img src={img.subtract} className={c} style={{ left: 107.7, bottom: 36.85, width: 33, height: 41.2 }} alt="" />
      <img src={img.ock1} className={c} style={{ left: 139.6, top: 26.4, width: 29.4, height: 37.5 }} alt="" />
      <img src={img.ock} className={c} style={{ left: 140, top: 27.1, width: 86.1, height: 36.2 }} alt="" />
      <img src={img.maritime} className={c} style={{ left: 118.6, top: 69, width: 107.5, height: 8.8 }} alt="" />
    </span>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => {
      const hero = document.getElementById("home");
      const y = hero ? -hero.getBoundingClientRect().top : window.scrollY;
      setScrolled(y > 40);
    };
    on();
    document.addEventListener("scroll", on, { passive: true, capture: true });
    window.addEventListener("resize", on);
    return () => { document.removeEventListener("scroll", on, { capture: true }); window.removeEventListener("resize", on); };
  }, []);
  useEffect(() => {
    if (!open) return;
    first.current?.focus();
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);

  const navy = scrolled;
  const select = (id: string) => { setOpen(false); go(id); };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[100px]">
      <div aria-hidden className={`absolute inset-0 transition-colors duration-300 ${navy ? "bg-white shadow-[0_1px_0_rgba(18,52,77,0.08)]" : "bg-[rgba(255,255,255,0.02)] backdrop-blur-[10px]"}`} />
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-[40px]">
        <button onClick={() => select("home")} aria-label="BellRock Maritime – back to top" className="origin-left scale-[0.8] rounded focus-visible:outline-2 focus-visible:outline-[#d8a441] md:scale-100">
          <Logo navy={navy} />
        </button>
        <button ref={btn} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="site-menu" aria-label="Open menu"
          className="relative size-[32px] rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8a441]">
          <img src={img.list} alt="" className={`absolute inset-0 block size-full ${navy ? "logo-navy" : ""}`} />
        </button>
      </div>
      <div aria-hidden onClick={() => setOpen(false)} className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <nav id="site-menu" aria-label="Main" aria-hidden={!open} inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-[#f5f2eb] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[min(100%,577px)] ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex h-[100px] shrink-0 items-center justify-end px-5 md:px-[40px]">
          <button onClick={() => { setOpen(false); btn.current?.focus(); }} aria-label="Close menu" className="relative size-[32px] rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8a441]">
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[28px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#1e1e1e]" />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[28px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#1e1e1e]" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-[20px] overflow-y-auto px-5 pb-[100px] sm:px-[36px]">
          {NAV.map((n, i) => (
            <li key={n.id} className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`} style={{ transitionDelay: open ? `${150 + i * 50}ms` : "0ms" }}>
              <button ref={i === 0 ? first : undefined} onClick={() => select(n.id)}
                className="font-['Geist:Regular'] text-[32px] font-normal uppercase leading-[normal] text-[#1e1e1e] transition-colors hover:text-[#d8a441] focus-visible:text-[#d8a441] focus-visible:outline-none md:text-[40px]">
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function TalkToUs() {
  return (
    <button onClick={() => go("contact")} className="cta group flex h-[40px] gap-px rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8a441]">
      <span className="relative flex h-full items-center overflow-hidden rounded-[4px] bg-[#f5f2eb] px-[12px] font-['Geist:Bold'] text-[14px] font-bold uppercase leading-[1.05] text-[#12344d]">
        <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        <span className="relative overflow-hidden">
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">Talk to us</span>
          <span aria-hidden className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">Talk to us</span>
        </span>
      </span>
      <span className="flex size-[40px] items-center justify-center rounded-[4px] bg-[#f5f2eb] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[4px] group-hover:bg-[#d8a441]">
        <img src={img.arrowCta} alt="" className="size-[20px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-45" />
      </span>
    </button>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = window.setInterval(() => {
      setStarted(true);
      setSlide((n) => { setPrev(n); return (n + 1) % 3; });
    }, 7000);
    return () => window.clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#12344d] md:h-[1024px] md:max-h-[100vh] md:min-h-[720px]">
      {[
        <><img src={img.photo7} alt="Vessel in port" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]" /></>,
        <><img src={img.hero5} alt="Bulk carrier under way at sea" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]" /><img src={img.hero8} alt="" className="absolute inset-0 size-full object-cover" /></>,
        <><img src={img.photo6} alt="Vessel at sea" className="absolute inset-0 size-full -scale-x-100 object-cover" /><div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" /></>,
      ].map((layer, i) => (
        <div key={i} aria-hidden={i !== slide}
          className={`absolute inset-0 ${i === slide ? `z-[2] ${started ? "hero-wipe" : ""}` : i === prev ? "z-[1]" : "invisible z-0"}`}>{layer}</div>
      ))}
      <div className="relative z-[3] mx-auto flex h-full max-w-[1440px] flex-col justify-between px-5 pb-[32px] pt-[150px] md:px-[40px] md:pb-[48px] md:pt-[190px]">
        <h1 className="max-w-[786px] font-['Geist:SemiBold'] text-[44px] font-semibold leading-none tracking-[-1.5px] text-white sm:text-[60px] lg:text-[80px] lg:tracking-[-2px]">
          Ship management with an owner’s mindset
        </h1>
        <div className="relative flex max-w-[699px] flex-col items-start gap-[20px]">
          <p className="font-['Geist:Medium'] text-[16px] font-medium leading-[1.5] text-[#ddd]">
            BellRock Maritime provides tailored ship management for owners who expect more than operational oversight. We combine technical expertise, commercial understanding and principal-led accountability to protect vessel performance and long-term asset value.
          </p>
          <TalkToUs />
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section id="who-we-are" className="mx-auto flex max-w-[1440px] flex-col gap-[60px] px-5 md:px-[40px]">
      <div className="flex flex-col gap-[48px] lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-[709px] flex-col gap-[12px]">
          <h2 className={eyebrow}>Who We Are</h2>
          <p className="font-['Geist:Medium'] text-[28px] font-medium leading-[1.2] tracking-[-1px] text-[#12344d] md:text-[40px]">
            BellRock Maritime is an independent ship-management company built for owners who value <span className="font-['Geist:Bold'] font-bold">direct relationships, experienced oversight and dependable performance.</span>
          </p>
        </div>
        <div className="relative h-[282px] w-[599px] max-w-full shrink-0 self-center lg:self-end">
          <div className="absolute left-1/2 top-0 flex w-[546px] max-w-full -translate-x-1/2 items-start justify-center gap-[24px] sm:gap-[100px] lg:left-[calc(50%+20.5px)]">
            <div className="flex w-[203px] flex-col items-center">
              <div className="relative h-[90px] w-[277px] max-w-[140%] overflow-hidden">
                <img src={img.heritage1} alt="" className="absolute left-[-6.52%] top-[-6.04%] h-[112.83%] w-[113.04%] max-w-none" />
              </div>
              <p className="font-['Geist:SemiBold'] text-[14px] font-semibold uppercase leading-[1.5] tracking-[0.7px] text-black">Since 1945</p>
              <p className="max-w-[219px] text-center font-['Geist:Regular'] text-[13px] leading-[1.2] text-black">A legacy built on decades of maritime expertise.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={img.heritage2} alt="" className="h-[90px] w-[203px] object-contain" />
              <p className="font-['Geist:SemiBold'] text-[14px] font-semibold uppercase leading-[1.5] tracking-[0.7px] text-black">50+ Years</p>
              <p className="w-[185px] max-w-full text-center font-['Geist:Regular'] text-[13px] leading-[1.2] text-black">shipping &amp; ship management experience</p>
            </div>
          </div>
          <div className="absolute left-1/2 top-[151px] h-[81px] w-[313px] -translate-x-1/2 lg:left-[calc(50%+20.5px)]">
            <div className="absolute left-0 top-0 h-[81px] w-[18px] border-b-2 border-l-2 border-dashed border-[#666666]" />
            <div className="absolute right-0 top-0 h-[81px] w-[18px] border-b-2 border-r-2 border-dashed border-[#666666]" />
          </div>
          <div className="absolute left-1/2 top-[172px] -translate-x-1/2 lg:left-[calc(50%+20.75px)]">
            <Logo navy />
          </div>
        </div>
      </div>
      <div data-reveal="image" className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 right-0 md:left-[17.4%]"
          style={{ maskImage: `url("${img.bandMask}")`, WebkitMaskImage: `url("${img.bandMask}")`, maskSize: "100% 100%", WebkitMaskSize: "100% 100%" }}>
          <img src={img.band} alt="Vessel alongside in port" className="absolute left-0 top-[-55.2%] h-[187.12%] w-full max-w-none object-cover" />
        </div>
        <img src={img.bandShape} alt="" className="absolute left-0 top-0 hidden h-[400px] w-[357.276px] md:block" />
        <img src={img.bandLighthouse} alt="" className="absolute left-[28px] top-[-196px] hidden h-[374px] w-[290px] md:block" />
        <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-[#12344d] p-[16px] md:bottom-auto md:top-[163px] md:w-auto md:bg-transparent md:p-[10px]">
          <p className="w-[280px] text-center font-['Geist:Bold'] text-[18px] font-bold uppercase leading-[1.5] text-[#f5f2eb]">Directly involved. Personally accountable.</p>
        </div>
      </div>
    </section>
  );
}

function Card({ n, title, text, light, children, className = "" }: { n: string; title: string; text: string; light?: boolean; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex min-h-[400px] flex-col overflow-hidden rounded-[8px] p-[24px] md:p-[32px] ${light ? "border border-[#eee] bg-[#f8f9fa]" : ""} ${className}`}>
      {children}
      <div className="relative flex max-w-[560px] flex-col gap-[32px]">
        <p className={`font-['Geist:Medium'] text-[14px] font-medium ${light ? "text-[#1e1e1e]" : "text-[#f5f2eb]"}`}>{n}</p>
        <div className="flex flex-col gap-[12px]">
          <h3 className={`font-['Geist:SemiBold'] text-[24px] font-semibold ${light ? "text-[#1e1e1e]" : "text-[#f5f2eb]"}`}>{title}</h3>
          <p className={`font-['Geist:Regular'] text-[16px] leading-[1.55] ${light ? "text-[#333]" : "text-[#ddd]"}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}

function Photo({ a1, a2, grad }: { a1: string; a2: string; grad: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <img src={a1} alt="" className="absolute size-full object-cover" />
      <img src={a2} alt="" className="absolute size-full object-cover" />
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(115.79deg, rgba(0,0,0,0.4) ${grad}, rgba(102,102,102,0) 99.17%)` }} />
    </div>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-5 md:px-[40px]">
      <div className="flex flex-col gap-[24px] lg:flex-row lg:items-end lg:gap-[40px]">
        <div className="flex flex-col gap-[12px] lg:w-[778px] lg:shrink-0">
          <p className={eyebrow}>What We Do</p>
          <h2 className={h2}>Complete ship management. <br className="hidden md:block" />Focused on what matters.</h2>
        </div>
        <p className={body}>From technical operations to crew and digital infrastructure, we provide the expertise and oversight required to keep vessels safe, compliant, efficient and ready for the demands of global trade.</p>
      </div>
      <div data-stagger className="grid grid-cols-1 gap-[10px] lg:grid-cols-[590fr_760fr]">
        <Card light n="01" title="Technical & Nautical Management" text="We oversee the technical and nautical performance of each vessel, with a focus on reliability, operational readiness, maintenance and efficiency." className="[&>div:last-child]:max-w-[330px]">
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ clipPath: "ellipse(38% 80% at 100% 100%)" }}>
            <img src={img.bridge} alt="" className="absolute inset-0 size-full object-cover object-[62%_center] brightness-[0.85]" />
          </div>
        </Card>
        <Card n="02" title="Safety, Quality & Environmental Management" text="We build robust systems around safety, quality and environmental responsibility, helping vessels operate consistently and meet the standards expected across global shipping.">
          <Photo a1={img.card2a} a2={img.card2b} grad="8.94%" />
        </Card>
        <Card n="03" title="Crew Management" text="We support the people behind every voyage through structured crew management focused on capability, welfare, safety and operational continuity." className="[&>div:last-child]:max-w-[487px] lg:order-none">
          <Photo a1={img.card3a} a2={img.card3b} grad="33.76%" />
        </Card>
        <Card light n="04" title="Vessel IT Management" text="We manage the digital infrastructure that supports modern vessel operations, keeping communication, connectivity and essential systems reliable and secure." className="[&>div:last-child]:max-w-[339px]">
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ clipPath: "polygon(27% 100%, 74.5% 22%, 76% 20.5%, 78% 20.5%, 100% 35%, 100% 100%)" }}>
            <img src={img.anchorChain} alt="" className="absolute bottom-0 right-0 h-[82%] w-[75%] object-cover object-[60%_center]" />
          </div>
        </Card>
      </div>
    </section>
  );
}

function Bento({ icon, bg, title, text, className = "", bgClass = "" }: { icon: string; bg: string; title: string; text: string; className?: string; bgClass?: string }) {
  return (
    <div className={`relative flex h-[280px] flex-col justify-between overflow-hidden border-b border-r border-[#aaa] bg-[#f5f2eb] p-[24px] md:p-[32px] ${className}`}>
      <img src={bg} alt="" className={`pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 ${bgClass}`} />
      <img src={icon} alt="" className="relative size-[32px]" />
      <div className="relative flex flex-col gap-[12px]">
        <h3 className="font-['Geist:Bold'] text-[22px] font-bold uppercase text-[#12344d] md:text-[24px]">{title}</h3>
        <p className={body}>{text}</p>
      </div>
    </div>
  );
}

function Commitment({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex gap-[12px]">
      <span className="w-px shrink-0 self-stretch bg-[#12344d]/30" style={{ minHeight: 160 }} />
      <div className="flex flex-col gap-[20px]">
        <img src={icon} alt="" className="size-[32px]" />
        <div className="flex flex-col gap-[12px]">
          <h3 className="font-['Geist:Bold'] text-[22px] font-bold uppercase text-[#12344d] md:text-[24px]">{title}</h3>
          <p className={body}>{text}</p>
        </div>
      </div>
    </div>
  );
}

function WhyAndApproach() {
  const steps = [
    { icon: img.boat1, label: "Understand the vessel" },
    { icon: img.handshake1, label: "Understand the owner" },
    { icon: img.info1, label: "Make the right decision" },
    { icon: img.arrowDown1, label: "Keep moving forward" },
  ];
  return (
    <div className="bg-[#f5f2eb]">
      <div id="why-bellrock" className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-5 pt-[80px] md:px-[40px]">
        <div data-reveal className="flex flex-col gap-[12px]">
          <p className={eyebrow}>Why BellRock</p>
          <h2 className={`${h2} max-w-[705px]`}>Trusted management for a more certain journey</h2>
        </div>
        <div data-reveal="fade" className="overflow-hidden rounded-[4px] border-l border-t border-[#aaa]">
        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[543fr_408fr_408fr]">
          <div className="relative h-[280px] overflow-hidden border-b border-r border-[#aaa]">
            <img src={img.truck} alt="Crew members walking on deck" className="absolute size-full object-cover" />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]" />
          </div>
          <Bento icon={img.arrowDown} bg={img.group43} bgClass="!left-0 !top-[-3.5%] !translate-x-0 !translate-y-0 h-[107%] w-[123%]" title="Direct access" text="Work directly with experienced people who understand your operation." />
          <Bento icon={img.boat} bg={img.rect9} bgClass="h-[348px] w-[474px]" title="Vessel-level attention" text="Every vessel has its own requirements. We manage accordingly." />
        </div>
        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[396fr_567fr_397fr]">
          <Bento icon={img.info} bg={img.rect5} bgClass="h-[494px] w-[458px]" title="Informed decisions" text="Technical and operational decisions are made with commercial realities in mind." />
          <Bento icon={img.handshake} bg={img.rect10} bgClass="h-[529px] w-[497px]" title="Long-term relationships" text="We work to build lasting partnerships, not transactional client relationships." />
          <div className="relative h-[280px] overflow-hidden border-b border-r border-[#aaa] md:col-span-2 lg:col-span-1">
            <img src={img.delivery} alt="Container ship at sea" className="absolute size-full object-cover" />
          </div>
        </div>
        </div>
      </div>

      <div className="mx-auto mt-[80px] flex max-w-[1440px] flex-col gap-[10px]">
        <div data-reveal className="flex max-w-[748px] flex-col gap-[20px] px-5 md:px-[40px]">
          <div className="flex flex-col gap-[12px]">
            <p className={eyebrow}>Our Commitment</p>
            <h2 className={`${h2} max-w-[693px]`}>Experience that stays close to the vessel</h2>
          </div>
          <p className={`${body} max-w-[489px]`}>Our experienced team works closely with owners, crews and technical partners to keep communication clear and accountability close to the operation.</p>
        </div>
        <div data-reveal="fade" className="relative overflow-hidden">
          <div data-stagger className="relative z-10 grid grid-cols-1 gap-[32px] px-5 pt-[40px] sm:grid-cols-3 md:px-[40px] lg:ml-[499px] lg:mr-[40px] lg:px-0 lg:pt-[10px]">
            <Commitment icon={img.arrowDown} title="Direct involvement" text="Decisions made close to the operation." />
            <Commitment icon={img.userFocus} title="Personal accountability" text="Clear ownership from shore to ship." />
            <Commitment icon={img.lightbulb} title="Experienced oversight" text="Practical maritime expertise across every aspect of management." />
          </div>
          <div className="relative -mt-[120px] h-[420px] md:-mt-[200px] md:h-[595px]">
            <div className="absolute inset-x-0 bottom-0 h-[161px] overflow-hidden">
              <img src={img.commitA} alt="" className="absolute left-[-2.21%] top-[-300.62%] h-[521.08%] w-[154.25%] max-w-none" />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <img src={img.commitB} alt="Port cranes along the quay" className="absolute left-[-2.94%] top-[-1.1%] h-[131.49%] w-[154.25%] max-w-none" />
            </div>
          </div>
        </div>
      </div>

      <section id="our-approach" className="relative mx-auto flex max-w-[1440px] flex-col gap-[48px] overflow-hidden px-5 py-[80px] md:px-[40px] lg:min-h-[832px] lg:flex-row lg:items-center">
        <div className="relative order-last aspect-[704/711] w-full max-w-[734px] self-end lg:absolute lg:right-[-60px] lg:top-1/2 lg:order-none lg:w-[51%] lg:-translate-y-1/2"
          style={{ clipPath: "polygon(48% 0, 100% 0, 100% 100%, 48% 100%, 1.2% 52.5%, 0.6% 50%, 1.2% 47.5%)" }}>
          <video src={img.approachVideo} autoPlay muted loop playsInline preload="metadata" aria-label="Vessel undocking at night" className="absolute inset-0 size-full bg-black object-cover" />
        </div>
        <div className="flex max-w-[692px] flex-col gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[12px]">
              <h2 className={eyebrow}>Our Approach</h2>
              <p className={h2}>One vessel. <br />One clear understanding.</p>
            </div>
            <div className={`${body} flex max-w-[584px] flex-col gap-[24px]`}>
              <p>We don't believe effective ship management can be delivered through a standardised template.</p>
              <p>Our approach starts with understanding the vessel, its operating environment and the owner's priorities. From there, our teams work closely across technical, operational and commercial considerations to make informed decisions and maintain consistent performance.</p>
            </div>
          </div>
          <ol data-stagger className="flex flex-col gap-[4px]">
            {steps.map((s) => (
              <li key={s.label} className="flex items-center gap-[12px] py-[12px]">
                <img src={s.icon} alt="" className="size-[32px]" />
                <span className="font-['Geist:SemiBold'] text-[20px] font-semibold text-[#12344d]">{s.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="certifications" className="mx-auto flex max-w-[1440px] flex-col gap-[48px] px-5 pb-[80px] md:px-[40px] lg:min-h-[480px] lg:flex-row lg:items-center lg:gap-[40px] lg:pb-0">
        <div className="flex flex-1 flex-col gap-[20px]">
          <div className="flex flex-col gap-[12px]">
            <p className={eyebrow}>Certification</p>
            <h2 className={h2}>Recognised standards. Proven commitment.</h2>
          </div>
          <p className={`${body} max-w-[584px]`}>BellRock Maritime is committed to maintaining the highest standards of safety, quality and operational excellence. Our certifications provide a framework for consistent and responsible ship management.</p>
        </div>
        <div data-stagger className="flex flex-1 flex-col items-center justify-center gap-[48px] sm:flex-row lg:gap-[100px]">
          {[
            { k: "ISM", t: "International Safety Management" },
            { k: "ISO", t: "ISO Certification" },
          ].map((c) => (
            <div key={c.k} className="flex flex-col items-center gap-[12px]">
              <div className="flex h-[90px] w-[277px] max-w-full items-center justify-center bg-[rgba(0,0,0,0.2)]" role="img" aria-label={`${c.k} certificate placeholder`} />
              <div className="flex flex-col items-center gap-[4px] text-black">
                <h3 className="font-['Geist:SemiBold'] text-[20px] font-semibold uppercase leading-[1.5] tracking-[1px]">{c.k}</h3>
                <p className="text-center font-['Geist:Regular'] text-[16px] leading-[1.2]">{c.t}<br />Certificate to be provided.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactFooter() {
  const [legal, setLegal] = useState(false);
  const links = [
    { label: "About", id: "who-we-are" },
    { label: "Capabilities", id: "what-we-do" },
    { label: "Certification", id: "certifications" },
  ];
  return (
    <footer className="relative overflow-hidden bg-[#12344d] pb-[12vw] lg:aspect-[1440/1009] lg:bg-white lg:pb-0">
      <img src={img.union} alt="Cargo vessel in harbour" className="pointer-events-none absolute bottom-[-0.17vw] left-[-2.01%] h-auto w-[105.9%] max-w-none" />
      <img src={img.footerShip} alt="" className="pointer-events-none absolute bottom-[9.7%] left-[64.3%] hidden h-[45.6%] w-[27%] object-contain object-bottom lg:block" />
      <section id="contact" className="relative mx-auto max-w-[1440px] px-5 py-[80px] md:px-[40px]">
        <div className="flex max-w-[1018px] flex-col gap-[32px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className={eyebrow}>Contact</h2>
            <p className="font-['Geist:Medium'] text-[26px] font-medium leading-[1.2] tracking-[-1px] text-white md:text-[40px]">
              Whether you’re looking for a new ship-management partner or exploring how BellRock can support your existing operation, we’d be happy to start a conversation.
            </p>
          </div>
          <a href={`mailto:${EMAIL}`} className="cta group relative flex h-[56px] w-fit max-w-full items-center gap-[16px] overflow-hidden rounded-[8px] bg-[#f5f2eb] px-[20px] shadow-[0_0_0_rgba(0,0,0,0)] transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:bg-white hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8a441]">
            <img src={img.mailIcon} alt="" className="size-[32px] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-110" />
            <span className="truncate font-['Geist:SemiBold'] text-[16px] font-semibold leading-[1.5] text-[#12344d] sm:text-[20px]">{EMAIL}</span>
            <img src={img.arrowContact} alt="" className="size-[24px] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[6px] group-hover:-rotate-45" />
          </a>
        </div>
      </section>
      <div className="relative mx-auto max-w-[1440px] px-5 pb-[24px] md:px-[40px] lg:absolute lg:left-0 lg:top-[50.7%] lg:max-w-none lg:p-0 lg:pl-[40px]">
          <nav aria-label="Footer" data-stagger className="flex flex-col">
            <p className="py-[8px] font-['Geist:Medium'] text-[14px] font-medium uppercase leading-[1.5] tracking-[1.4px] text-[#d8a441]">Sitemap</p>
            {links.map((l) => (
              <button key={l.label} onClick={() => go(l.id)} className="group relative flex h-[45px] w-fit items-center gap-[10px] pr-[12px] text-left transition-colors duration-300 font-['Geist:Medium'] text-[18px] font-medium leading-[1.05] text-[#ddd] hover:text-white focus-visible:text-white focus-visible:outline-none">
                <span className="relative">{l.label}<span aria-hidden className="absolute -bottom-[4px] left-0 h-px w-full origin-left scale-x-0 bg-[#d8a441] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" /></span>
                <img src={img.arrowFooter} alt="" className="size-[20px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[6px] group-hover:-rotate-45" />
              </button>
            ))}
          </nav>
      </div>
      <div className="relative mx-5 mb-[16px] flex flex-wrap items-center gap-x-[16px] gap-y-[4px] font-['Geist:Regular'] text-[14px] leading-[1.5] text-[rgba(245,242,235,0.5)] md:mx-[40px] md:text-[16px] lg:absolute lg:left-[37px] lg:top-[84.7%] lg:z-[2] lg:m-0">
        <p>Copyright © 2026 BellRock Maritime. All Rights Reserved</p>
        <button onClick={() => setLegal(true)} className="underline decoration-[rgba(245,242,235,0.35)] underline-offset-4 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none">Legal Notice / Impressum</button>
      </div>
      {legal && (
        <div role="dialog" aria-modal="true" aria-label="Legal Notice / Impressum" className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(18,52,77,0.7)] p-5" onClick={() => setLegal(false)}>
          <div className="relative max-h-[90vh] w-full max-w-[1200px] overflow-y-auto rounded-[8px] bg-[#f5f2eb] p-[24px] text-[#12344d] md:p-[44px]" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLegal(false)} aria-label="Close" className="absolute right-[16px] top-[12px] text-[28px] leading-none">×</button>
            <p className={eyebrow}>Impressum / Legal Notice</p>
            <dl className="mt-[32px] grid grid-cols-1 gap-x-[26px] md:grid-cols-2 lg:grid-cols-3">
              {([
                ["Company name", ["BellRock Maritime GmbH & Co. KG"]],
                ["Company registration number", ["HRA 4316"]],
                ["Legal representatives / Managing Directors", ["Thomas Klehr – Managing Director", "Matthias Epp – Managing Director"]],
                ["Contact", [<>Mail: <a href={`mailto:${EMAIL}`} className="hover:underline underline-offset-4">{EMAIL}</a></>, "Phone: TBA"]],
                ["Registered address", [<>Am Ruttmann Kai 1,<br />92253 Schnaittenbach, Germany</>]],
                ["Place of registration", ["Germany"]],
                ["VAT / Tax identification number", ["TBA"]],
              ] as [string, React.ReactNode[]][]).map(([k, v]) => (
                <div key={k} className="flex flex-col gap-[8px] border-b border-[#cfcfcf] py-[20px]">
                  <dt className="font-['Geist:Regular'] text-[16px] leading-[1.5] text-[#5d6b78]">{k}</dt>
                  {v.map((line, i) => <dd key={i} className="break-words font-['Geist:SemiBold'] text-[18px] font-semibold leading-[1.4] md:text-[20px]">{line}</dd>)}
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
      <div aria-label="BellRock Maritime" role="img" className="pointer-events-none absolute inset-x-0 bottom-0">
        <img src={img.bigB} alt="" className="absolute bottom-0 left-[0.13%] w-[5.38%]" style={{ aspectRatio: "77.5 / 113.531" }} />
        <img src={img.bigBellrock} alt="" className="absolute bottom-0 left-[6.05%] w-[41.11%]" style={{ aspectRatio: "591.981 / 113.531" }} />
      </div>
    </footer>
  );
}

function useReveal() {
  useEffect(() => {
    const set = new Set<HTMLElement>();
    const add = (el: HTMLElement, kind: string, delay = 0) => {
      if (set.has(el)) return;
      el.classList.add("reveal", `reveal-${kind}`);
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      set.add(el);
    };
    // Stagger groups: animate each child in sequence.
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((g) => {
      Array.from(g.children).forEach((c, i) => add(c as HTMLElement, "up", Math.min(i, 6) * 110));
      set.add(g);
    });
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => add(el, el.dataset.reveal || "up"));
    // Everything else inside sections: headings blur in, others fade up, with sibling stagger.
    document.querySelectorAll<HTMLElement>("main section:not(#home) > *, main section:not(#home) > * > *").forEach((el) => {
      if ([...set].some((s) => s !== el && (s.contains(el) || el.contains(s)))) return;
      const sib = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      add(el, el.querySelector("h2, h1") || /^H[12]$/.test(el.tagName) ? "blur" : "up", Math.min(sib, 4) * 90);
    });
    // Hero intro.
    document.querySelectorAll<HTMLElement>("#home h1, #home h1 + div").forEach((el, i) => add(el, "blur", 150 + i * 200));

    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }), { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    set.forEach((el) => el.classList.contains("reveal") && io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col gap-[80px]">
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <div>
          <WhyAndApproach />
          <ContactFooter />
        </div>
      </main>
    </div>
  );
}
