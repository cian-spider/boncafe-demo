import React from 'react'

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
  </svg>
)

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const menuItems = [
  {
    category: 'Steak',
    name: 'T-Bone Steak',
    description: 'Premium beef T-bone, grilled to perfection with our signature sauce',
    price: 'Rp 125.000',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=80'
  },
  {
    category: 'Steak',
    name: 'Ribeye Steak',
    description: 'Tender ribeye steak with mushroom pepper sauce',
    price: 'Rp 145.000',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80'
  },
  {
    category: 'Ice Cream',
    name: 'Sundae Special',
    description: 'Three scoops of premium ice cream with fresh toppings',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80'
  },
  {
    category: 'Ice Cream',
    name: 'Milkshake Supreme',
    description: 'Thick and creamy milkshake with whipped cream',
    price: 'Rp 35.000',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80'
  },
  {
    category: 'Pasta',
    name: 'Carbonara',
    description: 'Creamy Italian carbonara with crispy bacon',
    price: 'Rp 55.000',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80'
  },
  {
    category: 'Beverages',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice, no added sugar',
    price: 'Rp 25.000',
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&q=80'
  }
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'Restaurant Interior' },
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&q=80', alt: 'Steak Platter' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', alt: 'Coffee' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80', alt: 'Dessert' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80', alt: 'Dining Area' },
]

function App() {
  const whatsappNumber = '6282150633311'
  const whatsappMessage = encodeURIComponent('Halo Boncafe! Saya ingin bertanya tentang menu dan reservasi.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="navbar-logo">Boncafe</a>
          <ul className="navbar-links">
            <li><a href="#about">Tentang</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Galeri</a></li>
            <li><a href="#location">Lokasi</a></li>
          </ul>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{padding: '10px 24px', fontSize: '0.9rem'}}>
            <WhatsAppIcon /> Pesan
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div>
          <span className="hero-tag">📍 Samarinda, Kalimantan Timur</span>
          <h1>Boncafe Steak & Ice Cream</h1>
          <p className="hero-subtitle">
            Nikmati sensasi steak premium dan es krim spesial di hati Samarinda. 
            Tempat makan keluarga favorit sejak 2010.
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">Lihat Menu</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <WhatsAppIcon /> Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>6.3K+</h3>
              <p>Reviews Google</p>
            </div>
            <div className="stat-item">
              <h3>4.8</h3>
              <p>Rating Bintang</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Menu Pilihan</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" alt="Boncafe Restaurant" />
            </div>
            <div className="about-content">
              <h2>Selamat Datang di Boncafe</h2>
              <p>
                Boncafe Steak & Ice Cream adalah destination kuliner keluarga di Samarinda 
                yang menyajikan steak premium dan es krim artisan dengan harga terjangkau.
              </p>
              <p>
                Dengan pengalaman lebih dari 15 tahun, kami berkomitmen menghadirkan 
                hidangan berkualitas dengan suasana nyaman untuk setiap kunjungan Anda.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">🥩</div>
                  <span>Steak Premium</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🍦</div>
                  <span>Ice Cream Artisan</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">👨‍👩‍👧‍👦</div>
                  <span>Friendly Family</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">⭐</div>
                  <span>4.8 Star Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="menu" id="menu">
        <div className="container">
          <div className="menu-header">
            <h2>Menu Favorit</h2>
            <p>Pilihan steak, ice cream, dan hidangan lainnya yang paling digemari pelanggan kami</p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div className="menu-card" key={index}>
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="menu-card-content">
                  <span className="menu-card-category">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-card-footer">
                    <span className="menu-card-price">{item.price}</span>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="menu-card-btn">
                      Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-header">
            <h2>Galeri</h2>
            <p>Suasana nyaman di Boncafe</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location" id="location">
        <div className="container">
          <div className="location-grid">
            <div className="location-info">
              <h2>Temukan Kami</h2>
              <p>
                Boncafe Steak & Ice Cream — pilihan tepat untuk makan bersama keluarga, 
                teman, atau acara spesial Anda di Samarinda.
              </p>
              <div className="location-details">
                <div className="location-detail">
                  <div className="location-detail-icon">
                    <MapPinIcon />
                  </div>
                  <div className="location-detail-content">
                    <h4>Alamat</h4>
                    <p>Samarinda, Kalimantan Timur, Indonesia</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">
                    <PhoneIcon />
                  </div>
                  <div className="location-detail-content">
                    <h4>Telepon / WhatsApp</h4>
                    <p>+62 821-5063-3311</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">
                    <ClockIcon />
                  </div>
                  <div className="location-detail-content">
                    <h4>Jam Operasional</h4>
                    <p>Setiap Hari: 10.00 - 22.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="location-map" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', background: 'linear-gradient(135deg, #f8f4f0, #ede8e1)', borderRadius: '8px' }}>
              <div style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📍</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#2C1810', marginBottom: '8px' }}>Samarinda, Kalimantan Timur</h3>
                <p style={{ color: '#8B7355', marginBottom: '20px', fontSize: '0.95rem' }}>Boncafe Steak & Ice Cream</p>
                <a 
                  href="https://www.google.com/maps/search/Boncafe+Steak+Ice+Cream+Samarinda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="menu-card-btn"
                  style={{ background: '#8B4513', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Siap untuk Reservasi?</h2>
          <p>
            Hubungi kami via WhatsApp untuk reservasi meja atau tanya-tanya tentang menu. 
            Tim kami siap membantu Anda!
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
            <WhatsAppIcon />
            Chat WhatsApp Sekarang
          </a>
          <p className="cta-phone">Atau telepon langsung: +62 821-5063-3311</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Boncafe Steak & Ice Cream</h3>
              <p>
                Destination kuliner keluarga favorit di Samarinda. 
                Menyajikan steak premium dan es krim artisan sejak 2010.
              </p>
            </div>
            <div className="footer-links">
              <h4>Menu</h4>
              <ul>
                <li><a href="#menu">Steak</a></li>
                <li><a href="#menu">Ice Cream</a></li>
                <li><a href="#menu">Pasta</a></li>
                <li><a href="#menu">Beverages</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Info</h4>
              <ul>
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#gallery">Galeri</a></li>
                <li><a href="#location">Lokasi</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer">Hubungi Kami</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Boncafe Steak & Ice Cream Samarinda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
