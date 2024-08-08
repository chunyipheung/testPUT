// react
import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// icons
import { 
  CloudArrowUpIcon, 
  DocumentIcon, 
  EllipsisVerticalIcon, 
  ArrowDownTrayIcon, 
  TrashIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

// images
import AvatarImage from "../../../../assets/images/avatars/sample-avatar.png";

// components
import ShadowBox from '../../../public-components/structure/ShadowBox';

export default function NewCommentForm() {

  const [file, setFile] = useState(null);
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFile(selectedFiles.length > 0 ? selectedFiles[0] : null);
    setFileNames([...fileNames, ...selectedFiles.map(file => file.name)]);
  };

  const handleButtonClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form with file:', file);
  };

  const handleDownloadClick = (fileName) => {
    const tempLink = document.createElement('a');
    tempLink.setAttribute('download', fileName);
    const fileUrl = URL.createObjectURL(file);
    tempLink.setAttribute('href', fileUrl);
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    URL.revokeObjectURL(fileUrl);
  };

  const handleDeleteClick = (event, fileName) => {
    event.stopPropagation(); // prevent menu from closing
    setFileNames(fileNames.filter(name => name !== fileName));
  };

  const [isDragOver, setIsDragOver] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    setIsDrop(true);
    setTimeout(() => {setIsDrop(false);}, "1000");
    const selectedFiles = Array.from(event.dataTransfer.files);
    setFile(selectedFiles.length > 0 ? selectedFiles[0] : null);
    setFileNames([...fileNames, ...selectedFiles.map(file => file.name)]);
  };

  return (
    <ShadowBox>
      <div className="p-8 sm:p-12 space-y-6">

        <div className='font-light'>
          <p>您可以在此遞交您的續保通知書、更改保單申請。
          （接受文件類型：doc, docx, pdf, jpg, jpeg, png）</p>
        </div>

        <div className='space-y-3'>
          <img
            alt=""
            src={AvatarImage}
            className="h-10 w-10 flex-none rounded-full bg-gray-50"
          />
          <form
            className='w-full'
            encType="multipart/form-data"
            action="/upload"
            method="post"
            onSubmit={handleSubmit}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {/* upload files */}
            <div className={`relative flex-auto rounded-lg shadow-sm border border-gray-400 border-dashed
                  flex flex-col items-center py-16 space-y-3
                  ${isDragOver && "bg-gray-50"}`}>
              {!isDrop ? 
              <>
                <CloudArrowUpIcon className="h-10 w-10 mr-2 text-violet-700" />
                <p className='text-sm sm:text-base text-gray-500'>您可以拖拽 / 選擇您的文件</p>
                <div>
                  <input
                    type="file"
                    name="uploadFiles"
                    accept=".doc, .docx, .pdf, .jpg, .jpeg, .png"
                    autoComplete="off"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className='text-violet-700 bg-purple-50 py-3 px-6 rounded-full hover:bg-purple-50 text-sm sm:text-base font-semibold'
                    onClick={handleButtonClick}
                  >
                    選擇文件
                  </button>
                </div>
              </> : 
              <>
                <div className='bg-yellow-50 rounded-full p-4'>
                  <CheckIcon className='h-10 w-10 text-amber-500'/>
                </div>
                <p>已完成上載</p>
              </>}

            </div>

            {/* uploaded files */} 
            {fileNames.length > 0 && <>
            <div className='space-y-2 mt-4'>
              <h1 className='font-semibold p-4 text-base sm:text-lg'>已上傳文件：</h1>
              {fileNames.map((fileName, index) => (
                <div key={index} className='flex justify-between items-center border border-gray-300/50 rounded-lg p-4'>
                  
                  <div className='flex items-center overflow-hidden gap-1 sm:gap-4'>
                    <DocumentIcon className='flex-none h-5 w-5 m-1 text-gray-500 block'/>
                    <span className='shrink truncate'>{fileName}</span>
                  </div>
                  
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="flex items-center rounded-full text-gray-400 
                      hover:text-gray-700 hover:bg-gray-50
                      focus:text-gray-900 focus:bg-gray-100
                      active:text-gray-900 active:bg-gray-100
                      ">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5 m-1" />
                      </MenuButton>
                    </div>

                    <MenuItems
                      modal={false}
                      transition="true"
                      className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition 
                      focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <div
                            className="cursor-pointer flex items-center block px-4 py-2 text-sm text-gray-600 data-[focus]:bg-gray-50 data-[focus]:text-gray-900"
                            onClick={() => handleDownloadClick(fileName)}
                          >
                            <ArrowDownTrayIcon className='h-4 w-4 mr-2' />
                            下載
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div
                            className="cursor-pointer flex items-center block px-4 py-2 text-sm text-red-700 data-[focus]:bg-red-50 data-[focus]:text-red-900"
                            onClick={(event) => handleDeleteClick(event, fileName)}
                          >
                            <TrashIcon className='h-4 w-4 mr-2' />
                            刪除
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
            ))}
            </div>
            
            {/* submit button */}
            <div className="pt-6 text-right">
              <button
                type="submit"
                className=" text-violet-700 bg-purple-50 py-3 px-6 rounded-full hover:bg-purple-50 text-sm sm:text-base font-semibold"
              >
                確認遞交
              </button>
            </div>
          </>}
            
          </form>
        </div>

        
      </div>
    </ShadowBox>
  );
}