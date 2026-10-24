// Opens diagrams in a native browser dialog; project copy and headings remain editable HTML.
document.querySelectorAll('.editorial-figure img').forEach(image => {
  image.tabIndex=0;
  image.setAttribute('title','Click to inspect this artwork at a larger size');
  const open=()=>{
    const dlg=document.createElement('dialog');dlg.className='figure-modal';
    const close=document.createElement('button');close.textContent='CLOSE ×';close.type='button';close.className='figure-modal-close';
    const display=document.createElement('img');display.src=image.currentSrc||image.src;display.alt=image.alt;
    dlg.append(close,display);document.body.append(dlg);
    const remove=()=>{dlg.close();dlg.remove()};close.onclick=remove;
    dlg.addEventListener('click',e=>{if(e.target===dlg)remove()});dlg.addEventListener('close',()=>dlg.remove());dlg.showModal();
  };
  image.addEventListener('click',open);image.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
});
