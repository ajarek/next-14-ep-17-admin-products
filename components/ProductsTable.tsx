import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import dbConnect from '@/lib/db-connect'
import ProductModel, { Product } from '@/lib/product-model'

const ProductsTable =async () => {
  await dbConnect()
  const products = (await ProductModel.find({}).sort({
    _id: -1,
  })) as Product[]
  return (
    <Table>
    <TableCaption>List of products</TableCaption>
    <TableHeader>
      <TableRow className="bg-blue-200">
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className="text-center">Rating</TableHead>
        <TableHead className="text-center">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {products.length === 0 ? <TableCell colSpan={5}>No product found</TableCell>
      :
      products.map((product: Product) => (
      <TableRow key={product._id}>
        <TableCell className="font-medium">
          <Image
          src={product.image}
          alt="shirt"
          width={60}
          height={73}
          />
        </TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.price} $</TableCell>
        <TableCell className="text-center">{product.rating}</TableCell>
        <TableCell className="text-center text-xl cursor-pointer">🗑️</TableCell>
      </TableRow>
      )
      )}
      
    </TableBody>
  </Table>
  
  )
}

export default ProductsTable