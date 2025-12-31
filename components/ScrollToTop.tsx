'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollToTop.tsx:6',message:'useEffect entry',data:{hasWindow:typeof window !== 'undefined',hash:typeof window !== 'undefined' ? window.location.hash : 'N/A'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    if (typeof window === 'undefined') {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollToTop.tsx:8',message:'Window undefined in useEffect',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      return;
    }
    try {
      // Scroll to top on initial page load
      window.scrollTo(0, 0)
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollToTop.tsx:12',message:'scrollTo called',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      
      // Prevent automatic scroll to hash on page load
      if (window.location.hash) {
        // Remove hash from URL without scrolling
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollToTop.tsx:16',message:'Hash removed',data:{originalHash:window.location.hash},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
      }
    } catch (error: any) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollToTop.tsx:19',message:'ScrollToTop error',data:{error:error?.message,stack:error?.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
    }
  }, [])

  return null
}

