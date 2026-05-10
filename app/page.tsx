export default function Page() {
  const faqs = [
    {
      q: 'Which invoice platforms are supported?',
      a: 'We integrate with QuickBooks, FreshBooks, and Wave via their official APIs. More platforms are on the roadmap.'
    },
    {
      q: 'How are late fees calculated?',
      a: 'You define your own terms — flat fee, percentage, or both — and we apply them automatically once an invoice passes its due date.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. Your data is retained for 30 days after cancellation.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Invoice Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Letting Late Payments<br />Slide Without Consequence
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically calculate and add late fees to overdue invoices based on your own terms.
          Connects to QuickBooks, FreshBooks, and Wave — no manual chasing required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '⚡', title: 'Real-Time Webhooks', desc: 'Instant invoice status updates via webhooks — no polling.' },
          { icon: '⚙️', title: 'Custom Fee Rules', desc: 'Set flat fees, percentages, or grace periods per client.' },
          { icon: '🔗', title: 'Multi-Platform', desc: 'QuickBooks, FreshBooks, and Wave all in one dashboard.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to enforce your payment terms</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited invoices monitored',
              'Connect up to 3 platforms',
              'Custom late fee rules per client',
              'Real-time webhook processing',
              'Email notifications on fee applied',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] mt-20">
        &copy; {new Date().getFullYear()} Invoice Late Fee Enforcer. All rights reserved.
      </footer>
    </main>
  )
}
