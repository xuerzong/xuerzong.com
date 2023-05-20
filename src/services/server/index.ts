export const serviceSuccessReturn = <Data = any>(message: string, data?: Data) => {
  return [true, { data, message }] as const
}

export const serviceUnsuccessReturn = (message: string) => {
  return [false, { message }] as const
}
