/// Inline, render-blocking script that sets the theme before first paint so
/// there is no flash of the wrong theme. Reads the saved preference, falling
/// back to the OS setting.
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('nuvex-theme');if(!t||t==='system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var r=document.documentElement;r.setAttribute('data-theme',t);if(t==='dark')r.classList.add('dark');}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
