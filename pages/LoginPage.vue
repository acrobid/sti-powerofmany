<template>
  <div class="container">
    <div class="header-body text-center" style="margin-bottom: 15px;">
          <div class="row justify-content-center">
            <div class="text-center">
              <h1 class="text-white">Log in to Vue Paper Dashboard Laravel PRO Live Preview</h1>
              <p class="text-lead text-white">Log in to see how you can save more than 300 hours of work with an
              integrated Laravel API backend and ready-made CRUDs for managing:
              #users, #roles, #items, #categories, #tags.</p>
            </div>

            <div class="text-white">
              <h3 class="text-white"><strong>You can log in with 3 user types:</strong></h3>
              <div>Username <b>admin@jsonapi.com</b> Password <b>secret</b></div>
              <div>Username <b>creator@jsonapi.com</b> Password <b>secret</b></div>
              <div>Username <b>member@jsonapi.com</b> Password <b>secret</b></div>
            </div>
          </div>
    </div>
    <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <form @submit.prevent="">
        <card type="login">
          <h3 slot="header" class="header text-center">Login</h3>

          <fg-input  addon-left-icon="nc-icon nc-single-02" placeholder="Email"/>
          <fg-input v-model="password" addon-left-icon="nc-icon nc-key-25" placeholder="Password" type="password"/>
          <br>

          <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">Get started</p-button>
        </card>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>

const password = ref()

</script>

<style>

</style>