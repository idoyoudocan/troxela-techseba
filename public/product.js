// product.js - Comprehensive Product Detail Page Application State
document.addEventListener('alpine:init', () => {
  Alpine.data('productApp', () => ({
    // Dark mode state synced with dashboard & home
    darkMode: localStorage.getItem('admin_dark_mode') === 'true',

    // Cart and Wishlist drawer states
    cartOpen: false,
    wishlistOpen: false,
    checkoutModalOpen: false,
    quickViewModalOpen: false,
    shareModalOpen: false,
    imageZoomModalOpen: false,
    orderSuccess: false,
    activeTab: 'details', // 'details' | 'specs' | 'reviews' | 'faq'

    // Selected product configuration
    selectedColor: 'space-gray',
    selectedEdition: 'standard',
    selectedWarranty: '1-year',
    quantity: 1,
    activeImageIndex: 0,
    zoomActive: false,
    zoomPos: { x: 50, y: 50 },

    // Location & Delivery Estimator
    selectedCity: 'dhaka',
    deliveryCities: [
      { id: 'dhaka', name: 'ঢাকা (Dhaka City)', time: '১২ - ২৪ ঘণ্টার মধ্যে এক্সপ্রেস ডেলিভারি', fee: 0 },
      { id: 'chittagong', name: 'চট্টগ্রাম (Chittagong)', time: '২ - ৩ কার্যদিবসের মধ্যে ডেলিভারি', fee: 0 },
      { id: 'sylhet', name: 'সিলেট (Sylhet)', time: '২ - ৩ কার্যদিবসের মধ্যে ডেলিভারি', fee: 0 },
      { id: 'rajshahi', name: 'রাজশাহী (Rajshahi)', time: '২ - ৩ কার্যদিবসের মধ্যে ডেলিভারি', fee: 0 },
      { id: 'khulna', name: 'খুলনা (Khulna)', time: '২ - ৩ কার্যদিবসের মধ্যে ডেলিভারি', fee: 0 },
      { id: 'barisal', name: 'বরিশাল (Barisal)', time: '৩ - ৪ কার্যদিবসের মধ্যে ডেলিভারি', fee: 0 },
      { id: 'rangpur', name: 'রংপুর (Rangpur)', time: '৩ - ৪ কার্যদিবসের মধ্যে ডেলিভারি', fee: 0 },
      { id: 'mymensingh', name: 'ময়মনসিংহ (Mymensingh)', time: '২ - ৩ কার্যদিবসের মধ্যে ডেলিভারি', fee: 0 }
    ],

    // Product Master Information
    product: {
      id: 'aur-hd-9021',
      title: 'অরা প্রো ম্যাক্স এএনসি ওয়্যারলেস হেডফোন (AuraSound Pro Max ANC)',
      englishTitle: 'AuraSound Pro Max Active Noise Cancelling Wireless Over-Ear Headphones',
      brand: 'AuraSound Labs',
      model: 'APM-750 Pro Studio',
      sku: 'SKU-AUR9021-ANC',
      basePrice: 8490,
      originalBasePrice: 10990,
      inStock: true,
      stockCount: 18,
      totalStock: 50,
      rating: 4.9,
      reviewCount: 382,
      soldCount: 1420,
      tags: ['বেস্ট সেলার', '২৩% ছাড়', 'অফিশিয়াল ওয়ারেন্টি', 'ফ্রি ডেলিভারি'],
      colors: [
        {
          id: 'space-gray',
          name: 'স্পেস গ্রে (Space Gray)',
          hex: '#374151',
          bgClass: 'bg-slate-700',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=80'
        },
        {
          id: 'matte-black',
          name: 'ম্যাট ব্ল্যাক (Matte Black)',
          hex: '#111827',
          bgClass: 'bg-slate-900',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1000&auto=format&fit=crop&q=80'
        },
        {
          id: 'silver-white',
          name: 'সিলভার হোয়াইট (Silver White)',
          hex: '#e2e8f0',
          bgClass: 'bg-slate-200',
          image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000&auto=format&fit=crop&q=80'
        },
        {
          id: 'navy-blue',
          name: 'নেভি মিডনাইট (Navy Midnight)',
          hex: '#1e3a8a',
          bgClass: 'bg-blue-900',
          image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1000&auto=format&fit=crop&q=80'
        }
      ],
      editions: [
        {
          id: 'standard',
          name: 'স্ট্যান্ডার্ড এডিশন (Standard Edition)',
          extraPrice: 0,
          desc: 'হেডফোন + ৩.৫মিমি অক্স কেবল + টাইপ-সি ফাস্ট চার্জিং কেবল + সফট পাউচ'
        },
        {
          id: 'pro-studio',
          name: 'প্রো স্টুডিও বান্ডল (Pro Studio Bundle)',
          extraPrice: 1200,
          desc: 'হেডফোন + সলিড অ্যালুমিনিয়াম ডেস্ক স্ট্যান্ড + শকপ্রুফ হার্ডশেল ট্রাভেল কেস'
        }
      ],
      warranties: [
        {
          id: '1-year',
          name: '১ বছর অফিশিয়াল ব্র্যান্ড ওয়ারেন্টি (Default)',
          extraPrice: 0,
          desc: 'যেকোনো ম্যানুফ্যাকচারিং ত্রুটিতে সরাসরি রিপ্লেসমেন্ট সাপোর্ট'
        },
        {
          id: '2-year',
          name: '২ বছর এক্সটেন্ডেড প্রো প্রটেকশন প্ল্যান (+৳৮৫০)',
          extraPrice: 850,
          desc: 'অতিরিক্ত ১২ মাসের সম্পূর্ণ পার্টস ও ব্যাটারি রিপ্লেসমেন্ট কভারেজ'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80',
          alt: 'হেডফোন ফ্রন্ট ও ডায়াগোনাল অ্যাঙ্গেল ভিউ',
          badge: 'অরিজিনাল ফটোগ্রাফি'
        },
        {
          url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&auto=format&fit=crop&q=80',
          alt: 'কুশন ইয়ারকাপ ও মেটাল হেডব্যান্ড ফিনিশ',
          badge: 'ম্যাক্স কমফোর্ট'
        },
        {
          url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&auto=format&fit=crop&q=80',
          alt: 'সিলভার হোয়াইট প্রিমিয়াম ফিনিশ ডিজাইন',
          badge: 'স্টুডিও কোয়ালিটি'
        },
        {
          url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&auto=format&fit=crop&q=80',
          alt: 'মিউজিক প্রোডাকশন ও লাইফস্টাইল ওয়ার্কস্পেস প্রিভিউ',
          badge: 'লাইফস্টাইল'
        },
        {
          url: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=1200&auto=format&fit=crop&q=80',
          alt: 'ওয়্যারলেস ব্লুটুথ ৫.৪ এবং স্মার্ট টাচ কন্ট্রোল',
          badge: 'স্মার্ট কন্ট্রোল'
        }
      ],
      keyHighlights: [
        { icon: 'sound', title: 'হাইব্রিড এএনসি (ANC)', desc: '৩৫ ডেসিবল পর্যন্ত বাইরের অপ্রয়োজনীয় নয়েজ সম্পূর্ণ দূর করে' },
        { icon: 'battery', title: '৫০ ঘণ্টা ব্যাটারি লাইফ', desc: 'একবার ফুল চার্জে টানা ২ দিনেরও বেশি নন-স্টপ মিউজিক প্লেব্যাক' },
        { icon: 'bolt', title: '১০ মিনিট ফাস্ট চার্জ', desc: 'মাত্র ১০ মিনিটের টাইপ-সি কুইক চার্জে ৫ ঘণ্টা ব্যাটারি ব্যাকআপ' },
        { icon: 'device', title: 'ডুয়াল ডিভাইস কানেক্ট', desc: 'ল্যাপটপ ও ফোনে একইসাথে কানেক্টেড রেখে সিমলেস অটো-সুইচিং' }
      ]
    },

    // Frequently Bought Together Bundle
    bundleItems: [
      { id: 'b1', title: 'অরা প্রো ম্যাক্স ওয়্যারলেস হেডফোন', price: 8490, checked: true, required: true },
      { id: 'b2', title: 'অ্যালুমিনিয়াম এর্গোনমিক হেডফোন স্ট্যান্ড', originalPrice: 1200, price: 850, checked: true, required: false },
      { id: 'b3', title: 'প্রিমিয়াম ইভিএ শকপ্রুফ ট্রাভেল কেস', originalPrice: 950, price: 650, checked: true, required: false }
    ],

    // Technical Specifications
    specifications: [
      {
        category: 'অডিও ও সাউন্ড পারফরম্যান্স',
        items: [
          { label: 'ড্রাইভার সাইজ', value: '৪০ মিমি কাস্টম-টিউনড নিওডাইমিয়াম ডায়নামিক ড্রাইভার' },
          { label: 'ফ্রিকোয়েন্সি রেসপন্স', value: '১৬ হার্টজ - ৪০,০০০ হার্টজ (Hi-Res Audio Certified)' },
          { label: 'নয়েজ ক্যান্সেলেশন', value: 'হাইব্রিড অ্যাক্টিভ নয়েজ ক্যান্সেলেশন (ANC) উইথ ৪-মাইক্রোফোন অ্যারে' },
          { label: 'ট্রান্সপারেন্সি মোড', value: 'হ্যাঁ, ওয়ান-টাচ অ্যাম্বিয়েন্ট সাউন্ড মোড সমর্থিত' },
          { label: 'ইম্পিডেন্স ও ডায়াফ্রাম', value: '৩২ ওহম, মাল্টি-লেয়ার বায়ো-সেলুলোজ ডায়াফ্রাম' }
        ]
      },
      {
        category: 'ব্যাটারি ও চার্জিং প্রযুক্তি',
        items: [
          { label: 'ব্যাটারি সক্ষমতা', value: '৮০০ এমএএইচ (800 mAh Li-ion Rechargeable)' },
          { label: 'প্লেব্যাক টাইম (ANC চালু)', value: '৪০ ঘণ্টা নিরবচ্ছিন্ন প্লেব্যাক' },
          { label: 'প্লেব্যাক টাইম (ANC বন্ধ)', value: '৫০ ঘণ্টা পর্যন্ত দীর্ঘস্থায়ী প্লেব্যাক' },
          { label: 'চার্জিং পোর্ট', value: 'ইউএসবি টাইপ-সি (USB Type-C Fast Charging)' },
          { label: 'ফুল চার্জ হতে সময়', value: '৯০ মিনিট (১.৫ ঘণ্টা)' },
          { label: 'কুইক চার্জ সাপোর্ট', value: '১০ মিনিট চার্জে ৫ ঘণ্টা প্লেব্যাক' }
        ]
      },
      {
        category: 'কানেক্টিভিটি ও মাইক্রোফোন',
        items: [
          { label: 'ব্লুটুথ সংস্করণ', value: 'Bluetooth v5.4 + BLE (Low Energy Consumption)' },
          { label: 'ওয়ারলেস রেঞ্জ', value: '১৫ মিটার (৫০ ফুট পর্যন্ত খোলা জায়গায়)' },
          { label: 'সমর্থিত অডিও কোডেক', value: 'LDAC, AAC, SBC, aptX HD' },
          { label: 'মাল্টিপয়েন্ট কানেকশন', value: 'হ্যাঁ, একসাথে ২টি ডিভাইসে নিরবচ্ছিন্ন সুইচিং' },
          { label: 'মাইক্রোফোন সিস্টেম', value: '৬টি এআই এনভায়রনমেন্টাল নয়েজ ক্যান্সেলেশন (ENC) মাইক্রোফোন' }
        ]
      },
      {
        category: 'বিল্ড, ডিজাইন ও প্যাকেজ',
        items: [
          { label: 'ওজন', value: '২৫৫ গ্রাম (Lightweight Ergonomic Design)' },
          { label: 'ইয়ারকুশন উপাদান', value: 'মেমরি ফোম ও প্রিমিয়াম প্রোটিন লেদার' },
          { label: 'হেডব্যান্ড অ্যাডজাস্টমেন্ট', value: 'স্ট্রাকচার্ড ব্রাশড স্টেইনলেস স্টিল ফ্রেম' },
          { label: 'প্যাকেজের ভেতর যা যা থাকছে', value: 'হেডফোন, ১.২মি অক্স কেবল, টাইপ-সি চার্জিং কেবল, ইউজার ম্যানুয়াল ও ওয়ারেন্টি কার্ড' }
        ]
      }
    ],

    // Customer Reviews & Feedback
    reviewFilterStar: 0, // 0 = all, 5, 4, 3, 2, 1
    newReview: {
      name: '',
      rating: 5,
      comment: '',
      city: 'ঢাকা'
    },
    reviewSearchQuery: '',
    reviews: [
      {
        id: 1,
        author: 'তানভীর আহমেদ',
        city: 'ঢাকা, গুলশান',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
        rating: 5,
        date: '২ দিন আগে (ভেরিফাইড পারচেজ)',
        comment: 'শব্দের কোয়ালিটি অসাধারণ! বিশেষ করে হাইব্রিড ANC অন করলে বাইরের ফ্যান বা ট্রাফিকের কোনো শব্দই কানে আসে না। ব্যাটারি ব্যাকআপ এক কথায় অবিশ্বাস্য, ৪ দিন ধরে ব্যবহার করছি এখনো ৩৫% চার্জ বাকি। সাউন্ড স্টেজ খুবই প্রশস্ত।',
        helpfulCount: 34,
        isHelpfulClicked: false,
        verified: true,
        photos: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=80'
        ]
      },
      {
        id: 2,
        author: 'নুসরাত জাহান মৌ',
        city: 'চট্টগ্রাম',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
        rating: 5,
        date: '১ সপ্তাহ আগে (ভেরিফাইড পারচেজ)',
        comment: 'অনেকদিন ধরে কাজের জন্য একটা প্রিমিয়াম হেডফোন খুঁজছিলাম যা দীর্ঘক্ষণ মাথায় রাখলেও কান গরম হয় না বা ব্যথা করে না। এর মেমরি ফোম প্যাডগুলো ভীষণ নরম। অনলাইন মিটিংয়ে আমার কণ্ঠ অত্যন্ত পরিষ্কার যায়। প্যাকেজিং ও বিল্ড কোয়ালিটি টপ নচ!',
        helpfulCount: 21,
        isHelpfulClicked: false,
        verified: true,
        photos: []
      },
      {
        id: 3,
        author: 'রাফিদ মাহমুদ চৌধুরী',
        city: 'সিলেট',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
        rating: 4,
        date: '২ সপ্তাহ আগে',
        comment: 'বাস ও ট্রিবল ব্যালেন্সড। LDAC কোডেক অন করলে হাই-রেজ অডিও চমৎকার শোনায়। তবে অ্যাপ কন্ট্রোলের ইকুয়ালাইজারে আরও দু-একটা প্রিসেট থাকলে পারফেক্ট হতো। দাম অনুযায়ী অবশ্যই অন্যতম সেরা চয়েজ।',
        helpfulCount: 15,
        isHelpfulClicked: false,
        verified: true,
        photos: [
          'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop&q=80'
        ]
      },
      {
        id: 4,
        author: 'সৈকত ইসলাম',
        city: 'রাজশাহী',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&auto=format&fit=crop&q=80',
        rating: 5,
        date: '৩ সপ্তাহ আগে (ভেরিফাইড পারচেজ)',
        comment: 'ডুয়াল ডিভাইস কানেক্টিভিটি ফিচারটা আমার লাইফ সেভ করেছে। ম্যাকবুকে গান শুনি, ফোনে কল আসলে নিজে থেকেই অটোমেটিক ফোনে সুইচ হয়ে যায়। ১ দিনে রাজশাহী হোম ডেলিভারি পেয়েছি। ধন্যবাদ সেলারকে!',
        helpfulCount: 9,
        isHelpfulClicked: false,
        verified: true,
        photos: []
      }
    ],

    // Frequently Asked Questions
    faqs: [
      {
        question: 'এই হেডফোনটি কি আইফোন, অ্যান্ড্রয়েড ও উইন্ডোজ ল্যাপটপে সাপোর্ট করবে?',
        answer: 'হ্যাঁ, এতে ব্লুটুথ ৫.৪ টেকনোলজি রয়েছে। তাই যেকোনো আইফোন, আইপ্যাড, অ্যান্ড্রয়েড ফোন, ম্যাকবুক বা উইন্ডোজ কম্পিউটারের সাথে এটি সহজে কানেক্ট হয়। এছাড়াও সাথে থাকা ৩.৫ মিমি অক্স কেবল দিয়ে নন-ব্লুটুথ ডিভাইসেও চালানো যাবে।',
        open: true
      },
      {
        question: 'অ্যাক্টিভ নয়েজ ক্যান্সেলেশন (ANC) কি প্রয়োজনে বন্ধ রাখা যায়?',
        answer: 'অবশ্যই। ডান পাশের ইয়ারকাপে ডেডিকেটেড ফিজিক্যাল মোড বাটন রয়েছে। এক ক্লিকেই আপনি ANC On, Transparency Mode (বাইরের কথা স্পষ্ট শোনার মোড), অথবা ANC Off করতে পারবেন।',
        open: false
      },
      {
        question: 'ওয়ারেন্টির নিয়মাবলি কী এবং ঢাকায় ডেলিভারি পেতে কতক্ষণ লাগে?',
        answer: 'প্রোডাক্টের সাথে ১ বছরের অফিশিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি কার্ড দেওয়া থাকে। ঢাকা সিটির যেকোনো ঠিকানায় অর্ডার করার ১২ থেকে ২৪ ঘণ্টার মধ্যে হোম ডেলিভারি পৌঁছে দেওয়া হয়। পণ্য হাতে পেয়ে চেক করে মূল্য পরিশোধ করতে পারবেন।',
        open: false
      },
      {
        question: 'গেমিং বা ভিডিও দেখার সময় কি কোনো সাউন্ড ল্যাগ বা অডিও ডিলে হবে?',
        answer: 'না, AuraSound Pro Max-এ রয়েছে লো-লেটেন্সি আল্ট্রা গেমিং মোড (মাত্র ৩৮ মিলিসেকেন্ড লেটেন্সি)। ফলে ফ্রি-ফায়ার, পাবজি বা মুভি দেখার সময় অডিও ও ভিডিও একদম নিখুঁতভাবে সিঙ্ক থাকে।',
        open: false
      },
      {
        question: 'প্যাকেজে কী কী পাওয়া যাবে এবং ক্যাশ অন ডেলিভারি সুবিধা আছে কি?',
        answer: 'প্যাকেজের ভেতর অরিজিনাল হেডফোন, ৩.৫মিমি গোল্ড-প্লেটেড অক্স কেবল, প্রিমিয়াম ব্রেইডেড টাইপ-সি ফাস্ট চার্জিং কেবল, কটন ক্যারি পাউচ ও অথরাইজড ওয়ারেন্টি কার্ড রয়েছে। সারাদেশে সম্পূর্ণ ক্যাশ অন ডেলিভারিতে অর্ডার করতে পারবেন।',
        open: false
      }
    ],

    // Related Products Carousel / Grid
    relatedProducts: [
      {
        id: 'aur-sw-202',
        title: 'টাইটান আল্ট্রা ২ অ্যামোলেড স্মার্টওয়াচ',
        category: 'স্মার্টওয়াচ',
        price: 4890,
        originalPrice: 6200,
        rating: 4.8,
        reviews: 142,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
        badge: 'জনপ্রিয়'
      },
      {
        id: 'aur-spk-40',
        title: 'সনিক বুম ৪০ ওয়াট ওয়াটারপ্রুফ স্পিকার',
        category: 'অডিও ও সাউন্ড',
        price: 3750,
        originalPrice: 4800,
        rating: 4.9,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
        badge: 'বেস্ট ডিল'
      },
      {
        id: 'aur-chg-65',
        title: 'ম্যাগস্ন্যাপ ৬৫ ওয়াট GaN ট্রিপল ফাস্ট চার্জার',
        category: 'অ্যাক্সেসরিজ',
        price: 2150,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 86,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
        badge: 'ফাস্ট চার্জ'
      },
      {
        id: 'aur-tw-305',
        title: 'অরা বাডস প্রো হাইব্রিড ANC ইয়ারবাডস',
        category: 'ইয়ারফোন',
        price: 3290,
        originalPrice: 4500,
        rating: 4.9,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
        badge: 'হট'
      }
    ],

    // Shopping Cart State
    cart: [],
    promoCode: '',
    discountPercent: 0,

    // Checkout Form Model
    checkoutForm: {
      name: '',
      phone: '',
      city: 'dhaka',
      address: '',
      paymentMethod: 'cod',
      note: ''
    },
    lastOrderNumber: '',

    // Wishlist items
    wishlist: [],

    // Toast notifications
    toasts: [],

    init() {
      // Load cart from localStorage
      try {
        const savedCart = localStorage.getItem('shop_cart');
        if (savedCart) {
          this.cart = JSON.parse(savedCart);
        }
      } catch (e) {
        this.cart = [];
      }

      // Load wishlist from localStorage
      try {
        const savedWishlist = localStorage.getItem('shop_wishlist');
        if (savedWishlist) {
          this.wishlist = JSON.parse(savedWishlist);
        }
      } catch (e) {
        this.wishlist = [];
      }

      // Sync dark mode class with root html
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Watch for dark mode changes
      this.$watch('darkMode', val => {
        localStorage.setItem('admin_dark_mode', val);
        if (val) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });

      // Save cart whenever it changes
      this.$watch('cart', val => {
        localStorage.setItem('shop_cart', JSON.stringify(val));
      });

      // Save wishlist whenever it changes
      this.$watch('wishlist', val => {
        localStorage.setItem('shop_wishlist', JSON.stringify(val));
      });
    },

    // Dynamic price calculation
    get calculatedUnitPrice() {
      let price = this.product.basePrice;
      const edition = this.product.editions.find(e => e.id === this.selectedEdition);
      if (edition) price += edition.extraPrice;

      const warranty = this.product.warranties.find(w => w.id === this.selectedWarranty);
      if (warranty) price += warranty.extraPrice;

      return price;
    },

    get calculatedOriginalPrice() {
      let price = this.product.originalBasePrice;
      const edition = this.product.editions.find(e => e.id === this.selectedEdition);
      if (edition) price += edition.extraPrice;

      const warranty = this.product.warranties.find(w => w.id === this.selectedWarranty);
      if (warranty) price += warranty.extraPrice;

      return price;
    },

    get totalDiscountAmount() {
      return this.calculatedOriginalPrice - this.calculatedUnitPrice;
    },

    get discountPercentage() {
      return Math.round((this.totalDiscountAmount / this.calculatedOriginalPrice) * 100);
    },

    get currentActiveImage() {
      return this.product.gallery[this.activeImageIndex] || this.product.gallery[0];
    },

    get selectedColorObj() {
      return this.product.colors.find(c => c.id === this.selectedColor) || this.product.colors[0];
    },

    get selectedCityObj() {
      return this.deliveryCities.find(c => c.id === this.selectedCity) || this.deliveryCities[0];
    },

    // Bundle calculation
    get bundleTotalPrice() {
      return this.bundleItems
        .filter(item => item.checked)
        .reduce((sum, item) => sum + item.price, 0);
    },

    get bundleRegularPrice() {
      return this.bundleItems
        .filter(item => item.checked)
        .reduce((sum, item) => sum + (item.originalPrice || item.price), 0);
    },

    get bundleSavings() {
      return Math.max(0, this.bundleRegularPrice - this.bundleTotalPrice);
    },

    // Quantity controls
    increaseQty() {
      if (this.quantity < this.product.stockCount) {
        this.quantity++;
      } else {
        this.showToast('স্টক লিমিট', 'সর্বোচ্চ উপলব্ধ স্টক পর্যন্ত নির্বাচন করা হয়েছে।', 'warning');
      }
    },

    decreaseQty() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    // Variant pickers
    selectColor(colorId) {
      this.selectedColor = colorId;
      const col = this.product.colors.find(c => c.id === colorId);
      if (col) {
        // Switch gallery to corresponding color image
        const imgIdx = this.product.gallery.findIndex(g => g.url === col.image);
        if (imgIdx !== -1) {
          this.activeImageIndex = imgIdx;
        }
      }
    },

    // Gallery navigation
    setImage(idx) {
      this.activeImageIndex = idx;
    },

    nextImage() {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.product.gallery.length;
    },

    prevImage() {
      this.activeImageIndex = (this.activeImageIndex - 1 + this.product.gallery.length) % this.product.gallery.length;
    },

    // Zoom mouse tracking
    handleMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      this.zoomPos = { x, y };
      this.zoomActive = true;
    },

    handleMouseLeave() {
      this.zoomActive = false;
    },

    // Add current configured product to cart
    addToCart(instant = false) {
      const col = this.selectedColorObj;
      const edition = this.product.editions.find(e => e.id === this.selectedEdition);
      const warranty = this.product.warranties.find(w => w.id === this.selectedWarranty);

      const cartItem = {
        id: `${this.product.id}-${this.selectedColor}-${this.selectedEdition}-${this.selectedWarranty}`,
        productId: this.product.id,
        title: this.product.title,
        color: col.name,
        edition: edition ? edition.name : 'Standard',
        warranty: warranty ? warranty.name : '1-Year',
        price: this.calculatedUnitPrice,
        quantity: this.quantity,
        image: col.image || this.currentActiveImage.url
      };

      const existingIndex = this.cart.findIndex(i => i.id === cartItem.id);
      if (existingIndex > -1) {
        this.cart[existingIndex].quantity += this.quantity;
      } else {
        this.cart.push(cartItem);
      }

      this.showToast('কার্টে যুক্ত হয়েছে!', `${this.quantity}x ${this.product.title} সফলভাবে কার্টে যুক্ত হয়েছে।`, 'success');

      if (instant) {
        this.cartOpen = true;
      }
    },

    // Buy now action
    buyNow() {
      this.addToCart(false);
      this.checkoutModalOpen = true;
    },

    // Add bundle items to cart
    addBundleToCart() {
      const checkedItems = this.bundleItems.filter(i => i.checked);
      checkedItems.forEach(item => {
        if (item.id === 'b1') {
          // Add configured primary product
          this.addToCart(false);
        } else {
          // Add companion accessory
          const accessoryItem = {
            id: item.id,
            productId: item.id,
            title: item.title,
            color: 'কাস্টম ব্ল্যাক',
            edition: 'স্ট্যান্ডার্ড',
            warranty: '৬ মাস অফিশিয়াল',
            price: item.price,
            quantity: 1,
            image: item.id === 'b2' 
              ? 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80' 
              : 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80'
          };
          const existing = this.cart.findIndex(i => i.id === accessoryItem.id);
          if (existing > -1) {
            this.cart[existing].quantity += 1;
          } else {
            this.cart.push(accessoryItem);
          }
        }
      });
      this.showToast('বান্ডল যুক্ত হয়েছে!', '৩টি আইটেমের স্পেশাল বান্ডল সফলভাবে কার্টে যোগ হয়েছে।', 'success');
      this.cartOpen = true;
    },

    // Quick add related product
    addRelatedToCart(item) {
      const cartItem = {
        id: item.id,
        productId: item.id,
        title: item.title,
        color: 'স্ট্যান্ডার্ড ভ্যারিয়েন্ট',
        edition: 'স্ট্যান্ডার্ড',
        warranty: '১ বছর অফিশিয়াল',
        price: item.price,
        quantity: 1,
        image: item.image
      };
      const existing = this.cart.findIndex(i => i.id === cartItem.id);
      if (existing > -1) {
        this.cart[existing].quantity++;
      } else {
        this.cart.push(cartItem);
      }
      this.showToast('যুক্ত হয়েছে!', `${item.title} কার্টে যোগ হয়েছে।`, 'success');
    },

    // Cart calculations & actions
    updateCartItemQty(index, change) {
      if (this.cart[index]) {
        this.cart[index].quantity += change;
        if (this.cart[index].quantity <= 0) {
          this.cart.splice(index, 1);
          this.showToast('রিমুভ করা হয়েছে', 'আইটেমটি কার্ট থেকে সরানো হয়েছে।', 'info');
        }
      }
    },

    removeCartItem(index) {
      this.cart.splice(index, 1);
      this.showToast('রিমুভ করা হয়েছে', 'আইটেমটি কার্ট থেকে সরানো হয়েছে।', 'info');
    },

    get cartSubtotal() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    get cartDiscount() {
      if (this.discountPercent > 0) {
        return Math.round((this.cartSubtotal * this.discountPercent) / 100);
      }
      return 0;
    },

    get cartTotal() {
      return Math.max(0, this.cartSubtotal - this.cartDiscount);
    },

    get cartCount() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    applyPromo() {
      const code = this.promoCode.trim().toUpperCase();
      if (code === 'PRO10') {
        this.discountPercent = 10;
        this.showToast('কুপন সফল!', '১০% স্পেশাল ছাড় কার্যকর হয়েছে।', 'success');
      } else if (code === 'SAVE20') {
        this.discountPercent = 20;
        this.showToast('কুপন সফল!', '২০% মেগা ডিসকাউন্ট প্রযোজ্য হয়েছে।', 'success');
      } else {
        this.showToast('ভুল কুপন কোড', 'দয়া করে সঠিক প্রোমোকোড ব্যবহার করুন (যেমন: PRO10)', 'error');
      }
    },

    // Wishlist Toggle
    isWishlisted() {
      return this.wishlist.some(w => w.id === this.product.id);
    },

    toggleWishlist() {
      const idx = this.wishlist.findIndex(w => w.id === this.product.id);
      if (idx > -1) {
        this.wishlist.splice(idx, 1);
        this.showToast('উইশলিস্ট আপডেট', 'পণ্যটি পছন্দের তালিকা থেকে সরানো হয়েছে।', 'info');
      } else {
        this.wishlist.push({
          id: this.product.id,
          title: this.product.title,
          price: this.calculatedUnitPrice,
          image: this.selectedColorObj.image || this.currentActiveImage.url
        });
        this.showToast('পছন্দের তালিকায় যুক্ত', 'পণ্যটি আপনার উইশলিস্টে সেভ করা হয়েছে!', 'success');
      }
    },

    // Social share & link copy
    copyProductLink() {
      const dummyUrl = window.location.href;
      navigator.clipboard.writeText(dummyUrl).then(() => {
        this.showToast('লিঙ্ক কপি হয়েছে!', 'প্রোডাক্টের লিংক ক্লিপবোর্ডে কপি করা হয়েছে।', 'success');
        this.shareModalOpen = false;
      }).catch(() => {
        this.showToast('লিঙ্ক কপি হয়েছে!', dummyUrl, 'info');
      });
    },

    // Review submission
    submitReview() {
      if (!this.newReview.name.trim() || !this.newReview.comment.trim()) {
        this.showToast('তথ্য অসম্পূর্ণ', 'অনুগ্রহ করে আপনার নাম ও পর্যালোচনার বিবরণ লিখুন।', 'warning');
        return;
      }

      this.reviews.unshift({
        id: Date.now(),
        author: this.newReview.name.trim(),
        city: this.newReview.city,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
        rating: this.newReview.rating,
        date: 'এখনই মাত্র',
        comment: this.newReview.comment.trim(),
        helpfulCount: 0,
        isHelpfulClicked: false,
        verified: true,
        photos: []
      });

      this.newReview = {
        name: '',
        rating: 5,
        comment: '',
        city: 'ঢাকা'
      };

      this.showToast('রিভিউ পোস্ট হয়েছে!', 'আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।', 'success');
    },

    toggleHelpful(review) {
      if (review.isHelpfulClicked) {
        review.helpfulCount--;
        review.isHelpfulClicked = false;
      } else {
        review.helpfulCount++;
        review.isHelpfulClicked = true;
      }
    },

    get filteredReviews() {
      let list = this.reviews;
      if (this.reviewFilterStar > 0) {
        list = list.filter(r => r.rating === this.reviewFilterStar);
      }
      if (this.reviewSearchQuery.trim()) {
        const q = this.reviewSearchQuery.toLowerCase();
        list = list.filter(r => r.comment.toLowerCase().includes(q) || r.author.toLowerCase().includes(q));
      }
      return list;
    },

    // Checkout execution
    processCheckout() {
      if (!this.checkoutForm.name || !this.checkoutForm.phone || !this.checkoutForm.address) {
        this.showToast('ফর্ম পূরণ করুন', 'নাম, মোবাইল নম্বর ও ঠিকানা পূরণ করা বাধ্যতামূলক।', 'warning');
        return;
      }

      this.lastOrderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      this.orderSuccess = true;
      this.cart = [];
      this.showToast('অর্ডার সম্পন্ন হয়েছে!', `আপনার অর্ডার আইডি: ${this.lastOrderNumber}`, 'success');
    },

    resetCheckout() {
      this.checkoutModalOpen = false;
      this.orderSuccess = false;
      this.checkoutForm = {
        name: '',
        phone: '',
        city: 'dhaka',
        address: '',
        paymentMethod: 'cod',
        note: ''
      };
    },

    // Toast system
    showToast(title, message, type = 'info') {
      const id = Date.now() + Math.random();
      this.toasts.push({ id, title, message, type });
      setTimeout(() => {
        this.removeToast(id);
      }, 4000);
    },

    removeToast(id) {
      this.toasts = this.toasts.filter(t => t.id !== id);
    }
  }));
});
