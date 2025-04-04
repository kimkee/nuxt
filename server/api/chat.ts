import { defineEventHandler, getQuery } from 'h3';
import { createClient } from '@supabase/supabase-js';

// Supabase 설정
const supabaseUrl = process.env.SUPABASE_URL ?? '';
const supabaseKey = process.env.SUPABASE_KEY ?? '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
  const { table } = getQuery(event); // 쿼리 파라미터에서 테이블 이름 가져오기

  // 테이블 이름이 유효한지 확인
  if (!table || typeof table !== 'string') {
    return { error: 'Invalid table name' };
  }

  const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching 챗메시지리스트:', error);
    return { error: 'Error fetching 챗메시지리스트' };
  }
  return data;
});
