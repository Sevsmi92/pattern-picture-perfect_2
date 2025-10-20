export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="pattern.pdf"');
  res.send('%PDF-1.4\n% Demo PDF from stub API\n');
}
