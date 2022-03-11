import './asset/css/Navbar.css';
import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import beranda from './asset/navigation/Variants=Home, State=Unactive.svg';
import program from './asset/navigation/Variants=Program, State=Unactive.svg';
import berita from './asset/navigation/Variants=News, State=Unactive.svg';
import donasi from './asset/navigation/Variants=Donation, State=Unactive.svg';
import profil from './asset/navigation/Variants=Profile, State=Unactive.svg';
export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
    <div className="navbar-bottom">
    <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="beranda">
                <div>
                    <div><img src={beranda} className="navigation" alt="beranda" /></div>
                    <div><span>Beranda</span></div>
                </div>
            </ToggleButton>
            <ToggleButton value="program">
                <div>
                    <div><img src={program} className="navigation" alt="program" /></div>
                    <div><span>Program</span></div>
                </div>
            </ToggleButton>
            <ToggleButton value="berita">
                <div>
                    <div><img src={berita} className="navigation" alt="berita" /></div>
                    <div><span>Berita</span></div>
                </div>
            </ToggleButton>
            <ToggleButton value="donasi">
                <div>
                    <div><img src={donasi} className="navigation" alt="donasi" /></div>
                    <div><span>Donasi Saya</span></div>
                </div>
            </ToggleButton>
            <ToggleButton value="profil">
                <div>
                    <div><img src={profil} className="navigation" alt="profil" /></div>
                    <div><span>Profil</span></div>
                </div>
            </ToggleButton>
        </ToggleButtonGroup>
    </div>
    </>
  );
}

