// Generates the ICP landing pages at /<slug>/index.html.
// Edit the PAGES data below, then run: node scripts/build-landing-pages.mjs

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://christopher-walsh-apps.com';
const BOOKING_URL = 'https://calendly.com/play3dinc/30min';
const PHONE_DISPLAY = '905 979 8389';
const PHONE_TEL = '+19059798389';
const EMAIL = 'play3dinc@gmail.com';

const PRESS = [
  ['yahoo-news-logo.png', 'Yahoo News', 120, 44],
  ['NYP_New_York_Post_logo_wordmark.png', 'New York Post', 150, 30],
  ['CBS_News_logo8x6.png', 'CBS News', 120, 40],
  ['The_Independent_logo_wordmark.png', 'The Independent', 150, 28],
  ['Reuters_Logo.png', 'Reuters', 120, 32],
  ['the-business-journals-logo-vector.png', 'The Business Journals', 120, 42],
  ['NewsBreak_logo.png', 'NewsBreak', 110, 36],
  ['tin.png', 'The News International', 110, 36],
  ['MorningBrew.png', 'Morning Brew', 130, 34],
  ['dvoice.png', 'Daily Voice', 110, 36]
];

const REVIEWS = [
  'Chris was amazing to work with. Honestly, do not go with anyone else. If you want your app built and delivered seamless and in less time than expected — Chris is your guy.',
  'Exceptional mobile app skills, exceeding expectations with quick responsiveness throughout the project.',
  'Top-tier knowledge. He turned ideas into a working product quickly and cleanly, and genuinely cared about getting it right.'
];

const OWNERSHIP_FAQ = {
  q: 'Do I own the code?',
  a: 'Yes. You own the code and the repository, and accounts are set up in your name. You are never locked in to working with me.'
};

const DAY_TO_DAY_FAQ = {
  q: 'How do we work together day to day?',
  a: 'You work directly with me — no account manager and no agency handoff. You get regular progress updates, working builds to review, and quick answers when decisions come up.'
};

const STAT_REVIEWS = ['5.0', 'Across 23 verified client reviews'];
const STAT_APPS = ['40+', 'Production apps shipped'];
const STAT_FUNDRAISE = ['$MM+', 'Technology behind a multi-million-dollar fundraise'];
const STAT_YEARS = ['6 YRS', 'Full stack: mobile, web, backend, cloud and AI'];
const STAT_SIGNUPS = ['2M+', 'User sign-ups on a production platform I helped build and maintain'];
const STAT_ACTIVE = ['1.1M+', 'Active users on production apps I deployed and maintained'];
const STAT_ENTRIES = ['7M+', 'Entries in the production database I helped maintain'];
const STAT_ACQUISITION = ['M&A', 'Software that helped position a company for acquisition'];

const CASE_TRAVEL = {
  title: 'Travel<br>platform',
  body: 'As CTO of TravelSpoken, I built a full-stack travel platform spanning booking, social content, payments, integrations and AI-powered trip planning.',
  result: 'Technology contributed to a multi-million-dollar fundraise.'
};

const CASE_APPS = {
  title: 'Shipped<br>apps',
  body: 'Native and cross-platform products across iOS and Android, including subscriptions, real-time data, computer vision, AI and location-based features.',
  result: '40+ production apps shipped.'
};

const CASE_OPERATIONS = {
  title: 'Operations<br>software',
  body: 'Custom operational software built around real business workflows, internal tooling and product-specific automation.',
  result: 'Helped position the company for acquisition by an industry leader.'
};

const CASE_SCALE = {
  title: 'Production<br>at scale',
  body: 'As a senior full-stack developer on a high-traffic consumer platform, I built features, shipped deployments and maintained the live apps and production database.',
  result: '2M+ sign-ups · 1.1M+ active users · 7M+ entries.',
  note: 'Platform name withheld for client confidentiality.'
};

const PAGES = [
  {
    slug: 'mvp-app-development',
    nav: 'MVP Development',
    h1: 'MVP App Development for Startups',
    description: 'MVP app development for startups from a former startup CTO with 40+ apps shipped. Book a free strategy call.',
    serviceType: 'MVP app development',
    priceRange: '$15,000–$50,000',
    kicker: 'MVP Development / Toronto + Remote',
    watermark: 'MVP',
    lead: 'Go from idea to a launched product real users can download — built by a former startup CTO who has shipped 40+ apps.',
    proofCard: {
      tag: 'Why founders call me',
      items: [
        ['40+', 'Production apps taken from idea to launch.'],
        ['CTO', 'Former CTO of TravelSpoken. The technology contributed to a multi-million-dollar fundraise.'],
        ['5.0', 'Across 23 verified client reviews.']
      ]
    },
    stats: [STAT_APPS, STAT_FUNDRAISE, STAT_ACTIVE, STAT_REVIEWS],
    problems: {
      audience: 'founders',
      copy: 'What founders usually tell me on the first call.',
      items: [
        ['You have the idea and the domain knowledge, but no technical co-founder.', 'You need someone who can make the technical decisions, not just take tickets.'],
        ['Agencies quoted a six-month build for a product you haven’t validated yet.', 'You need a version one that tests the idea, not a finished enterprise platform.'],
        ['You’re not sure what belongs in version one.', 'Every feature feels essential, and scope keeps growing before a line of code is written.'],
        ['A freelancer disappeared halfway through your last attempt.', 'You need one accountable person who finishes the build and ships it.']
      ]
    },
    outcomes: {
      h2: 'Built by someone<br>who’s been the CTO.',
      copy: 'The proof that matters when you’re starting from zero.',
      cases: [CASE_TRAVEL, CASE_APPS, CASE_SCALE],
      ctaText: 'Want the same thinking applied to your idea?'
    },
    capabilities: {
      audience: 'founders',
      h2: 'Your version one.<br>Done properly.',
      copy: 'Everything needed to get from idea to launched product, owned by one developer.',
      items: [
        ['Product scoping', 'Turn the idea into a tight feature list, user flows and a version-one plan you can build and pitch.'],
        ['Mobile MVPs', 'iOS and Android apps in Swift, SwiftUI or React Native, built for real App Store launches.'],
        ['Web MVPs', 'Web apps, dashboards and admin panels so you can run the product from day one.'],
        ['Backend & launch', 'Accounts, payments, data, APIs and deployment — the parts that make it a real product.']
      ]
    },
    builderBig: 'I act as the technical partner you don’t have yet: deciding what to build first, architecting it to grow and shipping it.',
    process: [
      ['Strategy', 'Pin down the users, the core problem and the smallest version that proves the idea.'],
      ['Architecture', 'Pick a stack and data model that won’t need a rewrite once users arrive.'],
      ['Build', 'Progress you can see and test, with decisions made fast and directly.'],
      ['Launch', 'App Store submission, production deployment and a plan for version two.']
    ],
    pricing: {
      audience: 'MVP',
      range: '$15K–$50K',
      copy: 'Where your MVP lands in that range comes down to scope. We define it together on the strategy call, so the estimate is tied to a real feature list.',
      up: ['Separate native iOS and Android builds', 'Payments, subscriptions or marketplace logic', 'Real-time features or complex integrations', 'AI features in the first release'],
      lean: ['Launching on one platform first', 'A tight version-one feature list', 'Proven services for login, payments and email', 'Fast decisions and quick feedback']
    },
    faq: [
      { q: 'How long does a typical project take?', a: 'It depends on scope. After the strategy call you get a timeline tied to a defined version-one feature list, so you know what ships and when. A tight MVP moves much faster than a full platform, which is why scoping comes first.' },
      { q: 'What should be in version one vs later?', a: 'Version one should prove the core idea with real users: the one workflow they would pay for, accounts, and a way to measure whether it works. Nice-to-haves, admin polish and edge cases go on the roadmap for version two.' },
      OWNERSHIP_FAQ,
      DAY_TO_DAY_FAQ,
      { q: 'What does something like this cost?', a: 'Typical MVP projects run $15K–$50K. The biggest drivers are platforms (iOS, Android, web), payments and integrations. You get a clear estimate after the strategy call.' },
      { q: 'Can you help if I’m not technical?', a: 'Yes. I translate the idea into a technical plan, explain the trade-offs in plain language and make the engineering decisions with you, so you can focus on customers and fundraising.' }
    ],
    final: {
      lead: 'Spend 30 minutes walking through your idea. We’ll work out feasibility, the right architecture, what belongs in version one and a realistic roadmap.',
      list: ['Technical feasibility', 'Recommended architecture', 'Version-one priorities', 'Launch roadmap']
    }
  },
  {
    slug: 'ai-chatbot-development',
    nav: 'AI Chatbots & Agents',
    h1: 'AI Chatbot & AI Agent Development',
    description: 'AI chatbot and AI agent development for businesses, with production OpenAI and Gemini integrations instead of demos. Book a free strategy call.',
    serviceType: 'AI chatbot and AI agent development',
    priceRange: '$5,000–$25,000',
    kicker: 'AI Development / Toronto + Remote',
    watermark: 'AI',
    lead: 'Custom AI chatbots and agents that answer customers, automate workflows and plug into the tools your business already runs on — built for production, not a demo.',
    proofCard: {
      tag: 'Production AI experience',
      items: [
        ['AI', 'Built AI-powered trip planning into the TravelSpoken platform as CTO.'],
        ['LLM', 'Production OpenAI and Gemini integrations in shipped software.'],
        ['40+', 'Production apps shipped across the full stack.']
      ]
    },
    stats: [STAT_REVIEWS, STAT_APPS, STAT_ACTIVE, STAT_FUNDRAISE],
    problems: {
      audience: 'businesses adopting AI',
      copy: 'Where AI projects usually stall.',
      items: [
        ['Your team answers the same questions all day.', 'Support, sales and operations spend hours on answers that already exist in your docs and systems.'],
        ['You tried a chatbot plugin and it made things up.', 'Generic tools don’t know your business, your data or when to hand off to a person.'],
        ['You have a ChatGPT demo, but nothing customers can actually use.', 'Getting from a prompt that works once to a reliable product is the hard part.'],
        ['You’re worried about where your data goes.', 'You need AI that respects customer data and your existing access rules.']
      ]
    },
    outcomes: {
      h2: 'Production AI.<br>Not demos.',
      copy: 'AI shipped inside real products used by real customers.',
      cases: [
        {
          title: 'AI trip<br>planning',
          body: 'As CTO of TravelSpoken, I built AI-powered trip planning into a full-stack travel platform alongside booking, payments and integrations.',
          result: 'Platform technology contributed to a multi-million-dollar fundraise.'
        },
        {
          title: 'LLM<br>integrations',
          body: 'Production integrations with OpenAI and Gemini models, connected to real application data, user accounts and workflows.',
          result: 'Built into shipped software, not prototypes.'
        },
        CASE_SCALE
      ],
      ctaText: 'Have a workflow you want AI to handle?'
    },
    capabilities: {
      audience: 'your business',
      h2: 'AI that does<br>real work.',
      copy: 'Built around your data, your workflows and your customers.',
      items: [
        ['Customer chatbots', 'Website and in-app assistants that answer from your own content and hand off to a person when needed.'],
        ['AI agents', 'Agents that take action: look up orders, update records, draft replies and trigger workflows.'],
        ['Knowledge assistants', 'Internal assistants (RAG) that search your documents, policies and data so your team finds answers without digging.'],
        ['ChatGPT integration', 'OpenAI or Gemini built into your existing app, CRM or internal tools.']
      ]
    },
    builderBig: 'I build the whole system around the model — data, backend, interface and deployment — so the AI holds up once real customers use it.',
    process: [
      ['Strategy', 'Find the workflow where AI saves the most time or wins the most customers.'],
      ['Architecture', 'Choose the model, data sources, guardrails and handoff rules before building.'],
      ['Build', 'Test against real questions and real data, then tighten answers until they’re reliable.'],
      ['Launch', 'Deploy, review real conversations and keep improving accuracy.']
    ],
    pricing: {
      audience: 'AI chatbot and agent',
      range: '$5K–$25K',
      copy: 'The range depends on what the AI needs to know and what it needs to do. A focused assistant answering from your content sits at the lower end; agents that take action across several systems sit higher.',
      up: ['Agents that take actions in other systems', 'Many data sources or integrations', 'Custom admin dashboards and analytics', 'Strict privacy or compliance requirements'],
      lean: ['One focused use case to start', 'Content that’s already written down', 'An existing site or app to embed into', 'Standard hosted models from OpenAI or Gemini']
    },
    faq: [
      { q: 'How long does a typical project take?', a: 'It depends on the use case and the number of systems involved. A focused assistant that answers from your existing content is a much smaller build than an agent connected to several tools. You get a timeline after the strategy call, tied to a defined first release.' },
      { q: 'How do you handle data privacy with AI features?', a: 'Privacy is designed in from the start: only the data a feature needs is sent to the model, access follows your existing permissions, and providers and settings are chosen to fit your requirements. We cover this on the strategy call before anything is built.' },
      { q: 'Will the chatbot make things up?', a: 'Any AI model can be wrong, so the system is built to limit it: answers grounded in your own content, clear boundaries on what it will answer, and a handoff to a person when a question is outside those boundaries.' },
      OWNERSHIP_FAQ,
      DAY_TO_DAY_FAQ,
      { q: 'What does something like this cost?', a: 'Typical AI chatbot and agent projects run $5K–$25K, plus the model usage costs from the AI provider. Scope, data sources and integrations are the biggest drivers. You get a clear estimate after the strategy call.' }
    ],
    final: {
      lead: 'Spend 30 minutes walking through the workflow you want to automate. We’ll cover feasibility, the right model and architecture, what to build first and a rollout roadmap.',
      list: ['Feasibility for your use case', 'Model + data architecture', 'First-release priorities', 'Rollout roadmap']
    }
  },
  {
    slug: 'custom-business-software',
    nav: 'Custom Business Software',
    h1: 'Custom Business Software Development',
    description: 'Custom business software development in Toronto: internal tools, CRMs and operations software from a senior full-stack developer. Book a free strategy call.',
    serviceType: 'Custom business software development',
    priceRange: '$10,000–$40,000',
    kicker: 'Custom Software / Toronto + Remote',
    watermark: 'OPS',
    lead: 'Replace spreadsheets, disconnected tools and manual work with software built around how your business actually runs.',
    proofCard: {
      tag: 'Operational proof',
      items: [
        ['M&A', 'Operations software that helped position a company for acquisition by an industry leader.'],
        ['1.1M+', 'Active users on production apps I deployed and maintained.'],
        ['5.0', 'Across 23 verified client reviews.']
      ]
    },
    stats: [STAT_ACQUISITION, STAT_SIGNUPS, STAT_ACTIVE, STAT_ENTRIES],
    problems: {
      audience: 'growing businesses',
      copy: 'What operators tell me before we start.',
      items: [
        ['Your business runs on spreadsheets only one person understands.', 'Every report is manual, and one wrong cell breaks the numbers.'],
        ['Off-the-shelf software makes your team work around it.', 'You pay for features you don’t use and still miss the ones you need.'],
        ['Your tools don’t talk to each other.', 'Data gets re-typed between systems, and mistakes slip through.'],
        ['You know what to automate, but not how to get it built right.', 'You need someone who understands the business problem, not just the code.']
      ]
    },
    outcomes: {
      h2: 'Software that<br>moves the business.',
      copy: 'Operational impact, and reliability proven at scale.',
      cases: [CASE_OPERATIONS, CASE_SCALE, CASE_APPS],
      ctaText: 'Want to see what custom software could replace in your business?'
    },
    capabilities: {
      audience: 'your operations',
      h2: 'Built around<br>your workflow.',
      copy: 'Software your team actually wants to use.',
      items: [
        ['Custom CRM', 'Track customers, deals and follow-ups the way your sales process really works.'],
        ['Internal tools & dashboards', 'Admin panels, reporting and dashboards that replace manual spreadsheets.'],
        ['Workflow automation', 'Automate approvals, notifications, documents and repetitive data entry.'],
        ['Integrations', 'Connect accounting, inventory, payments and existing systems so data is entered once.']
      ]
    },
    builderBig: 'I start with how your business works, then build software that fits it, launch it and keep improving it as your team uses it.',
    process: [
      ['Strategy', 'Map the workflow, the bottlenecks and the outcome worth paying for.'],
      ['Architecture', 'Design the data model, permissions and integrations so the system holds up as you grow.'],
      ['Build', 'Ship in stages your team can use and give feedback on early.'],
      ['Launch', 'Roll out, migrate data, get your team onboarded and iterate on real usage.']
    ],
    pricing: {
      audience: 'custom business software',
      range: '$10K–$40K',
      copy: 'The range depends on how many workflows, user roles and existing systems are involved. Starting with the highest-value workflow keeps the first phase focused and the return visible.',
      up: ['Many user roles and permissions', 'Integrations with several existing systems', 'Migrating large or messy historical data', 'Customer-facing portals on top of internal tools'],
      lean: ['One department or workflow first', 'Clean, well-defined data', 'Standard integrations with modern APIs', 'A phased rollout']
    },
    faq: [
      { q: 'How long does a typical project take?', a: 'It depends on how many workflows and integrations are involved. Most projects are delivered in phases, so your team starts using the highest-value part first. You get a timeline after the strategy call.' },
      { q: 'Can it integrate with the software we already use?', a: 'Usually, yes — most modern tools have APIs. Each integration is confirmed during the strategy call and architecture phase, before you commit to a build.' },
      { q: 'Is custom software worth it over off-the-shelf tools?', a: 'Not always. If an existing product covers most of your needs, I’ll tell you. Custom software pays off when your workflow is a competitive advantage or when off-the-shelf tools are costing you real time and errors.' },
      OWNERSHIP_FAQ,
      DAY_TO_DAY_FAQ,
      { q: 'What does something like this cost?', a: 'Typical custom business software projects run $10K–$40K. User roles, integrations and data migration are the biggest drivers. You get a clear estimate after the strategy call.' }
    ],
    final: {
      lead: 'Spend 30 minutes walking through the workflow that’s slowing you down. We’ll cover feasibility, the right system design, the highest-ROI priorities and a rollout plan.',
      list: ['Workflow feasibility', 'System architecture', 'Highest-ROI priorities', 'Rollout roadmap']
    }
  },
  {
    slug: 'mobile-app-development-toronto',
    nav: 'Mobile Apps Toronto',
    h1: 'Mobile App Developer Toronto',
    description: 'Mobile app developer in Toronto building iPhone and Android apps, with 40+ apps shipped and 5.0 stars across 23 reviews. Book a free strategy call.',
    serviceType: 'Mobile app development',
    priceRange: '$20,000+',
    kicker: 'iPhone + Android / Toronto',
    watermark: 'APP',
    lead: 'iPhone and Android apps for Toronto businesses — designed, built and launched on the App Store and Google Play by a local developer with 40+ apps shipped.',
    proofCard: {
      tag: 'Mobile track record',
      items: [
        ['40+', 'Production apps shipped across iOS and Android.'],
        ['5.0', '“Exceptional mobile app skills” — from 23 verified client reviews.'],
        ['6 YRS', 'Across mobile, web, backend, cloud and AI.']
      ]
    },
    stats: [STAT_APPS, STAT_REVIEWS, STAT_ACTIVE, STAT_FUNDRAISE],
    problems: {
      audience: 'Toronto businesses',
      copy: 'What business owners tell me before an app build.',
      items: [
        ['Your customers expect an app, and you don’t have one.', 'Competitors are on your customers’ phones, and you’re still relying on a website and social posts.'],
        ['Agencies quoted you, but you’d never talk to the person building it.', 'You want a direct line to the developer, not a project manager relaying messages.'],
        ['You’re not sure whether you need iPhone, Android or both.', 'You need a clear recommendation based on your customers and budget.'],
        ['Your current app is slow, outdated or getting bad reviews.', 'You need someone who can fix it or rebuild it properly.']
      ]
    },
    outcomes: {
      h2: 'Apps that make<br>it to launch.',
      copy: 'A track record of shipping, not just designing.',
      cases: [
        {
          title: '40+ shipped<br>apps',
          body: 'Native and cross-platform apps across iOS and Android, including subscriptions, real-time data, computer vision, AI and location-based features.',
          result: '40+ production apps shipped.'
        },
        CASE_TRAVEL,
        CASE_SCALE
      ],
      ctaText: 'Want to know what your app would take to build?'
    },
    capabilities: {
      audience: 'your business',
      h2: 'Your app.<br>On every phone.',
      copy: 'Everything needed to get your app into customers’ hands.',
      items: [
        ['iPhone apps', 'Native iOS apps in Swift and SwiftUI, built to Apple’s standards and ready for App Store review.'],
        ['Android apps', 'Android apps built for the devices your customers actually use, published on Google Play.'],
        ['Cross-platform apps', 'React Native apps that reach iPhone and Android from one codebase.'],
        ['Backend & launch', 'Accounts, subscriptions, push notifications, admin panels and App Store submission.']
      ]
    },
    builderBig: 'You talk directly to the Toronto developer building your app — not a project manager relaying messages.',
    process: [
      ['Strategy', 'Define the users, core features and whether to start on iPhone, Android or both.'],
      ['Architecture', 'Choose native or cross-platform, plan the backend and map App Store requirements.'],
      ['Build', 'Test builds on your own phone throughout, with direct feedback loops.'],
      ['Launch', 'App Store and Google Play submission, release support and the next update.']
    ],
    pricing: {
      audience: 'mobile app',
      range: '$20K+',
      startsAt: true,
      copy: 'Where your app lands depends on platforms, features and the backend behind it. A focused first release keeps the starting point lean; separate native apps and real-time features add to it.',
      up: ['Separate native iOS and Android apps', 'Subscriptions, payments or marketplace logic', 'Real-time features, maps or chat', 'A custom backend and admin dashboard'],
      lean: ['One platform or cross-platform first', 'A focused first release', 'Existing design and brand assets', 'Proven services for login, payments and notifications']
    },
    faq: [
      { q: 'How long does a typical project take?', a: 'It depends on platforms and features. After the strategy call you get a timeline tied to a defined first-release feature list, including time for App Store and Google Play review.' },
      { q: 'Do I need an iPhone app, an Android app, or both?', a: 'It depends on your customers. Cross-platform with React Native reaches both from one codebase; native makes sense when you need maximum performance or platform-specific features. We decide this on the strategy call.' },
      { q: 'Do you handle App Store submission?', a: 'Yes. I handle App Store and Google Play submission, store listing requirements and release, and work through any review feedback with you.' },
      OWNERSHIP_FAQ,
      DAY_TO_DAY_FAQ,
      { q: 'What does something like this cost?', a: 'Typical mobile app projects start at $20K. Platforms, payments, real-time features and the backend are the biggest drivers. You get a clear estimate after the strategy call.' }
    ],
    final: {
      lead: 'Spend 30 minutes walking through your app idea. We’ll cover feasibility, native vs cross-platform, first-release features and a launch roadmap.',
      list: ['App feasibility', 'Native vs cross-platform', 'First-release features', 'Launch roadmap']
    }
  },
  {
    slug: 'shopify-development',
    nav: 'Shopify Development',
    h1: 'Shopify Developer Toronto',
    description: 'Shopify developer in Toronto for custom Shopify apps, theme work and integrations, working directly with the developer. Book a free strategy call.',
    serviceType: 'Shopify development',
    priceRange: '$5,000–$20,000',
    kicker: 'Shopify Development / Toronto + Remote',
    watermark: 'SHOP',
    lead: 'Custom Shopify apps, storefront improvements and integrations that help your store sell more and run with less manual work.',
    proofCard: {
      tag: 'Why merchants call me',
      items: [
        ['PAY', 'Built payments and third-party integrations into the TravelSpoken platform as CTO.'],
        ['40+', 'Production apps shipped, end to end.'],
        ['5.0', 'Across 23 verified client reviews.']
      ]
    },
    stats: [STAT_REVIEWS, STAT_APPS, STAT_ACTIVE, ['0', 'Agency handoffs. You work with the builder.']],
    problems: {
      audience: 'Shopify merchants',
      copy: 'What merchants tell me before we start.',
      items: [
        ['Your store needs a feature no app quite gets right.', 'You’ve tried the App Store, and every option is close but not what your customers need.'],
        ['You’re stacking monthly apps that don’t work together.', 'Costs keep rising, and the apps still leave gaps you patch by hand.'],
        ['Orders, inventory and fulfilment are copied between systems by hand.', 'Manual work eats hours every week and causes costly mistakes.'],
        ['Your last developer took days to reply.', 'You need fast turnaround and someone who answers directly.']
      ]
    },
    outcomes: {
      h2: 'Built for<br>revenue.',
      copy: 'The relevant proof: payments, integrations and production software.',
      cases: [
        {
          title: 'Payments &<br>integrations',
          body: 'As CTO of TravelSpoken, I built a full-stack platform spanning booking, payments, social content and third-party integrations.',
          result: 'Technology contributed to a multi-million-dollar fundraise.'
        },
        {
          title: 'Production<br>software',
          body: 'End-to-end ownership of production apps: architecture, APIs, integrations, deployment and performance.',
          result: '40+ production apps shipped.'
        },
        CASE_SCALE
      ],
      ctaText: 'Have a store change you want shipped fast?'
    },
    capabilities: {
      audience: 'your store',
      h2: 'More sales.<br>Less manual work.',
      copy: 'Shopify work focused on revenue and time saved.',
      items: [
        ['Custom Shopify apps', 'Private or public apps that add the exact feature your store needs.'],
        ['Theme customization', 'Storefront changes, new sections and conversion-focused page improvements.'],
        ['Integrations', 'Connect Shopify to inventory, fulfilment, accounting, CRM and other systems.'],
        ['Automation', 'Automate order tagging, notifications, reporting and repetitive admin work.']
      ]
    },
    builderBig: 'You work directly with me, so changes ship quickly and nothing gets lost between a salesperson and a developer.',
    process: [
      ['Strategy', 'Find the change most likely to lift revenue or save hours each week.'],
      ['Architecture', 'Decide between theme work, a custom app or an integration, planned around your existing apps.'],
      ['Build', 'Develop on a duplicate theme or development store so your live store keeps selling.'],
      ['Launch', 'Ship, verify orders and checkout, then iterate based on real sales data.']
    ],
    pricing: {
      audience: 'Shopify',
      range: '$5K–$20K',
      copy: 'Theme improvements on an existing store sit at the lower end. Custom apps and integrations with warehouse or accounting systems sit higher. You get a fixed scope before work starts.',
      up: ['Custom public or private Shopify apps', 'Integrations with ERP, warehouse or accounting systems', 'Complex product, pricing or subscription logic', 'Migrating from another platform'],
      lean: ['Theme changes on an existing store', 'One integration at a time', 'Clear requirements and examples', 'Using proven apps where they fit']
    },
    faq: [
      { q: 'How long does a typical project take?', a: 'Theme changes and small features move quickly; custom apps and integrations take longer. You get a timeline after the strategy call, tied to a defined scope.' },
      { q: 'Will working on my store affect live sales?', a: 'No. Work happens on a duplicate theme or a development store, and changes go live only after you have reviewed them.' },
      { q: 'Do you build custom Shopify apps or just themes?', a: 'Both. Theme work handles storefront changes; a custom app is the right call when you need new functionality, admin tools or integrations that existing apps don’t cover.' },
      OWNERSHIP_FAQ,
      DAY_TO_DAY_FAQ,
      { q: 'What does something like this cost?', a: 'Typical Shopify projects run $5K–$20K. Custom apps, integrations and complex pricing logic are the biggest drivers. You get a clear estimate after the strategy call.' }
    ],
    final: {
      lead: 'Spend 30 minutes walking through your store. We’ll cover what’s feasible, whether you need theme work, a custom app or an integration, the revenue priorities and a delivery plan.',
      list: ['Feasibility of your idea', 'Theme vs app vs integration', 'Revenue priorities', 'Delivery roadmap']
    }
  },
  {
    slug: 'web-application-development',
    nav: 'Web Applications',
    h1: 'Custom Web Application Development',
    description: 'Custom web application development for dashboards, portals and marketplaces from a senior developer who has maintained production apps for 1.1M+ active users. Book a free strategy call.',
    serviceType: 'Custom web application development',
    priceRange: '$10,000–$40,000',
    kicker: 'Web Applications / Toronto + Remote',
    watermark: 'WEB',
    lead: 'Dashboards, customer portals and marketplaces built to handle real traffic — by a senior full-stack developer who worked on a platform with over two million sign-ups.',
    proofCard: {
      tag: 'Platform-scale proof',
      items: [
        ['2M+', 'User sign-ups on a production platform I helped build and maintain.'],
        ['7M+', 'Entries in the production database I helped maintain.'],
        ['CTO', 'Former CTO of TravelSpoken, a full-stack travel platform.']
      ]
    },
    stats: [STAT_SIGNUPS, STAT_ACTIVE, STAT_ENTRIES, STAT_APPS],
    problems: {
      audience: 'teams building web platforms',
      copy: 'What teams tell me before a web build.',
      items: [
        ['Your platform slows down or breaks when traffic spikes.', 'Every launch or promotion turns into a fire drill.'],
        ['Your customers need a portal, and email plus spreadsheets isn’t cutting it.', 'Customers want self-serve access, and your team wants its time back.'],
        ['You’re building a marketplace or SaaS and need it architected properly.', 'Early shortcuts in data models and payments get expensive later.'],
        ['You’ve had too many handoffs between designers, developers and agencies.', 'You need one person accountable for the whole stack.']
      ]
    },
    outcomes: {
      h2: 'Proven at<br>real scale.',
      copy: 'Real-time, high-traffic platforms with full-stack ownership.',
      cases: [CASE_SCALE, CASE_TRAVEL, CASE_OPERATIONS],
      ctaText: 'Want this kind of platform experience on your project?'
    },
    capabilities: {
      audience: 'your platform',
      h2: 'Web apps<br>built to scale.',
      copy: 'From internal dashboards to customer-facing platforms.',
      items: [
        ['Dashboards', 'Real-time dashboards and reporting for operators and leadership.'],
        ['Customer portals', 'Secure portals for accounts, orders, documents and self-serve support.'],
        ['Marketplaces', 'Two-sided platforms with listings, payments, messaging and admin tools.'],
        ['SaaS platforms', 'Multi-user web products with roles, billing and integrations.']
      ]
    },
    builderBig: 'I own the whole stack — architecture, APIs, frontend, integrations and deployment — so one person is accountable for how the platform performs.',
    process: [
      ['Strategy', 'Define the users, core workflows and what the first release needs to do.'],
      ['Architecture', 'Design the data model, APIs and infrastructure for the traffic you expect.'],
      ['Build', 'Ship working features in stages, with direct communication throughout.'],
      ['Launch', 'Deploy to production, monitor performance and keep iterating.']
    ],
    pricing: {
      audience: 'web application',
      range: '$10K–$40K',
      copy: 'The range depends on user roles, real-time requirements, payments and integrations. Starting with one core workflow gets a working platform live sooner and keeps the first phase focused.',
      up: ['Real-time features or high traffic', 'Payments, billing or marketplace logic', 'Many user roles and permissions', 'Multiple third-party integrations'],
      lean: ['One core workflow first', 'Standard login and payments', 'A phased feature rollout', 'Clear requirements up front']
    },
    faq: [
      { q: 'How long does a typical project take?', a: 'It depends on scope and integrations. Most platforms launch with a focused first release, then grow in phases. You get a timeline after the strategy call, tied to a defined feature list.' },
      { q: 'Can you build something that handles high traffic?', a: 'Yes. As a senior full-stack developer on a high-traffic consumer platform, I built features, shipped deployments and maintained the production apps and database through 2M+ sign-ups, 1.1M+ active users and 7M+ entries. The same architecture and performance thinking goes into every platform I build.' },
      { q: 'Can you take over an existing web app?', a: 'Often, yes. I start by reviewing the current code and architecture, then recommend whether to improve, refactor or rebuild specific parts.' },
      OWNERSHIP_FAQ,
      DAY_TO_DAY_FAQ,
      { q: 'What does something like this cost?', a: 'Typical web application projects run $10K–$40K. Real-time features, payments, user roles and integrations are the biggest drivers. You get a clear estimate after the strategy call.' }
    ],
    final: {
      lead: 'Spend 30 minutes walking through the platform you need. We’ll cover technical feasibility, the right architecture, feature priorities and a development roadmap.',
      list: ['Technical feasibility', 'Recommended architecture', 'Feature priorities', 'Development roadmap']
    }
  }
];

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

// Allows only <br> in display headings.
function heading(value) {
  return esc(value).replaceAll('&lt;br&gt;', '<br>');
}

const pad = n => String(n).padStart(2, '0');

const bookingAttrs = `href="${esc(BOOKING_URL)}" target="_blank" rel="noopener" onclick="reportConversion()"`;
const phoneAttrs = `href="tel:${PHONE_TEL}" onclick="reportConversion()"`;

function bookButton(className = 'button') {
  return `<a class="${className}" ${bookingAttrs}>
            Book my free strategy call
            <span class="button-arrow" aria-hidden="true">↗</span>
          </a>`;
}

function pressBar() {
  const logos = hidden => PRESS.map(([file, alt, w, h]) =>
    `<div class="press-logo"><img src="/public/news/${file}" alt="${hidden ? '' : esc(alt)}" width="${w}" height="${h}"></div>`
  ).join('\n              ');

  return `<section class="press" aria-label="Work featured in">
      <div class="wrap">
        <p class="press-title">Work featured in</p>
        <div class="press-grid">
          <div class="press-track">
            <div class="press-group">
              ${logos(false)}
            </div>
            <div class="press-group" aria-hidden="true">
              ${logos(true)}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function jsonLd(page) {
  const url = `${SITE}/${page.slug}/`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${url}#service`,
        name: `Christopher Walsh — ${page.h1}`,
        description: page.description,
        url,
        image: `${SITE}/public/chris.jpeg`,
        telephone: '+1-905-979-8389',
        email: EMAIL,
        priceRange: page.priceRange,
        serviceType: page.serviceType,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Toronto',
          addressRegion: 'ON',
          addressCountry: 'CA'
        },
        areaServed: [
          { '@type': 'City', name: 'Toronto' },
          { '@type': 'Country', name: 'Canada' }
        ],
        founder: {
          '@type': 'Person',
          name: 'Christopher Walsh',
          jobTitle: 'Senior Full-Stack Developer'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faq.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      }
    ]
  };

  return JSON.stringify(graph, null, 2).replaceAll('</', '<\\/');
}

function footer(current) {
  const links = [
    `<li><a href="/">Home</a></li>`,
    ...PAGES.map(page => {
      const active = page.slug === current ? ' aria-current="page"' : '';
      return `<li><a href="/${page.slug}/"${active}>${esc(page.nav)}</a></li>`;
    })
  ].join('\n        ');

  return `<footer class="site-footer">
    <div class="wrap footer-inner">
      <span>Christopher Walsh / Senior Full-Stack Developer</span>
      <ul class="footer-links">
        ${links}
      </ul>
      <span>Toronto, Canada / Available remotely</span>
    </div>
  </footer>`;
}

function renderPage(page) {
  const url = `${SITE}/${page.slug}/`;
  const title = `${page.h1} | Christopher Walsh`;
  const caseCols = page.outcomes.cases.length;
  const priceHeadline = page.pricing.startsAt
    ? `Typical ${page.pricing.audience} projects start at ${page.pricing.range}.`
    : `Typical ${page.pricing.audience} projects run ${page.pricing.range}.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>${esc(title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="theme-color" content="#111111">

  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE}/public/chris.jpeg">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="/public/favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="/public/favicon.png">
  <link rel="stylesheet" href="/landing.css">

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11158452612"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'AW-11158452612');

    function reportConversion() {
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-11158452612/Z1IbCNmS65waEITz4cgp',
          'value': 1.0,
          'currency': 'CAD'
        });
      }
    }
  </script>

  <script type="application/ld+json">
${jsonLd(page)}
  </script>
</head>

<body>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="wordmark" href="/">Christopher Walsh</a>
      <div class="header-meta">
        <a class="header-link" ${phoneAttrs}>Call ${PHONE_DISPLAY}</a>
        <a class="header-cta" ${bookingAttrs}>Book a free strategy call ↗</a>
      </div>
    </div>
  </header>

  <main>
    <section class="hero" data-watermark="${esc(page.watermark)}">
      <div class="wrap hero-inner">
        <div>
          <p class="kicker">${esc(page.kicker)}</p>
          <h1>${esc(page.h1)}</h1>
          <p class="hero-lead">${esc(page.lead)}</p>

          <div class="hero-actions">
            ${bookButton()}
            <a class="button button-outline" ${phoneAttrs}>Call ${PHONE_DISPLAY}</a>
          </div>

          <div class="hero-proof">
            <span><strong>★★★★★ 5.0</strong> / 23 verified reviews</span>
            <span><strong>40+ apps</strong> shipped</span>
            <span><strong>1.1M+ users</strong> in production</span>
          </div>

          <p class="hero-small">You work with the builder. No agency handoff.</p>
        </div>

        <aside class="proof-card" aria-label="${esc(page.proofCard.tag)}">
          <span class="proof-card-tag">${esc(page.proofCard.tag)}</span>
          <ul>
            ${page.proofCard.items.map(([big, text]) => `<li><strong>${esc(big)}</strong><span>${esc(text)}</span></li>`).join('\n            ')}
          </ul>
        </aside>
      </div>
    </section>

    ${pressBar()}

    <section class="stats" aria-label="Developer proof">
      <div class="wrap stats-grid">
        ${page.stats.map(([big, label]) => `<div class="stat">
          <strong>${esc(big)}</strong>
          <span>${esc(label)}</span>
        </div>`).join('\n        ')}
      </div>
    </section>

    <section class="section section-dark">
      <div class="wrap">
        <div class="section-intro">
          <p class="section-label">Problems I solve for ${esc(page.problems.audience)}</p>
          <div>
            <h2>Sound<br>familiar?</h2>
            <p class="section-copy">${esc(page.problems.copy)}</p>
          </div>
        </div>

        <div class="pain-grid">
          ${page.problems.items.map(([pain, detail], index) => `<article class="pain">
            <span class="pain-num">${pad(index + 1)}</span>
            <h3>“${esc(pain)}”</h3>
            <p>${esc(detail)}</p>
          </article>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section" id="outcomes">
      <div class="wrap">
        <div class="section-intro">
          <p class="section-label">Selected outcomes</p>
          <div>
            <h2>${heading(page.outcomes.h2)}</h2>
            <p class="section-copy">${esc(page.outcomes.copy)}</p>
          </div>
        </div>

        <div class="case-grid" style="--cols: ${caseCols}">
          ${page.outcomes.cases.map((item, index) => `<article class="case-card">
            <span class="case-num">${pad(index + 1)}</span>
            <div>
              <h3>${heading(item.title)}</h3>
              <p>${esc(item.body)}</p>
              <p class="case-result">${esc(item.result)}</p>${item.note ? `
              <p class="case-note">${esc(item.note)}</p>` : ''}
            </div>
          </article>`).join('\n          ')}
        </div>

        <div class="inline-cta">
          ${bookButton('button button-dark')}
          <p>${esc(page.outcomes.ctaText)} Or call <a class="text-link" ${phoneAttrs}>${PHONE_DISPLAY}</a>.</p>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="wrap">
        <div class="section-intro">
          <p class="section-label">What I build for ${esc(page.capabilities.audience)}</p>
          <div>
            <h2>${heading(page.capabilities.h2)}</h2>
            <p class="section-copy">${esc(page.capabilities.copy)}</p>
          </div>
        </div>

        <div class="service-grid" style="--cols: ${page.capabilities.items.length}">
          ${page.capabilities.items.map(([name, body], index) => `<article class="service">
            <span class="service-num">${pad(index + 1)}</span>
            <h3>${esc(name)}</h3>
            <p>${esc(body)}</p>
          </article>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-intro">
          <p class="section-label">Direct collaboration</p>
          <div>
            <h2>You work with<br>the builder.</h2>
            <p class="section-copy">No agency handoff. Speak directly with the developer building your product.</p>
          </div>
        </div>

        <div class="builder">
          <img
            class="builder-photo"
            src="/public/chris.jpeg"
            alt="Christopher Walsh, senior full-stack developer in Toronto"
            width="640"
            height="640"
            loading="lazy"
          >
          <div class="builder-copy">
            <p class="big">${esc(page.builderBig)}</p>
            <p class="small">
              6 years across the full stack — mobile (iOS/Android), web, backend, cloud and AI —
              including deploying and maintaining production apps and databases for 1.1M+ active users.
              That means fewer handoffs, faster decisions and one person accountable for the result.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="wrap">
        <div class="section-intro">
          <p class="section-label">How it works</p>
          <div>
            <h2>Clear from<br>day one.</h2>
            <p class="section-copy">Start with the business goal, define the right build, then move through launch without unnecessary complexity.</p>
          </div>
        </div>

        <div class="process-grid">
          ${page.process.map(([name, body], index) => `<article class="process-step">
            <span class="process-num">${pad(index + 1)}</span>
            <h3>${esc(name)}</h3>
            <p>${esc(body)}</p>
          </article>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-intro">
          <p class="section-label">Pricing</p>
          <div>
            <h2>${esc(page.pricing.range)}</h2>
            <p class="section-copy"><strong>${esc(priceHeadline)}</strong> ${esc(page.pricing.copy)}</p>
          </div>
        </div>

        <div class="pricing-grid">
          <div class="pricing-col">
            <h3>Moves it up the range</h3>
            <ul>
              ${page.pricing.up.map(item => `<li>${esc(item)}</li>`).join('\n              ')}
            </ul>
          </div>
          <div class="pricing-col">
            <h3>Keeps it lean</h3>
            <ul>
              ${page.pricing.lean.map(item => `<li>${esc(item)}</li>`).join('\n              ')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="reviews" id="reviews">
      <div class="wrap reviews-inner">
        <div class="reviews-head">
          <p class="section-label">Verified client reviews</p>
          <div>
            <h2>5.0 stars.<br>23 reviews.</h2>
            <p class="reviews-lead">Strong communication, fast execution and software delivered with care.</p>
          </div>
        </div>

        <div class="review-grid">
          ${REVIEWS.map(quote => `<article class="review">
            <span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
            <blockquote>“${esc(quote)}”</blockquote>
            <cite>Verified client review / Fiverr</cite>
          </article>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section section-dark" id="faq">
      <div class="wrap">
        <div class="section-intro">
          <p class="section-label">FAQ</p>
          <div>
            <h2>Straight<br>answers.</h2>
            <p class="section-copy">The questions people ask before booking a call.</p>
          </div>
        </div>

        <div class="faq-list">
          ${page.faq.map(item => `<details class="faq-item">
            <summary>${esc(item.q)}</summary>
            <p>${esc(item.a)}</p>
          </details>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="strategy">
      <div class="wrap strategy-inner">
        <div>
          <p class="section-label">Free 30-minute strategy call</p>
          <h2>Have an idea?<br>Start here.</h2>
          <p class="strategy-lead">${esc(page.final.lead)}</p>
          ${bookButton('button button-dark')}
        </div>

        <div>
          <div class="strategy-list">
            ${page.final.list.map((item, index) => `<p>${pad(index + 1)} / ${esc(item)}</p>`).join('\n            ')}
          </div>
          <div class="strategy-contact">
            <a ${phoneAttrs}>Call ${PHONE_DISPLAY}</a><br>
            <a href="mailto:${EMAIL}">Email ${EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${footer(page.slug)}

  <div class="mobile-cta">
    <a ${bookingAttrs}>Book my free strategy call ↗</a>
  </div>
</body>
</html>
`;
}

for (const page of PAGES) {
  const outDir = join(ROOT, page.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), renderPage(page));
  console.log(`wrote /${page.slug}/index.html`);
}
