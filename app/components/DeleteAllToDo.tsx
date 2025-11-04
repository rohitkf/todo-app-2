'use client'

import { useTransition } from 'react'
import { deleteAllToDoAction } from '../_actions'
import toast from 'react-hot-toast'

function DeleteAllToDo() {
  const [isPending, startTransition] = useTransition()

  const handleDeleteAllToDo = () => {
    startTransition(async () => {
      try {
        await deleteAllToDoAction()
        toast.success('All ToDos Deleted Successfully')
      } catch (error) {
        toast.error('Something went wrong')
        console.error('Error deleting todos:', error)
      }
    })
  }

  return (
    <button
      onClick={handleDeleteAllToDo}
      className='rounded-lg bg-red-500/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-red-500/30 disabled:opacity-50'
      disabled={isPending}
    >
      {isPending ? 'Deleting...' : 'Delete All'}
    </button>
  )
}

export default DeleteAllToDo
