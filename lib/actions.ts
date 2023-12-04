'use server'
import { revalidatePath } from 'next/cache'
import ProductModel from './product-model'
import dbConnect from './db-connect'
import { z } from 'zod'

export async function deleteProduct(formData: FormData) {
  const schema = z.object({
    _id: z.string().min(1),
    name: z.string().min(1),
  })
  const data = schema.parse({
    _id: formData.get('_id'),
    name: formData.get('name'),
  })

  try {
    await dbConnect()
    await ProductModel.findOneAndDelete({ _id: data._id })
    revalidatePath('/')
    console.log({ message: `Deleted product ${data.name}` })
    return { message: `Deleted product ${data.name}` }
  } catch (e) {
    return { message: 'Failed to delete product' }
  }
}