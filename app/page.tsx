import { getTodos } from '@/lib/todos'
import NewTodoForm from '@/components/NewTodoForm'
import TodoItem from '@/components/TodoItem'
import DeleteAllToDo from './components/DeleteAllToDo'

export const dynamic = 'force-dynamic'

const Page = async () => {
  const { todos } = await getTodos()

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='mb-10 w-fit bg-slate-100 px-2 text-3xl font-bold text-slate-800'>
          Todos
        </h1>

        <NewTodoForm />
        <div className='my-7 flex items-center justify-between border-b'>
          <h2 className=' text-xl font-semibold'>List of todos:</h2>
          <DeleteAllToDo />
        </div>
        <ul className='mt-4 flex flex-col gap-1'>
          {todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </div>
    </section>
  )
}

export default Page
