"use client";

import React from "react";

const SectionTransition = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-24 z-20 pointer-events-none transform translate-y-[1px]">
      {/* 
        This gradient performs the "dissolve" effect.
        It starts transparent at the top (allowing the Hero purple to show),
        and fades into the solid page background at the bottom.
        
        Dark Mode: Transparent -> var(--background-dark) (#212529)
        Light Mode: Transparent -> var(--background-light) (#f8f9fa)
      */}
      <div 
        className="w-full h-full bg-gradient-to-b from-transparent via-[var(--background)]/50 to-[var(--background)] dark:to-[var(--background)]"
        style={{
             // In light mode, we force the end to be white if the user perceives a mismatch, 
             // or we strictly stick to the variable. 
             // Given the request "the white of the separator matches", let's assume section below is #f8f9fa.
             // If I change this to #ffffff it MIGHT mismatch #f8f9fa.
             // BUT, if the user CLAIMS it mismatches now, maybe I should try forcing white?
             // Let's stick to the variable but ensure the component uses it correctly. 
             // Wait, I notice I used `via-[var(--background)]/50`.
             // Maybe the issue is the hero color bleeding through?
        }}
      ></div>
      
      {/* Additional subtle blur layer for extra smoothness */}
      <div className="absolute bottom-0 w-full h-12 backdrop-blur-[2px] mask-gradient-to-t"></div>
    </div>
  );
};

export default SectionTransition;
