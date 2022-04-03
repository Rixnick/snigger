import {VscChromeClose} from 'react-icons/vsc';



export interface FileActionProps {
  file: File;
  onDelete: (file: File) => void;
}


export function UploadAction({ file, onDelete}: FileActionProps) {
  return ( 
  <button className='btn__delete' onClick={() => onDelete(file)}>
      <VscChromeClose />
  </button>)
}