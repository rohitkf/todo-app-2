'use client'

import { useTransition } from 'react'

import { Todo } from '@prisma/client'
import { updateTodoAction, deleteTodoAction } from '@/app/_actions'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

type TodoItemProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isPending, startTransition] = useTransition()

  async function deleteTodo(id: string) {
    await deleteTodoAction(id)
    toast.success('Todo Deleted Successfully')
    // redirect('/')
  }

  return (
    <li className='group mb-3 flex flex-wrap items-center gap-3 rounded-2xl glass p-4 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-white/20'>
      <input
        id={todo.id}
        type='checkbox'
        defaultChecked={todo.isCompleted}
        onChange={e =>
          startTransition(() => updateTodoAction(todo.id, e.target.checked))
        }
        className='peer h-5 w-5 cursor-pointer rounded border-white/30 bg-white/10 text-purple-500 transition-all focus:ring-2 focus:ring-white/50'
      />
      <label
        htmlFor={todo.id}
        className='cursor-pointer break-all text-white transition-all peer-checked:text-white/50 peer-checked:line-through'
      >
        {todo.title}
      </label>
      <span className='ml-auto text-xs text-white/60 transition-all group-hover:text-white/80 peer-checked:line-through'>
        {todo.updatedAt.toLocaleDateString()}
      </span>
      <button
        type='button'
        onClick={() => deleteTodo(todo.id)}
        className='ml-2 rounded-lg bg-red-500/20 px-3 py-1 text-sm text-white backdrop-blur-sm transition-all hover:bg-red-500/30 disabled:opacity-50'
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
