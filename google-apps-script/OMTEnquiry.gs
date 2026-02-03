/**
 * OMT Enquiry - Google Apps Script for OMTEnquiry Sheet
 *
 * SETUP:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/19ti_cNs_d_BddY9o_oKB7mc6lwje5GSWNfMMGRgESd8/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Save (Ctrl/Cmd + S)
 * 5. Deploy: Click "Deploy" > "New deployment" > choose "Web app"
 *    - Description: "OMT Enquiry form"
 *    - Execute as: Me
 *    - Who has access: Anyone (important – so the form can POST without sign-in)
 * 6. Click "Deploy". First time, you may need to "Authorize access" – complete that.
 * 7. Copy the "Web app URL" (ends with /exec) and put it in your .env as VITE_GOOGLE_SCRIPT_URL
 *
 * You do NOT need to create any columns – the script adds a header row on first use.
 */

var HEADERS = [
  'Timestamp',
  'Package Name',
  'Package Price',
  'Full Name',
  'Email',
  'Phone',
  'Travelers',
  'Travel Date',
  'Requirements',
  'Flights',
  'Hotels',
  'Activities',
  'Tours'
];

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Add header row if sheet is empty (no need to create columns manually)
    if (sheet.getLastRow() === 0) {
      sheet.getRange('A1:M1').setValues([HEADERS]);
      sheet.getRange('A1:M1').setFontWeight('bold');
    }

    // Parse JSON body (POST data can be in e.postData.contents)
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = {};
    try {
      data = JSON.parse(raw);
    } catch (parseErr) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Invalid JSON: ' + parseErr.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var row = [
      new Date(),
      data.packageName || '',
      data.packagePrice || '',
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.travelers || '',
      data.travelDate || '',
      data.requirements || '',
      data.flights || '',
      data.hotels || '',
      data.activities || '',
      (data.tours && Array.isArray(data.tours)) ? data.tours.join(', ') : ''
    ];

    var nextRow = sheet.getLastRow() + 1;
    // A1 notation: one row (A through M = 13 columns) so range size matches [row]
    sheet.getRange('A' + nextRow + ':M' + nextRow).setValues([row]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Enquiry saved.' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
