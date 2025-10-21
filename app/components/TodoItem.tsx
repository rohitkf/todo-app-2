'use client'

import { useTransition } from 'react'

import { Todo } from '@/types/prisma'
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
    <li className='duration-250 group mb-2 flex flex-wrap items-center gap-3 rounded border-2 border-gray-500 p-1 transition-all ease-in-out hover:-translate-y-1 hover:bg-slate-400 hover:text-white'>
      <input
        id={todo.id}
        type='checkbox'
        defaultChecked={todo.isCompleted}
        onChange={e =>
          startTransition(() => updateTodoAction(todo.id, e.target.checked))
        }
        className='peer h-4 w-4 cursor-pointer rounded border-gray-300 text-slate-600 focus:ring-slate-600'
      />
      <label
        htmlFor={todo.id}
        className='break-all peer-checked:text-slate-500 peer-checked:line-through'
      >
        {todo.title}
      </label>
      <span className='ml-auto text-sm text-slate-500 group-hover:text-white peer-checked:line-through'>
        {todo.updatedAt.toUTCString()}
      </span>
      <button
        type='button'
        onClick={() => deleteTodo(todo.id)}
        className='ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50'
      >
        X
      </button>
    </li>
  )
}

export default TodoItem
