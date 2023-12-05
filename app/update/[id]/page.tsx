import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Metadata } from 'next'
import { create } from '@/lib/actions'
import dbConnect from '@/lib/db-connect'
import ProductModel, { Product } from '@/lib/product-model'

export const metadata: Metadata = {
  title: 'Update Products',
}

const Update = async ({ params }: { params: { id: string } })=> {
  const { id } = params;  


  await dbConnect()
  const product = await ProductModel.findById(id)
  return (
    <form
      action={create}
      className='p-24 max-sm:px-2 max-sm:py-4 flex flex-col justify-evenly gap-4'
    >
      <Label htmlFor='image'>Image Address</Label>
      <Input
        type='text'
        name='image'
        required
        defaultValue={product.image}
      />
      <Label htmlFor='name'>Product Name</Label>
      <Input
        type='text'
        name='name'
        required
        defaultValue={product.name}
      />
      <Label htmlFor='price'>Product Price $</Label>
      <Input
        type='text'
        name='price'
        required
        defaultValue={product.price}
        
      />
      <Label htmlFor='rating'>Rating</Label>
      <Input
        type='text'
        name='rating'
        required
        defaultValue={product.rating}
      />
      <Button
        className='bg-indigo-600 text-lg'
        type='submit'
      >
        Update
      </Button>
    </form>
  )
}

export default Update

