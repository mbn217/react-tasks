import React from 'react';
import './Sidebar.css';

const SidebarWidget = ({ title, content, type = 'default' }) => {
  return (
    <div className={`sidebar-widget ${type}`}>
      <div className="widget-header">
        <h3 className="widget-title">{title}</h3>
      </div>
      <div className="widget-content">
        {content}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const widgets = [
    {
      title: "Recent Posts",
      content: (
        <div className="recent-posts">
          <div className="recent-post-item">
            <img src="https://via.placeholder.com/60x60/87CEEB/FFFFFF?text=📸" alt="Recent post" />
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </div>
        </div>
      ),
      type: 'image'
    },
    {
      title: "Popular Tags",
      content: (
        <div className="tags">
          <span className="tag">⭐⭐⭐</span>
        </div>
      ),
      type: 'tags'
    },
    {
      title: "Featured Content",
      content: (
        <div className="featured-content">
          <img src="https://via.placeholder.com/120x80/DC143C/FFFFFF?text=🌹" alt="Featured" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      ),
      type: 'featured'
    }
  ];

  return (
    <aside className="sidebar">
      {widgets.map((widget, index) => (
        <SidebarWidget
          key={index}
          title={widget.title}
          content={widget.content}
          type={widget.type}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
