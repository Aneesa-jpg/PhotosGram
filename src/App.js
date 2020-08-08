import React, {useState} from 'react';
import { Title } from './components/title.component';
import { Upload } from './components/upload.component';
import { ImagesGrid } from './components/imagesGrid.componet';
import { Modal } from './components/modal.component';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Upload />
      <ImagesGrid setSelectedImg={setSelectedImg}  />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      <span className='credits' role='img' aria-label='credits-with-emoji'>Made with ❤️ by Aneesa</span>
    </div>
  );
}

export default App;
