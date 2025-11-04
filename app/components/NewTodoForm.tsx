'use client'

import { useRef, useTransition } from 'react'
import { createTodoAction } from '@/app/_actions'
import toast from 'react-hot-toast'

const NewTodoForm = () => {
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  async function action(data: FormData) {
    const title = data.get('title')
    if (typeof title !== 'string' || !title || title.length === 0) {
      toast.error('Please enter a todo')
      return
    }

    startTransition(async () => {
      try {
        await createTodoAction(title)
        toast.success('Todo Added Successfully')
        formRef.current?.reset()
      } catch (error) {
        toast.error('Something went wrong')
        console.error('Error creating todo:', error)
      }
    })
  }

  return (
    <form ref={formRef} action={action} className='glass rounded-2xl p-6'>
      <h2 className='mb-4 text-lg font-medium text-white'>Create a New Todo</h2>
      <div className='flex flex-wrap gap-3'>
        <input
          type='text'
          maxLength={100}
          name='title'
          className='flex-1 min-w-[200px] rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30'
          placeholder='Enter your todo...'
        />
        <button
          type='submit'
          className='rounded-lg bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30 disabled:opacity-50'
          disabled={isPending}
        >
          {isPending ? 'Adding...' : 'Add Todo'}
        </button>
      </div>
    </form>
  )
}

export default NewTodoForm
