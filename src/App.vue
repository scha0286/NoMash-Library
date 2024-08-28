<!-- <script setup>
import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
import HomeView from './views/HomeView.vue'
</script>


  <template>
    <div class="main-container">
     <header> 
      <BHeader />
     </header>
     <main class="container">
    
      <router-view></router-view> 
     </main> 
    </div>
  </template> -->
  <script setup>
  import BHeader from './components/BHeader.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Use Vue ref to manage authentication state
  const isAuthenticated = ref(localStorage.getItem('isAuthenticated'));
  const router = useRouter();
  
  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    isAuthenticated.value = false;
    router.push('/login');
  };
  </script>
  
  <template>
    <div class="main-container">
      <header>
        <!-- Include your header component -->
        <BHeader />
      </header>
  
      <nav>
        <!-- Conditionally show navigation links -->
        <ul>
          <!-- <li>
            <router-link to="/">Home</router-link>
          </li> -->
          <li v-if="isAuthenticated">
            <router-link to="/about">About</router-link>
          </li>
          <li v-if="isAuthenticated">
            <button @click="logout">Logout</button>
          </li>
          <!-- <li v-else>
            <router-link to="/login">Login</router-link>
          </li> -->
        </ul>
      </nav>
  
      <main class="container">
        <!-- This is where different views will be rendered -->
        <router-view></router-view>
      </main>
    </div>
  </template>
<style>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}

/* Class selectors */
.form {
  text-align: center;
  margin-top: 50px;
}

/* ID selectors */
#username:focus,
#password:focus,
#isAustralian:focus,
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}
</style>

<!-- <style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style> -->
