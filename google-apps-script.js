// Paste this entire file into Google Apps Script (Extensions > Apps Script)
// Then deploy as web app (Deploy > New deployment)
// Execute as: Me | Who has access: Anyone

function doGet(e) {
  var data = e.parameter;

  if (!data.name) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVPs');
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.setName('RSVPs');
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Attending', 'Adults', 'Kids', 'Note']);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.attend === 'yes' ? 'Yes' : 'No',
      data.attend === 'yes' ? (data.adults || 1) : '',
      data.attend === 'yes' ? (data.kids || 0) : '',
      data.note || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}
