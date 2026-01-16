import { createClient } from "@/utils/supabase/client";

export interface Todo {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  created_at: string;
  user_id: string;
}

// Client-side operations
export const supabaseClient = createClient();

export const getTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabaseClient
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });
  
  if (error) throw error;
  return data || [];
};

export const addTodo = async (
  todo: Omit<Todo, "id" | "created_at" | "user_id">,
): Promise<Todo> => {
  const { data, error } = await supabaseClient
    .from("todos")
    .insert([todo])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateTodo = async (
  id: string,
  updates: Partial<Todo>,
): Promise<Todo> => {
  const { data, error } = await supabaseClient
    .from("todos")
    .update(updates)
    .eq("id", id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const { error } = await supabaseClient.from("todos").delete().eq("id", id);
  
  if (error) throw error;
};