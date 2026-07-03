'use client';

import { Html } from '@react-three/drei';
import { scrollState } from '@/store/scrollState';
import { useEffect, useState } from 'react';

export default function CockpitHUD() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Cockpit is roughly progress 0.33 to 0.45.
    const interval = setInterval(() => {
      const inCockpit = scrollState.progress > 0.32 && scrollState.progress < 0.45;
      if (inCockpit && !isBooted) {
        setIsBooted(true);
      } else if (!inCockpit && isBooted) {
        setIsBooted(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isBooted]);

  return (
    <group position={[0, 0.65, -0.3]} rotation={[-0.2, 0, 0]}>
      <Html 
        transform 
        occlude="blending"
        scale={0.05}
        className={`transition-opacity duration-500 ${isBooted ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-[300px] h-[150px] bg-black border border-white/5 rounded-lg flex flex-col p-2 font-mono text-telemetry-green shadow-[0_0_30px_rgba(0,255,135,0.1)]">
          {/* LED Strip - "Goosebumps" sweeping RPM sequence */}
          <div className="flex justify-between w-full mb-2">
             <div className={`w-4 h-2 rounded-sm transition-all duration-75 ${isBooted ? 'bg-speed-red shadow-[0_0_15px_red] delay-[1000ms]' : 'bg-gray-900'}`}></div>
             <div className={`w-4 h-2 rounded-sm transition-all duration-75 ${isBooted ? 'bg-speed-red shadow-[0_0_15px_red] delay-[1100ms]' : 'bg-gray-900'}`}></div>
             <div className={`w-4 h-2 rounded-sm transition-all duration-75 ${isBooted ? 'bg-telemetry-blue shadow-[0_0_15px_blue] delay-[1200ms]' : 'bg-gray-900'}`}></div>
             <div className={`w-4 h-2 rounded-sm transition-all duration-75 ${isBooted ? 'bg-telemetry-blue shadow-[0_0_15px_blue] delay-[1300ms]' : 'bg-gray-900'}`}></div>
             <div className={`w-4 h-2 rounded-sm transition-all duration-75 ${isBooted ? 'bg-telemetry-green shadow-[0_0_15px_green] delay-[1400ms]' : 'bg-gray-900'}`}></div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden">
             {/* Boot sequence scanline effect */}
             <div className={`absolute inset-0 bg-white/10 w-full h-1 ${isBooted ? 'animate-scanline' : 'hidden'}`}></div>
             
             {isBooted ? (
               <div className="text-center animate-fade-in opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                 <div className="text-[10px] text-text-tertiary">SYS.BOOT // M.VERSTAPPEN</div>
                 <div className="text-3xl font-bold tracking-widest mt-1 text-white drop-shadow-[0_0_10px_white]">71 WINS</div>
                 <div className="flex gap-4 text-[12px] mt-2 opacity-80 text-telemetry-green">
                   <span>120+ POD</span>
                   <span>48+ POL</span>
                   <span>4 WDC</span>
                 </div>
               </div>
             ) : (
               <div className="w-full h-full flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-gray-900"></div>
               </div>
             )}
          </div>
        </div>
      </Html>
    </group>
  );
}
