export interface Course {
  type:string
  children?:Child[]
}

export interface Child{
  id:number | string,
  name:string,
  completeTime?:string,
  expirationTime?:string,
  url:string,
  count:number,
  comments:number,
  isFree:boolean,
  price?:number
}
