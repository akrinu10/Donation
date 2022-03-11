import React,{useState} from "react";
import data from './DataList';
import './asset/css/ProgramList.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ProgramList = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
            return 0;
            }
            const diff = Math.random() * 12;
            return Math.min(oldProgress + diff, 100);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);

    const [noOfElement, setnoOfElement] = useState(3);
    const loadMore = () =>{
        setnoOfElement(noOfElement + noOfElement);
    }
    const slice = data.cardData.slice(0,noOfElement);
    return(
        <section className="box-list ">
            <div>
                <h1 className="bold">Bantu Sesama Sekarang</h1>
            </div>
            <div className="justify-content-center">

                {slice.map((item, index) =>{
                    return(
                        <>
                        <div className="no-margin col-12 col-md-6 mx-0 col-lg-3 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={item.imgSrc} className="imgProgram card-img-top" />
                                    </div>
                                    <div className="col-6 card-list">
                                        <div className="box-highlight">
                                            <div>
                                                <span className="highlight">{item.title}</span>
                                            </div>
                                            <div className="category-list">
                                                <span>Umum</span>
                                            </div>
                                            <div>
                                            <Box sx={{ width: '100%' }}>
                                                <LinearProgress variant="determinate" value={progress} />
                                            </Box>
                                            </div>
                                            <div className="box-info row">
                                                <div className="col-6">
                                                    <div className="opacity"><span>Terkumpul</span></div>
                                                    <div className="bold"><span>Rp {item.harga}</span></div>
                                                </div>
                                                <div className="col-6 right">
                                                    <div className="opacity"><span>Sisa Waktu</span></div>
                                                    <div className="bold"><span>{item.hari} Hari</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="no-margin col-12 col-md-6 mx-0 col-lg-3 mb-4 opacity">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={item.imgSrc} className="imgProgram card-img-top" />
                                    </div>
                                    <div className="col-6 card-list">
                                        <div className="box-highlight">
                                            <div>
                                                <span className="highlight">{item.title}</span>
                                            </div>
                                            <div className="category-list">
                                                <span>Umum</span>
                                            </div>
                                            <div>
                                            <Box sx={{ width: '100%' }}>
                                                <LinearProgress variant="determinate" value={progress} />
                                            </Box>
                                            </div>
                                            <div className="box-info row">
                                                <div className="col-6">
                                                    <div className="opacity"><span>Terkumpul</span></div>
                                                    <div className="bold"><span>Rp {item.harga}</span></div>
                                                </div>
                                                <div className="col-6 right">
                                                    <div className="opacity"><span>Sisa Waktu</span></div>
                                                    <div className="bold"><span>{item.hari} Hari</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                        
                    )
                })}
            </div>
            <button className="btn btn-load w-100" onClick={() => loadMore()}>
                Muat Lebih Banyak
            </button>
        </section>
    )
}
export default ProgramList;