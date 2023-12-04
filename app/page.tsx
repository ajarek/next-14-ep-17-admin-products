import ProductsTable from '@/components/ProductsTable'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-sm:p-2">
      <ProductsTable/>
    </main>
  )
}
