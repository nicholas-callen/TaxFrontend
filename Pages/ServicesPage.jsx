import react from 'react'
import React, { useState } from 'react';
import '../src/styles/services.css'

export default function ServicesPage() {
  return (
    <div className='main-container'>
      <span className='services-1'>Services</span>
      <span className='select-all-apply'>Select all that apply to you:</span>
      <div className='flex-row-c'>
        <div className='op'>
          <div className='oppic' />
          <span className='have-job'>I have a job (w-2)</span>
        </div>
        <div className='op-2'>
          <div className='oppic-3' />
          <span className='have-children'>I have children/dependents</span>
        </div>
        <div className='op-4'>
          <div className='oppic-5' />
          <span className='student'>I am a student</span>
        </div>
        <div className='op-6'>
          <div className='oppic-7' />
          <span className='have-investments'>I have investments</span>
        </div>
        <div className='op-8'>
          <div className='oppic-9' />
          <span className='sold-stock-crypto'>I sold stock/crypto</span>
        </div>
        <div className='op-a'>
          <div className='oppic-b' />
          <span className='own-rental-properties'>I own rental properties</span>
        </div>
      </div>
      <div className='flex-row-c-c'>
        <div className='op-d'>
          <div className='oppic-e' />
          <span className='self-employed-contractor'>
            I am self-employed or a contractor
          </span>
        </div>
        <div className='op-f'>
          <div className='oppic-10' />
          <span className='run-small-business'>I run a small business</span>
        </div>
        <div className='op-11'>
          <div className='oppic-12' />
          <span className='have-1099-income'>I have 1099 income</span>
        </div>
        <div className='op-13'>
          <div className='oppic-14' />
          <span className='donated-to-charity'>I donated to charity</span>
        </div>
        <div className='op-15'>
          <div className='oppic-16' />
          <span className='receive-unemployment'>I receive unemployment</span>
        </div>
        <div className='op-17'>
          <div className='oppic-18' />
          <span className='have-s-corp'>I have an s-corp</span>
        </div>
      </div>
      <div className='flex-row-bd'>
        <div className='individual'>
          <div className='bestfit'>
            <span className='your-best-fit'>Your best fit is:</span>
            <div className='bestfit-19' />
          </div>
          <button className='startbutton'>
            <span className='start-now'>Start Now</span>
          </button>
        </div>
        <div className='individual-1a'>
          <span className='individual-1b'>INDIVIDUAL</span>
          <span className='starting-at'>Starting at $100</span>
        </div>
        <div className='complex'>
          <span className='complex-individual'>COMPLEX INDIVIDUAL</span>
          <button className='start-button'>
            <span className='start-now-1c'>Start Now</span>
          </button>
        </div>
        <div className='family'>
          <span className='family-1d'>FAMILY</span>
          <button className='start-button-1e'>
            <span className='start-now-1f'>Start Now</span>
          </button>
        </div>
        <div className='complex-pic' />
        <div className='family-pic' />
      </div>
      <div className='group-bg'>
        <span className='all-packages-include'>All our packages include</span>
        <div className='flex-row-c-20'>
          <div className='pic-7' />
          <div className='img-b' />
          <div className='pic-8' />
        </div>
        <div className='flex-row-fa'>
          <span className='competitive-pricing'>Competitive pricing</span>
          <span className='maximum-refund-promise'>Maximum refund promise</span>
          <span className='money-back-guarantee'>Money back guarantee</span>
        </div>
        <div className='flex-row-ac'>
          <span className='experience-difference'>
            Experience the difference with Zheng Tax, where competitive pricing
            meets unparalleled expertise.
          </span>
          <span className='peace-mind'>
            Experience peace of mind knowing that your tax return is in the
            hands of professionals dedicated to securing your maximum refund.
          </span>
          <span className='trustworthy-solutions'>
            Trust us to provide accurate, reliable, and client-focused tax
            solutions, backed by a guarantee that puts your interests first.
          </span>
        </div>
      </div>
      <div className='flex-row-cd'>
        <div className='stocktaxpic' />
        <span className='back-taxes-specialization'>
          Back Taxes Specialization
        </span>
        <div className='feeling-overwhelmed'>
          <span className='feeling-overwhelmed-21'>
            Feeling overwhelmed by unresolved back taxes?
            <br />
          </span>
          <span className='unique-situation'>
            <br />
            Whether you've fallen behind on filing tax returns, owe unpaid
            taxes, or are facing IRS collection actions, we're here to provide
            personalized solutions tailored to your unique situation.
          </span>
        </div>
      </div>
      <div className='flex-row-b'>
        <div className='stocktaxpic-22' />
        <span className='optional-tax-planning'>
          Optional Tax Planning Service
        </span>
        <span className='customized-tax-strategy'>
          Customized tax strategy designed to optimize your financial position
          by minimizing tax liability while concurrently advancing your
          overarching goals
          <br />
          <br />
          Implemented proactive approach, maintaining regular follow-ups
          throughout the year to ensure accountability and address any inquiries
          you may have
          <br />
          <br />
          This ongoing engagement aims to support your adherence to the
          established tax strategy and helps you stay on track towards your
          financial objectives
        </span>
      </div>
    </div>
  );
}