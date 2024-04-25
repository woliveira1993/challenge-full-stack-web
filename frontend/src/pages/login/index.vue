<template>
  <v-container fluid class="login-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline">Entrar no sistema</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitLogin">
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
              <v-btn type="submit" color="primary">Entrar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./script.js"></script>
<style src="./style.css"></style>
