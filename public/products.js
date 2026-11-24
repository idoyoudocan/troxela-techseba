// products.js - Comprehensive logic & reactive dataset for All Products Catalog
// Powered by Alpine.js and synchronized with shop localStorage state

function allProductsApp() {
  return {
    // Dark mode state synced with other pages
    darkMode: localStorage.getItem('admin_dark_mode') === 'true',

    // UI state
    mobileMenuOpen: false,
    mobileFilterOpen: false,
    cartOpen: false,
    wishlistOpen: false,
    quickViewOpen: false,
    checkoutOpen: false,
    orderSuccessOpen: false,
    lastOrder: null,

    // Layout view mode: 'grid' (3-4 cols), 'large' (2 cols), 'list' (horizontal row)
    viewMode: 'grid',

    // Search and Filters
    searchQuery: '',
    selectedCategory: 'all',
    selectedBrands: [],
    selectedPriceRange: 'all',
    priceMinInput: '',
    priceMaxInput: '',
    minRating: 0,
    inStockOnly: false,
    onSaleOnly: false,
    sortBy: 'featured',

    // Pagination
    currentPage: 1,
    itemsPerPage: 9,

    // Quick View item
    activeQuickView: null,
    quickViewQty: 1,
    quickViewSelectedImg: 0,
    quickViewSelectedColor: '',

    // Checkout form state
    checkoutForm: {
      fullName: '',
      phone: '',
      email: '',
      city: 'ঢাকা (মেট্রোপলিটন)',
      address: '',
      paymentMethod: 'cod',
      notes: ''
    },

    // Cart & Wishlist persistence
    cart: [],
    wishlist: [],

    // Toast notifications
    toast: {
      show: false,
      title: '',
      message: '',
      type: 'success',
      timer: null
    },

    // Available categories with metadata
    categories: [
      { id: 'all', label: 'সকল ক্যাটাগরি', icon: 'grid' },
      { id: 'audio', label: 'অডিও ও সাউন্ড', icon: 'headphones' },
      { id: 'wearables', label: 'ঘড়ি ও ওয়্যারেবল', icon: 'watch' },
      { id: 'computing', label: 'কম্পিউটার ও গেমিং', icon: 'cpu' },
      { id: 'cameras', label: 'ক্যামেরা ও ভিডিও', icon: 'camera' },
      { id: 'accessories', label: 'মোবাইল অ্যাক্সেসরিজ', icon: 'plug' }
    ],

    // Available brands
    brands: [
      { id: 'aura', name: 'Aura Sound', count: 4 },
      { id: 'titan', name: 'Titan Tech', count: 4 },
      { id: 'nextgen', name: 'NextGen Pro', count: 3 },
      { id: 'sonic', name: 'Sonic Audio', count: 2 },
      { id: 'powercore', name: 'PowerCore', count: 2 },
      { id: 'lumix', name: 'Lumix Vision', count: 2 },
      { id: 'swift', name: 'Swift Peripherals', count: 1 }
    ],

    // Complete Realistic Catalog (18 Products)
    products: [
      {
        id: 1,
        name: 'অরা প্রো ম্যাক্স এএনসি হেডফোন',
        nameEn: 'Aura Pro Max Studio ANC',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        brand: 'aura',
        brandName: 'Aura Sound',
        price: 8490,
        originalPrice: 10990,
        rating: 4.9,
        reviewsCount: 382,
        badge: 'ফ্ল্যাগশিপ',
        badgeColor: 'indigo',
        inStock: true,
        stockCount: 18,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'স্পেস গ্রে', hex: '#374151' },
          { name: 'ম্যাট ব্ল্যাক', hex: '#111827' },
          { name: 'সিলভার হোয়াইট', hex: '#e2e8f0' }
        ],
        description: 'সর্বাধুনিক হাইব্রিড অ্যাক্টিভ নয়েজ ক্যান্সেলেশন (ANC) টেকনোলজি সহ স্টুডিও গ্রেড সাউন্ড কোয়ালিটি। ৪০ ঘণ্টার শক্তিশালী ব্যাটারি লাইফ।',
        specs: ['৪০ মিমি নিওডিমিয়াম ড্রাইভার', '৪০ ঘণ্টা প্লেব্যাক', 'হাইব্রিড ANC', 'ব্লুটুথ ৫.৪'],
        isFeatured: true,
        hasDetailPdp: true
      },
      {
        id: 2,
        name: 'টাইটান আল্ট্রা ২ স্মার্টওয়াচ',
        nameEn: 'Titan Ultra 2 Titanium AMOLED',
        category: 'wearables',
        categoryLabel: 'ঘড়ি ও ওয়্যারেবল',
        brand: 'titan',
        brandName: 'Titan Tech',
        price: 5290,
        originalPrice: 6990,
        rating: 4.8,
        reviewsCount: 512,
        badge: 'হট ট্রেন্ডিং',
        badgeColor: 'rose',
        inStock: true,
        stockCount: 24,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'টাইটানিয়াম গ্রে', hex: '#475569' },
          { name: 'মিডনাইট ব্ল্যাক', hex: '#0f172a' },
          { name: 'অরেঞ্জ স্ট্র্যাপ', hex: '#ea580c' }
        ],
        description: '২.০৪ ইঞ্চি সুপার অ্যামোলেড ডিসপ্লে, ব্লুটুথ এইচডি কলিং, হার্ট রেট এবং স্লিপ ট্র্যাকিং সেন্সর। ৭ দিনের ব্যাটারি ব্যাকআপ।',
        specs: ['২.০৪ ইঞ্চি AMOLED অলওয়েজ-অন', 'এইচডি ব্লুটুথ কলিং', 'IP68 ওয়াটারপ্রুফ', '৭ দিনের ব্যাটারি'],
        isFeatured: true
      },
      {
        id: 3,
        name: 'নেক্সটজেন মেকানিক্যাল আরজিবি কিবোর্ড',
        nameEn: 'NextGen RGB Mechanical Pro',
        category: 'computing',
        categoryLabel: 'কম্পিউটার ও গেমিং',
        brand: 'nextgen',
        brandName: 'NextGen Pro',
        price: 4450,
        originalPrice: 5800,
        rating: 4.9,
        reviewsCount: 219,
        badge: 'টপ রেটেড',
        badgeColor: 'emerald',
        inStock: true,
        stockCount: 12,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'রেট্রো হোয়াইট', hex: '#f8fafc' },
          { name: 'ডাবল শট ব্ল্যাক', hex: '#1e293b' }
        ],
        description: 'হট-সোয়াপ্পেবল রেড সুইচেস, ১৮টি আরজিবি ব্যাকলাইট মোড এবং পিবিটি ডাবল-শট টেকসই কি-ক্যাপস।',
        specs: ['হট-সোয়াপ্পেবল সুইচ', '১৮টি RGB মোড', 'PBT ডাবল শট কি-ক্যাপস', 'টাইপ-সি কেবল'],
        isFeatured: true
      },
      {
        id: 4,
        name: 'সনিক বুম ৪০W বাস স্পিকার',
        nameEn: 'Sonic Boom 40W Rugged Bass',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        brand: 'sonic',
        brandName: 'Sonic Audio',
        price: 4190,
        originalPrice: 5490,
        rating: 4.9,
        reviewsCount: 298,
        badge: 'সীমিত স্টক',
        badgeColor: 'amber',
        inStock: true,
        stockCount: 8,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'ম্যাট ব্ল্যাক', hex: '#09090b' },
          { name: 'ক্যামো গ্রিন', hex: '#3f6212' }
        ],
        description: '৪০ ওয়াট এক্সট্রা ডিপ বাস, ৩৬০ ডিগ্রি সারাউন্ড সাউন্ড এবং IPX7 ওয়াটারপ্রুফ প্রযুক্তি। আউটডোর পার্টির জন্য উপযুক্ত।',
        specs: ['৪০W ট্রু বাস সাউন্ড', 'IPX7 ওয়াটারপ্রুফ', '২৪ ঘণ্টা প্লেব্যাক', 'TWS পেয়ারিং'],
        isFeatured: true
      },
      {
        id: 5,
        name: 'সুইফট ওয়্যারলেস এরগনোমিক মাউস',
        nameEn: 'Swift Ergonomic Silent Click',
        category: 'computing',
        categoryLabel: 'কম্পিউটার ও গেমিং',
        brand: 'swift',
        brandName: 'Swift Peripherals',
        price: 2150,
        originalPrice: 2800,
        rating: 4.7,
        reviewsCount: 164,
        badge: 'নিউ অ্যারাইভাল',
        badgeColor: 'sky',
        inStock: true,
        stockCount: 30,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'ম্যাট ব্ল্যাক', hex: '#18181b' },
          { name: 'আর্কটিক গ্রে', hex: '#94a3b8' }
        ],
        description: 'হাতের কব্জির ক্লান্তিহীন আরাম নিশ্চিতকারী এরগনোমিক শেপ, সাইলেন্ট ক্লিক সুইচ এবং ডুয়েল মোড কানেক্টিভিটি।',
        specs: ['৪০০০ DPI সেন্সর', '৯০% সাইলেন্ট ক্লিক', 'ব্লুটুথ + ২.৪GHz ডঙ্গল', 'রিচার্জেবল ব্যাটারি'],
        isFeatured: false
      },
      {
        id: 6,
        name: 'পাওয়ারকোর ৬৫W GaN ফাস্ট চার্জার',
        nameEn: 'PowerCore 65W GaN Fast Charger',
        category: 'accessories',
        categoryLabel: 'মোবাইল অ্যাক্সেসরিজ',
        brand: 'powercore',
        brandName: 'PowerCore',
        price: 1890,
        originalPrice: 2450,
        rating: 4.8,
        reviewsCount: 420,
        badge: 'বেস্ট ভ্যালু',
        badgeColor: 'indigo',
        inStock: true,
        stockCount: 45,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'পিওর হোয়াইট', hex: '#ffffff' },
          { name: 'কার্বন ব্ল্যাক', hex: '#18181b' }
        ],
        description: 'গ্যালিয়াম নাইট্রাইড (GaN) প্রযুক্তির সুপার ফাস্ট চার্জার। ল্যাপটপ, ট্যাবলেট ও স্মার্টফোন একসাথেই ফুল স্পিডে চার্জ করুন।',
        specs: ['৬৫W GaN ৩.০ পাওয়ার', '২টি Type-C + ১টি Type-A', 'ওভারহিটিং প্রোটেকশন', 'কমপ্যাক্ট ট্রাভেল সাইজ'],
        isFeatured: false
      },
      {
        id: 7,
        name: 'লুমিক্স ৪K অ্যাকশন ক্যামেরা প্রো',
        nameEn: 'Lumix 4K Action Cam Ultra',
        category: 'cameras',
        categoryLabel: 'ক্যামেরা ও ভিডিও',
        brand: 'lumix',
        brandName: 'Lumix Vision',
        price: 9800,
        originalPrice: 12500,
        rating: 4.9,
        reviewsCount: 175,
        badge: 'প্রো চয়েস',
        badgeColor: 'rose',
        inStock: true,
        stockCount: 14,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'ডিপ ব্ল্যাক', hex: '#0a0a0a' }
        ],
        description: '৪K/৬০fps আল্ট্রা-এইচডি রেকর্ডিং, সিক্স-অ্যাক্সিস জাইরো স্ট্যাবিলাইজেশন এবং ৩০ মিটার ওয়াটারপ্রুফ কেসিং।',
        specs: ['৪K ৬০fps আল্ট্রা HD', 'জাইরো সুপার স্ট্যাবিলাইজার', 'ডুয়েল কালার ডিসপ্লে', '৩০মি ওয়াটারপ্রুফ কেস'],
        isFeatured: true
      },
      {
        id: 8,
        name: 'অরা পডস ট্রু ওয়্যারলেস এএনসি ইয়ারবাডস',
        nameEn: 'Aura Pods Pro Active ANC',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        brand: 'aura',
        brandName: 'Aura Sound',
        price: 3250,
        originalPrice: 4200,
        rating: 4.8,
        reviewsCount: 310,
        badge: 'বেস্ট সেলার',
        badgeColor: 'emerald',
        inStock: true,
        stockCount: 28,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'গ্লসি হোয়াইট', hex: '#fafafa' },
          { name: 'ম্যাট ব্ল্যাক', hex: '#171717' }
        ],
        description: '৩৫ ডেসিবেল অ্যাক্টিভ নয়েজ ক্যান্সেলেশন, ট্র্যান্সপারেন্সি মোড, কোয়াড-মাইক এআই কল ক্লিয়ারিং এবং ওয়্যারলেস চার্জিং কেস।',
        specs: ['৩৫dB হাইব্রিড ANC', '৩২ ঘণ্টা মোট ব্যাটারি ব্যাকআপ', 'লো লেটেন্সি গেমিং মোড', 'IPX5 সোয়েটপ্রুফ'],
        isFeatured: true
      },
      {
        id: 9,
        name: 'টাইটান ফিটনেস ব্যান্ড ৮',
        nameEn: 'Titan Band 8 Sports Tracker',
        category: 'wearables',
        categoryLabel: 'ঘড়ি ও ওয়্যারেবল',
        brand: 'titan',
        brandName: 'Titan Tech',
        price: 2490,
        originalPrice: 3200,
        rating: 4.6,
        reviewsCount: 194,
        badge: 'জনপ্রিয়',
        badgeColor: 'sky',
        inStock: true,
        stockCount: 35,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'গ্রাফাইট ব্ল্যাক', hex: '#1c1917' },
          { name: 'রোজ পিঙ্ক', hex: '#fb7185' }
        ],
        description: '১.৬২ ইঞ্চি উজ্জ্বল কার্ভড অ্যামোলেড স্ক্রিন, সার্বক্ষণিক হার্ট রেট ও SpO2 মনিটর এবং ১২০+ স্পোর্টস অ্যাক্টিভিটি ট্র্যাকার।',
        specs: ['১.৬২" কার্ভড AMOLED', 'SpO2 ও স্লিপ মনিটরিং', '১৪ দিনের আল্ট্রা ব্যাটারি', '5ATM ওয়াটার রেজিস্ট্যান্ট'],
        isFeatured: false
      },
      {
        id: 10,
        name: 'অরা স্টুডিও কনডেনসার ইউএসবি মাইক্রোফোন',
        nameEn: 'Aura Broadcast Studio USB Mic',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        brand: 'aura',
        brandName: 'Aura Sound',
        price: 3850,
        originalPrice: 4990,
        rating: 4.8,
        reviewsCount: 142,
        badge: 'স্ট্রিমার্স চয়েস',
        badgeColor: 'indigo',
        inStock: true,
        stockCount: 16,
        image: 'https://images.unsplash.com/photo-1590658006821-04f4008d5717?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1590658006821-04f4008d5717?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'ম্যাট ব্ল্যাক', hex: '#121212' }
        ],
        description: 'পডকাস্টিং, ইউটিউব স্ট্রিমিং ও ভয়েসওভারের জন্য কার্ডিওয়েড পোলার প্যাটার্ন সমৃদ্ধ প্রফেশনাল স্টুডিও মাইক্রোফোন।',
        specs: ['২৪-বিট/১৯২kHz অডিও রেজুলেশন', 'বিল্ট-ইন শক মাউন্ট ও পপ ফিল্টার', 'ট্যাপ-টু-মিউট বোতাম', 'হেডফোন জ্যাক জিরো লেটেন্সি মনিটরিং'],
        isFeatured: false
      },
      {
        id: 11,
        name: 'পাওয়ারকোর ২০,০০০mAh ম্যাগসেফ পাওয়ারব্যাংক',
        nameEn: 'PowerCore 20K MagSafe Fast Charge',
        category: 'accessories',
        categoryLabel: 'মোবাইল অ্যাক্সেসরিজ',
        brand: 'powercore',
        brandName: 'PowerCore',
        price: 2990,
        originalPrice: 3800,
        rating: 4.7,
        reviewsCount: 260,
        badge: 'স্পেশাল অফার',
        badgeColor: 'amber',
        inStock: true,
        stockCount: 22,
        image: 'https://images.unsplash.com/photo-1609592807664-4d8ee9d49480?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1609592807664-4d8ee9d49480?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'টাইটানিয়াম গ্রে', hex: '#64748b' },
          { name: 'ডিপ ব্ল্যাক', hex: '#0f172a' }
        ],
        description: '১৫W ম্যাগনেটিক ওয়্যারলেস চার্জিং এবং ২২.৫W ওয়্যার্ড ফাস্ট চার্জিং। ডিজিটাল এলইডি পার্সেন্টেজ ডিসপ্লে সহ।',
        specs: ['২০,০০০mAh পাওয়ার ক্যাপাসিটি', '১৫W ম্যাগসেফ ওয়্যারলেস', '২২.৫W PD ৩.০ কেবল চার্জ', 'স্মার্ট ডিজিটাল ডিসপ্লে'],
        isFeatured: false
      },
      {
        id: 12,
        name: 'স্টেডিগো ৩-অ্যাক্সিস পকেট জিম্বল',
        nameEn: 'SteadyGo 3-Axis AI Gimbal',
        category: 'cameras',
        categoryLabel: 'ক্যামেরা ও ভিডিও',
        brand: 'steadygo',
        brandName: 'SteadyGo',
        price: 7650,
        originalPrice: 9500,
        rating: 4.8,
        reviewsCount: 88,
        badge: 'ক্রিয়েটর প্যাক',
        badgeColor: 'rose',
        inStock: true,
        stockCount: 11,
        image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'স্পেস গ্রে', hex: '#334155' }
        ],
        description: 'স্মার্টফোন ও অ্যাকশন ক্যামেরার জন্য এআই ফেস ট্র্যাকিং, ম্যাগনেটিক ট্রাইপড এবং মসৃণ সিনেমাটিক ৩-অ্যাক্সিস রোটেশন।',
        specs: ['এআই স্মার্ট ফেস ট্র্যাকিং', '৩-অ্যাক্সিস আল্ট্রা স্ট্যাবিলাইজেশন', '১০ ঘণ্টা রানিং টাইম', 'ফোল্ডেবল ও পকেট সাইজ'],
        isFeatured: true
      },
      {
        id: 13,
        name: 'নেক্সটজেন ৭-ইন-১ ইউএসবি-সি ডকিং হাব',
        nameEn: 'NextGen 7-in-1 Aluminium Hub',
        category: 'accessories',
        categoryLabel: 'মোবাইল অ্যাক্সেসরিজ',
        brand: 'nextgen',
        brandName: 'NextGen Pro',
        price: 2250,
        originalPrice: 2900,
        rating: 4.7,
        reviewsCount: 145,
        badge: 'টপ রেটেড',
        badgeColor: 'emerald',
        inStock: true,
        stockCount: 26,
        image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'অ্যালুমিনিয়াম সিলভার', hex: '#cbd5e1' },
          { name: 'স্পেস গ্রে', hex: '#475569' }
        ],
        description: 'ম্যাকবুক ও টাইপ-সি ল্যাপটপের জন্য ১০০W পাওয়ার ডেলিভারি, ৪K HDMI, এসডি কার্ড রিডার ও ৩টি হাই-স্পিড USB পোর্ট।',
        specs: ['১০০W PD ফাস্ট পাসথ্রু', '৪K@৬০Hz HDMI পোর্ট', 'SD/TF ডুয়েল কার্ড রিডার', 'প্রিমিয়াম অ্যালুমিনিয়াম বডি'],
        isFeatured: false
      },
      {
        id: 14,
        name: 'ভাইপার প্রো ৭.১ সারাউন্ড গেমিং হেডসেট',
        nameEn: 'Viper Pro 7.1 Surround Gaming Headset',
        category: 'computing',
        categoryLabel: 'কম্পিউটার ও গেমিং',
        brand: 'nextgen',
        brandName: 'NextGen Pro',
        price: 3650,
        originalPrice: 4600,
        rating: 4.8,
        reviewsCount: 198,
        badge: 'গেমিং গিয়ার',
        badgeColor: 'rose',
        inStock: true,
        stockCount: 15,
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'ম্যাট ব্ল্যাক RGB', hex: '#0f172a' }
        ],
        description: 'ভার্চুয়াল ৭.১ সারাউন্ড অডিও, ৫০ মিমি ডাইনামিক ড্রাইভার্স, ব্রিদেবল মেমরি ফোম ইয়ারপ্যাড ও ক্লিয়ার ভয়েস বুম মাইক্রোফোন।',
        specs: ['ভার্চুয়াল ৭.১ সারাউন্ড সাউন্ড', '৫০ মিমি অডিও ড্রাইভার', 'RGB ফ্লো লাইটিং', 'নয়েজ ক্যানসেলিং বুম মাইক'],
        isFeatured: false
      },
      {
        id: 15,
        name: 'লুমিক্স স্টুডিও ১৮" আরজিবি রিং লাইট ও ট্রাইপড',
        nameEn: 'Lumix Studio 18" Bi-Color Ring Light',
        category: 'cameras',
        categoryLabel: 'ক্যামেরা ও ভিডিও',
        brand: 'lumix',
        brandName: 'Lumix Vision',
        price: 2750,
        originalPrice: 3500,
        rating: 4.7,
        reviewsCount: 112,
        badge: 'ভিডিও লাইট',
        badgeColor: 'sky',
        inStock: true,
        stockCount: 19,
        image: 'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'স্টুডিও ব্ল্যাক', hex: '#18181b' }
        ],
        description: 'কনটেন্ট ক্রিয়েটর ও মেকআপ ভিডিওগ্রাফির জন্য ১৮ ইঞ্চি বাই-কালার আরজিবি এলইডি রিং লাইট, ৭ ফুট মেটাল ট্রাইপড ও রিমোট।',
        specs: ['১৮ ইঞ্চি ডায়ামিটার LED রিং', '৩২০০K-৫৬০০K কালার টেম্পারেচার', '৭ ফুট অ্যাডজাস্টেবল ট্রাইপড', 'ওয়্যারলেস ব্লুটুথ রিমোট কন্ট্রোল'],
        isFeatured: false
      },
      {
        id: 16,
        name: 'টাইটান সিরামিক ক্লাসিক লাক্সারি স্মার্টওয়াচ',
        nameEn: 'Titan Ceramic Horizon Smart Edition',
        category: 'wearables',
        categoryLabel: 'ঘড়ি ও ওয়্যারেবল',
        brand: 'titan',
        brandName: 'Titan Tech',
        price: 11200,
        originalPrice: 13900,
        rating: 4.9,
        reviewsCount: 96,
        badge: 'লাক্সারি কালেকশন',
        badgeColor: 'indigo',
        inStock: true,
        stockCount: 7,
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'সিরামিক ব্ল্যাক', hex: '#09090b' },
          { name: 'মার্বেল হোয়াইট', hex: '#f8fafc' }
        ],
        description: 'স্যাফায়ার ক্রিস্টাল গ্লাস ও সিরামিক বডি সম্বলিত অভিজাত স্মার্টওয়াচ। ব্লুটুথ এইচডি কলিং ও প্রিসিশন হেলথ স্যুট।',
        specs: ['স্যাফায়ার গ্লাস ও সিরামিক বডি', 'ইসিজি ও হেলথ সেন্সর স্যুট', 'অলওয়েজ অন রিটিনা ডিসপ্লে', 'ওয়্যারলেস কুইক ডক চার্জিং'],
        isFeatured: true
      },
      {
        id: 17,
        name: 'সোলো সাউন্ডবার ৬০W উইথ সাবউফার',
        nameEn: 'Solo Soundbar 60W Cinematic TV Bass',
        category: 'audio',
        categoryLabel: 'অডিও ও সাউন্ড',
        brand: 'sonic',
        brandName: 'Sonic Audio',
        price: 6450,
        originalPrice: 8200,
        rating: 4.8,
        reviewsCount: 168,
        badge: 'হোম থিয়েটার',
        badgeColor: 'emerald',
        inStock: true,
        stockCount: 10,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'ম্যাট ব্ল্যাক', hex: '#171717' }
        ],
        description: 'টিভি ও হোম এন্টারটেইনমেন্টের জন্য ৬০ ওয়াট সিনেমাটিক সাউন্ডবার। অপটিক্যাল কেবল, অক্স এবং ব্লুটুথ ৫.৩ সাপোর্ট।',
        specs: ['৬০ ওয়াট ট্রু স্টেরিও আউটপুট', 'ডিপ বেস বিল্ট-ইন সাবউফার', 'HDMI ARC ও অপটিক্যাল পোর্ট', 'ইকুয়ালাইজার মোডস (মুভি/মিউজিক/নিউজ)'],
        isFeatured: false
      },
      {
        id: 18,
        name: 'অরা ক্যানভাস স্মার্ট ডিজিটাল আর্ট ডিসপ্লে',
        nameEn: 'Aura Canvas 10.1 Smart Desk Display',
        category: 'computing',
        categoryLabel: 'কম্পিউটার ও গেমিং',
        brand: 'aura',
        brandName: 'Aura Sound',
        price: 8900,
        originalPrice: 11500,
        rating: 4.9,
        reviewsCount: 84,
        badge: 'এক্সক্লুসিভ',
        badgeColor: 'amber',
        inStock: true,
        stockCount: 6,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'ওয়ালনাট উড ফ্রেম', hex: '#78350f' },
          { name: 'মডার্ন ব্ল্যাক', hex: '#18181b' }
        ],
        description: 'ম্যাট অ্যান্টি-গ্লেয়ার ১০.১ ইঞ্চি ডিসপ্লে যাতে ঘড়ি, ক্যালেন্ডার, ওয়েদার এবং প্রিয় আর্টওয়ার্ক স্লাইডশো চলে।',
        specs: ['১০.১" অ্যান্টি-গ্লেয়ার IPS প্যানেল', 'ওয়াইফাই স্মার্ট ক্লাউড সিঙ্ক', 'এমবিয়েন্ট লাইট অটো ব্রাইটনেস', 'প্রাকৃতিক উডেন ফিনিশ ফ্রেম'],
        isFeatured: false
      }
    ],

    // Lifecycle Init
    init() {
      // Sync theme preference
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Load cart and wishlist from localStorage
      try {
        const savedCart = localStorage.getItem('shop_cart');
        if (savedCart) this.cart = JSON.parse(savedCart);

        const savedWishlist = localStorage.getItem('shop_wishlist');
        if (savedWishlist) this.wishlist = JSON.parse(savedWishlist);
      } catch (e) {
        console.warn('Storage parse error:', e);
      }

      // Check URL query parameters for initial filters (e.g. ?category=audio or ?q=headphone)
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get('category');
      if (catParam) {
        this.selectedCategory = catParam;
      }
      const qParam = urlParams.get('q');
      if (qParam) {
        this.searchQuery = qParam;
      }
      const sortParam = urlParams.get('sort');
      if (sortParam) {
        this.sortBy = sortParam;
      }
    },

    // Toggle Dark Mode
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('admin_dark_mode', this.darkMode);
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    // Filter Logic: computes all active products
    get filteredProducts() {
      return this.products.filter(p => {
        // Search Query Filter
        if (this.searchQuery.trim()) {
          const q = this.searchQuery.toLowerCase().trim();
          const matchesName = p.name.toLowerCase().includes(q);
          const matchesEn = p.nameEn.toLowerCase().includes(q);
          const matchesDesc = p.description.toLowerCase().includes(q);
          const matchesCat = p.categoryLabel.toLowerCase().includes(q);
          const matchesBrand = p.brandName.toLowerCase().includes(q);
          if (!matchesName && !matchesEn && !matchesDesc && !matchesCat && !matchesBrand) {
            return false;
          }
        }

        // Category Filter
        if (this.selectedCategory !== 'all' && p.category !== this.selectedCategory) {
          return false;
        }

        // Brand Filter
        if (this.selectedBrands.length > 0 && !this.selectedBrands.includes(p.brand)) {
          return false;
        }

        // Price Presets Filter
        if (this.selectedPriceRange === 'under-3000' && p.price >= 3000) return false;
        if (this.selectedPriceRange === '3000-7000' && (p.price < 3000 || p.price > 7000)) return false;
        if (this.selectedPriceRange === '7000-12000' && (p.price < 7000 || p.price > 12000)) return false;
        if (this.selectedPriceRange === 'above-12000' && p.price <= 12000) return false;

        // Custom Min/Max price inputs
        if (this.priceMinInput && p.price < Number(this.priceMinInput)) return false;
        if (this.priceMaxInput && p.price > Number(this.priceMaxInput)) return false;

        // Minimum Rating Filter
        if (this.minRating > 0 && p.rating < this.minRating) return false;

        // In Stock Only Filter
        if (this.inStockOnly && !p.inStock) return false;

        // On Sale Only Filter
        if (this.onSaleOnly && p.originalPrice <= p.price) return false;

        return true;
      }).sort((a, b) => {
        if (this.sortBy === 'price-low') return a.price - b.price;
        if (this.sortBy === 'price-high') return b.price - a.price;
        if (this.sortBy === 'rating') return b.rating - a.rating;
        if (this.sortBy === 'discount') {
          const discA = ((a.originalPrice - a.price) / a.originalPrice);
          const discB = ((b.originalPrice - b.price) / b.originalPrice);
          return discB - discA;
        }
        if (this.sortBy === 'newest') return b.id - a.id;
        // Default 'featured': featured first, then review count
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return b.reviewsCount - a.reviewsCount;
      });
    },

    // Paginated subset of filtered products
    get paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredProducts.slice(start, start + this.itemsPerPage);
    },

    // Total Pages calculation
    get totalPages() {
      return Math.max(1, Math.ceil(this.filteredProducts.length / this.itemsPerPage));
    },

    // Count active filters
    get activeFiltersCount() {
      let count = 0;
      if (this.selectedCategory !== 'all') count++;
      if (this.selectedBrands.length > 0) count += this.selectedBrands.length;
      if (this.selectedPriceRange !== 'all') count++;
      if (this.priceMinInput || this.priceMaxInput) count++;
      if (this.minRating > 0) count++;
      if (this.inStockOnly) count++;
      if (this.onSaleOnly) count++;
      if (this.searchQuery.trim()) count++;
      return count;
    },

    // Clear all filters
    clearAllFilters() {
      this.searchQuery = '';
      this.selectedCategory = 'all';
      this.selectedBrands = [];
      this.selectedPriceRange = 'all';
      this.priceMinInput = '';
      this.priceMaxInput = '';
      this.minRating = 0;
      this.inStockOnly = false;
      this.onSaleOnly = false;
      this.sortBy = 'featured';
      this.currentPage = 1;
      this.showToast('ফিল্টার রিসেট করা হয়েছে', 'সকল প্রোডাক্টের তালিকা পুনঃপ্রদর্শিত হচ্ছে।', 'info');
    },

    // Toggle Brand Selection
    toggleBrand(brandId) {
      if (this.selectedBrands.includes(brandId)) {
        this.selectedBrands = this.selectedBrands.filter(b => b !== brandId);
      } else {
        this.selectedBrands.push(brandId);
      }
      this.currentPage = 1;
    },

    // Set Category
    setCategory(catId) {
      this.selectedCategory = catId;
      this.currentPage = 1;
    },

    // Change Page
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        window.scrollTo({ top: 350, behavior: 'smooth' });
      }
    },

    // Format Currency in BDT
    formatMoney(num) {
      if (!num && num !== 0) return '৳০';
      return '৳' + Number(num).toLocaleString('bn-BD');
    },

    // Calculate discount percentage
    getDiscountPercent(orig, current) {
      if (!orig || orig <= current) return 0;
      return Math.round(((orig - current) / orig) * 100);
    },

    // Open Quick View Modal
    openQuickView(product) {
      this.activeQuickView = product;
      this.quickViewQty = 1;
      this.quickViewSelectedImg = 0;
      this.quickViewSelectedColor = product.colors && product.colors.length > 0 ? product.colors[0].name : '';
      this.quickViewOpen = true;
    },

    // Add to Cart with optional quantity
    addToCart(product, qty = 1) {
      const existing = this.cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += qty;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          nameEn: product.nameEn,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          categoryLabel: product.categoryLabel,
          quantity: qty,
          selectedColor: product.colors && product.colors.length > 0 ? product.colors[0].name : ''
        });
      }
      this.saveCart();
      this.showToast('কার্টে যোগ করা হয়েছে! 🛒', `"${product.name}" আপনার ব্যাগে যুক্ত হয়েছে।`);
    },

    // Add active QuickView to Cart
    addQuickViewToCart() {
      if (!this.activeQuickView) return;
      const p = this.activeQuickView;
      const existing = this.cart.find(item => item.id === p.id);
      if (existing) {
        existing.quantity += this.quickViewQty;
      } else {
        this.cart.push({
          id: p.id,
          name: p.name,
          nameEn: p.nameEn,
          price: p.price,
          originalPrice: p.originalPrice,
          image: p.image,
          categoryLabel: p.categoryLabel,
          quantity: this.quickViewQty,
          selectedColor: this.quickViewSelectedColor || (p.colors ? p.colors[0]?.name : '')
        });
      }
      this.saveCart();
      this.quickViewOpen = false;
      this.showToast('কার্টে যুক্ত হয়েছে!', `"${p.name}" (${this.quickViewQty}টি) কার্টে রাখা হলো।`);
    },

    // Fast Buy Now (opens checkout)
    buyNow(product) {
      this.addToCart(product, 1);
      this.checkoutOpen = true;
    },

    // Save cart to localStorage
    saveCart() {
      localStorage.setItem('shop_cart', JSON.stringify(this.cart));
    },

    // Update Cart Item Quantity
    updateQuantity(itemId, delta) {
      const item = this.cart.find(i => i.id === itemId);
      if (!item) return;
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.cart = this.cart.filter(i => i.id !== itemId);
      }
      this.saveCart();
    },

    // Remove item from Cart
    removeFromCart(itemId) {
      this.cart = this.cart.filter(i => i.id !== itemId);
      this.saveCart();
      this.showToast('পণ্য সরানো হয়েছে', 'কার্ট থেকে আইটেম মুছে ফেলা হয়েছে।', 'info');
    },

    // Cart Computed Total Items
    get cartCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },

    // Cart Computed Subtotal
    get cartSubtotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Wishlist Methods
    isWishlisted(productId) {
      return this.wishlist.includes(productId);
    },

    toggleWishlist(product) {
      const idx = this.wishlist.indexOf(product.id);
      if (idx > -1) {
        this.wishlist.splice(idx, 1);
        this.showToast('উইশলিস্ট থেকে সরানো হয়েছে', `"${product.name}" ফেভারিট থেকে বাদ দেওয়া হয়েছে।`, 'info');
      } else {
        this.wishlist.push(product.id);
        this.showToast('পছন্দের তালিকায় রাখা হয়েছে! ❤️', `"${product.name}" উইশলিস্টে সেভ করা হলো।`);
      }
      localStorage.setItem('shop_wishlist', JSON.stringify(this.wishlist));
    },

    get wishlistItems() {
      return this.products.filter(p => this.wishlist.includes(p.id));
    },

    // Checkout Confirmation
    confirmOrder() {
      if (!this.checkoutForm.fullName || !this.checkoutForm.phone || !this.checkoutForm.address) {
        this.showToast('তথ্য অসম্পূর্ণ!', 'দয়া করে নাম, ফোন নম্বর ও সম্পূর্ণ ঠিকানা লিখুন।', 'error');
        return;
      }

      const shippingFee = this.checkoutForm.city.includes('ঢাকা') ? 60 : 120;
      const totalAmount = this.cartSubtotal + shippingFee;

      this.lastOrder = {
        orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
        items: [...this.cart],
        subtotal: this.cartSubtotal,
        shippingFee: shippingFee,
        total: totalAmount,
        customer: { ...this.checkoutForm },
        date: new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })
      };

      // Reset cart
      this.cart = [];
      this.saveCart();
      this.checkoutOpen = false;
      this.orderSuccessOpen = true;
      this.showToast('অর্ডার সফল হয়েছে! 🎉', `আপনার অর্ডার নম্বর: ${this.lastOrder.orderId}`);
    },

    // Toast Notification System
    showToast(title, message, type = 'success') {
      this.toast.title = title;
      this.toast.message = message;
      this.toast.type = type;
      this.toast.show = true;

      if (this.toast.timer) clearTimeout(this.toast.timer);
      this.toast.timer = setTimeout(() => {
        this.toast.show = false;
      }, 4000);
    }
  };
}

window.allProductsApp = allProductsApp;
