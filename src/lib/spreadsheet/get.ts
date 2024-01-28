import { getGoogleSheets } from '@/lib/spreadsheet/sheet'
import { getErrMsg } from '@/util/error-message'

const getSheet = async (range: string) => {
  const sheets = await getGoogleSheets()
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
      valueRenderOption: 'UNFORMATTED_VALUE',
    })
    return response.data.values
  } catch (error) {
    throw new Error(getErrMsg(error))
  }
}

export { getSheet }
