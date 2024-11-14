import { defineEventHandler, getQuery } from 'h3';
import { createClient } from '@supabase/supabase-js';

// Supabase 설정
const supabaseUrl = process.env.SUPABASE_URL ?? '';
const supabaseKey = process.env.SUPABASE_KEY ?? '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
  const { id, num } = getQuery(event); // 쿼리 파라미터에서 테이블 이름 가져오기
  
 
  if(id){
    const { data, error } = await supabase.from('MEMBERS').select("*").eq('user_id', id).order('created_at', { ascending: true });
    if (error) {
      console.error('Error fetching users:', error);
      return { error: 'Error fetching users' };
    }
    return data[0];
  }
  if(num){
    const { data, error } = await supabase.from('MEMBERS').select("*").eq('id', num).order('created_at', { ascending: true });
    if (error) {
      console.error('Error fetching users:', error);
      return { error: 'Error fetching users' };
    }
    return data[0];
  }



});
