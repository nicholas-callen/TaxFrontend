import react from 'react'
import Button from '../Components/Button'
import '../src/styles/style.css'


export default function HomePage() {
    const handleClick = () => {
        console.log('Button Clicked');
    };
    return (
        <div className="index">
          <div className="div">
            <div className="bottom-bar">
              <div className="b">
                <div className="text-wrapper">FAQs</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper">Contact Us</div>
              </div>
              <div className="b-2">
                <div className="text-wrapper">Services</div>
              </div>
              <div className="b-3">
                <div className="text-wrapper">About Us</div>
              </div>
              <div className="text-wrapper-2">Zheng Tax</div>
            </div>
            <div className="area">
              <div className="sc">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="text-wrapper-3">4</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="text-wrapper-3">3</div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="text-wrapper-3">2</div>
                </div>
              </div>
              <div className="sc-2">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="text-wrapper-3">1</div>
                </div>
              </div>
              <div className="text-wrapper-4">It works simply like</div>
              <div className="scroll-area">
                <div className="overlap">
                  <div className="scroll">
                    <div className="text-wrapper-5">Tax Planning</div>
                    <p className="p">
                      Empower your financial future with our optional but recommended tax planning service, designed to
                      optimize your financial strategy and maximize your savings.
                    </p>
                    <img
                      className="img"
                      alt="Rectangle"
                      src="../Assets/Pics/step4pic.png"
                    />
                  </div>
                  <div className="scroll-2">
                    <div className="text-wrapper-6">Conform information</div>
                    <p className="p">
                      After we prepare your return, you will be given the chance to review and confirm that everything is
                      accurate. Once you e-sign the return, we will file electronically with the IRS.
                    </p>
                    <img
                      className="rectangle-2"
                      alt="Rectangle"
                      src="../Assets/Pics/step3pic.png"
                    />
                  </div>
                  <div className="scroll-3">
                    <div className="text-wrapper-7">Upload documents</div>
                    <p className="text-wrapper-8">
                      You will be given access to a secure client portal where you can upload your tax documents.
                    </p>
                    <img
                      className="rectangle-3"
                      alt="Rectangle"
                      src="../Assets/Pics/step2pic.png"
                    />
                  </div>
                  <div className="scroll-4">
                    <div className="text-wrapper-9">Choose a service</div>
                    <p className="text-wrapper-10">
                      Use our services page to determine which package is most suitable for you. We will recommend the best
                      fit and give you an estimated price.
                    </p>
                    <img
                      className="rectangle-4"
                      alt="Rectangle"
                      src="../Assets/Pics/step1pic.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="area-2">
              <div className="box">
                <div className="overlap-group-2">
                  <p className="text-wrapper-11">Starting at $200 + $80 per child</p>
                  <div className="text-wrapper-12">FAMILY</div>
                  <button className="button">
                    <div className="text-wrapper-13">Learn More</div>
                  </button>
                  <img
                    className="untitled-artwork"
                    alt="Family plan"
                    src="../Assets/Pics/familyplan.png"
                  />
                </div>
              </div>
              <div className="box-2">
                <div className="overlap-2">
                  <div className="text-wrapper-14">Starting at $100</div>
                  <div className="text-wrapper-15">INDIVIDUAL</div>
                  <img
                    className="working"
                    alt="Working"
                    src="../Assets/Pics/individual.png"
                  />
                </div>
                <button className="button-2">
                  <div className="text-wrapper-13">Learn More</div>
                </button>
              </div>
              <div className="box-3">
                <div className="overlap-3">
                  <div className="text-wrapper-16">COMPLEX INDIVIDUAL</div>
                  <div className="text-wrapper-17">Starting at $150</div>
                  <img
                    className="untitled-artwork-2"
                    alt="Complex individual"
                    src="../Assets/Pics/complexplan.png"
                  />
                </div>
                <button className="button-3">
                  <div className="text-wrapper-13">Learn More</div>
                </button>
              </div>
              <p className="text-wrapper-18">Find the best fit for you</p>
            </div>
            <div className="area-3">
              <div className="overlap-4">
                <div className="overlap-group-3">
                  <img
                    className="ellipse"
                    alt="Homepic"
                    src="../Assets/Pics/homepic.png"
                  />
                  <div className="text-wrapper-19">Easier Taxes, Happier Pockets</div>
                  <img
                    className="line"
                    alt="Line"
                    src="../Assets/Pics/line-1.svg"
                  />
                  <img
                    className="line-2"
                    alt="Line2"
                    src="../Assets/Pics/line-2.svg"
                  />
                  <img
                    className="line-3"
                    alt="Line3"
                    src="../Assets/Pics/line-3.svg"
                  />
                  <img
                    className="line-4"
                    alt="Line4"
                    src="../Assets/Pics/line-4.svg"
                  />
                </div>
                <button className="button-4">
                  <div className="text-wrapper-20">Start 2023 Return</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
};