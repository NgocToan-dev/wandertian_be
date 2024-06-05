const pdfKit = require('pdfkit');

function exportDataToPDF(data, filename, callback) {
  const doc = new pdfKit();

  // Set document properties (optional)
  doc.info('Title', 'Your PDF Title');
  doc.author('Your Name');

  // Add page content based on your data
  doc.text('Your Data Title', { align: 'center' });
  // ... (Loop through data and format for PDF)

  // Example for simple data (replace with your data formatting)
  for (const item of data) {
    doc.text(` - ${item.name} (${item.value})`);
  }

  doc.pipe(fs.createWriteStream(filename)); // Save to a file

  doc.on('end', () => {
    console.log('PDF created successfully!');
    if (callback) {
      callback();
    }
  });

  doc.on('error', (err) => {
    console.error('Error creating PDF:', err);
  });

  doc.end(); // Signal the end of the document
}

// Example usage
const myData = [
  { name: 'Property 1', value: 10 },
  { name: 'Property 2', value: 'Some Text' },
];

exportDataToPDF(myData, 'my_data.pdf', () => {
  console.log('PDF creation complete!');
});