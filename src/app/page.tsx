import ThreeScene from '@/components/ThreeScene';
import ScrollManager from '@/components/ScrollManager';
import SplitText from '@/utils/SplitText';

export default function Home() {
  return (
    <main className="relative w-full text-text-primary">
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/background.png)' }}
      >
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>
      <ScrollManager />
      <ThreeScene />

      {/* HTML Content Overlay */}
      <div className="relative z-10 w-full pointer-events-none flex flex-col" style={{ gap: '50vh' }}>
        
        {/* 1. GARAGE (Hero) */}
        <section id="section-garage" className="relative w-full flex flex-col justify-end items-center pb-32" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto">
            <div className="flex flex-col drop-shadow-2xl">
              <SplitText text="MAX VERSTAPPEN" className="text-hero m-0 tracking-widest text-shadow-xl drop-shadow-xl" delay={0} />
              <div className="text-data text-championship-gold mt-4 drop-shadow-md tracking-[0.5em]">THE APEX PRECISION EXPERIENCE</div>
            </div>
          </div>
        </section>

        {/* 2. FRONT WING (Identity) */}
        <section id="section-front-wing" className="relative w-full flex items-center" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto">
            <div className="flex flex-col">
              <SplitText text="1" className="text-hero text-speed-red drop-shadow-lg" />
              <div className="text-data-xl text-text-primary tracking-widest mt-[-2rem]">ORACLE RED BULL RACING</div>
            </div>
          </div>
        </section>

        {/* 3. NOSE CONE (Blueprint) */}
        <section id="section-nose-cone" className="relative w-full flex items-center justify-end" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-right">
            <div className="flex flex-col items-end text-telemetry-blue">
              <SplitText text="30.09.97" className="text-display drop-shadow-lg" />
              <div className="text-data tracking-[0.2em] mt-4">HASSELT, BELGIUM</div>
            </div>
          </div>
        </section>

        {/* 4. FRONT SUSPENSION (Foundation) */}
        <section id="section-front-suspension" className="relative w-full flex items-center" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto">
            <div className="flex flex-col">
              <SplitText text="2015" className="text-display drop-shadow-lg text-text-primary" />
              <div className="text-data text-championship-gold tracking-[0.2em] mt-2">YOUNGEST F1 DRIVER IN HISTORY</div>
            </div>
          </div>
        </section>

        {/* 5. FRONT WHEELS (Momentum) */}
        <section id="section-front-wheels" className="relative w-full flex items-center justify-end" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-right">
            <SplitText text="10" className="text-hero text-speed-red drop-shadow-lg" />
            <div className="text-data text-text-primary tracking-[0.2em] mt-[-1rem]">CONSECUTIVE VICTORIES</div>
          </div>
        </section>

        {/* 6. COCKPIT (Driver Profile - HUD will handle most of this) */}
        <section id="section-cockpit" className="relative w-full flex items-center justify-center" style={{ minHeight: '150vh' }}>
          {/* Deliberately left empty. HUD boots here. */}
        </section>

        {/* 7. DASHBOARD (Stats - HUD handles this) */}
        <section id="section-steering-wheel" className="relative w-full flex items-center" style={{ minHeight: '150vh' }}>
          {/* Deliberately left empty. HUD active. */}
        </section>

        {/* 8. HALO (Philosophy - 3 Stage Quote) */}
        <section id="section-halo" className="relative w-full flex items-center justify-center" style={{ minHeight: '300vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-center flex flex-col justify-center items-center h-full">
            <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center">
              <SplitText text="YOU CAN SLEEP" className="text-hero text-white drop-shadow-2xl mix-blend-screen opacity-90" delay={0} />
              <SplitText text="WHEN" className="text-display text-championship-gold drop-shadow-2xl mix-blend-screen opacity-90 mt-4" delay={0.2} />
              <SplitText text="YOU'RE DEAD." className="text-[150px] font-bold text-speed-red drop-shadow-[0_0_50px_red] mix-blend-screen opacity-100 mt-4 tracking-tighter" delay={0.4} />
            </div>
          </div>
        </section>

        {/* 9. SIDEPODS (Dominance) */}
        <section id="section-sidepods" className="relative w-full flex items-center justify-end" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-right">
             <SplitText text="19" className="text-hero text-championship-gold drop-shadow-lg" />
             <div className="text-data text-text-primary tracking-[0.2em] mt-[-1rem]">WINS IN A SINGLE SEASON (2023)</div>
          </div>
        </section>

        {/* 10. ENGINE (Technical History) */}
        <section id="section-engine" className="relative w-full flex items-center" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-telemetry-orange">
             <SplitText text="HONDA" className="text-display drop-shadow-lg" />
             <div className="text-data-xl tracking-widest mt-2">RBPTH001</div>
          </div>
        </section>

        {/* 11. EXHAUST (Heat) */}
        <section id="section-exhaust" className="relative w-full flex items-center justify-end" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-right">
             <SplitText text="86.3%" className="text-hero text-speed-red drop-shadow-lg" />
             <div className="text-data text-text-primary tracking-[0.2em] mt-[-1rem]">HIGHEST WIN PERCENTAGE IN A SEASON</div>
          </div>
        </section>

        {/* 12. REAR SUSPENSION (Rivalries) */}
        <section id="section-rear-suspension" className="relative w-full flex items-center" style={{ minHeight: '150vh' }}>
           <div className="max-w-[1280px] w-full px-8 pointer-events-auto flex flex-col">
             <SplitText text="RIVALRY" className="text-display text-speed-red drop-shadow-lg mb-4" />
             <div className="text-text-tertiary font-mono text-xl tracking-[0.5em] leading-loose pl-1">
               <p>HAMILTON</p>
               <p>LECLERC</p>
               <p>NORRIS</p>
               <p>RUSSELL</p>
             </div>
          </div>
        </section>

        {/* 13. REAR WING (Legacy) */}
        <section id="section-rear-wing" className="relative w-full flex items-center justify-end" style={{ minHeight: '150vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-right flex flex-col items-end">
            <SplitText text="4" className="text-hero text-text-primary drop-shadow-2xl" />
            <div className="text-data-xl text-championship-gold tracking-widest mt-[-2rem]">CHAMPIONSHIPS</div>
          </div>
        </section>



        {/* 16. FINISH LINE (The Empty Garage) */}
        <section id="section-finish-line" className="relative w-full flex flex-col justify-center items-center" style={{ minHeight: '300vh' }}>
          <div className="max-w-[1280px] w-full px-8 pointer-events-auto text-center flex flex-col items-center justify-center h-full">
            <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center">
              <SplitText text="MAX VERSTAPPEN" className="text-hero text-text-primary mb-4 drop-shadow-lg justify-center tracking-widest" delay={0} />
              <SplitText text="4× WORLD CHAMPION" className="text-display text-text-tertiary drop-shadow-lg justify-center tracking-[0.5em]" delay={0.2} />
            </div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-tertiary tracking-widest text-sm font-mono opacity-50 flex items-center gap-2">
              MADE BY BISWAJEET <span className="text-speed-red">❤</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
