export const marketplaceOverviewData = {
  totalCreated: 107,
  totalActive: 70,
  totalSoldWithPaymentProtection: 27,
  totalSoldWithoutPaymentProtection: 10
};

export const marketplaceListings = [
  {
    id: 3,
    adId: 'AD-1258',
    seller: 'sdvfa vfv ysdfjgwe',
    askingPrice: 1000,
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'Used Iphone 12',
    creationDate: '12th Oct. 2025',
    status: 'Pending',
    
    // Delivery Details
    views: 25,
    createdAt: '25th Aug 2025',
    expiryDate: '25th Aug 2027',
    pickupType: "From Sender's location",
    deliveryType: 'PP, Direct Contact',
    pickupDetails: {
      name: 'Adebayo Ojoba',
      address: '24 AKonwonjo Road, Egbeda, Alimoso',
      phone: '+2348037456908'
    },
    
    // Package Details
    packageDetails: {
      title: 'New Samsung Galaxy S10',
      category: 'Electronics',
      productCategory: 'Multi Category (Petroleum/Liquids/Chemicals/Agricultural Produce)',
      weight: '5kg',
      monetaryWorth: 60000,
      pickupPreference: 'No Vehicle',
      deliveryFeeInvoiceRecipient: 'Sender'
    }
  },
  {
    id: 556,
    adId: 'AD-556',
    seller: 'wsfv.cf',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'New Tecfone',
    creationDate: '9th Oct. 2025',
    status: 'Pending',
    views: 15
  },
  {
    id: 58,
    adId: 'AD-58',
    seller: 'yuiku yhv.nzCe',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'Payment Protection',
    adTitle: 'Fairly Used Ephone',
    creationDate: '9th Oct. 2025',
    status: 'Pending',
    views: 20
  },
  {
    id: 59,
    adId: 'AD-59',
    seller: 'v swnv',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'Car Tyres',
    creationDate: '7th Oct. 2025',
    status: 'Pending',
    views: 10
  },
  {
    id: 5,
    adId: 'AD-5',
    seller: 'v swnv',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'Direct Contact',
    adTitle: "Children's Cloth",
    creationDate: '7th Oct. 2025',
    status: 'Pending',
    views: 8
  },
  {
    id: 6,
    adId: 'AD-6',
    seller: 'nstmnvg',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'Used Course',
    creationDate: '7th Oct. 2025',
    status: 'Pending',
    views: 12
  },
  {
    id: 57,
    adId: 'AD-57',
    seller: 'sdtgvjt ik',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'Payment Protection',
    adTitle: 'Used Viega',
    creationDate: '7th Oct. 2025',
    status: 'Pending',
    views: 18
  },
  {
    id: 7,
    adId: 'AD-7',
    seller: 'wgrvgji',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'Payment Protection',
    adTitle: 'New Motorol',
    creationDate: '7th Oct. 2025',
    status: 'Pending',
    views: 22
  },
  {
    id: 76,
    adId: 'AD-76',
    seller: 'itngjti',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'Payment Protection',
    adTitle: 'New electric fan',
    creationDate: '7th Oct. 2025',
    status: 'Pending',
    views: 14
  },
  {
    id: 78,
    adId: 'AD-78',
    seller: 'sebfvgjf',
    askingPrice: 850,
    itemLocation: 'Egbeda',
    sellingMode: 'Direct Contact',
    adTitle: 'New electric fan',
    creationDate: '7th Oct. 2025',
    status: 'Pending',
    views: 16
  }
];

// Filter options for marketplace
export const filterOptions = {
  itemTitles: [
    { value: '', label: 'Any' },
    { value: 'phone', label: 'Phone' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'clothing', label: 'Clothing' }
  ],
  locations: [
    { value: '', label: 'Any' },
    { value: 'egbeda', label: 'Egbeda' },
    { value: 'ikeja', label: 'Ikeja' },
    { value: 'lekki', label: 'Lekki' },
    { value: 'yaba', label: 'Yaba' }
  ],
  sellingModes: [
    { value: '', label: 'Any' },
    { value: 'payment-protection', label: 'Payment Protection' },
    { value: 'direct-contact', label: 'Direct Contact' },
    { value: 'both', label: 'Both' }
  ],
  statuses: [
    { value: '', label: 'Any' },
    { value: 'pending', label: 'Pending' },
    { value: 'active', label: 'Active' },
    { value: 'sold', label: 'Sold' },
    { value: 'expired', label: 'Expired' }
  ]
};