<template>
  <v-app>
    <HeaderNav />
    <v-main>
      <v-container fluid>
        <v-row>

          <v-col cols="12">
            <v-col md="10">
              <v-toolbar-title>Selecione um modulo para continuar.</v-toolbar-title>
            </v-col>

            <v-col md="2">
              <v-card class="mx-auto" color="grey" max-width="344"
                subtitle="cadastrar e visualizar todos os alunos">
                
                <template v-slot:title>
                  <v-icon>mdi-account-group</v-icon> Cadastro de Alunos
                </template>

                <template v-slot:actions>
                  <router-link to="/students" tag="button"
                    class="v-btn v-btn--contained v-btn--rounded v-btn--small v-btn--color-primary mr-2">
                    <v-icon left>mdi-arrow-right</v-icon> Acessar
                  </router-link>
                </template>
              </v-card>

            </v-col>
          </v-col>

        </v-row>
        <router-view>


        </router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script src="./script.js"></script>
