import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { z } from 'zod'
import dbConnect from '@/lib/db-connect'
import ProductModel from '@/lib/product-model'
export const metadata: Metadata = {
  title: 'Create Products',
}
const userSchema = z.object({
  image: z.string(),
  name: z.string(),
  price: z.string(),
  rating: z.string(),
})
const Page = () => {
  
  async function create(formData: FormData) {
    'use server'
    const productData = userSchema.parse({
      image: formData.get('image'),
      name: formData.get('name'),
      price: formData.get('price'),
      rating: formData.get('rating'),
    })
    if (!productData) {
      
      return { message: 'Form data is not valid' }
    }
   
    
      await dbConnect()
      const product = new ProductModel(productData)
      console.log(product);
      
      await product.save()
      revalidatePath('/')
      redirect('/')
      return { message: `Created product ${productData.name}` }
    
   
    
  }
  return (
    <form action={create} className='p-24 flex flex-col justify-evenly gap-4'>
      <Label htmlFor="image">Image Address</Label>
      <Input
        type='text'
        name='image'
        required
        placeholder='https://freepngimg.com/thumb/tshirt/20-t-shirt-png-image-thumb.png'
      />
       <Label htmlFor="name">Product Name</Label>
      <Input
        type='text'
        name='name'
        required
        placeholder='Shirt'
      />
       <Label htmlFor="price">Product Price $</Label>
      <Input
        type='text'
        name='price'
        required
        placeholder='520.25'
      />
       <Label htmlFor="rating">Rating</Label>
      <Input
        type='text'
        name='rating'
        required
        placeholder='⭐⭐⭐⭐⭐'
      />
      <Button className='bg-green-400 text-lg' type='submit'>Submit</Button>
    </form>
  )
}

export default Page
