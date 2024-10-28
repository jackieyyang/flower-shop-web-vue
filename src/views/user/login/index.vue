<script lang="ts" setup>
import Footer from '@/components/footer/simple-footer.vue';
import LoginBanner from './components/login-banner.vue';
import LoginForm from './components/login-form.vue';
</script>

<template>
  <div class="container">
    <div class="logo hidden md:inline-flex">
      <img
        alt="logo"
        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
      />
      <div class="logo-text">{{ $t('login.logo.title') }}</div>
    </div>
    <LoginBanner class="hidden md:block"/>
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  max-width: 100vw;

  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  .logo-text {
    margin-right: 4px;
    margin-left: 4px;;
    color: var(--color-fill-1);
    font-size: 20px;
  }
}
</style>
