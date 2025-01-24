import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import parse from "html-react-parser";

const GeneralFAQs = () => {
  const faqs = [
    {
      question: "Where is LA Flight Academy located?",
      answer:
        "We’re located at Van Nuys Airport in Los Angeles, CA, one of the busiest general aviation airports in the world.",
    },
    {
      question: "What are LAFA's hours of operation?",
      answer:
        "We operate Monday through Sunday from 8:00 AM to 9:00 PM. For after-hours inquiries, you can contact us directly at (818) 389-1771.",
    },
    {
      question: "What pilot training programs does LA Flight Academy offer?",
      answer:
        "<ul className='list-disc ml-5'><li>Private Pilot License (PPL)</li><li>Instrument Rating (IR)</li><li>Commercial Pilot License (CPL)</li><li>Multi-Engine Rating (ME)</li><li>Certified Flight Instructor (CFI, CFII, MEI)</li><li>Airline Transport Pilot (ATP)</li><li>Complex and high-performance aircraft training</li><li>Spin training, BFRs, and IPCs</li></ul>",
    },
    {
      question: "Does LA Flight Academy offer accelerated training?",
      answer:
        "Yes! We specialize in accelerated multi-engine training, allowing students to complete their programs in as little as 1.5 weeks.",
    },
    {
      question: "Are there any prerequisites for enrollment?",
      answer:
        "<ul className='list-disc ml-5'><li>Completion of a discovery flight</li><li>A valid FAA Medical Certificate (preferred)</li><li>Training materials such as a logbook, headset, FAR/AIM, charts, a headlamp, and a kneeboard</li></ul>",
    },
    {
      question: "Is the training Part 61 or Part 141?",
      answer:
        "Our programs follow a Part 61 structure with defined phases, such as pre-solo, cross-country, and checkride preparation.",
    },
    {
      question: "What is your checkride pass rate?",
      answer:
        "We’re proud to maintain a 100% checkride pass rate, a testament to our experienced instructors and high-quality training standards.",
    },
    {
      question: "How many days per week should I commit to training?",
      answer:
        "For best results, we recommend training at least three days per week, especially for full-time students.",
    },
    {
      question: "What types of aircraft are in LAF's fleet?",
      answer:
        "Our fleet includes Cessna and Piper aircraft, equipped with Garmin Dual G5s, G750 avionics, and other IFR-capable systems. You can find the full list of aircraft on our Fleet Page.",
    },
    {
      question: "Does LA Flight Academy offer financing options?",
      answer:
        "Yes, we partner with <a href='https://stratus.finance/apply/laflightacademy1303242/' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> and <a href='https://www.flighttrainingfinancellc.com/' target='_blank' class='hover:brightness-125 text-primary-600'>Flight Training Finance</a>, to provide financing options for students. We also have a partnership with <a href='https://www.avemco.com/products/renter?partner=LA16' target='_blank' class='hover:brightness-125 text-primary-600'>Avemco</a> to offer insurance.",
    },
    {
      question: "Does LA Flight Academy offer job placement assistance?",
      answer:
        "Yes, many of our CFI graduates are hired in-house after completing their training. This ensures a seamless transition to becoming a flight instructor with us.",
    },
    {
      question: "What sets LA Flight Academy apart from other flight schools?",
      answer:
        "<ul className='list-disc ml-5'><li>Affordable but premium-quality training</li><li>Relationships with Designated Pilot Examiners (DPEs), making it easier to schedule checkrides</li><li>Personalized instruction, pairing students with instructors based on personality and learning style</li><li>A family-like environment that fosters camaraderie among students and instructors</li></ul>",
    },
    {
      question: "Does LAF offer discovery flights?",
      answer:
        "Yes! Discovery flights are the perfect way to experience what it’s like to pilot an aircraft. Learn more on our Discovery Flights page.",
    },
    {
      question: "Can I see scenic landmarks during my training?",
      answer:
        "Yes! Our training routes often include breathtaking views of local landmarks like the Santa Monica Mountains, Venice Beach, and the Pacific Ocean.",
    },
    {
      question: "How do I start the enrollment process?",
      answer:
        "Starting is easy! Book a discovery flight, gather your required materials, and contact us to schedule your first lesson.",
    },
  ];

  const [openQuestions, setOpenQuestions] = useState(
    new Array(faqs.length).fill(false)
  );
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    const updatedOpenQuestions = [...openQuestions];
    updatedOpenQuestions[index] = !updatedOpenQuestions[index];
    setOpenQuestions(updatedOpenQuestions);
  };

  const visibleFAQs = showAll ? faqs : faqs.slice(0, 7);

  return (
    <div className="flex flex-col gap-5 max-w-3xl mt-10 lg:mt-0 mx-5">
      <h2 className="uppercase text-primary-800/80 tracking-widest text-center">
        FAQ's
      </h2>
      <h3 className="text-4xl lg:text-6xl mx-auto font-serif text-center mb-5 text-primary-800">
        {"Frequently Asked Questions"}
      </h3>
      <div className="flex flex-col gap-5 w-full">
        {visibleFAQs.map((faq, index) => (
          <div key={index} className="border-b border-main-black/30 pb-2" data-aos="fade up">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-xl lg:text-2xl w-full text-left flex justify-between py-3 text-primary-800/90 hover:text-main-blue"
            >
              {faq.question}
              <IoIosArrowForward
                className={`${
                  openQuestions[index] ? "-rotate-90" : "rotate-90"
                } size-5 duration-200 shrink-0`}
              />
            </button>
            <div
              className={`duration-500 overflow-hidden ${
                openQuestions[index] ? "max-h-min" : "max-h-0"
              }`}
            >
              <div className="text-primary-800/80 text-lg lg:text-xl pl-5">
                {parse(faq.answer)}
              </div>
            </div>
          </div>
        ))}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary self-center"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default GeneralFAQs;
