<template>
  <v-app>
    <HeaderNav />

    <v-main>
      <v-container fluid>
        <v-row>

          <v-col cols="12">
            <v-col md="10">
              <v-toolbar-title>Lista de Alunos</v-toolbar-title>
            </v-col>

            <v-col md="2">
              <v-btn text class="text-right" @click="this.openModalStudent([], 'add')"><v-icon>mdi-plus</v-icon>Cadastrar Aluno</v-btn>
            </v-col>
          </v-col>
      
          </v-row>
        <router-view>
          <v-data-table :headers="headers" :items="students.data" :search="search" class="elevation-1">

            <template v-slot:top>
              <v-text-field v-model="search" class="mx-4" placeholder="Pesquisar..."></v-text-field>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon color="primary" small @click="this.openModalStudent(item, 'edit')">mdi-pencil</v-icon>
              <v-icon color="error" small @click="this.openModalStudent(item, 'delete')">mdi-delete</v-icon>
            </template>
            <template v-slot:bottom> </template>
          </v-data-table>

          <v-pagination v-model="pagination.page" :length="totalPages" @input="fetchData" v-if="totalPages"></v-pagination>

        </router-view>
      </v-container>
    </v-main>

    <StudentModal ref="studentModal" />
  </v-app>
</template>

<script src="./script.js"></script>
