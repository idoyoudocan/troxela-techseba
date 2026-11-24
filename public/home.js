// home.js - Interactive state & methods for the Product Showcase Homepage
// Powered by Alpine.js and synced with theme settings

function shopApp() {
  return {
    // Theme state (synced with admin dashboard localStorage)
    darkMode: localStorage.getItem('admin_dark_mode') === 'true',
    
    // Navigation & Drawer states
    mobileMenuOpen: false,
    cartOpen: false,
    wishlistOpen: false,
    quickViewOpen: false,
    checkoutOpen: false,
    orderSuccessOpen: false,
    lastOrder: null,

    // Search & Filter state
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    priceFilter: 'all',

    // Hero carousel active product index
    heroIndex: 0,
    heroProducts: [
      {
        id: 101,
        title: 'অরা প্রো ম্যাক্স এএনসি হেডফোন',
        subtitle: 'Aura Pro Max Wireless Studio ANC',
        badge: 'ফ্ল্যাগশিপ চয়েস',
        price: 8490,
        originalPrice: 10990,
        discount: '২৩% ছাড়',
        rating: 4.9,
        reviews: 382,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        description: 'অতুলনীয় অ্যাক্টিভ নয়েজ ক্যান্সেলেশন (ANC), ৪০ ঘণ্টার ব্যাটারি লাইফ এবং ক্রিস্টাল ক্লিয়ার স্টুডিও হাই-ফাই অডিও।',
        features: ['৪০ ঘণ্টা প্লেব্যাক', 'অ্যাক্টিভ নয়েজ ক্যান্সেলেশন', 'ব্লুটুথ ৫.৪ আল্ট্রা লেটেন্সি', 'টাইপ-সি ফাস্ট চার্জ']
      },
      {
        id: 102,
        title: 'টাইটান আল্ট্রা ২ স্মার্টওয়াচ',
        subtitle: 'Titan Ultra 2 Titanium AMOLED Watch',
        badge: 'হট ট্রেন্ডিং',
        price: 5290,
        originalPrice: 6990,
        discount: '২৪% ছাড়',
        rating: 4.8,
        reviews: 512,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        description: '২.০৪ ইঞ্চি উজ্জ্বল AMOLED অলওয়েজ-অন ডিসপ্লে, ব্লুটুথ কলিং, এসপিও২ হেলথ সেন্সর ও ওয়াটারপ্রুফ বডি।',
        features: ['AMOLED অলওয়েজ-অন ডিসপ্লে', 'ব্লুটুথ HD কলিং', 'IP68 ওয়াটারপ্রুফ', '৭ দিনের পাওয়ারফুল ব্যাটারি']
      },
      {
        id: 103,
        title: 'সনিক বুম পোর্টেবল পার্টি স্পিকার',
        subtitle: 'Sonic Boom 40W Rugged Bass Speaker',
        badge: 'বেস্ট সেলার',
        price: 4190,
        originalPrice: 5490,
        discount: '২৪% ছাড়',
        rating: 4.9,
        reviews: 298,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
        description: '৪০ ওয়াট ডাবল বাস বুস্টার, ৩৬০ ডিগ্রি চারউইন্ডিং সারাউন্ড সাউন্ড ও আরজিবি ডাইনামিক লাইটিং এফেক্ট।',
        features: ['৪০W ট্রু বাস সাউন্ড', 'RGB ডাইনামিক লাইট শো', 'IPX7 ওয়াটারপ্রুফ', '২৪ ঘণ্টা নন-স্টপ ব্যাকআপ']
      }
    ],

    // Flash Deal countdown timer
    dealTimer: {
      hours: '০৮',
      minutes: '৪৫',
      seconds: '২০'
    },
    timerInterval: null,

    // Product Catalog (Realistic & Premium)
    products: [
      {
        id: 1,
        name: 'অরা প্রো ম্যাক্স এএনসি হেডফোন',
        nameEn: 'Aura Pro Max Studio ANC',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        price: 8490,
        originalPrice: 10990,
        rating: 4.9,
        reviewsCount: 382,
        badge: 'বেস্ট সেলার',
        badgeColor: 'indigo',
        inStock: true,
        stockCount: 18,
        colors: [
          { name: 'স্পেস গ্রে', hex: '#374151' },
          { name: 'ম্যাট ব্ল্যাক', hex: '#111827' },
          { name: 'সিলভার হোয়াইট', hex: '#e2e8f0' }
        ],
        selectedColor: 'ম্যাট ব্ল্যাক',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'সর্বাধুনিক হাইব্রিড অ্যাক্টিভ নয়েজ ক্যান্সেলেশন (ANC) টেকনোলজি সহ স্টুডিও গ্রেড সাউন্ড কোয়ালিটি। ৪০ ঘণ্টার শক্তিশালী ব্যাটারি লাইফ।',
        specs: ['৪০ মিমি নিওডিমিয়াম ড্রাইভার', '৪০ ঘণ্টা মিউজিক প্লেব্যাক', 'এনভায়রনমেন্টাল নয়েজ ক্যান্সেলেশন', 'টাইপ-সি সুপার ফাস্ট চার্জিং']
      },
      {
        id: 2,
        name: 'টাইটান আল্ট্রা ২ স্মার্টওয়াচ',
        nameEn: 'Titan Ultra 2 Titanium AMOLED',
        category: 'wearables',
        categoryLabel: 'ঘড়ি ও ওয়্যারেবল',
        price: 5290,
        originalPrice: 6990,
        rating: 4.8,
        reviewsCount: 512,
        badge: 'হট ট্রেন্ডিং',
        badgeColor: 'rose',
        inStock: true,
        stockCount: 24,
        colors: [
          { name: 'টাইটানিয়াম গ্রে', hex: '#475569' },
          { name: 'মিডনাইট ব্ল্যাক', hex: '#0f172a' },
          { name: 'অরেঞ্জ স্ট্র্যাপ', hex: '#ea580c' }
        ],
        selectedColor: 'টাইটানিয়াম গ্রে',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
        ],
        description: '২.০৪ ইঞ্চি সুপার অ্যামোলেড ডিসপ্লে, ব্লুটুথ এইচডি কলিং, হার্ট রেট এবং স্লিপ ট্র্যাকিং সেন্সর। ৭ দিনের ব্যাটারি ব্যাকআপ।',
        specs: ['২.০৪ ইঞ্চি AMOLED অলওয়েজ-অন', 'এইচডি ব্লুটুথ কলিং ও মাইক', '১০০+ স্পোর্টস মোডস', 'IP68 ওয়াটার অ্যান্ড ডাস্ট রেজিস্ট্যান্ট']
      },
      {
        id: 3,
        name: 'নেক্সটজেন মেকানিক্যাল আরজিবি কিবোর্ড',
        nameEn: 'NextGen RGB Mechanical Pro',
        category: 'computing',
        categoryLabel: 'কম্পিউটার ও ল্যাপটপ',
        price: 4450,
        originalPrice: 5800,
        rating: 4.9,
        reviewsCount: 219,
        badge: 'টপ রেটেড',
        badgeColor: 'emerald',
        inStock: true,
        stockCount: 12,
        colors: [
          { name: 'রেট্রো হোয়াইট', hex: '#f8fafc' },
          { name: 'ডাবল শট ব্ল্যাক', hex: '#1e293b' }
        ],
        selectedColor: 'ডাবল শট ব্ল্যাক',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'হট-সোয়াপ্পেবল রেড সুইচেস, ১৮টি আরজিবি ব্যাকলাইট মোড এবং পিবিটি ডাবল-শট টেকসই কি-ক্যাপস। টাইপিং ও গেমিং উভয়ের জন্যই সেরা।',
        specs: ['হট-সোয়াপ্পেবল মেকানিক্যাল সুইচ', '১৮টি আরজিবি কাস্টম মোড', 'পিবিটি ডাবল শট কি-ক্যাপস', 'টাইপ-সি ডিটাচেবল কেবল']
      },
      {
        id: 4,
        name: 'সনিক বুম ৪০W বাস স্পিকার',
        nameEn: 'Sonic Boom 40W Rugged Bass',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        price: 4190,
        originalPrice: 5490,
        rating: 4.9,
        reviewsCount: 298,
        badge: 'সীমিত অফার',
        badgeColor: 'amber',
        inStock: true,
        stockCount: 9,
        colors: [
          { name: 'ম্যাট ব্ল্যাক', hex: '#09090b' },
          { name: 'ক্যামো গ্রিন', hex: '#3f6212' },
          { name: 'ওশান ব্লু', hex: '#0284c7' }
        ],
        selectedColor: 'ম্যাট ব্ল্যাক',
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
        ],
        description: '৪০ ওয়াট এক্সট্রা ডিপ বাস, ৩৬০ ডিগ্রি সারাউন্ড সাউন্ড এবং IPX7 ওয়াটারপ্রুফ প্রযুক্তি। আউটডোর অ্যাডভেঞ্চারের জন্য নিখুঁত।',
        specs: ['৪০ ওয়াট ট্রু আরএমএস পাওয়ার', 'IPX7 ওয়াটারপ্রুফ ও শকপ্রুফ', '২৪ ঘণ্টা নন-স্টপ মিউজিক', 'TWS ডুয়েল পেয়ারিং সাপোর্ট']
      },
      {
        id: 5,
        name: 'সুইফট ওয়্যারলেস এরগনোমিক মাউস',
        nameEn: 'Swift Ergonomic Silent Click',
        category: 'computing',
        categoryLabel: 'কম্পিউটার ও ল্যাপটপ',
        price: 2150,
        originalPrice: 2800,
        rating: 4.7,
        reviewsCount: 164,
        badge: 'নিউ অ্যারাইভাল',
        badgeColor: 'sky',
        inStock: true,
        stockCount: 30,
        colors: [
          { name: 'ম্যাট ব্ল্যাক', hex: '#18181b' },
          { name: 'আর্কটিক গ্রে', hex: '#94a3b8' }
        ],
        selectedColor: 'ম্যাট ব্ল্যাক',
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'হাতের কব্জির আরাম নিশ্চিতকারী এরগনোমিক শেপ, সাইলেন্ট ক্লিক সুইচ এবং ডুয়েল মোড (ব্লুটুথ ও ২.৪ গিগাহার্টজ ওয়্যারলেস)।',
        specs: ['৪০০০ ডিপিআই অপটিক্যাল সেন্সর', '৯০% সাইলেন্ট ক্লিক', 'ডুয়েল মোড ব্লুটুথ + ইউএসবি ডঙ্গল', 'রিচার্জেবল লিথিয়াম ব্যাটারি']
      },
      {
        id: 6,
        name: 'পাওয়ারকোর ৬৫W ফাস্ট চার্জার',
        nameEn: 'PowerCore 65W GaN Fast Charger',
        category: 'accessories',
        categoryLabel: 'অ্যাক্সেসরিজ',
        price: 1890,
        originalPrice: 2450,
        rating: 4.8,
        reviewsCount: 420,
        badge: 'বেস্ট ডিল',
        badgeColor: 'indigo',
        inStock: true,
        stockCount: 45,
        colors: [
          { name: 'হোয়াইট', hex: '#f1f5f9' },
          { name: 'ব্ল্যাক', hex: '#1e293b' }
        ],
        selectedColor: 'হোয়াইট',
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'উন্নত GaN III প্রযুক্তির ফাস্ট চার্জার। ল্যাপটপ, ম্যাকবুক, আইফোন এবং অ্যান্ড্রয়েড একসাথে হাই-স্পিডে চার্জ করার ৩টি পোর্ট।',
        specs: ['৬৫ ওয়াট আল্ট্রা ফাস্ট চার্জিং', '২x Type-C + 1x USB-A পোর্ট', 'GaN কুলিং ও মাল্টি-লেয়ার প্রটেকশন', 'স্মার্ট পাওয়ার ডিস্ট্রিবিউশন']
      },
      {
        id: 7,
        name: 'সিলিকন টিডব্লিউএস এয়ারবাডস ৩',
        nameEn: 'Silicon TWS Earbuds Gen 3',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        price: 2890,
        originalPrice: 3800,
        rating: 4.8,
        reviewsCount: 341,
        badge: 'জনপ্রিয়',
        badgeColor: 'rose',
        inStock: true,
        stockCount: 22,
        colors: [
          { name: 'পার্ল হোয়াইট', hex: '#f8fafc' },
          { name: 'পিয়ানো ব্ল্যাক', hex: '#020617' },
          { name: 'রোজ গোল্ড', hex: '#f43f5e' }
        ],
        selectedColor: 'পার্ল হোয়াইট',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'এনভায়রনমেন্টাল নয়েজ ক্যান্সেলেশন (ENC) যুক্ত ৪টি মাইক্রোফোন, সুপার ডিপ বাস এবং ৩২ ঘণ্টার লং ব্যাটারি সাপোর্ট।',
        specs: ['১৩ মিমি টাইটানিয়াম ড্রাইভার', '৪-মাইক ENC কলিং প্রযুক্তি', '৩২ ঘণ্টা টোটাল কেস প্লেব্যাক', 'স্মার্ট টাচ কন্ট্রোলস']
      },
      {
        id: 8,
        name: 'স্মার্ট ফোকাস অ্যাকশন ক্যামেরা ৪K',
        nameEn: 'SmartFocus 4K Ultra Action Cam',
        category: 'gadgets',
        categoryLabel: 'স্মার্ট গ্যাজেটস',
        price: 9890,
        originalPrice: 12500,
        rating: 4.9,
        reviewsCount: 189,
        badge: 'প্রো চয়েস',
        badgeColor: 'emerald',
        inStock: true,
        stockCount: 7,
        colors: [
          { name: 'ম্যাট ব্ল্যাক', hex: '#18181b' }
        ],
        selectedColor: 'ম্যাট ব্ল্যাক',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
        ],
        description: '৪K/৬০fps আল্ট্রা এইচডি ভিডিও রেকর্ডিং, সিক্স-অ্যাক্সিস গাইরো স্ট্যাবিলাইজার এবং ৩০ মিটার ওয়াটারপ্রুফ কেসিং।',
        specs: ['৪K ৬০FPS সিনেমাটিক রেকর্ডিং', 'ইআইএস ৬-অ্যাক্সিস স্ট্যাবিলাইজার', 'ডুয়েল টাচ স্ক্রিন ডিসপ্লে', 'ওয়াই-ফাই অ্যাপ রিমোট কন্ট্রোল']
      },
      {
        id: 9,
        name: 'ম্যাগনেটিক ওয়্যারলেস পাওয়ারব্যাংক ১০K',
        nameEn: 'MagSnap 10,000mAh Magnetic Powerbank',
        category: 'accessories',
        categoryLabel: 'অ্যাক্সেসরিজ',
        price: 2690,
        originalPrice: 3490,
        rating: 4.7,
        reviewsCount: 275,
        badge: 'ট্রেন্ডিং',
        badgeColor: 'sky',
        inStock: true,
        stockCount: 35,
        colors: [
          { name: 'গ্র্যাফাইট ব্ল্যাক', hex: '#1c1917' },
          { name: 'আইসি ব্লু', hex: '#38bdf8' }
        ],
        selectedColor: 'গ্র্যাফাইট ব্ল্যাক',
        image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'ম্যাগসেফ কম্প্যাটিবল স্ট্রং ম্যাগনেটিক পাওয়ারব্যাংক। ১৫ ওয়াট ফাস্ট ওয়্যারলেস চার্জ ও ২০ ওয়াট পিডি ওয়্যার্ড চার্জিং।',
        specs: ['১০,০০০ mAh পলিমার সেল', '১৫W ওয়্যারলেস + ২০W PD চার্জিং', 'স্ট্রং নিওডিমিয়াম ম্যাগনেট', 'কমপ্যাক্ট স্লিম পকেট ডিজাইন']
      },
      {
        id: 10,
        name: 'অ্যান্টি-ব্লু লাইট কম্পিউটার গ্লাস',
        nameEn: 'AuraShield Blue Light Blocking Glasses',
        category: 'wearables',
        categoryLabel: 'ঘড়ি ও ওয়্যারেবল',
        price: 1350,
        originalPrice: 1800,
        rating: 4.6,
        reviewsCount: 142,
        badge: 'স্বাস্থ্য সুরক্ষা',
        badgeColor: 'indigo',
        inStock: true,
        stockCount: 50,
        colors: [
          { name: 'ম্যাট ব্ল্যাক ফ্রেম', hex: '#0f172a' },
          { name: 'ট্রান্সপারেন্ট ফ্রেম', hex: '#cbd5e1' }
        ],
        selectedColor: 'ম্যাট ব্ল্যাক ফ্রেম',
        image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'স্ক্রিনের ক্ষতিকর ব্লু-লাইট ও গ্লেয়ার থেকে চোখকে সুরক্ষিত রাখে। হালকা ওজন ও ফ্যাশনেবল ক্লাসিক ফ্রেম।',
        specs: ['৯৯% ক্ষতিকর ব্লু-লাইট ফিল্টার', 'ইউভি ৪০০ আল্ট্রাভায়োলেট সুরক্ষা', 'অ্যান্টি-রিফ্লেক্টিভ কোটিং', 'আল্ট্রা-লাইটওয়েট TR90 ফ্রেম']
      },
      {
        id: 11,
        name: 'অ্যালুমিনিয়াম ফোল্ডেবল ল্যাপটপ স্ট্যান্ড',
        nameEn: 'ErgoLift Aluminum Laptop Stand',
        category: 'computing',
        categoryLabel: 'কম্পিউটার ও ল্যাপটপ',
        price: 1490,
        originalPrice: 1950,
        rating: 4.8,
        reviewsCount: 260,
        badge: 'বেস্ট সেলার',
        badgeColor: 'amber',
        inStock: true,
        stockCount: 19,
        colors: [
          { name: 'সিলভার গ্রে', hex: '#94a3b8' },
          { name: 'স্পেস ব্ল্যাক', hex: '#1e293b' }
        ],
        selectedColor: 'সিলভার গ্রে',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
        ],
        description: '৬-স্তরের হাইট এডজাস্টমেন্ট সহ প্রিমিয়াম প্রি-অ্যালয় অ্যালুমিনিয়াম বডি। ল্যাপটপের অতিরিক্ত গরম হওয়া রোধ করে।',
        specs: ['৬-লেভেল হাইট এডজাস্টমেন্ট', 'সিএনসি মেশিনিং প্রিমিয়াম অ্যালয়', 'অ্যান্টি-স্লিপ সিলিকন প্যাড', 'সহজে বহনযোগ্য ফোল্ডিং ডিজাইন']
      },
      {
        id: 12,
        name: 'স্মার্ট অ্যাম্পিফায়িং ড্রোন ক্যামেরা ৪K',
        nameEn: 'AeroGlide 4K GPS Foldable Drone',
        category: 'gadgets',
        categoryLabel: 'স্মার্ট গ্যাজেটস',
        price: 14900,
        originalPrice: 18500,
        rating: 4.9,
        reviewsCount: 108,
        badge: 'প্রিমিয়াম ড্রোন',
        badgeColor: 'rose',
        inStock: true,
        stockCount: 4,
        colors: [
          { name: 'ডার্ক ম্যাট গ্রে', hex: '#334155' }
        ],
        selectedColor: 'ডার্ক ম্যাট গ্রে',
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
        ],
        description: 'জিপিএস অটো-রিটার্ন, ৪K ওয়াইড অ্যাঙ্গেল ডুয়েল ক্যামেরা এবং ৩০ মিনিটের একটানা ফ্লাইট টাইম। যেকোনো ভিডিও ক্রিয়েটরের প্রিয় সঙ্গী।',
        specs: ['৪K ওয়াইড-অ্যাঙ্গেল ক্যামেরা', 'জিপিএস ওয়ান-কি অটো রিটার্ন', '৩০ মিনিট লং ফ্লাইট টাইম', 'অবস্ট্যাকল অ্যাভয়েডেন্স সেন্সর']
      }
    ],

    // Categories list for tabs
    categories: [
      { id: 'all', label: 'সকল প্রোডাক্ট', count: 12 },
      { id: 'gadgets', label: 'স্মার্ট গ্যাজেটস', count: 2 },
      { id: 'audio', label: 'অডিও ও সাউন্ড', count: 3 },
      { id: 'computing', label: 'কম্পিউটার ও ল্যাপটপ', count: 3 },
      { id: 'wearables', label: 'ঘড়ি ও ওয়্যারেবল', count: 2 },
      { id: 'accessories', label: 'অ্যাক্সেসরিজ', count: 2 }
    ],

    // Shopping Cart state
    cart: [
      {
        id: 1,
        title: 'অরা প্রো ম্যাক্স এএনসি হেডফোন',
        price: 8490,
        color: 'ম্যাট ব্ল্যাক',
        qty: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      }
    ],

    // Wishlist state (stored as IDs)
    wishlist: [2, 4],

    // Quick view modal selected product
    activeQuickView: null,
    quickViewImageIndex: 0,
    quickViewQty: 1,
    quickViewSelectedColor: '',

    // Coupon state
    couponInput: '',
    couponApplied: false,
    discountAmount: 0,
    freeShippingThreshold: 1000,
    shippingFee: 0, // Free if >= 1000

    // Checkout form
    checkout: {
      name: '',
      phone: '',
      district: 'ঢাকা',
      address: '',
      note: '',
      paymentMethod: 'cod'
    },

    // Toast notifications
    toasts: [],

    // Initialization
    init() {
      // Sync theme with html class
      this.applyTheme();

      // Start flash deal countdown
      this.startTimer();

      // Auto cycle hero products every 6 seconds
      setInterval(() => {
        if (!this.quickViewOpen && !this.cartOpen && !this.checkoutOpen) {
          this.heroIndex = (this.heroIndex + 1) % this.heroProducts.length;
        }
      }, 7000);
    },

    // Theme toggle
    toggleTheme() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('admin_dark_mode', this.darkMode);
      this.applyTheme();
      this.showToast(this.darkMode ? 'ডার্ক মোড সক্রিয়' : 'লাইট মোড সক্রিয়', 'আপনার পছন্দ সফলভাবে সংরক্ষিত হয়েছে।');
    },

    applyTheme() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    // Countdown Timer logic
    startTimer() {
      let totalSeconds = 8 * 3600 + 45 * 60 + 20;
      this.timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          const h = Math.floor(totalSeconds / 3600);
          const m = Math.floor((totalSeconds % 3600) / 60);
          const s = totalSeconds % 60;
          this.dealTimer.hours = h.toString().padStart(2, '0');
          this.dealTimer.minutes = m.toString().padStart(2, '0');
          this.dealTimer.seconds = s.toString().padStart(2, '0');
        }
      }, 1000);
    },

    // Filtered Products Getter
    get filteredProducts() {
      let result = [...this.products];

      // Filter by category
      if (this.activeCategory !== 'all') {
        result = result.filter(p => p.category === this.activeCategory);
      }

      // Filter by search query
      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase().trim();
        result = result.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.nameEn.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      }

      // Filter by price
      if (this.priceFilter === 'under-3000') {
        result = result.filter(p => p.price < 3000);
      } else if (this.priceFilter === '3000-7000') {
        result = result.filter(p => p.price >= 3000 && p.price <= 7000);
      } else if (this.priceFilter === 'above-7000') {
        result = result.filter(p => p.price > 7000);
      }

      // Sorting
      if (this.sortBy === 'price-low') {
        result.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === 'price-high') {
        result.sort((a, b) => b.price - a.price);
      } else if (this.sortBy === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
      } else {
        // Featured (default by id)
        result.sort((a, b) => a.id - b.id);
      }

      return result;
    },

    // Wishlist Methods
    isWishlisted(productId) {
      return this.wishlist.includes(productId);
    },

    toggleWishlist(product) {
      const idx = this.wishlist.indexOf(product.id);
      if (idx > -1) {
        this.wishlist.splice(idx, 1);
        this.showToast('উইশলিস্ট থেকে সরানো হয়েছে', `"${product.name}" আপনার পছন্দের তালিকা থেকে রিমুভ করা হয়েছে।`);
      } else {
        this.wishlist.push(product.id);
        this.showToast('পছন্দের তালিকায় যুক্ত হয়েছে ❤️', `"${product.name}" আপনার উইশলিস্টে সফলভাবে যোগ করা হয়েছে।`);
      }
    },

    get wishlistItems() {
      return this.products.filter(p => this.wishlist.includes(p.id));
    },

    // Cart Methods
    addToCart(product, qty = 1, color = null) {
      const selectedColor = color || (product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default');
      const existing = this.cart.find(item => item.id === product.id && item.color === selectedColor);

      if (existing) {
        existing.qty += qty;
      } else {
        this.cart.push({
          id: product.id,
          title: product.name,
          price: product.price,
          color: selectedColor,
          qty: qty,
          image: product.image
        });
      }

      this.showToast('কার্টে যুক্ত হয়েছে! 🛒', `"${product.name}" (${selectedColor}) কার্টে যুক্ত করা হয়েছে।`);
    },

    addHeroToCart() {
      const hp = this.heroProducts[this.heroIndex];
      const matchProduct = this.products.find(p => p.id === hp.id) || this.products[0];
      this.addToCart(matchProduct, 1);
      this.cartOpen = true;
    },

    updateCartQty(index, delta) {
      if (this.cart[index]) {
        this.cart[index].qty += delta;
        if (this.cart[index].qty <= 0) {
          this.cart.splice(index, 1);
          this.showToast('আইটেম সরানো হয়েছে', 'পণ্যটি কার্ট থেকে বাদ দেওয়া হয়েছে।');
        }
      }
    },

    removeCartItem(index) {
      const removed = this.cart.splice(index, 1);
      if (removed.length) {
        this.showToast('পণ্য সরানো হয়েছে', `কার্ট থেকে সরানো হয়েছে।`);
      }
    },

    clearCart() {
      this.cart = [];
      this.showToast('কার্ট খালি করা হয়েছে', 'আপনার শপিং কার্ট এখন খালি।');
    },

    // Cart Calculations
    get cartCount() {
      return this.cart.reduce((total, item) => total + item.qty, 0);
    },

    get cartSubtotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.qty), 0);
    },

    get shippingCost() {
      if (this.cartSubtotal === 0) return 0;
      return this.cartSubtotal >= this.freeShippingThreshold ? 0 : 80;
    },

    get freeShippingProgress() {
      if (this.cartSubtotal >= this.freeShippingThreshold) return 100;
      return Math.round((this.cartSubtotal / this.freeShippingThreshold) * 100);
    },

    get freeShippingRemaining() {
      const diff = this.freeShippingThreshold - this.cartSubtotal;
      return diff > 0 ? diff : 0;
    },

    get cartGrandTotal() {
      const sub = this.cartSubtotal;
      const total = sub - this.discountAmount + this.shippingCost;
      return total > 0 ? total : 0;
    },

    // Coupon logic
    applyCoupon() {
      const code = this.couponInput.trim().toUpperCase();
      if (code === 'PRO10') {
        this.couponApplied = true;
        this.discountAmount = Math.round(this.cartSubtotal * 0.10);
        this.showToast('কুপন সক্রিয় হয়েছে! 🎉', 'আপনি ১০% বিশেষ ক্যাশব্যাক ডিসকাউন্ট পেয়েছেন!');
      } else if (code === 'SAVE500') {
        this.couponApplied = true;
        this.discountAmount = 500;
        this.showToast('কুপন সক্রিয় হয়েছে! 🎉', '৳৫০০ ফ্ল্যাট ডিসকাউন্ট সফলভাবে যুক্ত হয়েছে!');
      } else {
        this.showToast('ভুল কুপন কোড', 'সঠিক কুপন কোড (যেমন: PRO10) ব্যবহার করুন।', 'error');
      }
    },

    // Quick View Modal
    openQuickView(product) {
      this.activeQuickView = product;
      this.quickViewImageIndex = 0;
      this.quickViewQty = 1;
      this.quickViewSelectedColor = product.colors && product.colors.length > 0 ? product.colors[0].name : '';
      this.quickViewOpen = true;
    },

    addQuickViewToCart() {
      if (this.activeQuickView) {
        this.addToCart(this.activeQuickView, this.quickViewQty, this.quickViewSelectedColor);
        this.quickViewOpen = false;
        this.cartOpen = true;
      }
    },

    // Checkout and Order Placement
    proceedToCheckout() {
      if (this.cart.length === 0) {
        this.showToast('কার্ট খালি', 'অনুগ্রহ করে কার্টে কিছু প্রোডাক্ট যোগ করুন।', 'error');
        return;
      }
      this.cartOpen = false;
      this.checkoutOpen = true;
    },

    confirmOrder() {
      if (!this.checkout.name || !this.checkout.phone || !this.checkout.address) {
        this.showToast('তথ্য অপূর্ণ', 'অনুগ্রহ করে নাম, মোবাইল নম্বর এবং ঠিকানা পূরণ করুন।', 'error');
        return;
      }

      // Generate random simulated order ID
      const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      this.lastOrder = {
        id: orderId,
        name: this.checkout.name,
        phone: this.checkout.phone,
        address: this.checkout.address,
        total: this.cartGrandTotal,
        paymentMethod: this.checkout.paymentMethod === 'cod' ? 'ক্যাশ অন ডেলিভারি' : 'বিকাশ / নগদ',
        itemsCount: this.cartCount,
        date: new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })
      };

      // Reset cart and checkout
      this.cart = [];
      this.discountAmount = 0;
      this.couponApplied = false;
      this.couponInput = '';
      this.checkoutOpen = false;
      this.orderSuccessOpen = true;

      this.showToast('অর্ডার সফল হয়েছে! 🎊', `অর্ডার নং ${orderId} কনফার্ম করা হয়েছে। আমরা দ্রুত যোগাযোগ করব।`);
    },

    // Toast Notification System
    showToast(title, message, type = 'success') {
      const id = Date.now() + Math.random();
      this.toasts.push({ id, title, message, type });
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id);
      }, 3600);
    },

    removeToast(id) {
      this.toasts = this.toasts.filter(t => t.id !== id);
    },

    // Format BDT currency
    formatMoney(amount) {
      return '৳' + Number(amount).toLocaleString('bn-BD');
    }
  };
}

// Global exposure for Alpine
window.shopApp = shopApp;
