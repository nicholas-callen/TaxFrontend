import react from 'react'
import '../src/styles/jack.css'

export default function JackBio() {
  return (
    <div className="indexJack">
      <div className="div">
        <div className="loadin">
          <img
            className="stock"
            alt="Stock"
            src="../Assets/Pics/stock1.png"
          />
          <p className="text-wrapper">
            Any significant accomplishment in life is achieved through the small incremental decisions made on the way
            there. We believe the same applies to our personal and financial well-being. The services we provide
            including any tax planning takes into consideration the future, spanning beyond just the current tax year.
            We are strongly invested in the long-term success of our client and hope to build a beneficial and
            long-lasting relationship with our client.
          </p>
          <div className="text-wrapper-2">Long Term Thinking</div>
        </div>
        <div className="loadin-2">
          <img
            className="img"
            alt="Stock"
            src="../Assets/Pics/stock2.png"
          />
          <p className="p">
            We want our service to be of genuine value to our clients. The price we charge reflects the time spent
            researching and crafting the learning experience. Our service will more than pay for itself through
            maximizing your refund or reducing your tax liability. If you are not satisfied with our service and we
            cannot agree on a resolution, we have a 100% money back guarantee no questions asked.
          </p>
          <div className="text-wrapper-3">Provide Genuine Value</div>
        </div>
        <div className="loadin-3">
          <img
            className="stock"
            alt="Stock"
            src="../Assets/Pics/stock1.png"
          />
          <p className="text-wrapper">
            Learning is where we pride ourselves and find our competitive edge. We make sure to stay on top of the
            latest changes in tax laws as well as incorporate new technology to improve the efficiency of our work
            process. Our team is continuously finding ways to expand our knowledge, hoping to expand our scope of
            service and improve our client experience. If you have any questions or concerns, don’t hesitate to reach
            out.
          </p>
          <div className="text-wrapper-4">Continuous Learning</div>
        </div>
        <div className="loadin-4">
          <img
            className="stock-2"
            alt="Stock"
            src="../Assets/Pics/stock1.png"
          />
          <p className="text-wrapper-5">
            We believe the greatest asset you have is yourself. Our mission is to help you understand your own taxes and
            take ownership of your financial future. All our services come bundled with a dedicated session for
            reviewing the tax return filed as well as a tax plan uniquely tailored to your circumstances to help you
            achieve your financial goals. If you don’t see any value in this learning experience you have the ability to
            opt out prior to engagement acceptance.
          </p>
          <div className="educate-empower">Educate &amp; Empower</div>
          <div className="text-wrapper-6">Values</div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img
              className="jack-personal-pic"
              alt="Jack personal pic"
              src="../Assets/Pics/jackpic.png"
            />
            <p className="jack-constantly">
              Jack constantly redefines what is possible through his discipline and strong work ethic.
              <br />
              <br />
              Jack accelerated his college career, graduating Cum Laude from UCLA in less than 2 years. During that
              time, he took rigorous courses in accounting, business, and finance as well as volunteered for the school
              VITA program where he filed tax returns for individuals and families from disadvantaged backgrounds. Jack
              went on to work at PwC, preparing partnership returns for large fund of funds and private equities in the
              alternative investment space. He officially became licensed as a Certified Public Accountant and has left
              PwC to focus his efforts on helping out individuals and small businesses with their tax and finances. 
              <br />
              <br />
              Jack is a firm believer in lifelong learning and dedicates his time to building a “big big map” of the
              world, sharing his knowledge and experience with those around him in hopes of creating a more empathetic
              and compassionate world.
            </p>
            <div className="text-wrapper-7">Jack Zheng</div>
            <div className="text-wrapper-8">About Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};