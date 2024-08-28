<!-- <template>
    <div class="form">
      <h1>About Our Library</h1>
      <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
    </div>
  </template>
  
  <script setup>
  // No script needed for now
  </script>
  
  <style>
  </style> -->
  <template>
    <div class="form">
      <h1>About Our Library</h1>
      <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
      <!-- Apply the same Bootstrap button styling as in the Home page -->
      <div class="text-center">
        <button @click="handleLogout" class="btn btn-primary">Logout</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };
  </script>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>
  
  