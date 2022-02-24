export const ErrorHandler = (message: string): Error => {
  console.warn(`vQuery Error:\n${message}`)
  return new Error(message)
}
