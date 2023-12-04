'use client'

import { deleteProduct } from '@/lib/actions'

export default function DeleteForm({
  _id,
  name,
}: {
  _id: string
  name: string
}) {
  return (
    <form
      action={async (formData) => {
        const res = await deleteProduct(formData)
        console.log(res.message)
      }}
    >
      <input
        type='hidden'
        name='_id'
        value={_id}
      />
      <input
        type='hidden'
        name='name'
        value={name}
      />
      <button
        type='submit'
        className='max-lg:text-xl text-2xl btn btn-ghost'
      >
        🗑️
      </button>
    </form>
  )
}
