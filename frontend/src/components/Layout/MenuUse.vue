<template>
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]"
  >
    <div class="demo">
      <div class="container">
       
        <router-view/>
      </div>
      <template v-if="user">
        <sidebar-menu
        :menu="menu2"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      </template>
      <template v-else>
        <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
        
      />
      </template>
      
      <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay"
        @click="collapsed = true"
      />
    </div>
  </div>
</template>


<script>

export default {
  name: 'App',
  data () {
    return {
      user: "null",
      Mycollapse: true,
      
      menu: [        
        {
          header: true,
          title: 'Usuario',
          hiddenOnCollapse: true
        },
        {
          href: {path:'/login'},
          title: 'Iniciar sesión',
          icon: 'fa fa-user'
        },
        {
          href: {path:'/register'},
          title: 'Registrarse',
          icon: 'fa fa-bell'
        }
      ],
      menu2: [
        {
          header: true,
          title: 'DiarioInteligente',
          hiddenOnCollapse: true
        },
        {
          href: {path: '/dashboard'},
          title: 'Dashboard',
          icon: 'fa fa-home'
        },
        {
          href: {path:'/vistadiario'},
          title: 'Diario',
          icon: 'fa fa-book-open'
        },
        {
          href: {path:'/'},
          title: 'Hábitos',
          icon: 'fa fa-walking'
        },
        {
          href: {path:'/'},
          title: 'Estilo de vida',
          icon: 'fa fa-brain'
        },
        {
          href: {path:'/'},
          title: 'Journey',
          icon: 'fa fa-info'
        },
        {
          header: true,
          title: 'Usuario',
          hiddenOnCollapse: true
        },
        {
          href: {path:'/login'},
          title: 'Cerrar Sesión',
          icon: 'fa fa-user',          
        }
      ],
      collapsed: false,
      selectedTheme: 'White theme',
      isOnMobile: false
    }
  },
  
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    logout() {
      this.$store.dispatch("doLogout");
      this.$router.push({ name: "login" });
      this.$bus.$emit("disconnected", "User Disconnected");
    },
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
       console.log(event)
       console.log(item.title)
       console.log(node)
       if(item.title == "Cerrar Sesión"){
        this.logout()
       }
       //this.logout()
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  },
  created() {
    
    if(localStorage.auth){
            this.user = localStorage.Email
        }else{
            this.user = null
        }

    this.$bus.$on("logged", () => {
      this.user = localStorage.Email;
      
    });
    this.$bus.$on("disconnected", () => {
    this.user = null;
    });
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #FFFFFF;
  color: #262626;
}
#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 50px;
}
.container {
  max-width: 900px;
}
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
</style>