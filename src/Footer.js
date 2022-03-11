import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/css/Footer.css';
import logo from './asset/image/logo-adaide.svg';
import ig from './asset/image/bx_bxl-instagram.png';
import fb from './asset/image/jam_facebook-circle.png';
import tw from './asset/image/jam_twitter-circle.png';
import yt from './asset/image/jam_youtube-circle.png';
import ln from './asset/image/jam_linkedin-circle.png';

export default function NewsLetter() {
    return (
    <>
    <div className='box-footer'>
        <div>
            <img src={logo} className="logo-navbar" alt="logo" />
        </div>
        <div className='box-address'>
            <h4 className='bold'>Ada Ide Indonesia</h4>
            <span>Jl. Setra Dago Barat No. 25 Antapani Kulon, Kec. Antapani Kota Bandung, Jawa Barat 40291</span>
        </div>
        <div className='row'>
            <div className='col-4'>
                <h4 className='bold'>Program</h4>
                <div><span>Semua Program</span></div>
                <div><span>Berita Terbaru</span></div>
            </div>
            <div className='col-4'>
                <h4 className='bold'>Hubungi Kami</h4>
                <div><span>Pesan Whatsapp</span></div>
                <div><span>Pusat Bantuan</span></div>
            </div>
            <div className='col-4'>
                <h4 className='bold'>Perusahaan</h4>
                <div><span>Tentang Kami</span></div>
                <div><span>Program Kami</span></div>
                <div><span>Blog</span></div>
            </div>
        </div>
        <div className='box-sosmed'>
            <button className='btn-sosmed'><img src={ig} className="" alt="logo" /></button>
            <button className='btn-sosmed'><img src={fb} className="" alt="logo" /></button>
            <button className='btn-sosmed'><img src={tw} className="" alt="logo" /></button>
            <button className='btn-sosmed'><img src={yt} className="" alt="logo" /></button>
            <button className='btn-sosmed'><img src={ln} className="" alt="logo" /></button>
        </div>
    </div>
    <div className='box-copyright'>
        <span>© 2021 Ada Ide Indonesia</span>
    </div>
    </>
    );
}