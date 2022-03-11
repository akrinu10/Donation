import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/css/Newsletter.css';

export default function NewsLetter() {
    return (
    <>
        <div className='box-news'>
            <div className='box-news-sub'>
                <div className='sub-news'>
                    <h1 className='bold'>Kenali kami lebih jauh</h1>
                    <span>Dapatkan informasi menarik seputar pedalaman langsung dikirim ke inbox Anda hari ini.</span>
                </div>
                <div className='sub-news'>
                    <input type="text" className='form-control'></input>
                </div>
                <div className='sub-news'>
                    <input type="text" className='form-control'></input>
                </div>
                <div className='btn-news'>
                    <button>
                        Kirim Newsletter
                    </button>
                </div>
            </div>
        </div>
    </>
    
    );
}