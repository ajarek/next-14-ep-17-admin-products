'use server'
import { revalidatePath } from 'next/cache'
import ProductModel from './product-model'
import dbConnect from './db-connect'
import { z } from 'zod'
import { redirect } from 'next/navigation'

export async function create(formData: FormData) {
  const userSchema = z.object({
    image: z.string(),
    name: z.string(),
    price: z.string(),
    rating: z.string(),
  })

  const productData = userSchema.parse({
    image: formData.get('image'),
    name: formData.get('name'),
    price: formData.get('price'),
    rating: formData.get('rating'),
  })
  if (!productData) {
    return { message: 'Form data is not valid' }
  }
  try {
    await dbConnect()
    const product = new ProductModel(productData)

    await product.save()
    revalidatePath('/')
    return { message: `Created product ${productData.name}` }
  } catch {
    return { message: 'Failed to create product' }
  } finally {
    redirect('/')
  }
}

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

export const updateProduct = async (formData: FormData ) => {
  const userSchema = z.object({
    _id: z.string().min(1),
    image: z.string(),
    name: z.string(),
    price: z.string(),
    rating: z.string(),
  })

  const newProductData = userSchema.parse({
    _id: formData.get('id'),
    image: formData.get('image'),
    name: formData.get('name'),
    price: formData.get('price'),
    rating: formData.get('rating'),
  })
  console.log(newProductData._id)
  
  try {
    await dbConnect()
    
    let productId = await ProductModel.findById({ _id: newProductData._id })

    if (!productId) throw new Error('product not found')

    

    await ProductModel.updateOne({ _id: productId }, newProductData);
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    throw err
  }
  finally {
    redirect('/')
  }
}