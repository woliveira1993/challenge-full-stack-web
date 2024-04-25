<template>
    <v-app-bar app>
        <div style="flex: 1;">
      <v-toolbar-title><v-icon>mdi-school</v-icon> Gestão de Alunos</v-toolbar-title>
    </div>
  
      <div style="flex: 1; display: flex; justify-content: center;">
      <router-link to="/home" tag="button"
        class="v-btn v-btn--contained v-btn--rounded v-btn--small v-btn--color-primary mr-2">
        <v-icon left>mdi-home</v-icon> Início
      </router-link>

      <router-link to="/students" tag="button"
        class="v-btn v-btn--contained v-btn--rounded v-btn--small v-btn--color-primary mr-2 ml-10">
        <v-icon left>mdi-account-group</v-icon> Alunos
      </router-link>
    </div>
  
        <div style="flex: 1; text-align: right;">
      <v-btn text @click="logOut()"><v-icon>mdi-logout</v-icon>Sair</v-btn>
    </div>
    </v-app-bar>
  </template>
  
  <script src="./script.js"></script>