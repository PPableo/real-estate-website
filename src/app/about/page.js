"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question:
        "What makes Golden Hour Homes different from other real estate platforms?",
      answer:
        "Golden Hour Homes offers a unique combination of virtual tours, lowest commission rates (2%), and comprehensive property protection. Our platform provides end-to-end service with complete transparency and no hidden fees.",
    },
    {
      question: "How does the virtual property tour work?",
      answer:
        "Our virtual tours provide a detailed 360° view of properties, allowing you to explore every corner from the comfort of your home. You can schedule in-person visits after finding properties that match your criteria.",
    },
    {
      question: "What are the commission rates and fees?",
      answer:
        "We charge a flat 2% commission rate, significantly lower than the industry standard of 5-6%. There are no hidden fees, and all costs are transparently displayed before any transaction.",
    },
    {
      question: "How is property protection and insurance handled?",
      answer:
        "Our comprehensive property protection plan covers both landlords and tenants. It includes liability coverage, damage protection, and a secure payment system to ensure safe transactions.",
    },
    {
      question: "How do you verify property listings?",
      answer:
        "Each property undergoes a thorough verification process including document checks, physical inspection when necessary, and owner verification to ensure authenticity and accuracy of listings.",
    },
  ];

  return (
    <>
      <main className="pt-24 pb-16 bg-[#F7F7FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1E1B4B] mb-8">
            About Golden Hour Homes
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1E1B4B]">Our Mission</h2>
              <p className="text-gray-600">
                At Golden Hour Homes&lsquo; we&apos;re transforming the real estate experience. Our
                mission is to make property transactions seamless&lsquo; transparent&lsquo;
                and accessible to everyone.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li>✓ Over 10,000+ satisfied customers</li>
                  <li>✓ Lowest commission rates in the industry</li>
                  <li>✓ Comprehensive property protection</li>
                  <li>✓ Virtual tours and easy scheduling</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1E1B4B]">Our Values</h2>
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Transparency
                  </h3>
                  <p className="text-gray-600">
                    Clear pricing&lsquo; no hidden fees&lsquo; and honest communication.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-600">
                    Leveraging technology to simplify real estate transactions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Customer First
                  </h3>
                  <p className="text-gray-600">
                    Dedicated to providing exceptional service and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#1E1B4B] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-white p-6 rounded-xl shadow-sm flex justify-between items-center hover:bg-gray-50 transition-all"
                >
                  <span className="text-lg font-semibold text-[#1E1B4B] text-left">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-primary transition-transform duration-200 ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="bg-white px-6 pb-6 rounded-b-xl shadow-sm -mt-1">
                    <div className="pt-4 border-t">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
