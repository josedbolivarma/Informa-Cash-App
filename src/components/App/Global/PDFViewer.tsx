import React from "react";

interface PDFViewerProps {
  pdfUrl: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <>
      <div className="mx-auto">
        <iframe
          title="PDF Viewer"
          src={pdfUrl}
          style={{ width: '100%', minHeight: '22cm', margin: 'auto' }} >
        </iframe>
      </div>
    </>
  );
};