import react from 'react'
import React, { useEffect } from 'react';
import '../src/styles/values.css'

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.1, // Trigger the callback when 10% of the target is visible
    }
  );

  // Target all sections that need the animation
  document.querySelectorAll('.bg, .bg-7, .bg-d, .bg-12, .bg-15').forEach((section) => {
    observer.observe(section);
  });

  // Cleanup observer on component unmount
  return () => {
    observer.disconnect();
  };
}, []);

export default function Values(){
  return (
    <div className='main-container'>
      <div className='bg'>
        <span className='our-team-prioritizes'>
          Our team prioritizes these values
        </span>
        <div className='flex-row-e'>
          <div className='empty'>
            <span className='long-term-thinking'>Long Term Thinking</span>
            <div className='empty-1' />
          </div>
          <div className='empty-2'>
            <span className='educate-empower'>Educate & Empower</span>
          </div>
          <div className='empty-3'>
            <span className='continuous-learning'>Continuous Learning</span>
            <div className='div' />
          </div>
          <div className='div-4'>
            <span className='provide-genuine-value'>Provide Genuine Value</span>
            <div className='div-5' />
          </div>
          <div className='div-6' />
        </div>
      </div>
      <div className='bg-7'>
        <div className='div-8' />
        <div className='flex-column-f'>
          <span className='provide-genuine-value-9'>Provide Genuine Value</span>
          <div className='value-service'>
            <span className='value-service-a'>
              We want our service to be of genuine value to our clients. <br />
            </span>
            <span className='value-service-b'>
              <br />
            </span>
            <span className='value-service-c'>
              The price we charge reflects the time spent researching and
              crafting the learning experience. Our service will more than pay
              for itself through maximizing your refund or reducing your tax
              liability. If you are not satisfied with our service and we cannot
              agree on a resolution, we have a 100% money back guarantee no
              questions asked.
            </span>
          </div>
        </div>
      </div>
      <div className='bg-d'>
        <div className='default' />
        <div className='flex-column-a'>
          <span className='long-term-thinking-e'>Long Term Thinking</span>
          <div className='long-term-thinking-f'>
            <span className='long-term-thinking-10'>
              Any significant accomplishment in life is achieved through the
              small incremental decisions made on the way there. <br />
            </span>
            <span className='line-break'>
              <br />
            </span>
            <span className='financial-well-being'>
              We believe the same applies to our personal and financial
              well-being. The services we provide including any tax planning
              takes into consideration the future, spanning beyond just the
              current tax year. We are strongly invested in the long-term
              success of our client and hope to build a beneficial and
              long-lasting relationship with our client.
            </span>
          </div>
        </div>
      </div>
      <div className='div-11' />
      <div className='bg-12'>
        <span className='educate-empower-13'>Educate & Empower</span>
        <div className='asset-ownership'>
          <span className='yourself-line-break'>
            We believe the greatest asset you have is yourself. <br />
          </span>
          <span className='line-break-14'>
            <br />
          </span>
          <span className='tax-ownership'>
            Our mission is to help you understand your own taxes and take
            ownership of your financial future. All our services come bundled
            with a dedicated session for reviewing the tax return filed as well
            as a tax plan uniquely tailored to your circumstances to help you
            achieve your financial goals. If you don’t see any value in this
            learning experience you have the ability to opt out prior to
            engagement acceptance.
          </span>
        </div>
      </div>
      <div className='bg-15'>
        <div className='div-16' />
        <div className='flex-column-c'>
          <span className='continuous-learning-17'>Continuous Learning</span>
          <div className='learning-content'>
            <span className='learning-pride-edge'>
              Learning is where we pride ourselves and find our competitive
              edge. <br />
            </span>
            <span className='line-break-18'>
              <br />
            </span>
            <span className='stay-on-top'>
              We make sure to stay on top of the latest changes in tax laws as
              well as incorporate new technology to improve the efficiency of
              our work process. Our team is continuously finding ways to expand
              our knowledge, hoping to expand our scope of service and improve
              our client experience. If you have any questions or concerns,
              don’t hesitate to reach out.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}