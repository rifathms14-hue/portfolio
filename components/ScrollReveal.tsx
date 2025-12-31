'use client'

import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

// #region agent log
if (typeof window !== 'undefined') {
  try {
    gsap.registerPlugin(ScrollTrigger);
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:9',message:'GSAP plugin registration success',data:{isClient:typeof window !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  } catch (error: any) {
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:9',message:'GSAP plugin registration error',data:{error:error?.message,stack:error?.stack,isClient:typeof window !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  }
}
// #endregion

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    // Convert React children to string first, preserving structure
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join('');
      }
      if (React.isValidElement(node) && node.props.children) {
        return getTextContent(node.props.children);
      }
      return '';
    };

    const text = getTextContent(children);
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:64',message:'useEffect entry',data:{hasContainer:!!containerRef.current,isClient:typeof window !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    const el = containerRef.current;
    if (!el) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:66',message:'Container ref is null, early return',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      return;
    }

    // Bold specific phrases
    const phrasesToBold = [
      '7+ years of experience',
      'enterprise SaaS and FinTech',
      'research, architecture, and production-ready interfaces',
      'exploring vibe coding'
    ];
    
    const wordElements = el.querySelectorAll('.word');
    
    phrasesToBold.forEach(phrase => {
      // Normalize phrase words (remove punctuation for matching)
      const phraseWords = phrase.toLowerCase().split(/\s+/).map(w => w.replace(/[^\w+]/g, ''));
      
      // Try to find the phrase in the word sequence
      for (let i = 0; i <= wordElements.length - phraseWords.length; i++) {
        let match = true;
        let wordIndex = 0;
        
        // Check if words starting at index i match the phrase
        for (let j = i; j < i + phraseWords.length && j < wordElements.length; j++) {
          const wordText = (wordElements[j].textContent?.trim() || '').toLowerCase().replace(/[^\w+]/g, '');
          if (wordText !== phraseWords[wordIndex]) {
            match = false;
            break;
          }
          wordIndex++;
        }
        
        // If match found, mark all words in the phrase as bold
        if (match) {
          for (let k = i; k < i + phraseWords.length && k < wordElements.length; k++) {
            wordElements[k].classList.add('bold');
          }
          break; // Move to next phrase
        }
      }
    });

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:107',message:'Before GSAP animations',data:{wordCount:wordElements.length,hasScroller:!!scroller,isWindow:scroller === window},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion

    try {
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    // Set initial states
    if (enableBlur) {
      gsap.set(wordElements, { filter: `blur(${blurStrength}px)` });
    }
    gsap.set(wordElements, { opacity: baseOpacity });

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)`, willChange: 'filter' },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:165',message:'GSAP animations setup complete',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    } catch (error: any) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:167',message:'GSAP animation error',data:{error:error?.message,stack:error?.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
    }

    return () => {
      try {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      } catch (error: any) {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:172',message:'ScrollTrigger cleanup error',data:{error:error?.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
      }
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;

