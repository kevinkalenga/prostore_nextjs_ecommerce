
// import {cn} from '@/lib/utils'
// const ProductPrice = ({value, className}:{value: number; className?:string;}) => {
  
//  // Ensure two decimal places
//  const stringValue = value.toFixed(2)  
// //  Get the int/float
// const [intValue, floatValue] = stringValue.split('.')
//     return (
//     <p className={cn('text-2xl', className)}>
//       <span className='text-xs align-super'>$</span>
//       {intValue}
//       <span className='text-xs align-super'>.{floatValue}</span>
//     </p>
//   )
// }

// export default ProductPrice


import { cn } from '@/lib/utils'

const ProductPrice = ({
  value,
  className,
}: {
  value: number | string
  className?: string
}) => {
  // Convertir en nombre
  const numericValue = Number(value)

  // Si ce n'est pas un nombre valide, afficher 0.00
  const stringValue = isNaN(numericValue) ? '0.00' : numericValue.toFixed(2)

  // Séparer les parties entière et décimale
  const [intValue, floatValue] = stringValue.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>$</span>
      {intValue}
      <span className='text-xs align-super'>.{floatValue}</span>
    </p>
  )
}

export default ProductPrice
