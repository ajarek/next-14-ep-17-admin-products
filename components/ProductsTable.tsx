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


const ProductsTable = () => {
  return (
    <Table>
    <TableCaption>List of products</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className="text-center">Rating</TableHead>
        <TableHead className="text-right">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">
          <Image
          src={'/images/shirt1.jpg'}
          alt="shirt"
          width={60}
          height={73}
          />
        </TableCell>
        <TableCell>Shirt</TableCell>
        <TableCell>$50.00</TableCell>
        <TableCell className="text-center">⭐⭐⭐⭐⭐</TableCell>
        <TableCell className="text-right">Delete</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">
          <Image
          src={'/images/shirt2.jpg'}
          alt="shirt"
          width={60}
          height={73}
          />
        </TableCell>
        <TableCell>Shirt</TableCell>
        <TableCell>$40.00</TableCell>
        <TableCell className="text-center">⭐⭐⭐⭐</TableCell>
        <TableCell className="text-right">Delete</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  
  )
}

export default ProductsTable