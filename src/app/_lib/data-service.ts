import { supabase } from "./supabase";

export async function getData(id: string) {
  const { data, error } = await supabase
    .from("datas")
    .select("json")
    .eq("id", id);

  if (error) console.error(error.message);

  return data;
}

export async function addData(id: string, json: string) {
  const { error } = await supabase.from("datas").insert({
    id,
    json,
  });

  if (error) console.error(error.message);

  return id;
}
