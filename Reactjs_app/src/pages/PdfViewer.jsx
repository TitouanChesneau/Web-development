import React from 'react';
import { Header } from '../components';

const PdfViewer = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Pdf Viewer" title="Pdf Viewer" />
        <div className="mt-10 md:mt-5 flex">
            <p className="dark:text-gray-200 text-2xl">This is supposed to be a pdf viewer, but unfortunatly, the pdf viewer component is not available is this syncfusion version.</p>
        </div>
    </div>
  )
}

export default PdfViewer