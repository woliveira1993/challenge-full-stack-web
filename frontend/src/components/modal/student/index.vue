<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <v-card>
      <v-card-title>{{ headTitle }}</v-card-title>
      <v-card-text>
        <v-text-field v-model="student.ra" label="RA" :disabled="this.raFieldDisabled" :maxlength="10"></v-text-field>
        <v-text-field v-model="student.cpf" label="CPF" :disabled="this.cpfFieldDisabled" :maxlength="11"></v-text-field>
        <v-text-field v-model="student.name" label="Nome" :disabled="this.nameFieldDisabled"></v-text-field>
        <v-text-field v-model="student.email" label="Email" :disabled="this.emailFieldDisabled"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="confirmOperation">Salvar</v-btn>
        <v-btn color="red darken-1" text @click="clearAndCloseModal">Cancelar</v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./script.js"></script>