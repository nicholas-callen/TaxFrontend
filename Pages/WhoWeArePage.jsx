import react from 'react'
import '../src/styles/who.css'

export default function WhoWeArePage() {
  return (
    <div className="indexWho">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="nickl">
          </div>
          <div className="gordonl">
            <img
              className="img"
              alt="Gordon pic"
              src="../Assets/Pics/gordoncrunch.png"
            />
            <p className="gordon-is-a-blend-of">
              Gordon is a blend of technical acumen and creative problem-solving, dedicated to solving a diverse set of
              challenges. <br />
              <br />
              As an undergraduate majoring in Computer Engineering at UC San Diego, he has skills in a variety of
              technical domains from creating surgery simulations in augmented reality to developing and testing
              features for distributed energy systems. <br />
              <br />
              Looking forward, Gordon’s goal is to leverage his technical expertise and quick adaptability to drive
              innovation and practical outcomes at ZZ tax.
            </p>
            <div className="text-wrapper-2">Gordon Ling</div>
          </div>
          <div className="nichl">
            <div className="nich-pic" />
            <p className="p">
              Nick Text 
              <br />
              <br />
              Nick Text 
              <br />
              <br />
              Nick Text
            </p>
            <div className="text-wrapper-3">Nicholas Callen</div>
          </div>
          <div className="phoebel">
            <img
              className="img"
              alt="Phoebe pic"
              src="../Assets/Pics/phoebepic.png"
            />
            <div className="overlap-2">
              <p className="phoebe-is-a-dynamic">
                Phoebe is a dynamic individual who is constantly pushing boundaries and adding touches of innovation to
                everything she does. <br />
                <br />
                Majoring in computer science at UCR, she has an engineering background that aids in her ability to
                seamlessly create fresh innovation through technology. Beyond academics, Phoebe simultaneously started a
                successful clothing resale business in 2023, becoming a depop top seller with over 900+ sales within a
                short 6 months and opening her own branded booth at markets all over LA. With a deep understanding of
                trends, audience preferences, and design aesthetics, she has turned her love for fashion and style into
                a thriving venture, curating a collection that resonates with her audience and reflects her distinct
                sense of creativity. 
                <br />
                <br />
                She hopes to continue balancing analytical thinking with artistic expression—a narrative that continues
                to unfold as she paves her way through the dynamic intersection of technology and style.
              </p>
              <div className="text-wrapper-4">Phoebe Lin</div>
            </div>
          </div>
          <div className="jackl">
            <img
              className="jack-pic"
              alt="Jack pic"
              src="../Assets/Pics/jackpic2.png"
            />
            <p className="p">
              Jack constantly redefines what is possible through his discipline and strong work ethic.
              <br />
              <br />
              Jack accelerated his college career, graduating Cum Laude from UCLA in less than 2 years. During that
              time, he took rigorous courses on accounting, business, and finance as well as volunteered for the school
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
            <div className="text-wrapper-5">Jack Zheng</div>
          </div>
          <div className="text-wrapper-6">Our Team</div>
        </div>
      </div>
    </div>
  );
};