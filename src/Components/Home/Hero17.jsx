import { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import img1 from '../../Images/Hero_Images/photo_1.jpg';
import img2 from '../../Images/Hero_Images/photo_2.jpg';
import img3 from '../../Images/Hero_Images/photo_3.jpg';
import img4 from '../../Images/Hero_Images/photo_4.jpg';
import img5 from '../../Images/Hero_Images/photo_5.jpg';
import img6 from '../../Images/Hero_Images/photo_6.jpg';
import img7 from '../../Images/Hero_Images/photo_7.jpg';
import img8 from '../../Images/Hero_Images/photo_8.jpg';
import img9 from '../../Images/Hero_Images/photo_9.jpg';
import img10 from '../../Images/Hero_Images/photo_10.jpg';
import img11 from '../../Images/Hero_Images/photo_11.jpg';
import img12 from '../../Images/Hero_Images/photo_12.jpg';
import img13 from '../../Images/Hero_Images/photo_13.jpg';
import img14 from '../../Images/Hero_Images/photo_14.jpg';
import img15 from '../../Images/Hero_Images/photo_15.jpg';
import img16 from '../../Images/Hero_Images/photo_16.jpg';
import img17 from '../../Images/Hero_Images/photo_17.jpg';
import img18 from '../../Images/Hero_Images/photo_18.jpg';
import img19 from '../../Images/Hero_Images/photo_19.jpg';
import img20 from '../../Images/Hero_Images/photo_20.jpg';

const Hero17 = (props) => {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()
  const handleGetStarted = () => {
    navigate('#ready')
  }
  const handleLearnMore = () => {
    navigate('#discover')
  }

  // Define your unique set of images (20 images in this case)
  const uniqueImages = [
    { src: props.image1Src, alt: props.image1Alt, className: 'hero17-placeholder-image10' },
    { src: props.image2Src, alt: props.image2Alt, className: 'hero17-placeholder-image11' },
    { src: props.image3Src, alt: props.image3Alt, className: 'hero17-placeholder-image12' },
    { src: props.image4Src, alt: props.image4Alt, className: 'hero17-placeholder-image13' },
    { src: props.image5Src, alt: props.image5Alt, className: 'hero17-placeholder-image14' },
    { src: props.image6Src, alt: props.image6Alt, className: 'hero17-placeholder-image15' },
    { src: props.image7Src, alt: props.image7Alt, className: 'hero17-placeholder-image16' },
    { src: props.image8Src, alt: props.image8Alt, className: 'hero17-placeholder-image17' },
    { src: props.image9Src, alt: props.image9Alt, className: 'hero17-placeholder-image18' },
    { src: props.image10Src, alt: props.image10Alt, className: 'hero17-placeholder-image19' },
    { src: props.image11Src, alt: props.image11Alt, className: 'hero17-placeholder-image20' },
    { src: props.image12Src, alt: props.image12Alt, className: 'hero17-placeholder-image10' }, // These appear to be duplicates of earlier images, keep as is
    { src: props.image13Src, alt: props.image13Alt, className: 'hero17-placeholder-image11' },
    { src: props.image14Src, alt: props.image14Alt, className: 'hero17-placeholder-image12' },
    { src: props.image15Src, alt: props.image15Alt, className: 'hero17-placeholder-image13' },
    { src: props.image16Src, alt: props.image16Alt, className: 'hero17-placeholder-image14' },
    { src: props.image17Src, alt: props.image17Alt, className: 'hero17-placeholder-image15' },
    { src: props.image18Src, alt: props.image18Alt, className: 'hero17-placeholder-image16' },
    { src: props.image19Src, alt: props.image19Alt, className: 'hero17-placeholder-image17' },
    { src: props.image20Src, alt: props.image20Alt, className: 'hero17-placeholder-image18' },
  ];

  // Concatenate two full sets of the unique images. This effectively doubles the content.
  const imagesToDisplay = [...uniqueImages, ...uniqueImages];

  return (
    <div className="hero17-header78 font-sans">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1 font-sans">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7 font-sans ">{t('welcome')}</span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8 font-sans font-semibold text-gray-600">
                  {t("empower")}
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1 hover:border-none" onClick={handleGetStarted}>
            <span className="thq-body-small">
              {props.action1 ?? <span className="hero17-text6 ">Get Started</span>}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2" onClick={handleLearnMore}>
            <span className="thq-body-small">
              {props.action2 ?? <span className="hero17-text5">Learn More</span>}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div
            className="thq-animated-group-horizontal animate-hero17-scroll"
            // The animationDuration should be relative to the length of uniqueImages
            // A higher number means slower scroll. Adjust as needed.
            style={{ animationDuration: '60s', whiteSpace: 'nowrap', display: 'flex' }}
          >
            {imagesToDisplay.map((img, index) => (
              <img
                key={index} // Using index as key is fine here since the array is static and items are identical
                src={img.src}
                alt={img.alt}
                className={`${img.className} thq-img-scale thq-img-ratio-1-1`}
                style={{ display: 'inline-block', margin: 0, padding: 0 }}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  /* Define the keyframes for the continuous scroll */
  @keyframes hero17-scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      /* This is the key: translate by 50% of the container's width.
         Since the container holds two identical sets, moving 50%
         makes the second set perfectly align where the first started. */
      transform: translateX(-50%);
    }
  }

  /* Apply the animation properties */
  .animate-hero17-scroll {
    animation-timing-function: linear; /* Ensures constant speed, no acceleration/deceleration */
    animation-iteration-count: infinite; /* Makes the animation loop forever */
    animation-name: hero17-scroll;
    /* animation-fill-mode: forwards; is not needed for infinite loops and can sometimes cause flicker */
  }

  /* Critical for this technique: ensure the animated container spans the full width of its content */
  .thq-animated-group-horizontal {
      width: fit-content; /* Allows the div to be as wide as its combined image content */
  }
</style>`}
          />
        </div>
      </div>
    </div>
  );
};

Hero17.defaultProps = {
  image1Src: img1,
  image2Src: img2,
  image3Src: img3,
  image4Src: img4,
  image5Src: img5,
  image6Src: img6,
  image7Src: img7,
  image8Src: img8,
  image9Src: img9,
  image10Src: img10,
  image11Src: img11,
  image12Src: img12,
  image13Src: img13,
  image14Src: img14,
  image15Src: img15,
  image16Src: img16,
  image17Src: img17,
  image18Src: img18,
  image19Src: img19,
  image20Src: img20,

  image1Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image11Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image13Alt: 'Hero Image',
  image14Alt: 'Hero Image',
  image15Alt: 'Hero Image',
  image16Alt: 'Hero Image',
  image17Alt: 'Hero Image',
  image18Alt: 'Hero Image',
  image19Alt: 'Hero Image',
  image20Alt: 'Hero Image',

  action2: undefined,
  action1: undefined,
  heading1: undefined,
  content1: undefined,
};

Hero17.propTypes = {
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image7Src: PropTypes.string,
  image8Src: PropTypes.string,
  image9Src: PropTypes.string,
  image10Src: PropTypes.string,
  image11Src: PropTypes.string,
  image12Src: PropTypes.string,
  image13Src: PropTypes.string,
  image14Src: PropTypes.string,
  image15Src: PropTypes.string,
  image16Src: PropTypes.string,
  image17Src: PropTypes.string,
  image18Src: PropTypes.string,
  image19Src: PropTypes.string,
  image20Src: PropTypes.string,

  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image13Alt: PropTypes.string,
  image14Alt: PropTypes.string,
  image15Alt: PropTypes.string,
  image16Alt: PropTypes.string,
  image17Alt: PropTypes.string,
  image18Alt: PropTypes.string,
  image19Alt: PropTypes.string,
  image20Alt: PropTypes.string,

  action2: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
};

export default Hero17;