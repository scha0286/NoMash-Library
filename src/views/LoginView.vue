<template>
  <!-- Login page styled similar to the Home page -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
          </div>
        </form>
        <p v-if="error" class="text-danger text-center mt-3">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  
  const hardcodedUsername = 'user';
  const hardcodedPassword = 'password';
  
  const handleLogin = () => {
    if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/about');
    } else {
      error.value = 'Invalid credentials';
    }
  };
  </script>
  
  <style >
  /* Add basic styling for the login page */
  </style>
  