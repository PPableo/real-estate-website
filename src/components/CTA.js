export default function CTA() {
    return (
      <section className="cta py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-primary font-medium mb-4">No Spam Promise</p>
          <h2 className="text-4xl font-bold text-secondary mb-4">Are you a landlord?</h2>
          <p className="text-gray-600 mb-8">
            Discover ways to increase your home&apos;s value and get listed. No Spam.
          </p>
          <div className="flex gap-4 max-w-xl mx-auto mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-[#5B54C0] transition-colors">
              Submit
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Join <span className="text-primary">10,000+</span> other landlords in our Golder Hour Homes community.
          </p>
        </div>
      </section>
    );
  }