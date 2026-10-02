import { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = ({
  feature1ImgAlt = 'Professional advice',
  feature1ImgSrc = 'https://images.unsplash.com/photo-1703628144084-fc922246a486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjc4MzM2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt = 'Expert guidance',
  feature2ImgSrc = 'https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjc4MzM2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt = 'Customized solutions',
  feature3ImgSrc = 'https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjc4MzM2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title,
  feature1Description,
  feature2Title,
  feature2Description,
  feature3Title,
  feature3Description,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding font-sans">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={feature1ImgAlt}
              src={feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={feature2ImgAlt}
              src={feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={feature3ImgAlt}
              src={feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {feature1Title ?? (
                  <Fragment>
                    <span className="features24-text4">
                      Professional Advice
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {feature1Description ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Expert advice from experienced consultants
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {feature2Title ?? (
                  <Fragment>
                    <span className="features24-text6">Goal Achievement</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {feature2Description ?? (
                  <Fragment>
                    <span className="features24-text3">
                      Expert guidance to achieve goals
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {feature3Title ?? (
                  <Fragment>
                    <span className="features24-text2">
                      Customized Solutions
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {feature3Description ?? (
                  <Fragment>
                    <span className="features24-text1">
                      Tailored strategies for each business
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features24
