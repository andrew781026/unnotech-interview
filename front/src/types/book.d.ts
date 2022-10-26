export type EmptyObject = Record<string, never>

export interface Book {
  'title': string
  'author': string
  'description': string
  'id': number
  'image': string
}
