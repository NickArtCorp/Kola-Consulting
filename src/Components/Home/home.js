import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Clean Firsthand Rabbit</title>
        <meta property="og:title" content="Clean Firsthand Rabbit" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch with us today to take your business to the next
              level.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Started</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">#home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">#contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Kola Consulting, your partner in business success.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore our range of professional services tailored to your
              business needs.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">#about</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our team and our commitment to excellence.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to Kola Consulting</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Empowering businesses to reach their full potential
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Tailored strategies for each business
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Customized Solutions</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Expert guidance to achieve goals
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Professional Advice</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Expert advice from experienced consultants
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Goal Achievement</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to take your business to the next level?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today for a consultation and see how Kola Consulting
              can help you achieve your business goals.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Efficient solutions to improve operations and achieve business
              goals
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Customized consulting services to meet the specific needs of each
              business
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Expert Guidance</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Tailored Solutions</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Professional advice and strategies provided by experienced
              consultants
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Optimization Strategies</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$299/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Sign Up Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign Up Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Customized Action Plan</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Strategic Planning Sessions</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$1999/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign Up Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">
              Full Business Transformation Strategy
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Quarterly Performance Reviews</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Advanced Plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Dedicated Consultant Support</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">
              Comprehensive Business Analysis
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic Plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$199/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$2999/year</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Monthly Progress Reports</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$999/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Initial Business Assessment</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Bi-Weekly Strategy Calls</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">$99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Premium Plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              Schedule a meeting with our consultants to discuss your business
              needs and goals.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              Implement the proposed strategies with the support and guidance of
              our consultants.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">
              Analysis and Strategy Development
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Our team will analyze your current business operations and develop
              customized strategies to address areas of improvement.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Initial Consultation</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">Implementation</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              Continuously monitor the progress of the implemented strategies
              and evaluate their effectiveness in achieving desired outcomes.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Monitoring and Evaluation</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">
              Marketing Director, Bright Ideas Co.
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">CEO, Tech Solutions Inc.</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">Michael Lee</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              I am impressed by the dedication and commitment of the Kola
              Consulting team. Their tailored strategies have significantly
              improved our business performance and profitability.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Emily Johnson</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">
              Operations Manager, Global Ventures Corp.
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Adams</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Working with Kola Consulting has been a game-changer for our
              business. Their strategic advice and solutions have helped us
              streamline our operations and achieve our targets efficiently.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Founder, Innovate Now Ltd.</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">
              Kola Consulting has exceeded our expectations with their
              professionalism and expertise. I highly recommend their services
              to any business looking to grow and succeed.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              Kola Consulting&apos;s insights have been invaluable in helping us
              navigate complex business challenges. Their solutions are
              practical, effective, and results-driven.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              We are grateful for the support and guidance provided by Kola
              Consulting. Their strategic approach has transformed our
              operations and positioned us for sustainable growth.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214">Link 5</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215">Link 3</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216">Link 1</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218">Link 2</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219">Link 4</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
