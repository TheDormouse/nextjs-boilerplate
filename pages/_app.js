import '../components/global.css'
import React from 'react'
import Head from 'next/head'

export default function App(props) {
    const [dark, setDark] = React.useState(true)
    const [showChild, setShowChild] = React.useState(false);
    
    // Wait until after client-side hydration to show
    React.useEffect(() => {
    //Set the initial theme when the page is loaded
    setDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
      setShowChild(true);
    }, []);
    
    if (!showChild) {
      // You can show some kind of placeholder UI here
      return null;
    }
  
    return <Rendered dark={dark} setDark={setDark} {...props} />;
  }

function Rendered({Component, pageProps, dark, setDark}){
    React.useLayoutEffect(() => {
        //useLayoutEffect will run before the content is painted to prevent flashing
        //Add the listener just before paint
        window.matchMedia('(prefers-color-scheme: dark)').addListener(e => setDark(e.matches))
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')

        //Splitting the element prevents the page from loading twice.. for some reason
        //https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
    }, [dark])
    
    return (
        <>
        <Head>
            <title>Next.js Dark Mode</title></Head>
    <Component dark={dark} setDark={setDark} {...pageProps} />
    </>
    )
}