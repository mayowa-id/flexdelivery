import React, { useState } from 'react';
import { Download, Search, SlidersHorizontal, Calendar, ChevronDown, MoreHorizontal, X, Bell } from 'lucide-react';
// Import Vuesax-style icons from react-icons
import { 
  MdDashboard, 
  MdPeople, 
  MdNote, 
  MdCardGiftcard,
  MdReportProblem,
  MdAccountBalanceWallet,
  MdConfirmationNumber,
  MdSettings,
  MdCampaign,
  MdDescription,
  MdAssessment
} from 'react-icons/md';

const App = () => {
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedMenus, setExpandedMenus] = useState({
    users: false,
    allListings: true,
    transactions: false,
    settings: false
  });

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const openDeliveryModal = (item) => {
    setSelectedItem(item);
    setShowDeliveryModal(true);
  };

  const marketplaceData = [
    { 
      id: 3, adId: 'AD-1258', seller: 'sdvfa vfv ysdfjgwe', price: '₦1,000', location: 'Egbeda', 
      mode: 'P. Protection, D. Contact', item: 'Used Iphone 12', date: '12th Oct. 2025', status: 'Pending',
      views: 25, createdAt: '25th Aug 2025', expiryDate: '25th Aug 2027', pickupType: "From Sender's location",
      deliveryType: 'PP, Direct Contact', pickupName: 'Adebayo Ojoba', 
      pickupAddress: '24 AKonwonjo Road, Egbeda, Alimoso', pickupPhone: '+2348037456908',
      title: 'New Samsung Galaxy S10', category: 'Electronics', 
      productCategory: 'Multi Category (Petroleum/Liquids/Chemicals/Agricultural Produce)',
      weight: '5kg', monetaryWorth: '60,000', pickupPreference: 'No Vehicle', deliveryFeeInvoice: 'Sender'
    },
    { id: 556, adId: 'AD-556', seller: 'wsfv.cf', price: '₦850', location: 'Egbeda', mode: 'P. Protection, D. Contact', item: 'New Tecfone', date: '9th Oct. 2025', status: 'Pending', views: 15 },
    { id: 58, adId: 'AD-58', seller: 'yuiku yhv.nzCe', price: '₦850', location: 'Egbeda', mode: 'Payment Protection', item: 'Fairly Used Ephone', date: '9th Oct. 2025', status: 'Pending', views: 20 },
    { id: 59, adId: 'AD-59', seller: 'v swnv', price: '₦850', location: 'Egbeda', mode: 'P. Protection, D. Contact', item: 'Car Tyres', date: '7th Oct. 2025', status: 'Pending', views: 10 },
    { id: 5, adId: 'AD-5', seller: 'v swnv', price: '₦850', location: 'Egbeda', mode: 'Direct Contact', item: "Children's Cloth", date: '7th Oct. 2025', status: 'Pending', views: 8 },
    { id: 6, adId: 'AD-6', seller: 'nstmnvg', price: '₦850', location: 'Egbeda', mode: 'P. Protection, D. Contact', item: 'Used Course', date: '7th Oct. 2025', status: 'Pending', views: 12 },
    { id: 57, adId: 'AD-57', seller: 'sdtgvjt ik', price: '₦850', location: 'Egbeda', mode: 'Payment Protection', item: 'Used Viega', date: '7th Oct. 2025', status: 'Pending', views: 18 },
    { id: 7, adId: 'AD-7', seller: 'wgrvgji', price: '₦850', location: 'Egbeda', mode: 'Payment Protection', item: 'New Motorol', date: '7th Oct. 2025', status: 'Pending', views: 22 },
    { id: 76, adId: 'AD-76', seller: 'itngjti', price: '₦850', location: 'Egbeda', mode: 'Payment Protection', item: 'New electric fan', date: '7th Oct. 2025', status: 'Pending', views: 14 },
    { id: 78, adId: 'AD-78', seller: 'sebfvgjf', price: '₦850', location: 'Egbeda', mode: 'Direct Contact', item: 'New electric fan', date: '7th Oct. 2025', status: 'Pending', views: 16 }
  ];

  // Avatar images from placeholder services
  const avatarImages = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5'
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-container">
            <span className="logo-flex">FLEX</span>
            <span className="logo-delivery">Delivery</span>
            <div className="logo-badge">C</div>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="nav-item">
            <div className="nav-item-content">
              <MdDashboard size={20} />
              <span>Dashboard</span>
            </div>
          </a>
          
          <div className="space-y-1">
            <button onClick={() => toggleMenu('users')} className="nav-item">
              <div className="nav-item-content">
                <MdPeople size={20} />
                <span>Users</span>
              </div>
              <div className="nav-item-right">
                <span className="nav-badge">3</span>
                <ChevronDown className={`transition-transform ${expandedMenus.users ? 'rotate-180' : ''}`} size={16} />
              </div>
            </button>
            {expandedMenus.users && (
              <div className="nav-dropdown">
                <a href="#" className="nav-dropdown-item">All Users</a>
                <a href="#" className="nav-dropdown-item">Active Users</a>
                <a href="#" className="nav-dropdown-item">Suspended Users</a>
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <button onClick={() => toggleMenu('allListings')} className="nav-item">
              <div className="nav-item-content">
                <MdNote size={20} />
                <span>All Listings</span>
              </div>
              <ChevronDown className={`transition-transform ${expandedMenus.allListings ? 'rotate-180' : ''}`} size={16} />
            </button>
            {expandedMenus.allListings && (
              <div className="nav-dropdown">
                <a href="#" className="nav-dropdown-item flex items-center justify-between">
                  <span>Delivery Jobs</span>
                  <span className="nav-badge">5</span>
                </a>
                <a href="#" className="nav-dropdown-item">Delivery Offers</a>
                <a href="#" className="nav-dropdown-item nav-dropdown-item-active flex items-center justify-between">
                  <span>Marketplace</span>
                  <span className="nav-badge">5</span>
                </a>
              </div>
            )}
          </div>
          
          <a href="#" className="nav-item">
            <div className="nav-item-content">
              <MdCardGiftcard size={20} />
              <span>Flex Reward</span>
            </div>
          </a>
          
          <a href="#" className="nav-item">
            <div className="nav-item-content">
              <MdReportProblem size={20} />
              <span>Disputes</span>
            </div>
          </a>
          
          <div className="space-y-1">
            <button onClick={() => toggleMenu('transactions')} className="nav-item">
              <div className="nav-item-content">
                <MdAccountBalanceWallet size={20} />
                <span>Transactions</span>
              </div>
              <ChevronDown className={`transition-transform ${expandedMenus.transactions ? 'rotate-180' : ''}`} size={16} />
            </button>
            {expandedMenus.transactions && (
              <div className="nav-dropdown">
                <a href="#" className="nav-dropdown-item">All Transactions</a>
                <a href="#" className="nav-dropdown-item">Completed</a>
                <a href="#" className="nav-dropdown-item">Pending</a>
                <a href="#" className="nav-dropdown-item">Failed</a>
              </div>
            )}
          </div>
          
          <a href="#" className="nav-item">
            <div className="nav-item-content">
              <MdConfirmationNumber size={20} />
              <span>User Support Ticket</span>
            </div>
          </a>
          
          <div className="space-y-1">
            <button onClick={() => toggleMenu('settings')} className="nav-item">
              <div className="nav-item-content">
                <MdSettings size={20} />
                <span>Settings</span>
              </div>
              <ChevronDown className={`transition-transform ${expandedMenus.settings ? 'rotate-180' : ''}`} size={16} />
            </button>
            {expandedMenus.settings && (
              <div className="nav-dropdown">
                <a href="#" className="nav-dropdown-item">General Settings</a>
                <a href="#" className="nav-dropdown-item">Security</a>
                <a href="#" className="nav-dropdown-item">Notifications</a>
                <a href="#" className="nav-dropdown-item">Payment Settings</a>
              </div>
            )}
          </div>
          
          <a href="#" className="nav-item">
            <div className="nav-item-content">
              <MdCampaign size={20} />
              <span>Blog & Broadcast</span>
            </div>
          </a>
          
          <a href="#" className="nav-item">
            <div className="nav-item-content">
              <MdDescription size={20} />
              <span>Templates</span>
            </div>
          </a>
          
          <a href="#" className="nav-item">
            <div className="nav-item-content">
              <MdAssessment size={20} />
              <span>Audit Logs</span>
            </div>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-search-wrapper">
              <Search className="header-search-icon" size={20} />
              <input type="text" placeholder="Search for anything" className="header-search" />
            </div>
            <div className="header-actions">
              <button className="filter-btn">Quick actions</button>
              <div className="header-notification">
                <Bell size={20} color="#6b7280" />
                <span className="notification-badge">2</span>
              </div>
              <div className="header-avatars">
                {avatarImages.map((img, i) => (
                  <img key={i} src={img} alt={`User ${i+1}`} className="header-avatar" />
                ))}
              </div>
              <div className="header-user">
                <span className="font-semibold">BE</span>
                <span className="text-sm text-gray-600">e6fhrdfbfdsb ergtebb</span>
                <span className="text-xs text-gray-500">ADMIN</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="main">
          <div className="page-header">
            <h1 className="page-title">Marketplace</h1>
            <button className="export-btn">
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>

          {/* Overview Cards */}
          <div className="overview-grid">
            <div className="overview-card">
              <p className="overview-label">Total created</p>
              <p className="overview-value">107</p>
            </div>
            <div className="overview-card">
              <p className="overview-label">Total active</p>
              <p className="overview-value">70</p>
            </div>
            <div className="overview-card">
              <p className="overview-label">Total Sold with Payment Protection</p>
              <p className="overview-value">27</p>
            </div>
            <div className="overview-card">
              <p className="overview-label">Total Sold w/o Payment Protection</p>
              <p className="overview-value">10</p>
            </div>
          </div>

          {/* Filters */}
          <div className="filters-container">
            <div className="filters-bar">
              <div className="search-wrapper">
                <Search className="search-icon" size={16} />
                <input type="text" placeholder="Search assets" className="search-input" />
              </div>
              <div className="filter-actions">
                <button className="filter-btn">Reset</button>
                <button className="filter-btn">
                  <span>Sort</span>
                  <ChevronDown size={16} />
                </button>
                <button onClick={() => setShowAdvancedFilter(!showAdvancedFilter)} className="filter-btn">
                  <SlidersHorizontal size={16} />
                  <span>Advanced filter</span>
                </button>
                <button className="filter-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span>Select Columns</span>
                </button>
                <button className="filter-btn">
                  <Calendar size={16} />
                  <span>Date</span>
                </button>
              </div>
            </div>

            {/* Advanced Filter Section */}
            {showAdvancedFilter && (
              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#1f2937' }}>Advanced filter</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Item Title</label>
                    <select style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }}>
                      <option>Any</option>
                      <option>Phone</option>
                      <option>Electronics</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Location</label>
                    <select style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }}>
                      <option>Any</option>
                      <option>Egbeda</option>
                      <option>Ikeja</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Ad Selling Mode</label>
                    <select style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }}>
                      <option>Any</option>
                      <option>Payment Protection</option>
                      <option>Direct Contact</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Status</label>
                    <select style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }}>
                      <option>Any</option>
                      <option>Pending</option>
                      <option>Active</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Price Range</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="text" placeholder="From: Minimum Amount" style={{ flex: 1, padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }} />
                      <input type="text" placeholder="To: Maximum Amount" style={{ flex: 1, padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Creation Date Range</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="text" placeholder="From dd/mm/yyyy" style={{ flex: 1, padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }} />
                      <input type="text" placeholder="To dd/mm/yyyy" style={{ flex: 1, padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="filter-reset-btn">Reset</button>
                  <button className="filter-apply-btn">Apply filter</button>
                </div>
              </div>
            )}
          </div>

          {/* Table */}
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th><input type="checkbox" className="rounded" /></th>
                  <th>Ad ID</th>
                  <th>Seller Name</th>
                  <th>Asking Price</th>
                  <th>Item Location</th>
                  <th>Selling Mode</th>
                  <th>Ad Title</th>
                  <th>Creation Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {marketplaceData.map((item, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" className="rounded" /></td>
                    <td>{item.id}</td>
                    <td>{item.seller}</td>
                    <td className="font-medium">{item.price}</td>
                    <td>{item.location}</td>
                    <td>{item.mode}</td>
                    <td>{item.item}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className="status-badge">
                        <span className="status-dot"></span>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button onClick={() => openDeliveryModal(item)} className="more-btn">
                        <MoreHorizontal size={12} />
                        <span>MORE</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="pagination">
              <div className="pagination-info">
                <span>Items per page:</span>
                <select className="pagination-select">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div className="pagination-controls">
                <span className="text-sm text-gray-600">1-10 of 94</span>
                <div className="pagination-nav">
                  <button className="pagination-btn">
                    <ChevronDown className="rotate-90" size={16} />
                  </button>
                  <button className="pagination-btn">
                    <ChevronDown className="-rotate-90" size={16} />
                  </button>
                </div>
                <button className="filter-btn">Last</button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {showDeliveryModal && selectedItem && (
        <div className="modal-backdrop" onClick={() => setShowDeliveryModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <span>Sell Ad: <span className="font-normal">{selectedItem.adId}</span></span>
                <span className="active-badge">
                  <span className="active-dot"></span>
                  Active
                </span>
              </div>
              <button onClick={() => setShowDeliveryModal(false)} className="modal-close">
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-grid">
                <div className="modal-column">
                  <div className="views-badge">
                    <span>👁️</span>
                    <span>{selectedItem.views} Views</span>
                  </div>
                  <div className="package-image">
                    <div className="text-8xl">📦</div>
                  </div>
                </div>
                <div className="modal-column">
                  <h3 className="modal-section-title">Pick up & Delivery Details</h3>
                  <div className="space-y-2">
                    <div className="detail-row">
                      <span className="detail-label">Created at</span>
                      <span className="detail-value">{selectedItem.createdAt}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Ad Expiry date</span>
                      <span className="detail-value">{selectedItem.expiryDate}</span>
                    </div>
                    {selectedItem.pickupName && (
                      <div className="space-y-2" style={{marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb'}}>
                        <p className="font-medium">Pick up Details:</p>
                        <p className="text-sm"><span className="text-gray-600">Name:</span> {selectedItem.pickupName}</p>
                        <p className="text-sm"><span className="text-gray-600">Address:</span> {selectedItem.pickupAddress}</p>
                        <p className="text-sm"><span className="text-gray-600">Phone:</span> {selectedItem.pickupPhone}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="modal-column">
                  <h3 className="modal-section-title">Package Details</h3>
                  <div className="space-y-2">
                    <div className="detail-row">
                      <span className="detail-label">Title</span>
                      <span className="detail-value">{selectedItem.title}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Category</span>
                      <span className="detail-value">{selectedItem.category}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Weight</span>
                      <span className="detail-value">{selectedItem.weight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;