import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

const AdSense = ({ 
  slot, 
  format = "auto", 
  responsive = "true", 
  style = { display: 'block' },
  layout = "" 
}) => {
  const adInitialized = useRef(false);

  useEffect(() => {
    // Prevent duplicate initialization
    if (adInitialized.current) return;

    const initializeAd = () => {
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adInitialized.current = true;
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    };

    // Load AdSense script if not already loaded
    if (!window.adsenseLoaded) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9591264391614264';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.adsenseLoaded = true;
        // Initialize ad after script loads
        setTimeout(initializeAd, 100);
      };
      document.head.appendChild(script);
    } else {
      // Script already loaded, initialize ad
      setTimeout(initializeAd, 100);
    }
  }, []);

  return (
    <Box className="adsense-container" my={4}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-9591264391614264" // Fixed: Use your actual publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
        data-ad-layout={layout}
      />
    </Box>
  );
};

export default AdSense;