export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5efe7] text-[#1f1b17] antialiased">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffaf5_0%,#f5efe7_45%,#ffe8d5_100%)]">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 lg:px-10 xl:px-0">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-2xl space-y-8 flex flex-col items-center lg:items-start">
              <div className="hero-brand-block w-full lg:w-auto lg:items-start">
                <div className="brand-logo">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#d46a30] flex items-center justify-center text-white font-bold text-3xl md:text-5xl shadow-lg">
                    G
                  </div>
                </div>
                <p className="brand-name">GENREVE</p>
              </div>
              <h1 className="max-w-xl text-5xl font-semibold leading-[0.98] text-black md:text-6xl lg:text-[76px] lg:text-left">
                Connect your hotel
                <br />
                to AI platforms
              </h1>
              <p className="max-w-xl text-lg text-[#3f3a33] md:text-xl lg:text-left">
                Connect AI puts your hotel inside ChatGPT and makes your hotel discoverable across every major AI assistant, with verified content, live rates, and direct booking links.
              </p>
              <p className="text-xl font-medium text-[#2d2721] md:text-2xl lg:text-left">More direct bookings. Zero Commissions. Full Control.</p>
              <button className="rounded-full bg-[#ff7a1a] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_35px_rgba(255,122,26,0.32)] transition hover:-translate-y-0.5 hover:bg-[#ff8e3d] md:px-8 md:py-4 md:text-lg lg:self-start">
                Connect your hotel to AI search
              </button>
            </div>
            <div className="relative flex w-full max-w-sm items-center justify-center lg:max-w-none">
              <img
                src="https://a.storyblok.com/f/288416513769651/555x464/3a22b8d863/ai-header-image.svg/m/1600x0/filters:quality(80):format(webp)"
                alt="AI hotel connectivity illustration"
                className="w-full max-w-[420px] lg:max-w-[520px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffe9d6_0%,#fff8ef_100%)] py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 xl:px-0">
          <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/60 bg-[linear-gradient(145deg,#fffaf5_0%,#ffe7d7_55%,#ffd8bd_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:min-h-[380px] lg:p-8 flex items-center justify-center">
            <img
              src="https://a.storyblok.com/f/288416513769651/411x453/15ece014de/ai-problem-visual.svg"
              alt="AI problem visualization"
              className="w-full h-auto max-w-[85%] lg:max-w-[90%] object-contain"
            />
          </div>
          <div className="rounded-[28px] border border-[#e4ddd2] bg-[#fffaf5] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] lg:p-10">
            <h2 className="max-w-md text-4xl font-semibold leading-[1.02] text-black md:text-5xl">AI is the new Google moment. Is your hotel AI ready?</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#3b352e]">ChatGPT has 900 million weekly users, and travelers are already asking AI where to stay. Today, OTAs dominate those answers. Your hotel? Invisible unless you act.</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#3b352e]">Every day without direct presence means lost opportunities. The hotels that show up in AI search today train the recommendations of tomorrow.</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#3b352e]">Connect AI brings your hotel into AI-powered conversations, connecting your brand directly with guests.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10 xl:px-0">
          <div className="space-y-8">
            {[
              ['Be discovered', 'Surface in AI travel searches alongside OTAs. When travelers ask where to stay, your property appears with verified data, not generic scraped summaries.'],
              ['Be understood', 'Control your brand narrative. AI platforms learn your authentic story: your rooftop bar, sustainability commitment, neighborhood expertise. Not just room counts and star ratings.'],
              ['Drive direct bookings', 'Turn discovery into revenue with live rates and direct booking links in AI conversations. Zero commissions. Full customer data. Complete control.'],
              ['Own your AI presence', 'Track your hotel\'s visibility across AI platforms. Benchmark competitors. Act on insights to get your direct channel recommended by AI instead of sending guests to OTAs.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[24px] border border-[#e8e2d8] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <h3 className="text-2xl font-semibold text-black">{title}</h3>
                <p className="mt-3 text-[17px] leading-7 text-[#403a32]">{body}</p>
              </article>
            ))}
          </div>
          <div className="relative flex min-h-[520px] items-center justify-center rounded-[30px] border border-[#ebe4da] bg-[linear-gradient(180deg,#fffdf9_0%,#f4efe8_100%)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <img
              src="https://a.storyblok.com/f/288416513769651/1948x1782/8472c406d1/connect-ai-solution.png/m/1382x0/filters:quality(90):format(webp)"
              alt="Connect AI platform solution dashboard"
              className="w-full h-auto object-contain"
              style={{ maxWidth: '95%', maxHeight: '95%' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-0">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl lg:text-[56px]">Everything your hotel needs for AI discovery</h2>
            <p className="mt-5 text-lg leading-8 text-[#3b352e] md:text-xl">Connect AI unifies your hotel’s content, rates, and brand story into your AI data hub - one trusted source so AI platforms can access accurate, structured data. It then activates your presence across AI channels, while giving you the intelligence to improve your visibility over time.</p>
          </div>
          <div className="mt-14 space-y-8">
            {[
              {
                title: 'Direct booking app in ChatGPT',
                body: 'Get premium placement in The Hotels Network app — the industry\'s first direct booking app for hotels in ChatGPT. Your property appears with rich, hotel-verified content and images that adapt to every search. Live rates are updated in real time, and a direct booking link sends travelers straight to your booking engine. Zero commissions. No intermediary.',
                panel: 'bg-[linear-gradient(135deg,#ff8f2c_0%,#ff6d18_100%)] text-white',
                accent: 'bg-white/10',
                imageSide: 'left',
                image: 'https://a.storyblok.com/f/288416513769651/405x358/039fd66e3b/direct-booking-app-in-chatgpt.svg',
              },
              {
                title: 'GEO — Generative Engine Optimization',
                body: 'AI platforms constantly crawl the open web and what they find shapes their answers. GEO ensures that when AI platforms research your property, they can find accurate, well-structured content, instead of relying on OTA listings or third-party summaries. Connect AI combines technical setup and content optimization to make your hotel website ready for AI discovery.',
                panel: 'bg-white text-[#2f2a24]',
                accent: 'bg-[#fffaf5]',
                imageSide: 'right',
                image: 'https://a.storyblok.com/f/288416513769651/405x358/2b4e9e0c2b/geo.svg',
              },
              {
                title: 'AI Visibility Insights',
                body: 'Monitor your organic presence across leading AI platforms — track how often you\'re mentioned in ChatGPT or Gemini. Benchmark competitors, identify which sources AI uses to describe your hotel and whether it refers travelers to your website or OTAs. Act on content gaps to optimize how AI represents you and increase your direct booking share.',
                panel: 'bg-[linear-gradient(135deg,#ff8f2c_0%,#ff6d18_100%)] text-white',
                accent: 'bg-white/10',
                imageSide: 'left',
                image: 'https://a.storyblok.com/f/288416513769651/411x350/b554cc65b2/ai-visibility-insights-v2.svg',
              },
            ].map((card) => (
              <article key={card.title} className={`grid overflow-hidden rounded-[30px] border border-[#e5ddd5] shadow-[0_18px_45px_rgba(0,0,0,0.08)] lg:grid-cols-[1fr_1fr] ${card.panel}`}>
                <div className={card.imageSide === 'left' ? 'p-8 lg:p-10' : 'order-2 p-8 lg:p-10'}>
                  {card.image ? (
                    <div className="relative flex min-h-[220px] items-center justify-center rounded-[24px] border border-white/20 bg-white/10 p-5 shadow-inner">
                      <img
                        src={card.image}
                        alt="Direct booking app in ChatGPT illustration"
                        className="w-full max-w-[500px] h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="relative min-h-[220px] rounded-[24px] border border-white/20 bg-white/10 p-5 shadow-inner">
                      <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-white/70" />
                      <div className="absolute right-5 top-5 h-6 w-20 rounded-full bg-white/20" />
                      <div className="absolute bottom-5 left-5 right-5 h-24 rounded-[18px] bg-white/10" />
                      <div className="absolute bottom-10 left-10 h-10 w-10 rounded-full border border-white/30" />
                      <div className="absolute bottom-10 right-10 h-12 w-20 rounded-full bg-[#ffb87a]/40" />
                    </div>
                  )}
                </div>
                <div className={`${card.accent} p-8 lg:p-10`}>
                  <h3 className="text-3xl font-semibold text-inherit">{card.title}</h3>
                  <p className="mt-5 text-[17px] leading-8 text-inherit/90">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 text-center lg:px-10 xl:px-0">
          <h2 className="text-4xl font-semibold text-black md:text-5xl">Works across the AI platforms travelers actually use</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#3b352e]">Seamless setup. Built on MCP, the open standard for how AI assistants connect to live data, so as new platforms emerge, your hotel is ready.</p>
          <div className="mx-auto mt-8 h-px w-24 bg-[#ff8a2a]" />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xl font-semibold text-[#2b261f] md:text-2xl">
            {['ChatGPT', 'Gemini', 'Claude', 'perplexity'].map((name) => <span key={name} className="rounded-full border border-[#eadfd7] bg-white px-5 py-3 shadow-sm">{name}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ff8b29_0%,#ff6d16_48%,#fffaf5_48%,#fffaf5_100%)] py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-0">
          <h2 className="text-center text-4xl font-semibold text-white md:text-5xl">Why hotels choose Connect AI</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              ['Unmatched data', 'Largest hospitality data platform with 80,000 hotels in the network - the backbone behind AI distribution.'],
              ['Purpose-built', 'Lighthouse owns the full stack, from data layer to AI platform relationships, without third-party dependency.'],
              ['Content-first approach', 'Connect AI leads with your brand story and verified content, focusing on what actually drives AI recommendations.'],
            ].map(([title, body], idx) => (
              <article key={title} className={`rounded-[28px] border border-white/30 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.12)] ${idx === 1 ? '-translate-y-6' : ''}`}>
                <h3 className="text-2xl font-semibold text-black">{title}</h3>
                <p className="mt-4 text-[17px] leading-7 text-[#3a342d]">{body}</p>
                {idx === 0 ? (
                  <div className="mt-8 h-24 rounded-[18px] bg-[linear-gradient(135deg,#fff7ef_0%,#ffe6d1_100%)] flex items-center justify-center">
                    <img
                      src="https://a.storyblok.com/f/288416513769651/318x163/a5088924c1/oneplatform_spot.svg"
                      alt="One platform hospitality network illustration"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : idx === 1 ? (
                  <div className="mt-8 h-24 rounded-[18px] bg-[linear-gradient(135deg,#fff7ef_0%,#ffe6d1_100%)] flex items-center justify-center">
                    <img
                      src="https://a.storyblok.com/f/288416513769651/318x156/a25d6cebcf/foreground-asset-1.svg"
                      alt="Purpose-built AI infrastructure illustration"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="mt-8 h-24 rounded-[18px] bg-[linear-gradient(135deg,#fff7ef_0%,#ffe6d1_100%)] flex items-center justify-center">
                    <img
                      src="https://a.storyblok.com/f/288416513769651/318x156/2082297d6e/targeted-offers-v2_spot.svg"
                      alt="Content-first AI recommendation illustration"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 text-center lg:px-10 xl:px-0">
          <h2 className="text-4xl font-semibold text-black md:text-5xl">Built for every hotelier</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              ['Independent hotels', 'Stand out in AI-driven travel searches and reclaim your direct relationships.', 'https://a.storyblok.com/f/288416513769651/1236x604/7e2ef4ba22/independent-hotels.png/m/636x302/filters:quality(90):format(webp)'],
              ['Hotel groups and chains', 'Protect brand consistency and data integrity across portfolios with branded AI presence.', 'https://a.storyblok.com/f/288416513769651/951x453/483240a2cc/chains-and-group-hotels.png/m/636x302/filters:quality(90):format(webp)'],
              ['Management companies', 'Future-proof your portfolio with a scalable solutions to drive discovery.', 'https://a.storyblok.com/f/288416513769651/951x453/ec9cc63c72/enterprise.png/m/636x302/filters:quality(90):format(webp)'],
            ].map(([title, body, imageUrl], idx) => (
              <article key={title} className="rounded-[28px] border border-[#e7dfd6] bg-white p-6 text-left shadow-[0_16px_35px_rgba(0,0,0,0.05)]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={title + ' illustration'}
                    className="w-full h-40 object-cover rounded-[20px]"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-40 rounded-[20px] bg-[linear-gradient(135deg,#fff1e8_0%,#efdac8_100%)]" />
                )}
                <h3 className="mt-5 text-2xl font-semibold text-black">{title}</h3>
                <p className="mt-3 text-[17px] leading-7 text-[#3b352e]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
