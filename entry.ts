import pdfjs from 'pdfjs-dist';
import {PDFDocumentProxy} from 'pdfjs-dist';
import './node_modules/pdfjs-dist/web/pdf_viewer.css';

const {PDFViewer} = require('pdfjs-dist/web/pdf_viewer.js');

function renderInViewer(pdfDocument: PDFDocumentProxy) {
  let container = document.getElementById('viewerContainer');
  const pdfViewer = new PDFViewer({
    container: container,
    viewer: container,
    renderInteractiveForms: true,
  });

  document.addEventListener('pagesinit', function () {
    // We can use pdfViewer now, e.g. let's change default scale.
    // pdfViewer.currentScaleValue = 'page-width';
  });

  pdfViewer.setDocument(pdfDocument);
}


async function loadPdf() {
  const pdf = await pdfjs.getDocument('/big.pdf').promise
  renderInViewer(pdf);
}

loadPdf();
