// import { ErrorHandler } from '@/handlers/error'

// export const CheckSelector =
//   () => (target: any, key: string | symbol, descriptor: PropertyDescriptor) => {
//     const childFunction = descriptor.value

//     descriptor.value = (...args: any[]) => {
//       if (!'html' || ['html'].length == 0) {
//         return ErrorHandler(`Invalid query selector "${target.query}"`)
//       } else {
//         childFunction.apply(this, args)
//       }
//     }
//     return descriptor
//   }
