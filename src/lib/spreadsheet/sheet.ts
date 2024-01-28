import { sheets_v4, auth, sheets } from '@googleapis/sheets'

// Scopes: https://developers.google.com/sheets/api/guides/authorizing?hl=en
const authObj = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
})

const getGoogleSheets = async () => {
  const spreadsheet: sheets_v4.Sheets = sheets({
    version: 'v4',
    auth: authObj,
  })

  return spreadsheet
}

export { getGoogleSheets }
