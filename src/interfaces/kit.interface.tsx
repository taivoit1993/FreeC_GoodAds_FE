import { BlobOptions } from "buffer"

export interface IKit{
  id?: number
  image?: string
  is_percentage?: any
  code: string
  name: string
  category: string
  quantity: number
  unit: string
  status: string
  type: string
  files?: any[]
  created_at?: string
  created_by?: string
  update_at?: string
  updated_by?: string,

  error? : string | null
}

export interface IKitFilter{
  code?: string
}