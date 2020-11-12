<template>
<div class="col-md-12 ">
  <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-1"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-1"
                ></v-avatar>
                <strong class="title">Hoja {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>
              <v-container fluid>
                <v-textarea
                  autocomplete="Diario"
                  label="Diario"
                ></v-textarea>
              </v-container>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</div>
</template>
<script>
  export default {
    data: () => ({
      length: 1,
      window: 0,
    }),
  }
</script>