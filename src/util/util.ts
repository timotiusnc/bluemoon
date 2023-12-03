const defaultWAText = 'Hi BlueMoon! Please tell me more about this'

export const generateWALink = ({
  phone,
  text,
}: {
  phone: string
  text?: string
}) => {
  return `https://wa.me/${phone}?text=${text ?? defaultWAText}`
}
