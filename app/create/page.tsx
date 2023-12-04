import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Metadata } from 'next'
import { create } from '@/lib/actions'

export const metadata: Metadata = {
  title: 'Create Products',
}

const Page = () => {
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
        placeholder='https://freepngimg.com/thumb/tshirt/20-t-shirt-png-image-thumb.png'
      />
      <Label htmlFor='name'>Product Name</Label>
      <Input
        type='text'
        name='name'
        required
        placeholder='Shirt'
      />
      <Label htmlFor='price'>Product Price $</Label>
      <Input
        type='text'
        name='price'
        required
        placeholder='520.25'
      />
      <Label htmlFor='rating'>Rating</Label>
      <Input
        type='text'
        name='rating'
        required
        placeholder='⭐⭐⭐⭐⭐'
      />
      <Button
        className='bg-indigo-600 text-lg'
        type='submit'
      >
        Submit
      </Button>
    </form>
  )
}

export default Page
