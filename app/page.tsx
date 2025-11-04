import { getTodos } from '@/lib/todos'
import NewTodoForm from '@/components/NewTodoForm'
import TodoItem from '@/components/TodoItem'
import DeleteAllToDo from './components/DeleteAllToDo'

export const dynamic = 'force-dynamic'

const Page = async () => {
  const { todos } = await getTodos()

  return (
    <section className='min-h-screen py-12 px-4'>
      <div className='container mx-auto max-w-4xl'>
        <h1 className='mb-10 text-5xl font-bold text-white drop-shadow-lg'>
          My Todos
        </h1>

        <NewTodoForm />

        <div className='glass my-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6'>
          <h2 className='text-2xl font-semibold text-white'>Your Tasks</h2>
          <DeleteAllToDo />
        </div>

        {todos && todos.length > 0 ? (
          <ul className='flex flex-col'>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
          </ul>
        ) : (
          <div className='glass rounded-2xl p-8 text-center'>
            <p className='text-white/70'>No todos yet. Create one to get started!</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Page
