import { useState } from "react";

const FinancingTabs = () => {
  const [currentTab, setCurrentTab] = useState("Quick Comparison");

  const stratusFinancial = (
    <>
      <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200">
        <div className="max-w-7xl px-10 flex flex-col items-center py-10">
          <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
            <div>
              <h2 className="text-5xl font-semibold text-center tracking-tight">
                Finance with Stratus Financial
              </h2>
              <h3 className="pt-3 text-2xl text-center">
                Flexible financing to support your aviation goals
              </h3>
            </div>
            <img
              src="/stratus-logo-2.webp"
              alt="Stratus Financial logo"
              className="h-16 md:h-20"
            />
          </div>
          <div className="tracking-wider flex flex-col items-center">
            <p className="pt-5">
              LA Flight Academy is proud to partner with Stratus Financial to
              make flight training more accessible for aspiring pilots. Take
              advantage of flexible loan structures and achieve your aviation
              dreams.
            </p>
            <a
              href="https://stratus.finance/apply/laflightacademy1303242/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary m-8"
            >
              Apply Now
            </a>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className="flex-1">
                <p className="pt-5 font-semibold">Student Requirements</p>
                <ul className="list-disc pl-10">
                  <li>Must be a US Citizen or Permanent Resident*</li>
                  <li>Paystubs for the past two (2) months</li>
                  <li>Bank Statements for the past two (2) months</li>
                  <li>Driver's License</li>
                  <li>
                    Name & contact number of employer (for employee
                    verification)
                  </li>
                  <li>1st or 2nd class Medical Certificate</li>
                  <li>Co-borrower Recommended</li>
                  <li>Pilot Certificate, if applicable</li>
                  <li>Subject to Credit Check and Underwriting</li>
                </ul>
                <p className="pt-5 italic">
                  *If non-US citizen, TSA verification is required.
                </p>
              </div>
              <div className="flex-1">
                <p className="md:pt-5 font-semibold">Loan Process</p>
                <ol className="pl-10 list-decimal">
                  <li>Application</li>
                  <li>Processing</li>
                  <li>Underwriting</li>
                  <li>Approval</li>
                  <li>Funding</li>
                  <li>Pilot Training</li>
                </ol>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-center tracking-tight p-10">
            FAQs
          </h2>
          <div className="tracking-wider">
            <p className="font-semibold pt-5">
              What factors does Stratus Financial consider?
            </p>
            <p>
              We base our loan approval on the borrower and co-borrower’s merit
              on the following:
            </p>
            <ul className="list-disc pl-10">
              <li>FICO score</li>
              <li>Current income while in school</li>
              <li>Assets</li>
            </ul>
            <p>
              We can consider 2 out of 3 of these factors depending on the
              borrower's financial capacity.
            </p>
            <p className="font-semibold pt-5">
              How soon can I be approved for my loan?
            </p>
            <p>
              Initial underwriting is done within 1-2 hours. If all required
              documents are submitted, final loan documents are prepared within
              one (1) day. Loan funding occurs within three (3) business days
              after all parties have signed.
            </p>
            <p className="font-semibold pt-5">
              Will there be a penalty for early loan repayment?
            </p>
            <p>No, you may repay the loan in full or in part without penalty.</p>
            <p className="font-semibold pt-5">
              Are there prerequisites for applying for a loan?
            </p>
            <p>
              Applicants need to complete the Loan Application Form. Based on
              the provided information, a co-borrower may be required.
            </p>
            <p className="font-semibold pt-5">How are the funds transferred?</p>
            <p>Stratus Financial pays the funds directly to LA Flight Academy.</p>
          </div>
          {/* <div className="pt-10 self-start">
            <h3 className="font-semibold text-xl">Additional Resources</h3>
            <ul className="list-disc pl-10">
              <li>
                <a
                  href="/files/stratus-financial-brochure.pdf"
                  download="stratus-financial-brochure.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  Stratus Financial Brochure
                </a>
              </li>
              <li>
                <a
                  href="/files/stratus-financial-booklet.pdf"
                  download="stratus-financial-booklet.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  Stratus Financial Booklet
                </a>
              </li>
              <li>
                <a
                  href="/files/stratus-financial-one-page.pdf"
                  download="stratus-financial-one-page.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  Stratus Financial One-Page
                </a>
              </li>
            </ul>
          </div> */}
          <a
            href="https://stratus.finance/apply/laflightacademy1303242/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary m-8"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );

  const flightTrainingFinance = (
    <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200">
      <div className="max-w-7xl px-10 flex flex-col items-center py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
          <div>
            <h2 className="text-5xl font-semibold text-center tracking-tight">
              Finance with Flight Training Finance LLC
            </h2>
            <h3 className="pt-3 text-2xl text-center">
              Don’t let finances be the limiting factor
            </h3>
          </div>
          <img
            src="/ftf-logo.webp"
            alt="Flight Training Finance logo"
            className="h-12 sm:h-16 md:h-20"
          />
        </div>
        <div className="tracking-wider">
          <p className="pt-5">
            Embarking on your journey to becoming a pilot is an exciting
            endeavor, and at LAFA, we understand the importance of making
            flight training accessible to everyone. That's why we've partnered
            with Flight Training Finance to offer tailored financing solutions
            designed to support your flight goals.
          </p>
          <p className="pt-5 font-semibold text-xl">
            Why Choose Flight Training Finance?
          </p>
          <ul className="list-disc pl-10 pt-5">
            <li>
              <strong>Personalized Solutions:</strong> We believe that every
              student's journey is unique. With Flight Training Finance, you'll
              have access to financing options customized to your individual
              needs and circumstances.
            </li>
            <li>
              <strong>Guidance Every Step of the Way:</strong> Our user-friendly
              Flight Training Finance Application walks you through the process,
              ensuring clarity and simplicity as you apply for financing.
            </li>
            <li>
              <strong>Flexible Payment Plans:</strong> Whether you're looking to
              spread out your payments or make a larger down payment, our Yellow
              Sheet calculation tool allows you to explore different payment
              scenarios, empowering you to find a plan that fits your budget.
            </li>
            <li>
              <strong>Transparent Terms:</strong> Rest assured that with the
              Retail Installment Contract, you'll have a clear understanding of
              the terms of your financing agreement, providing peace of mind as
              you pursue your dreams.
            </li>
          </ul>
          <p className="pt-5">
            If you are interested in getting started, please click{" "}
            <a
              href="https://www.flighttrainingfinancellc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 hover:underline text-blue-600 font-semibold"
            >
              here
            </a>{" "}
            to apply now.
          </p>
          <p className="pt-10 font-semibold text-xl">Partnering for Success</p>
          <p className="pt-5">
            LAFA and Flight Training Finance have come together to
            streamline the financing process, making flight training more
            accessible to aspiring pilots like you. Take the first step towards
            your aviation goals by exploring our financing options today.
          </p>
          <p className="pt-5">
            Don't let financial barriers hold you back from reaching new
            heights. Start your journey with LA Flight Academy and Flight Training
            Finance.
          </p>

          {/* <p className="pt-10 font-semibold text-xl">Additional Resources</p>
          <ul className="list-disc pl-10">
            <li>
              <a
                href="../../public/files/ftf-program-guide.pdf"
                download="ftf-program-guide.pdf"
                className="hover:text-blue-800 hover:underline text-blue-600"
              >
                Program Guide
              </a>
            </li>
            <li>
              <a
                href="../../public/files/ftf-brochure.pdf"
                download="ftf-brochure.pdf"
                className="hover:text-blue-800 hover:underline text-blue-600"
              >
                FTF Brochure
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      
      <a
        href="https://www.flighttrainingfinancellc.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary m-8"
      >
        Apply Now
      </a>

    </section>
  );
  const quickComparison = (
    <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 overflow-hidden w-full">
      <div className="max-w-7xl px-10 py-10 w-full">
        <div className="w-full">
          <h2 className="text-5xl font-semibold text-center tracking-tight">
            Financing Options Comparison
          </h2>
          <p className="pt-3 text-2xl text-center">
            Compare the different financing options available to you for flight
            training. Each option has unique features to suit various needs and
            circumstances.
          </p>

          <div className="mt-10 overflow-auto w-full">
            <table className="border-collapse min-w-[75rem]">
              <thead>
                <tr>
                  <th className="border border-gray-500 p-3">
                    Financing Option
                  </th>
                  <th className="border border-gray-500 p-3">
                    Eligibility Criteria
                  </th>
                  <th className="border border-gray-500 p-3">
                    Program Coverage
                  </th>
                  <th className="border border-gray-500 p-3">
                    Time to Complete
                  </th>
                  <th className="border border-gray-500 p-3">Co-borrower</th>
                  <th className="border border-gray-500 p-3">
                    Repayment Start
                  </th>
                  <th className="border border-gray-500 p-3">
                    Funding Disbursement
                  </th>
                  <th className="border border-gray-500 p-3">Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-3 font-semibold">
                    Stratus Financial
                  </td>
                  <td className="border border-gray-500 p-3">
                    Can apply with a co-borrower from the start; caters to
                    various stages of flight training
                  </td>
                  <td className="border border-gray-500 p-3">
                    Various stages from private pilot to CFI; tailored to
                    individual training needs
                  </td>
                  <td className="border border-gray-500 p-3">
                    Flexible, adapts to individual training pace
                  </td>
                  <td className="border border-gray-500 p-3">
                    From the beginning; enhances loan options
                  </td>
                  <td className="border border-gray-500 p-3">
                    Flexible, based on individual agreement
                  </td>
                  <td className="border border-gray-500 p-3">
                    Flexible, based on student needs and school involvement
                  </td>
                  <td className="border border-gray-500 p-3">
                    Varies, competitive options tailored to the borrower's
                    circumstances
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-3 font-semibold">
                    Flight Training Finance
                  </td>
                  <td className="border border-gray-500 p-3">
                    Focus on FICO score for financing; best suited for hobbyists
                  </td>
                  <td className="border border-gray-500 p-3">
                    Only PPL or IFR
                  </td>
                  <td className="border border-gray-500 p-3">Not specified</td>
                  <td className="border border-gray-500 p-3">Not applicable</td>
                  <td className="border border-gray-500 p-3">
                    Immediately; does not defer during training; terms range
                    from 18 to 72 months
                  </td>
                  <td className="border border-gray-500 p-3">
                    Paid directly to school after each lesson; loan grows with
                    each lesson
                  </td>
                  <td className="border border-gray-500 p-3">
                    Rates vary between 12% to 18%; repayment does not defer
                    during training
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-main-red focus:ring-main-red"
          defaultValue={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
        >
          <option>Quick Comparison</option>
          <option>Stratus Financial</option>
          <option>Flight Training Finance</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          <div
            className={`${currentTab === "Quick Comparison" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Quick Comparison")}
          >
            <span>Quick Comparison</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Quick Comparison" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
          <div
            className={`${currentTab === "Stratus Financial" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Stratus Financial")}
          >
            <span>Stratus Financial</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Stratus Financial" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
          <div
            className={`${currentTab === "Flight Training Finance" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Flight Training Finance")}
          >
            <span>Flight Training Finance</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Flight Training Finance" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
        </div>
      </div>

      {currentTab === "Stratus Financial" && stratusFinancial}
      {currentTab === "Flight Training Finance" && flightTrainingFinance}
      {currentTab === "Quick Comparison" && quickComparison}
    </div>
  );
};

export default FinancingTabs;
