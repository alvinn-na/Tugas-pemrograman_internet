import './App.css'
import foto from './assets/VINA.png'
import moment1 from './assets/1.jpg'
import moment2 from './assets/moment.3.jpeg'
import moment3 from './assets/download.jpg'

function App() {
  return (
    <div className="biodata-container">
      <div className="card">
        
     
        <div className="foto-section">
          <div className="foto-label">MY PROFILE</div>
          <div className="foto-wrapper">
            <img src={foto} alt="Foto Alvina Nuraeni" className="profile-img" />
          </div>
          <p className="foto-caption">Alvina Nuraeni</p>
          <p className="foto-subcaption">Computer Science Education</p>
        </div>

      
        <div className="info-section">
          <div className="header-text">
            <p className="sapaan">HALO, SAYA</p>
            <h1 className="nama-utama">Alvina Nuraeni</h1>
            <p className="judul">Mahasiswa Pendidikan Ilmu Komputer</p>
          </div>

          <div className="garis"></div>

          <div className="content-body">
            <h2>Tentang Saya</h2>
            <p className="deskripsi">
              Halo! Saya Alvina Nuraeni, mahasiswa Pendidikan Ilmu Komputer yang suka belajar hal baru dan menghabiskan waktu bersama teman.
            </p>

            <div className="biodata-list">
              <div className="biodata-item">
                <b>Nama</b>
                <span>Alvina Nuraeni</span>
              </div>
              <div className="biodata-item">
                <b>Prodi</b>
                <span>Pendidikan Ilmu Komputer</span>
              </div>
              <div className="biodata-item">
                <b>Universitas</b>
                <span>Universitas Pendidikan Indonesia</span>
              </div>
              <div className="biodata-item">
                <b>Hobi</b>
                <span>Mendengarkan musik, menonton film, bermain bersama teman, dan nonton One Piece</span>
              </div>
            </div>

            <h2 className="moment-title">My Moment</h2>

            <div className="moment-grid">
              <div className="moment-box">
                <img src={moment1} alt="Moment belajar" />
                <div className="moment-text">
                  <span className="moment-number">01</span>
                  <p>Belajar hal baru</p>
                </div>
              </div>

              <div className="moment-box">
                <img src={moment2} alt="Moment bersama teman" />
                <div className="moment-text">
                  <span className="moment-number">02</span>
                  <p>Bermain bersama teman</p>
                </div>
              </div>

              <div className="moment-box">
                <img src={moment3} alt="Moment menonton One Piece" />
                <div className="moment-text">
                  <span className="moment-number">03</span>
                  <p>Menonton One Piece</p>
                </div>
              </div>
            </div>

            <p className="penutup">Terima kasih💓</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App