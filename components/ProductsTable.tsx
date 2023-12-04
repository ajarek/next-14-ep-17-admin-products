import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import dbConnect from '@/lib/db-connect'
import ProductModel, { Product } from '@/lib/product-model'
import DeleteForm from '@/app/delete-form'


const ProductsTable = async () => {
  await dbConnect()
  const products = (await ProductModel.find({}).sort({
    _id: -1,
  })) as Product[]

  return (
    <Table>
      <TableCaption>List of products</TableCaption>
      <TableHeader>
        <TableRow >
          <TableHead className='w-[100px] font-bold'>Image</TableHead>
          <TableHead className='font-bold '>Name</TableHead>
          <TableHead className='font-bold '>Price</TableHead>
          <TableHead className='text-center font-bold'>Rating</TableHead>
          <TableHead className='text-center font-bold'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length === 0 ? (
          <TableCell colSpan={5}>No product found</TableCell>
        ) : (
          products.map((product: Product) => (
            <TableRow key={product._id}>
              <TableCell className='font-medium'>
                <Image
                  src={product.image}
                  alt='shirt'
                  width={60}
                  height={73}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price} $</TableCell>
              <TableCell className='text-center max-sm:text-[10px]'>{product.rating}</TableCell>
              <TableCell className='text-center text-xl cursor-pointer'>
                <DeleteForm
                  _id={product._id.toString()}
                  name={product.name}
                />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default ProductsTable
