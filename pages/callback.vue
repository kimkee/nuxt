<script setup>
const eMsg = ref('')
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const addUserToDatabase = async () => {
  if (user.value) {
    // 기존 회원인지 확인
    const { data, error: fetchError } = await supabase
      .from('MEMBERS')
      .select('*')
      .eq('email', user.value.email);

    if (fetchError) {
      console.error('Error fetching user data:', fetchError);
      return;
    }

    if (data.length > 0) {
      console.log('Existing user:', data[0]);
      // 기존 회원인 경우, 추가 로직 수행하지 않음
      return;
    } else {
      // 새로운 회원인 경우, 추가
      const { data, error: insertError } = await supabase.from('MEMBERS').insert([
        {
          user_id: user.value.id,
          email: user.value.email,
          username: user.value.user_metadata.full_name || user.value.user_metadata.user_name,
          provider: user.value.app_metadata.provider,
          profile_picture : user.value.user_metadata.avatar_url,
          level : 10,
          created_at: new Date(),
        },
      ]);

      if (insertError) {
        console.error('Error inserting new user:', insertError);
        console.log(insertError.code);
        // alert(insertError.code)
        eMsg.value = insertError
      } else {
        console.log('User added successfully:', data);
      }
    }
  }
};

// 페이지가 로드될 때 사용자 정보를 추가
onMounted(() => {
  addUserToDatabase();
});
</script>

<template>
  <main class="container flex-1 items-center justify-center flex flex-col">
    <div class="w-full max-w-sm text-center">
        <h1 class="text-green-500 text-xl">로그인 성공!</h1>
        <!-- <p>Processing login...</p> -->
        <!-- <p>{{eMsg }}</p> -->
        <!-- <p>{{user.id }}</p> -->
        <p class="mt-4">{{user.email }}</p>
    </div>
  </main>
</template>
