const defaultWAText = 'Hi BlueMoon! Please tell me more about this'

const idrFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
})

export const generateWALink = ({
  phone,
  text,
}: {
  phone: string
  text?: string
}) => {
  return `https://wa.me/${phone}?text=${text ?? defaultWAText}`
}

export const formatCurrency = (value: number) => {
  return idrFormatter.format(value)
}
