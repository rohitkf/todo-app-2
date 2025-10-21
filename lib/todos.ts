import prisma from './prisma'
import { Todo } from '@/types/prisma'

export async function getTodos(): Promise<{ todos?: Todo[]; error?: unknown }> {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return { todos }
  } catch (error) {
    return { error }
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.todo.create({ data: { title } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted }
    })
    return { todo }
  } catch (error) {
    return { error }
  }
}
export async function deleteTodo(id: string) {
  try {
    const todo = await prisma.todo.delete({
      where: { id }
    })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function deleteAllTodo() {
  try {
    await prisma.todo.deleteMany({})
  } catch (error) {
    return { error }
  }
}
