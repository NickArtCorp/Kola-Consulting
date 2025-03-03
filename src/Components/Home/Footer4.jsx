import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding font-sans">
      <div className="footer4-max-width thq-section-max-width font-sans">
        <div className="footer4-content">

           
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2025 Kola Consulting</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text21">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text17">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text20">Cookies Settings</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: undefined,
  termsLink: undefined,
  link2: undefined,
  link4: undefined,
  logoAlt: 'Logo',
  cookiesLink: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  privacyLink: undefined,
}

Footer4.propTypes = {
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
}

export default Footer4
