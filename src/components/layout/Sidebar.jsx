import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../data/navigationData';

const Sidebar = () => {
  // Track which dropdowns are open
  const [openDropdowns, setOpenDropdowns] = useState({
    'all-listings': true // Default open since marketplace is active
  });

  // Toggle dropdown open/close
  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Icon mapping (using emojis as placeholders)
  const iconMap = {
    dashboard: '📊',
    users: '👤',
    listings: '📋',
    'delivery-jobs': '🚚',
    'delivery-offers': '📦',
    marketplace: '🛒',
    'flex-reward': '🎁',
    disputes: '⚠️',
    transactions: '💳',
    'support-ticket': '🎫',
    settings: '⚙️',
    blog: '📡',
    templates: '📄',
    'audit-logs': '📊'
  };

  const renderNavItem = (item) => {
    const isDropdownOpen = openDropdowns[item.id];
    const icon = iconMap[item.id] || '📄';

    // Dropdown menu item
    if (item.type === 'dropdown') {
      return (
        <div key={item.id} className="nav-item-group">
          <button
            className="nav-item nav-item--dropdown"
            onClick={() => toggleDropdown(item.id)}
          >
            <div className="nav-item__content">
              <span className="nav-item__icon">{icon}</span>
              <span className="nav-item__label">{item.label}</span>
            </div>
            <div className="nav-item__right">
              {item.badge && (
                <span className="nav-item__badge">{item.badge}</span>
              )}
              <span className={`nav-item__arrow ${isDropdownOpen ? 'nav-item__arrow--open' : ''}`}>
                ▼
              </span>
            </div>
          </button>

          {/* Dropdown children */}
          {isDropdownOpen && item.children && (
            <div className="nav-dropdown">
              {item.children.map(child => (
                <Link
                  key={child.id}
                  to={child.path}
                  className={`nav-dropdown__item ${child.active ? 'nav-dropdown__item--active' : ''}`}
                >
                  <span className="nav-dropdown__label">{child.label}</span>
                  {child.badge && (
                    <span className="nav-item__badge">{child.badge}</span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Regular link item
    return (
      <Link
        key={item.id}
        to={item.path}
        className="nav-item"
      >
        <div className="nav-item__content">
          <span className="nav-item__icon">{icon}</span>
          <span className="nav-item__label">{item.label}</span>
        </div>
        {item.badge && (
          <span className="nav-item__badge">{item.badge}</span>
        )}
      </Link>
    );
  };

  return (
    <aside className="sidebar">
      {/* Logo section */}
      <div className="sidebar__logo">
        <div className="logo">
          <span className="logo__flex">FLEX</span>
          <span className="logo__delivery">Delivery</span>
          <div className="logo__icon">C</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav">
        {navigationItems.map(item => renderNavItem(item))}
      </nav>
    </aside>
  );
};

export default Sidebar;